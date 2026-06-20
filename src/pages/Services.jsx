import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../components/UI';
import { AI_LAB_ITEMS, SERVICE_GROUPS } from '../data/constants';

const workflow = [
  ['01', 'Brief', 'Xác định mục tiêu hình ảnh, đối tượng xem, tài liệu đầu vào và deadline.'],
  ['02', 'Visual direction', 'Chốt mood ánh sáng, vật liệu, camera, tỉ lệ ảnh và câu chuyện không gian.'],
  ['03', 'Production', 'Dựng model, D5 Render, AI concept, GPT hỗ trợ tài liệu hoặc hậu kỳ hình ảnh.'],
  ['04', 'Delivery', 'Bàn giao hình ảnh tối ưu cho hồ sơ, website, social, trình chiếu hoặc bán hàng.'],
];

export default function Services() {
  return (
    <div className="page-wrap">
      <section className="section-shell page-hero-minimal">
        <Reveal>
          <p className="eyebrow">Dịch vụ</p>
          <h1>Hình ảnh kiến trúc được phát triển như một phần của quá trình thiết kế.</h1>
          <p>
            VTARCH không đóng gói dịch vụ theo kiểu landing page bán render. Mỗi nhóm việc được tổ chức quanh
            visual, design và technology để hỗ trợ kiến trúc sư, studio thiết kế và chủ đầu tư truyền đạt ý tưởng.
          </p>
        </Reveal>
      </section>

      <section className="section-shell section-space">
        <div className="service-lines service-lines-large">
          {SERVICE_GROUPS.map((group, idx) => (
            <Reveal key={group.title} className="service-line" delay={idx * 90}>
              <span>0{idx + 1}</span>
              <h2>{group.title}</h2>
              <p>{group.desc}</p>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell ai-lab-detail section-space">
        <Reveal className="ai-lab-intro">
          <p className="eyebrow">AI Lab</p>
          <h2>AI được dùng như một lớp công nghệ trong quy trình kiến trúc, không phải lớp trang trí.</h2>
          <p>
            AI Lab tập trung vào thử nghiệm concept, tự động hóa tác vụ lặp lại, hỗ trợ viết/thuyết minh và
            nâng cấp workflow trình bày hình ảnh.
          </p>
        </Reveal>
        <div className="ai-lab-list">
          {AI_LAB_ITEMS.map((item, idx) => (
            <Reveal key={item} delay={idx * 60}>
              <span>{String(idx + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell section-space">
        <Reveal className="section-heading-row">
          <div>
            <p className="eyebrow">Workflow</p>
            <h2>Từ brief đến hình ảnh bàn giao</h2>
          </div>
        </Reveal>
        <div className="workflow-table">
          {workflow.map(([number, title, desc]) => (
            <Reveal key={number} className="workflow-row">
              <span>{number}</span>
              <strong>{title}</strong>
              <p>{desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell section-space contact-band">
        <Reveal>
          <p className="eyebrow">Bắt đầu</p>
          <h2>Gửi một brief ngắn, mặt bằng/model hoặc ảnh tham khảo. VTARCH sẽ đề xuất hướng visual phù hợp.</h2>
          <Link to="/contact" className="btn-accent px-8 py-4 text-xs uppercase font-mono tracking-widest inline-flex items-center gap-2">
            Liên hệ <ArrowUpRight size={15} />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
