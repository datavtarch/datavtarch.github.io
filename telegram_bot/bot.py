"""
Telegram Terminal Bot
Chạy lệnh PowerShell từ Telegram và trả kết quả về chat.
"""

import subprocess
import asyncio
import os
from telegram import Update
from telegram.ext import ApplicationBuilder, CommandHandler, MessageHandler, filters, ContextTypes

# ─────────────────────────────────────────────
# CẤU HÌNH - điền vào đây
# ─────────────────────────────────────────────
BOT_TOKEN = "8581900497:AAHQAn2GzPuWlXsVPwMGDkQlDv5W8LYiMK8"   # lấy từ @BotFather
ALLOWED_USER_ID = 5914114426        # Telegram User ID của bạn (int), 0 = chưa đặt
WORKING_DIR = r"F:\PROFILE VTARCH"  # thư mục làm việc mặc định
# ─────────────────────────────────────────────

# Lưu thư mục hiện tại theo từng chat
cwd_state: dict[int, str] = {}


def get_cwd(chat_id: int) -> str:
    return cwd_state.get(chat_id, WORKING_DIR)


def run_command(command: str, cwd: str) -> str:
    """Chạy lệnh PowerShell, trả về stdout + stderr."""
    try:
        result = subprocess.run(
            ["powershell", "-NoProfile", "-Command", command],
            cwd=cwd,
            capture_output=True,
            text=True,
            timeout=60,
            encoding="utf-8",
            errors="replace",
        )
        output = ""
        if result.stdout:
            output += result.stdout
        if result.stderr:
            output += f"\n[STDERR]\n{result.stderr}"
        return output.strip() or "(lệnh chạy xong, không có output)"
    except subprocess.TimeoutExpired:
        return "⏱ Timeout: lệnh chạy quá 60 giây."
    except Exception as e:
        return f"❌ Lỗi: {e}"


def is_authorized(update: Update) -> bool:
    if ALLOWED_USER_ID == 0:
        return True  # chưa đặt ID → cho phép tất cả (không an toàn, chỉ để test)
    return update.effective_user.id == ALLOWED_USER_ID


# ─── Handlers ─────────────────────────────────

async def cmd_start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user = update.effective_user
    chat_id = update.effective_chat.id

    # Nếu chưa đặt ALLOWED_USER_ID → hiện ID để user copy vào config
    if ALLOWED_USER_ID == 0:
        await update.message.reply_text(
            "🔐 *Bước bảo mật: Lấy User ID của bạn*\n\n"
            f"User ID của bạn là:\n`{user.id}`\n\n"
            "Hãy copy số này, mở file `bot.py` và điền vào:\n"
            f"`ALLOWED_USER_ID = {user.id}`\n\n"
            "Sau đó khởi động lại bot là xong! 🚀",
            parse_mode="Markdown"
        )
        # In ra terminal để tiện copy
        print(f"\n{'='*40}")
        print(f"👤 User ID của bạn: {user.id}")
        print(f"   Tên: {user.full_name}")
        print(f"   Điền vào bot.py: ALLOWED_USER_ID = {user.id}")
        print(f"{'='*40}\n")
        return

    if not is_authorized(update):
        await update.message.reply_text("⛔ Bạn không có quyền dùng bot này.")
        return

    cwd_state[chat_id] = WORKING_DIR
    await update.message.reply_text(
        "🖥 *Telegram Terminal Bot*\n\n"
        "Gửi bất kỳ lệnh PowerShell nào để chạy trên máy.\n\n"
        "📌 Lệnh đặc biệt:\n"
        "  `/run <lệnh>` — chạy lệnh\n"
        "  `/cd <path>` — đổi thư mục\n"
        "  `/pwd` — xem thư mục hiện tại\n"
        "  `/stop` — tắt bot\n\n"
        f"📂 Thư mục hiện tại: `{get_cwd(chat_id)}`",
        parse_mode="Markdown"
    )


