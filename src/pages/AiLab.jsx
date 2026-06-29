import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/UI';
import { IMAGES } from '../data/constants';

const labItems = [
  ['GPT cho kiến trúc', 'Hỗ trợ phân tích brief, dàn ý thuyết minh và cấu trúc trình bày.'],
  ['AI CGI', 'Thử mood, ánh sáng và vật liệu trước khi đi vào render cuối cùng.'],
  ['Quy trình AI', 'Tự động hóa các bước lặp lại trong xử lý hình ảnh và hồ sơ.'],
  ['GPT cho nội thất', 'Gợi ý concept, nhịp không gian và ngôn ngữ vật liệu.'],
  ['Công cụ tự động hóa', 'Các công cụ nhỏ để việc dựng và trình bày diễn ra nhanh hơn.'],
];

export default function AiLab() {
  useEffect(() => {
    document.title = 'AI Lab | VTARCH';
  }, []);

  return (
    <div className="page-wrap ai-page-v3">
      <section className="section-shell ai-hero-v3">
        <Reveal className="ai-hero-copy">
          <span className="section-kicker">AI Lab</span>
          <h1>Công nghệ hỗ trợ quá trình tạo hình ảnh kiến trúc một cách tinh gọn.</h1>
          <p>
            VTARCH dùng AI để mở rộng tốc độ nghiên cứu, thử concept và tự động hóa quy trình, nhưng trọng tâm vẫn
            là tư duy kiến trúc, vật liệu và chất lượng hình ảnh.
          </p>
        </Reveal>

        <Reveal className="ai-hero-visual" delay={120} variant="scale">
          <img src={IMAGES.projectAIJapandiModern} alt="AI CGI study by VTARCH" loading="eager" decoding="async" />
          <div>
            <span>AI CGI / Quy trình / Prompt</span>
            <strong>Công cụ hỗ trợ diễn họa cho studio thiết kế.</strong>
          </div>
        </Reveal>
      </section>

      <section className="section-shell ai-feature-grid">
        {labItems.map(([title, desc], idx) => (
          <Reveal key={title} delay={idx * 70}>
            <article className="ai-feature-card">
              <span>{String(idx + 1).padStart(2, '0')}</span>
              <strong>{title}</strong>
              <p>{desc}</p>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="section-shell ai-footer-cta">
        <Reveal>
          <span className="section-kicker">Hợp tác</span>
          <h2>Xây dựng quy trình AI cho diễn họa kiến trúc và nội thất.</h2>
          <Link to="/contact" className="primary-minimal-link">Liên hệ</Link>
        </Reveal>
      </section>
    </div>
  );
}
