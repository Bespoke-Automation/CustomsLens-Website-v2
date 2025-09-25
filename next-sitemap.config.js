const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false
});

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://customslens.nl',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 1.0,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Handle internationalization
    const locales = ['en', 'nl', 'zh'];
    const defaultLocale = 'en';

    // Skip locale-prefixed paths for now, we'll handle them separately
    if (locales.some(locale => path.startsWith(`/${locale}`))) {
      return null;
    }

    // Generate alternate language links
    const alternateRefs = locales.map(locale => ({
      href: locale === defaultLocale ?
        `${config.siteUrl}${path}` :
        `${config.siteUrl}/${locale}${path === '/' ? '' : path}`,
      hreflang: locale
    }));

    // Add x-default
    alternateRefs.push({
      href: `${config.siteUrl}${path}`,
      hreflang: 'x-default'
    });

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === '/' ? 1.0 : 0.9,
      lastmod: new Date().toISOString(),
      alternateRefs
    };
  },
  additionalPaths: async (config) => {
    const locales = ['en', 'nl', 'zh'];
    const paths = [];

    // Add localized home pages
    for (const locale of ['nl', 'zh']) {
      paths.push({
        loc: `/${locale}`,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
        alternateRefs: [
          { href: `${config.siteUrl}/`, hreflang: 'en' },
          { href: `${config.siteUrl}/nl`, hreflang: 'nl' },
          { href: `${config.siteUrl}/zh`, hreflang: 'zh' },
          { href: `${config.siteUrl}/`, hreflang: 'x-default' }
        ]
      });
    }

    // Fetch blog posts from Sanity
    try {
      const posts = await client.fetch(`
        *[_type == "post" && defined(slug.current)] {
          "slug": slug.current,
          publishedAt,
          _updatedAt
        }
      `);

      // Add blog listing pages for each locale
      for (const locale of locales) {
        const blogPath = locale === 'en' ? '/blog' : `/${locale}/blog`;
        paths.push({
          loc: blogPath,
          changefreq: 'weekly',
          priority: 0.8,
          lastmod: new Date().toISOString(),
          alternateRefs: locales.map(l => ({
            href: l === 'en' ? `${config.siteUrl}/blog` : `${config.siteUrl}/${l}/blog`,
            hreflang: l
          })).concat([{ href: `${config.siteUrl}/blog`, hreflang: 'x-default' }])
        });
      }

      // Add individual blog posts for each locale
      for (const post of posts) {
        for (const locale of locales) {
          const postPath = locale === 'en' ? `/blog/${post.slug}` : `/${locale}/blog/${post.slug}`;
          paths.push({
            loc: postPath,
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: post._updatedAt || post.publishedAt || new Date().toISOString(),
            alternateRefs: locales.map(l => ({
              href: l === 'en' ? `${config.siteUrl}/blog/${post.slug}` : `${config.siteUrl}/${l}/blog/${post.slug}`,
              hreflang: l
            })).concat([{ href: `${config.siteUrl}/blog/${post.slug}`, hreflang: 'x-default' }])
          });
        }
      }
    } catch (error) {
      console.warn('Failed to fetch blog posts for sitemap:', error);
    }

    return paths;
  }
};