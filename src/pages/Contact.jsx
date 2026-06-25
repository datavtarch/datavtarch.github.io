import React from 'react';
import { Reveal } from '../components/UI';

export default function Contact() {
  return (
    <div className="page-wrap contact-page-v2">
      <section className="section-shell contact-v2 contact-page-block">
        <Reveal>
          <span className="section-kicker">Liên hệ</span>
          <h1>Trao đổi dự án</h1>
          <div className="contact-v2-grid">
            <a href="mailto:vtarch99@gmail.com">Email</a>
            <a href="https://www.instagram.com/vtarch99/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.behance.net/" target="_blank" rel="noreferrer">Behance</a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
          </div>
          <form className="contact-v2-form" onSubmit={(event) => event.preventDefault()}>
            <input aria-label="Tên" placeholder="Tên của bạn" />
            <input aria-label="Email" type="email" placeholder="Email" />
            <textarea aria-label="Nội dung" placeholder="Brief dự án" rows={5} />
            <button type="submit">Gửi</button>
          </form>
        </Reveal>
      </section>
    </div>
  );
}
