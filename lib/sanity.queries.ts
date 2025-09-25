import { groq } from 'next-sanity';

export const POSTS_QUERY = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    excerpt,
    publishedAt,
    "slug": slug.current,
    coverImage,
    seo
  }
`;

export const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    excerpt,
    publishedAt,
    "slug": slug.current,
    coverImage,
    content,
    seo
  }
`;
