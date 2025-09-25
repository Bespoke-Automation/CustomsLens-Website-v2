import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import type { PortableTextComponents } from '@portabletext/react';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { getFormatter, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { client } from '@/lib/sanity.client';
import { POST_BY_SLUG_QUERY } from '@/lib/sanity.queries';
import { urlForImage } from '@/lib/sanity.image';

interface BlogPost {
  _id: string;
  title: string;
  excerpt?: string;
  publishedAt: string;
  slug: string;
  coverImage?: SanityImageSource & {
    alt?: string;
  };
  content: any;
  seo?: {
    title?: string;
    description?: string;
  };
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: SanityImageSource & { alt?: string } }) => {
      const imageUrl = urlForImage(value).width(1400).height(900).url();
      const altText = value.alt || '';

      return (
        <figure className="relative my-10 w-full overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all duration-300 hover:shadow-xl">
          <Image
            src={imageUrl}
            alt={altText}
            width={1400}
            height={900}
            className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
            unoptimized
          />
          {altText ? (
            <figcaption className="mt-3 px-4 pb-4 text-center text-sm text-muted-foreground">{altText}</figcaption>
          ) : null}
        </figure>
      );
    }
  },
  block: {
    normal: ({ children }: { children: ReactNode }) => (
      <p className="leading-relaxed text-lg text-muted-foreground">{children}</p>
    ),
    h2: ({ children }: { children: ReactNode }) => (
      <h2 className="mt-16 text-3xl font-quantico font-semibold tracking-tight text-foreground">{children}</h2>
    ),
    h3: ({ children }: { children: ReactNode }) => (
      <h3 className="mt-10 text-2xl font-quantico font-semibold tracking-tight text-foreground">{children}</h3>
    ),
    blockquote: ({ children }: { children: ReactNode }) => (
      <blockquote className="relative my-8 rounded-r-2xl border-l-4 border-primary bg-gradient-to-r from-primary/5 to-transparent px-6 py-4 text-xl italic text-muted-foreground">
        <div className="absolute left-4 top-2 text-4xl text-primary/20 font-serif">"</div>
        <div className="relative z-10">{children}</div>
      </blockquote>
    )
  },
  marks: {
    strong: ({ children }: { children: ReactNode }) => <strong className="font-semibold text-foreground">{children}</strong>,
    em: ({ children }: { children: ReactNode }) => <em className="italic text-foreground">{children}</em>,
    link: ({ value, children }: { value: { href: string }; children: ReactNode }) => (
      <a
        href={value.href}
        className="font-medium text-primary-blue underline decoration-[#0066FF33] underline-offset-4 transition hover:decoration-[#0066FF]"
      >
        {children}
      </a>
    )
  }
};

export default async function BlogPostPage({
  params
}: Readonly<{
  params: Promise<{ locale: string; slug: string }>;
}>) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const [t, format, post] = await Promise.all([
    getTranslations({ locale, namespace: 'Blog' }),
    getFormatter({ locale }),
    client.fetch<BlogPost | null>(POST_BY_SLUG_QUERY, { slug })
  ]);

  if (!post) {
    notFound();
  }

  const imageUrl = post.coverImage ? urlForImage(post.coverImage).width(1800).height(1100).url() : null;
  const altText = (post.coverImage as { alt?: string } | undefined)?.alt || post.title;
  const publishedDate = format.dateTime(new Date(post.publishedAt), { dateStyle: 'long' });

  return (
    <>
      <Header />

      <main className="bg-background">
        <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-br from-[#E6F0FF] via-white to-white">
          <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-[rgba(0,102,255,0.12)] blur-3xl animate-float-slow" />
          <div className="absolute right-[-6rem] bottom-[-5rem] h-96 w-96 rounded-full bg-[rgba(0,102,255,0.08)] blur-3xl animate-float-delayed" />

          <div className="container relative mx-auto px-6 pb-24 pt-36 sm:px-8 lg:px-12">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <Link
                href={`/${locale}/blog`}
                className="inline-flex items-center gap-2 rounded-full border border-[#0066FF1A] bg-white px-5 py-2 text-sm font-medium text-primary-blue transition-all duration-300 hover:border-primary hover:text-primary-blue hover:shadow-md hover:scale-105"
              >
                <span aria-hidden="true">←</span>
                {t('back')}
              </Link>

              <span className="mt-8 inline-flex items-center justify-center rounded-full bg-[rgba(0,102,255,0.12)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-primary-blue">
                {t('heroTitle')}
              </span>

              <h1 className="mt-6 text-4xl font-quantico font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {post.title}
              </h1>

              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                {publishedDate}
              </p>

              {post.excerpt ? (
                <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
                  {post.excerpt}
                </p>
              ) : null}

              {imageUrl ? (
                <div className="relative mt-12 w-full overflow-hidden rounded-3xl border border-border bg-card shadow-xl transition-all duration-300 hover:shadow-2xl">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={imageUrl}
                      alt={altText}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1280px) 50vw, 100vw"
                      unoptimized
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <article className="mx-auto w-full max-w-4xl rounded-3xl border border-border bg-card p-8 shadow-xl transition-all duration-300 hover:shadow-2xl sm:p-12 lg:p-16">
              <div className="prose prose-lg mx-auto max-w-none space-y-8 prose-headings:font-quantico prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-a:decoration-primary/30 prose-a:underline-offset-4 prose-a:transition-all prose-a:duration-300 hover:prose-a:decoration-primary">
                <PortableText value={post.content} components={portableTextComponents} />
              </div>
            </article>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </>
  );
}
