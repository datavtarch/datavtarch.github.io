import React from 'react';
import { Reveal } from '../components/UI';
import { INSIGHTS } from '../data/constants';

const fallbackTitles = ['AI trong kiến trúc', 'Workflow D5 và AI', 'Từ SketchUp đến CGI'];

export default function Insights() {
  return (
    <div className="page-wrap journal-page-v2">
      <section className="section-shell page-hero-minimal">
        <Reveal>
          <span className="section-kicker">Journal</span>
          <h1>Notes on architecture visualization, AI CGI and design workflow.</h1>
          <p>
            Những ghi chú chuyên môn về cách VTARCH tiếp cận hình ảnh kiến trúc, D5 Render, AI và quy trình thiết kế.
          </p>
        </Reveal>
      </section>

      <section className="section-shell journal-grid-v2 journal-page-grid">
        {INSIGHTS.slice(0, 6).map((post, idx) => (
          <Reveal key={post.title} delay={idx * 70}>
            <article>
              <img src={post.image} alt={post.title} loading={idx < 2 ? 'eager' : 'lazy'} decoding="async" />
              <span>{post.category}</span>
              <strong>{fallbackTitles[idx] || post.title}</strong>
              <p>{post.excerpt}</p>
            </article>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
