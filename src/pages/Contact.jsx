import React from 'react';
import { Reveal } from '../components/UI';
import { IMAGES } from '../data/constants';

export default function Contact() {
  return (
    <div className="page-wrap contact-page-v3">
      <section className="section-shell contact-hero-v3">
        <Reveal className="contact-hero-copy">
          <span className="section-kicker">Liên hệ</span>
          <h1>Let&apos;s build a visual story for your next project.</h1>
          <p>
            Nếu bạn đang cần diễn họa kiến trúc, nội thất hoặc một workflow AI gọn hơn, mình có thể nhận brief
            và phản hồi theo hướng studio, rõ ràng và thực tế.
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
            <strong>Architecture Visualization / AI CGI / Design Technology</strong>
          </div>
        </Reveal>
      </section>

      <section className="section-shell contact-form-v3">
        <Reveal>
          <div className="contact-form-shell">
            <div className="contact-form-copy">
              <span className="section-kicker">Brief</span>
              <h2>Gửi mô tả ngắn về dự án, mình sẽ xem và phản hồi lại bằng hướng đi rõ ràng hơn.</h2>
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
