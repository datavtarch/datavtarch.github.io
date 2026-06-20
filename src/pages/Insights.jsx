import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../components/UI';
import { INSIGHTS } from '../data/constants';

const topics = [
  'AI trong kiến trúc',
  'D5 Render',
  'Workflow thiết kế',
  'Diễn họa kiến trúc',
  'Case Study dự án',
];

export default function Insights() {
  return (
    <div className="page-wrap">
      <section className="section-shell page-hero-minimal">
        <Reveal>
          <p className="eyebrow">Góc nhìn</p>
          <h1>Ghi chú chuyên môn về hình ảnh, kiến trúc và công nghệ thiết kế.</h1>
          <p>
            Nơi VTARCH chia sẻ quan sát về AI trong kiến trúc, D5 Render, workflow thiết kế, diễn họa kiến trúc
            và các case study dự án.
          </p>
        </Reveal>
      </section>

      <section className="section-shell topic-list">
        {topics.map((topic, idx) => (
          <Reveal key={topic} delay={idx * 45}>
            <span>{String(idx + 1).padStart(2, '0')}</span>
            <strong>{topic}</strong>
          </Reveal>
        ))}
      </section>

      <section className="section-shell insight-archive section-space">
        {INSIGHTS.map((post, idx) => (
          <Reveal key={post.title} delay={idx * 70}>
            <article className="insight-row">
              <img src={post.image} alt={post.title} loading={idx < 2 ? 'eager' : 'lazy'} decoding="async" />
              <div>
                <span>{post.category} / {post.date}</span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
              </div>
              <ArrowUpRight size={20} />
            </article>
          </Reveal>
        ))}
      </section>

      <section className="section-shell section-space contact-band">
        <Reveal>
          <p className="eyebrow">Trao đổi chuyên môn</p>
          <h2>Cần xây workflow AI hoặc D5 Render cho studio thiết kế?</h2>
          <Link to="/contact" className="btn-accent px-8 py-4 text-xs uppercase font-mono tracking-widest inline-flex items-center gap-2">
            Liên hệ VTARCH <ArrowUpRight size={15} />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
