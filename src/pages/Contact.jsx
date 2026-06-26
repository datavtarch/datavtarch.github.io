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
              <textarea name="message" rows={5} />
            </label>
            <button type="submit">Gửi</button>
          </form>
        </Reveal>
      </section>
    </div>
  );
}
