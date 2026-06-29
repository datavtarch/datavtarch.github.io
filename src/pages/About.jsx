import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../components/UI';
import { IMAGES } from '../data/constants';

const profileFacts = [
  ['Founder', 'Nguyễn Văn Thanh'],
  ['Nền tảng', 'Kiến trúc sư Đại học Kiến Trúc TP.HCM'],
  ['Kinh nghiệm', '5 năm'],
  ['Dự án', '100+ hình ảnh và hồ sơ trình bày'],
];

const focus = [
  'Tư duy kiến trúc trước khi dựng hình.',
  'Hình ảnh rõ vật liệu, ánh sáng và ý đồ không gian.',
  'Kết hợp D5 Render, hậu kỳ, AI CGI và quy trình GPT.',
  'Xây dựng ngôn ngữ hình ảnh phù hợp với kiến trúc sư, studio và chủ đầu tư.',
];

const About = () => {
  useEffect(() => {
    document.title = 'Giới thiệu | VTARCH';
  }, []);

  return (
    <div className="page-wrap">
      <section className="section-shell about-hero">
        <Reveal className="about-portrait">
          <img src={IMAGES.portrait} alt="Nguyễn Văn Thanh - VTARCH" loading="eager" decoding="async" />
        </Reveal>
        <Reveal className="about-copy" delay={100}>
          <p className="eyebrow">Giới thiệu</p>
          <h1>Nguyễn Văn Thanh</h1>
          <p>
            Kiến trúc sư Đại học Kiến Trúc TP.HCM, phát triển VTARCH như một studio giao thoa giữa kiến trúc,
            hình ảnh và công nghệ. Trọng tâm là diễn họa kiến trúc, diễn họa nội thất, AI CGI và quy trình số
            cho quá trình thiết kế.
          </p>
          <Link to="/contact" className="btn-accent px-8 py-4 text-xs uppercase font-mono tracking-widest inline-flex items-center gap-2">
            Liên hệ hợp tác <ArrowUpRight size={15} />
          </Link>
        </Reveal>
      </section>

      <section className="section-shell section-space">
        <div className="fact-grid">
          {profileFacts.map(([label, value], idx) => (
            <Reveal key={label} delay={idx * 60}>
              <span>{label}</span>
              <strong>{value}</strong>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell about-statement section-space">
        <Reveal>
          <h2>VTARCH tiếp cận diễn họa như một phần của tư duy thiết kế.</h2>
        </Reveal>
        <Reveal delay={80}>
          <p>
            Studio tập trung vào cách hình ảnh giúp một ý tưởng kiến trúc được đọc rõ hơn: ánh sáng, chất liệu,
            tỉ lệ, bối cảnh và câu chuyện. Công nghệ AI được đưa vào như công cụ tăng tốc thử nghiệm và tự động hóa,
            nhưng nền tảng vẫn là tư duy thiết kế.
          </p>
        </Reveal>
      </section>

      <section className="section-shell section-space">
        <div className="service-lines">
          {focus.map((item, idx) => (
            <Reveal key={item} className="service-line" delay={idx * 60}>
              <span>{String(idx + 1).padStart(2, '0')}</span>
              <h3>{item}</h3>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
