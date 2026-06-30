import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../components/UI';
import { CV_DATA } from '../data/cvData';
import { IMAGES } from '../data/constants';
import { personSchema, setPageSeo } from '../utils/seo';

const profileFacts = [
  ['Founder', 'Nguyễn Văn Thanh'],
  ['Nền tảng', 'Kiến trúc sư Đại học Kiến Trúc TP.HCM'],
  ['Kinh nghiệm', '5 năm'],
  ['Dự án', '100+ hình ảnh và hồ sơ trình bày'],
];

const personalIntro =
  'Tôi mong muốn làm việc trong môi trường năng động, có áp lực đủ để phát triển, nơi tôi có thể học hỏi nhanh, tiếp thu phản hồi và đóng góp bằng tinh thần chủ động. Bên cạnh nền tảng kiến trúc - diễn họa, tôi thường tự nghiên cứu các giải pháp AI, mày mò workflow mới và bổ sung những kỹ năng cần thiết để giải quyết công việc hiệu quả hơn.';

const focus = [
  'Tư duy kiến trúc trước khi dựng hình.',
  'Hình ảnh rõ vật liệu, ánh sáng và ý đồ không gian.',
  'Kết hợp D5 Render, hậu kỳ, AI CGI và quy trình GPT.',
  'Triển khai chi tiết nội thất để xưởng sản xuất đọc được và làm được.',
  'Xây dựng ngôn ngữ hình ảnh phù hợp với kiến trúc sư, studio, chủ đầu tư và thương hiệu nội thất.',
];

const skillNameOverrides = {
  Sketchup: 'SketchUp',
  'Vray Sketchup': 'V-Ray SketchUp',
};

const softwareSkills = [
  { name: 'D5 Render', level: 90 },
  ...CV_DATA.softwareSkills.map((skill) => ({
    ...skill,
    name: skillNameOverrides[skill.name] ?? skill.name,
  })),
];

const aiSkills = [
  ['Custom GPT', CV_DATA.aiSkills.automation],
  ['Nghiên cứu AI', CV_DATA.aiSkills.research],
  ['Quy trình AI-CGI', CV_DATA.aiSkills.workflow],
];

const productionCapabilities = [
  {
    label: 'Shop drawing',
    title: 'Triển khai sản xuất nội thất',
    desc:
      'Chuyển ảnh tham khảo hoặc concept thành bản vẽ kích thước, cấu tạo, vật liệu và chi tiết gia cố để xưởng gỗ công nghiệp, đá và sắt có thể sản xuất.',
    items: ['Bản vẽ kích thước & cấu tạo', 'Đồ gỗ công nghiệp', 'Đá, khung sắt gia cố', 'Phối hợp xưởng thi công'],
  },
  {
    label: 'AI Product Content',
    title: 'Hình ảnh & nội dung sản phẩm nội thất',
    desc:
      'Tái dựng sản phẩm từ ảnh tham khảo, tạo nhiều góc nhìn/lifestyle, Việt hóa ảnh sản phẩm và xây workflow GPT cho nội dung SEO.',
    items: ['Nhiều góc nhìn sản phẩm', 'Ảnh lifestyle minh họa', 'Việt hóa ảnh nguồn', 'Bài SEO Rank Math bằng GPT'],
  },
];

const About = () => {
  useEffect(() => {
    setPageSeo({
      title: 'Giới thiệu Nguyễn Văn Thanh | VTARCH',
      description:
        'Nguyễn Văn Thanh là kiến trúc sư Đại học Kiến Trúc TP.HCM, phát triển VTARCH ở giao điểm giữa kiến trúc, diễn họa và công nghệ AI.',
      path: '/#/about',
      schema: personSchema,
    });
  }, []);

  return (
    <div className="page-wrap">
      <section className="section-shell about-hero">
        <Reveal className="about-portrait">
          <img src={IMAGES.portrait} alt="Nguyễn Văn Thanh - VTARCH" loading="eager" decoding="async" fetchPriority="high" />
        </Reveal>
        <Reveal className="about-copy" delay={100}>
          <p className="eyebrow">Giới thiệu</p>
          <h1>Nguyễn Văn Thanh</h1>
          <p>
            Kiến trúc sư Đại học Kiến Trúc TP.HCM, phát triển VTARCH như một studio giao thoa giữa kiến trúc,
            hình ảnh và công nghệ. Trọng tâm là diễn họa kiến trúc, diễn họa nội thất, AI CGI và quy trình số
            cho quá trình thiết kế, sản xuất nội thất và nội dung sản phẩm.
          </p>
          <p className="about-personal-intro">{personalIntro}</p>
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

      <section className="section-shell about-capability section-space">
        <Reveal className="about-capability-heading">
          <p className="eyebrow">Hồ sơ năng lực</p>
          <h2>Phần mềm, quy trình AI, triển khai sản xuất và hoạt động chuyên môn.</h2>
        </Reveal>

        <div className="about-capability-grid">
          <Reveal className="about-software-panel" variant="scale">
            <div className="capability-panel-heading">
              <span>Phần mềm</span>
              <h3>Công cụ thiết kế & diễn họa</h3>
            </div>
            <div className="software-skill-list">
              {softwareSkills.map((skill) => (
                <article key={skill.name} className="software-skill-item">
                  <span>{skill.name}</span>
                  <em>{skill.level}%</em>
                  <div className="skill-meter" aria-hidden="true">
                    <i style={{ width: `${skill.level}%` }} />
                  </div>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal className="about-ai-panel" delay={80}>
            <div className="capability-panel-heading">
              <span>Quy trình AI</span>
              <h3>Quy trình thử nghiệm & tự động hóa</h3>
            </div>
            <div className="about-ai-list">
              {aiSkills.map(([title, desc], idx) => (
                <article key={title}>
                  <span>{String(idx + 1).padStart(2, '0')}</span>
                  <strong>{title}</strong>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal className="about-production-panel" delay={100}>
            <div className="capability-panel-heading">
              <span>Năng lực mở rộng</span>
              <h3>Từ ảnh tham khảo đến sản xuất và bán hàng</h3>
            </div>
            <div className="production-capability-list">
              {productionCapabilities.map((capability, idx) => (
                <article key={capability.title}>
                  <span>{String(idx + 1).padStart(2, '0')} / {capability.label}</span>
                  <strong>{capability.title}</strong>
                  <p>{capability.desc}</p>
                  <ul>
                    {capability.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal className="about-list-panel" delay={120}>
            <div className="capability-panel-heading">
              <span>Giải thưởng</span>
              <h3>Dấu mốc học thuật & sáng tạo</h3>
            </div>
            <ul className="credential-list">
              {CV_DATA.achievements.map((item) => (
                <li key={`${item.title}-${item.event}`}>
                  <strong>{item.title}</strong>
                  <span>{item.event}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="about-list-panel" delay={160}>
            <div className="capability-panel-heading">
              <span>Hoạt động</span>
              <h3>Tổ chức, cộng đồng & trách nhiệm</h3>
            </div>
            <ul className="credential-list">
              {CV_DATA.activities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
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
