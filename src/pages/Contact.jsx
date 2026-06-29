import React, { useEffect, useState } from 'react';
import { Reveal } from '../components/UI';
import { IMAGES } from '../data/constants';
import { setPageSeo } from '../utils/seo';

const CONTACT_EMAIL = 'vtarch99@gmail.com';

const initialBrief = {
  name: '',
  email: '',
  message: '',
};

export default function Contact() {
  const [brief, setBrief] = useState(initialBrief);
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    setPageSeo({
      title: 'Liên hệ VTARCH | Brief diễn họa kiến trúc & AI CGI',
      description:
        'Liên hệ VTARCH để gửi brief diễn họa kiến trúc, diễn họa nội thất, D5 Render, AI CGI hoặc xây dựng workflow AI cho studio thiết kế.',
      path: '/#/contact',
    });
  }, []);

  const updateBrief = (event) => {
    const { name, value } = event.target;
    setBrief((current) => ({ ...current, [name]: value }));
  };

  const submitBrief = (event) => {
    event.preventDefault();

    const name = brief.name.trim();
    const email = brief.email.trim();
    const message = brief.message.trim();

    if (!name || !email || !message) {
      setFormStatus('Vui lòng điền đủ tên, email và brief dự án.');
      return;
    }

    const subject = encodeURIComponent(`Brief dự án từ ${name}`);
    const body = encodeURIComponent([
      `Tên: ${name}`,
      `Email: ${email}`,
      '',
      'Brief dự án:',
      message,
    ].join('\n'));

    setFormStatus('Đang mở ứng dụng email với nội dung brief đã chuẩn bị.');
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="page-wrap contact-page-v3">
      <section className="section-shell contact-hero-v3">
        <Reveal className="contact-hero-copy">
          <span className="section-kicker">Liên hệ</span>
          <h1>Bắt đầu câu chuyện hình ảnh cho dự án tiếp theo.</h1>
          <p>
            VTARCH tiếp nhận brief diễn họa kiến trúc, nội thất và các yêu cầu xây dựng quy trình AI gọn hơn
            cho studio thiết kế, kiến trúc sư và chủ đầu tư.
          </p>

          <div className="contact-links-v3">
            <a href={`mailto:${CONTACT_EMAIL}`}>Email</a>
            <a href="tel:0385550506">Điện thoại</a>
            <a href="https://www.instagram.com/vtarch99/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </Reveal>

        <Reveal className="contact-hero-visual" delay={120} variant="scale">
          <img src={IMAGES.portrait} alt="Nguyễn Văn Thanh - VTARCH" loading="eager" decoding="async" fetchPriority="high" />
          <div>
            <span>Nguyễn Văn Thanh</span>
            <strong>Diễn họa kiến trúc / AI CGI / Công nghệ thiết kế</strong>
          </div>
        </Reveal>
      </section>

      <section className="section-shell contact-form-v3">
        <Reveal>
          <div className="contact-form-shell">
            <div className="contact-form-copy">
              <span className="section-kicker">Brief</span>
              <h2>Gửi mô tả ngắn về dự án để VTARCH phản hồi bằng hướng triển khai rõ ràng.</h2>
            </div>

            <form onSubmit={submitBrief} noValidate>
              <label>
                <span>Tên của bạn</span>
                <input
                  name="name"
                  autoComplete="name"
                  value={brief.name}
                  onChange={updateBrief}
                  required
                />
              </label>
              <label>
                <span>Email</span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={brief.email}
                  onChange={updateBrief}
                  required
                />
              </label>
              <label className="is-wide">
                <span>Brief dự án</span>
                <textarea
                  name="message"
                  rows={6}
                  value={brief.message}
                  onChange={updateBrief}
                  required
                />
              </label>
              <button type="submit">Gửi brief</button>
              <p className="contact-form-status" role="status" aria-live="polite">
                {formStatus}
              </p>
            </form>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