async def cmd_pwd(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not is_authorized(update): return
    cwd = get_cwd(update.effective_chat.id)
    await update.message.reply_text(f"📂 `{cwd}`", parse_mode="Markdown")


async def cmd_cd(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not is_authorized(update): return
    chat_id = update.effective_chat.id
    args = context.args
    if not args:
        await update.message.reply_text("Dùng: `/cd <path>`", parse_mode="Markdown")
        return
    path = " ".join(args)
    if not os.path.isabs(path):
        path = os.path.join(get_cwd(chat_id), path)
    path = os.path.normpath(path)
    if os.path.isdir(path):
        cwd_state[chat_id] = path
        await update.message.reply_text(f"✅ Đã chuyển sang: `{path}`", parse_mode="Markdown")
    else:
        await update.message.reply_text(f"❌ Không tìm thấy thư mục: `{path}`", parse_mode="Markdown")


async def cmd_run(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not is_authorized(update): return
    if not context.args:
        await update.message.reply_text("Dùng: `/run <lệnh>`", parse_mode="Markdown")
        return
    command = " ".join(context.args)
    await execute_and_reply(update, command)


async def cmd_stop(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not is_authorized(update): return
    await update.message.reply_text("🛑 Bot đang tắt...")
    os._exit(0)


async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Mọi tin nhắn thường đều được coi là lệnh terminal."""
    if not is_authorized(update): return
    command = update.message.text.strip()
    if not command:
        return
    await execute_and_reply(update, command)


async def execute_and_reply(update: Update, command: str):
    """Chạy lệnh và gửi kết quả về Telegram."""
    chat_id = update.effective_chat.id
    cwd = get_cwd(chat_id)

    # Xử lý lệnh cd đặc biệt (thay đổi state)
    if command.lower().startswith("cd "):
        path = command[3:].strip().strip('"').strip("'")
        if not os.path.isabs(path):
            path = os.path.join(cwd, path)
        path = os.path.normpath(path)
        if os.path.isdir(path):
            cwd_state[chat_id] = path
            await update.message.reply_text(f"📂 `{path}`", parse_mode="Markdown")
        else:
            await update.message.reply_text(f"❌ Không tìm thấy: `{path}`", parse_mode="Markdown")
        return

    # Gửi thông báo đang chạy
    wait_msg = await update.message.reply_text(f"⚙️ Đang chạy...\n`{command}`", parse_mode="Markdown")

    # Chạy trong thread riêng
    loop = asyncio.get_event_loop()
    output = await loop.run_in_executor(None, run_command, command, cwd)

    # Giới hạn 4000 ký tự (giới hạn Telegram)
    if len(output) > 4000:
        output = output[:3950] + "\n... [output bị cắt]"

    result_text = (
        f"📌 `{command}`\n"
        f"📂 `{cwd}`\n"
        f"{'─'*30}\n"
        f"```\n{output}\n```"
    )

    await wait_msg.edit_text(result_text, parse_mode="Markdown")


# ─── Main ─────────────────────────────────────

def main():
    if BOT_TOKEN == "YOUR_BOT_TOKEN_HERE":
        print("❌ Chưa điền BOT_TOKEN! Mở file bot.py và điền token vào.")
        print("   Lấy token tại: https://t.me/BotFather")
        return

    if ALLOWED_USER_ID == 0:
        print("⚠️  Chế độ lấy User ID: Gửi /start trên Telegram để xem ID của bạn.")
        print("   Sau khi có ID, điền vào ALLOWED_USER_ID rồi khởi động lại bot.")

    print(f"🤖 Bot đang khởi động...")
    print(f"📂 Working dir: {WORKING_DIR}")

    app = ApplicationBuilder().token(BOT_TOKEN).build()

    app.add_handler(CommandHandler("start", cmd_start))
    app.add_handler(CommandHandler("pwd", cmd_pwd))
    app.add_handler(CommandHandler("cd", cmd_cd))
    app.add_handler(CommandHandler("run", cmd_run))
    app.add_handler(CommandHandler("stop", cmd_stop))
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message))

    print("✅ Bot đang chạy. Gửi /start trên Telegram để bắt đầu.")
    app.run_polling()


if __name__ == "__main__":
    main()
