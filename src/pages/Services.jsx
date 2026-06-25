import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/UI';

const serviceGroups = [
  ['DIỄN HỌA', ['Diễn họa ngoại thất', 'Diễn họa nội thất', 'Animation', 'AI CGI']],
  ['THIẾT KẾ', ['Thiết kế kiến trúc', 'Thiết kế nội thất', 'Concept không gian']],
  ['CÔNG NGHỆ', ['GPT cho kiến trúc', 'Workflow AI', 'Công cụ tự động hóa', 'Ứng dụng tùy chỉnh']],
];

export default function Services() {
  return (
    <div className="page-wrap service-page-v2">
      <section className="section-shell page-hero-minimal">
        <Reveal>
          <span className="section-kicker">Dịch vụ</span>
          <h1>Hình ảnh, thiết kế và công nghệ cho studio kiến trúc.</h1>
          <p>
            VTARCH phát triển hình ảnh, concept và công cụ workflow để hỗ trợ kiến trúc sư, studio thiết kế
            và chủ đầu tư trình bày ý tưởng rõ hơn.
          </p>
        </Reveal>
      </section>

      <section className="section-shell service-groups-v2 service-page-list">
        {serviceGroups.map(([title, items], idx) => (
          <Reveal key={title} delay={idx * 90}>
            <article>
              <h2>{title}</h2>
              <ul>
                {items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="section-shell contact-v2">
        <Reveal>
          <span className="section-kicker">Bắt đầu</span>
          <h2>Gửi model, mặt bằng, moodboard hoặc một brief ngắn.</h2>
          <Link to="/contact" className="primary-minimal-link">Liên hệ</Link>
        </Reveal>
      </section>
    </div>
  );
}
