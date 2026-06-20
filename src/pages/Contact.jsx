import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Reveal } from '../components/UI';

const briefItems = [
  'Loại dự án: kiến trúc, nội thất, sản phẩm hoặc AI Lab.',
  'Tài liệu hiện có: mặt bằng, model, ảnh tham khảo, moodboard.',
  'Số lượng hình ảnh, deadline và mục tiêu sử dụng.',
  'Phong cách mong muốn hoặc website/portfolio tham chiếu.',
];

export default function Contact() {
  return (
    <div className="page-wrap">
      <section className="section-shell contact-page">
        <Reveal className="contact-main">
          <p className="eyebrow">Liên hệ</p>
          <h1>Bắt đầu bằng một brief ngắn.</h1>
          <p>
            VTARCH nhận trao đổi dự án diễn họa kiến trúc, diễn họa nội thất, AI CGI, D5 Render và workflow GPT
            cho studio thiết kế.
          </p>
          <div className="contact-links">
            <a href="mailto:vtarch99@gmail.com"><Mail size={18} /> vtarch99@gmail.com</a>
            <a href="tel:0385550506"><Phone size={18} /> 038.555.0506</a>
          </div>
        </Reveal>

        <Reveal className="brief-panel" delay={120}>
          <h2>Nên gửi gì?</h2>
          <ul>
            {briefItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </Reveal>
      </section>
    </div>
  );
}
