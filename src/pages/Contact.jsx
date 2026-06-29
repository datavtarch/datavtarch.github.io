import React, { useEffect } from 'react';
import { Reveal } from '../components/UI';
import { IMAGES } from '../data/constants';

export default function Contact() {
  useEffect(() => {
    document.title = 'Liên hệ | VTARCH';
  }, []);

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
            <a href="mailto:vtarch99@gmail.com">Email</a>
            <a href="https://www.instagram.com/vtarch99/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.behance.net/" target="_blank" rel="noreferrer">Behance</a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </Reveal>

        <Reveal className="contact-hero-visual" delay={120} variant="scale">
          <img src={IMAGES.portrait} alt="VTARCH portrait" loading="eager" decoding="async" />
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

            <form onSubmit={(event) => event.preventDefault()}>
              <label>
                <span>Tên của bạn</span>
                <input name="name" autoComplete="name" />
              </label>
              <label>
                <span>Email</span>
                <input name="email" type="email" autoComplete="email" />
              </label>
              <label className="is-wide">
                <span>Brief dự án</span>
                <textarea name="message" rows={6} />
              </label>
              <button type="submit">Gửi brief</button>
            </form>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
