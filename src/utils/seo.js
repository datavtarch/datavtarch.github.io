export const SITE_URL = 'https://datavtarch.github.io';
export const DEFAULT_IMAGE = `${SITE_URL}/og-image.webp`;
export const DEFAULT_TITLE = 'VTARCH | Diễn họa kiến trúc, D5 Render & AI CGI';
export const DEFAULT_DESCRIPTION =
  'VTARCH là portfolio của Nguyễn Văn Thanh, kiến trúc sư phát triển hình ảnh kiến trúc, diễn họa nội thất, D5 Render và AI CGI cho studio thiết kế, kiến trúc sư và chủ đầu tư.';

export const SEO_KEYWORDS = [
  'Diễn họa kiến trúc',
  'AI CGI',
  'Diễn họa nội thất',
  'Diễn họa ngoại thất',
  'Architectural Visualization',
  'D5 Render',
  'Kiến trúc AI',
  'GPT cho kiến trúc',
  'VTARCH',
  'Nguyễn Văn Thanh',
].join(', ');

export const absoluteUrl = (path = '/') => {
  if (!path) return SITE_URL;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
};

const upsertMeta = (attribute, value, content) => {
  if (!content) return;

  let meta = document.querySelector(`meta[${attribute}="${value}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, value);
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
};

const upsertCanonical = (href) => {
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }

  canonical.setAttribute('href', href);
};

const upsertJsonLd = (schema) => {
  const id = 'page-jsonld';
  let script = document.getElementById(id);
  if (!schema) {
    script?.remove();
    return;
  }

  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(schema);
};

export const setPageSeo = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  keywords = SEO_KEYWORDS,
  schema,
} = {}) => {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  document.title = title;
  upsertCanonical(url);
  upsertMeta('name', 'description', description);
  upsertMeta('name', 'keywords', keywords);
  upsertMeta('name', 'robots', 'index,follow,max-image-preview:large');
  upsertMeta('property', 'og:type', type);
  upsertMeta('property', 'og:locale', 'vi_VN');
  upsertMeta('property', 'og:url', url);
  upsertMeta('property', 'og:title', title);
  upsertMeta('property', 'og:description', description);
  upsertMeta('property', 'og:image', imageUrl);
  upsertMeta('property', 'og:image:width', '1200');
  upsertMeta('property', 'og:image:height', '630');
  upsertMeta('name', 'twitter:card', 'summary_large_image');
  upsertMeta('name', 'twitter:url', url);
  upsertMeta('name', 'twitter:title', title);
  upsertMeta('name', 'twitter:description', description);
  upsertMeta('name', 'twitter:image', imageUrl);
  upsertJsonLd(schema);
};

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nguyễn Văn Thanh',
  alternateName: 'VTARCH',
  jobTitle: 'Kiến trúc sư diễn họa',
  url: SITE_URL,
  image: DEFAULT_IMAGE,
  worksFor: {
    '@type': 'Organization',
    name: 'VTARCH',
  },
  knowsAbout: [
    'Diễn họa kiến trúc',
    'Diễn họa nội thất',
    'D5 Render',
    'AI CGI',
    'Công nghệ thiết kế',
  ],
};

export const projectSchema = (project, image) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: project.title,
  description: project.story?.overview || project.desc,
  creator: {
    '@type': 'Person',
    name: 'Nguyễn Văn Thanh',
  },
  dateCreated: project.year,
  locationCreated: project.location,
  url: absoluteUrl(`/#/portfolio/${project.id}`),
  image: absoluteUrl(image),
  genre: project.type,
  keywords: [...(project.tags || []), ...(project.category || [])].join(', '),
});
