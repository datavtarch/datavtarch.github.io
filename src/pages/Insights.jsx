import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/UI';
import { INSIGHTS } from '../data/constants';

export default function Insights() {
  const featuredPost = INSIGHTS[0];
  const featurePosts = INSIGHTS.slice(1, 4);

  return (
    <div className="page-wrap journal-page-v3">
      <section className="section-shell journal-hero-v3">
        <Reveal className="journal-hero-copy">
          <span className="section-kicker">Góc nhìn</span>
          <h1>Ghi chép chuyên môn về diễn họa kiến trúc, AI CGI và workflow thiết kế.</h1>
          <p>
            Những ghi chép ngắn, ưu tiên hình ảnh và case study thực tế, để trang này đọc như một tạp chí studio
            hơn là một blog kỹ thuật.
          </p>
        </Reveal>

        <Reveal className="journal-hero-visual" delay={100} variant="scale">
          <img src={featuredPost.image} alt={featuredPost.title} loading="eager" decoding="async" />
          <div>
            <span>{featuredPost.category}</span>
            <strong>{featuredPost.title}</strong>
          </div>
        </Reveal>
      </section>

      <section className="section-shell journal-feature-grid">
        {featurePosts.map((post, idx) => (
          <Reveal key={post.title} delay={idx * 70}>
            <Link to="/journal" className="journal-feature-card">
              <img src={post.image} alt={post.title} loading={idx === 0 ? 'eager' : 'lazy'} decoding="async" />
              <div className="journal-feature-copy">
                <span>{post.category}</span>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
