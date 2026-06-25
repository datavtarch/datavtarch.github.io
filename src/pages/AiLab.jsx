import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/UI';
import { IMAGES } from '../data/constants';

const labItems = [
  ['GPT cho kiến trúc', 'Hỗ trợ phân tích brief, lập cấu trúc thuyết minh và phát triển phương án trình bày.'],
  ['AI CGI', 'Tạo mood, thử ánh sáng, vật liệu và bối cảnh trước khi hoàn thiện visual production.'],
  ['Diễn họa sản phẩm', 'Phát triển hình ảnh sản phẩm nội thất trong bối cảnh kiến trúc có kiểm soát.'],
  ['Concept nội thất bằng AI', 'Tăng tốc thử nghiệm phong cách, bố cục và mood không gian nội thất.'],
  ['Tự động hóa workflow', 'Tự động hóa các tác vụ lặp lại trong quy trình thiết kế và diễn họa.'],
];

export default function AiLab() {
  return (
    <div className="page-wrap ai-page">
      <section className="section-shell ai-page-hero">
        <Reveal>
          <span className="section-kicker">AI Lab</span>
          <h1>Công nghệ là lớp hỗ trợ thầm lặng bên trong quá trình tạo hình ảnh kiến trúc.</h1>
          <p>
            VTARCH dùng AI để mở rộng tốc độ nghiên cứu, thử nghiệm concept và tự động hóa workflow,
            nhưng vẫn giữ nền tảng là tư duy kiến trúc, vật liệu và hình ảnh.
          </p>
        </Reveal>
        <Reveal delay={120} variant="scale">
          <img src={IMAGES.projectAIJapandiModern} alt="AI CGI study by VTARCH" />
        </Reveal>
      </section>

      <section className="section-shell ai-page-list">
        {labItems.map(([title, desc], idx) => (
          <Reveal key={title} delay={idx * 70}>
            <span>{String(idx + 1).padStart(2, '0')}</span>
            <h2>{title}</h2>
            <p>{desc}</p>
          </Reveal>
        ))}
      </section>

      <section className="section-shell contact-v2">
        <Reveal>
          <span className="section-kicker">Hợp tác</span>
          <h2>Xây dựng workflow AI cho diễn họa kiến trúc và nội thất.</h2>
          <Link to="/contact" className="primary-minimal-link">Liên hệ</Link>
        </Reveal>
      </section>
    </div>
  );
}
