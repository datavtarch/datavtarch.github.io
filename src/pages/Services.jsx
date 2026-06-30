import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/UI';
import { setPageSeo } from '../utils/seo';

const serviceGroups = [
  {
    title: 'Diễn họa',
    desc: 'Hình ảnh kiến trúc và nội thất có vật liệu, ánh sáng và góc nhìn đủ sức trình bày dự án.',
    items: ['Diễn họa ngoại thất', 'Diễn họa nội thất', 'Chuyển động hình ảnh', 'AI CGI'],
  },
  {
    title: 'Thiết kế',
    desc: 'Định hướng thị giác, concept không gian và hồ sơ trình bày cho kiến trúc sư, studio và chủ đầu tư.',
    items: ['Thiết kế kiến trúc', 'Thiết kế nội thất', 'Ý tưởng không gian', 'Moodboard vật liệu'],
  },
  {
    title: 'Triển khai sản xuất',
    desc: 'Chuyển ảnh tham khảo hoặc concept thành bản vẽ kỹ thuật để xưởng nội thất sản xuất rõ ràng hơn.',
    items: ['Shop drawing nội thất', 'Kích thước & cấu tạo', 'Gỗ công nghiệp', 'Đá & khung sắt gia cố'],
  },
  {
    title: 'Nội dung sản phẩm',
    desc: 'AI Product Content cho thương hiệu nội thất: từ hình ảnh tham khảo đến bộ ảnh và nội dung bán hàng.',
    items: ['Tái dựng nhiều góc sản phẩm', 'Ảnh lifestyle minh họa', 'Việt hóa ảnh nguồn', 'Bài SEO Rank Math bằng GPT'],
  },
  {
    title: 'Công nghệ',
    desc: 'GPT và công cụ tự động hóa giúp rút ngắn các bước lặp lại trong thiết kế, hình ảnh và nội dung.',
    items: ['GPT cho kiến trúc', 'GPT cho nội thất', 'Quy trình AI', 'Công cụ tự động hóa', 'Ứng dụng tùy chỉnh'],
  },
];

export default function Services() {
  useEffect(() => {
    setPageSeo({
      title: 'Dịch vụ diễn họa kiến trúc, AI CGI & D5 Render | VTARCH',
      description:
        'Dịch vụ VTARCH gồm diễn họa ngoại thất, diễn họa nội thất, D5 Render, AI CGI, shop drawing nội thất, AI Product Content và GPT cho kiến trúc.',
      path: '/services',
    });
  }, []);

  return (
    <div className="page-wrap service-page-v2">
      <section className="section-shell page-hero-minimal">
        <Reveal>
          <span className="section-kicker">Dịch vụ</span>
          <h1>Hình ảnh, thiết kế và công nghệ cho studio kiến trúc.</h1>
          <p>
            VTARCH phát triển hình ảnh, ý tưởng và công cụ quy trình để hỗ trợ kiến trúc sư, studio thiết kế,
            chủ đầu tư, công ty nội thất và xưởng sản xuất trình bày ý tưởng rõ hơn.
          </p>
        </Reveal>
      </section>

      <section className="section-shell service-groups-v2 service-page-list">
        {serviceGroups.map((group, idx) => (
          <Reveal key={group.title} delay={idx * 70}>
            <article>
              <h2>{group.title}</h2>
              <p>{group.desc}</p>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
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
