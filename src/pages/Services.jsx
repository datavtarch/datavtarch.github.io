import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/UI';

const serviceGroups = [
  ['VISUAL', ['Exterior Visualization', 'Interior Visualization', 'Animation', 'AI CGI']],
  ['DESIGN', ['Architecture Design', 'Interior Design', 'Concept Design']],
  ['TECHNOLOGY', ['GPT Architecture', 'Workflow AI', 'Automation Tools', 'Custom Applications']],
];

export default function Services() {
  return (
    <div className="page-wrap service-page-v2">
      <section className="section-shell page-hero-minimal">
        <Reveal>
          <span className="section-kicker">Services</span>
          <h1>Visual, design and technology for architecture studios.</h1>
          <p>
            VTARCH phát triển hình ảnh, concept và công cụ workflow để hỗ trợ kiến trúc sư, studio thiết kế và chủ đầu tư
            trình bày ý tưởng rõ hơn.
          </p>
        </Reveal>
      </section>

      <section className="section-shell service-groups-v2 service-page-list">
        {serviceGroups.map(([title, items], idx) => (
          <Reveal key={title} delay={idx * 90}>
            <article>
              <h2>{title}</h2>
              <ul>
                {items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="section-shell contact-v2">
        <Reveal>
          <span className="section-kicker">Start</span>
          <h2>Send a model, plan, moodboard or a simple brief.</h2>
          <Link to="/contact" className="primary-minimal-link">Contact</Link>
        </Reveal>
      </section>
    </div>
  );
}
