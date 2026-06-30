import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/UI';
import { INSIGHTS } from '../data/constants';
import { setPageSeo } from '../utils/seo';

export default function Insights() {
  const featuredPost = INSIGHTS[0];
  const featurePosts = INSIGHTS.slice(1, 4);

  useEffect(() => {
    setPageSeo({
      title: 'Góc nhìn về AI, D5 Render & diễn họa kiến trúc | VTARCH',
      description:
        'Góc nhìn chuyên môn của VTARCH về AI trong kiến trúc, D5 Render, workflow thiết kế, diễn họa kiến trúc và case study dự án.',
      path: '/journal',
      image: featuredPost.image,
    });
  }, [featuredPost.image]);

  return (
    <div className="page-wrap journal-page-v3">
      <section className="section-shell journal-hero-v3">
        <Reveal className="journal-hero-copy">
          <span className="section-kicker">Góc nhìn</span>
          <h1>Ghi chép chuyên môn về diễn họa kiến trúc, AI CGI và quy trình thiết kế.</h1>
          <p>
            Các bài viết ngắn về hình ảnh, hồ sơ dự án thực tế và cách công nghệ hỗ trợ quá trình trình bày
            ý tưởng kiến trúc.
          </p>
        </Reveal>

        <Reveal className="journal-hero-visual" delay={100} variant="scale">
          <img src={featuredPost.image} alt={featuredPost.title} loading="eager" decoding="async" fetchPriority="high" />
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
              <img src={post.image} alt={post.title} loading="lazy" decoding="async" />
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
