import Image from 'next/image';
import Link from 'next/link';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { getFormatter, getTranslations, setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { client } from '@/lib/sanity.client';
import { POSTS_QUERY } from '@/lib/sanity.queries';
import { urlForImage } from '@/lib/sanity.image';

interface PostListItem {
  _id: string;
  title: string;
  excerpt?: string;
  publishedAt: string;
  slug: string;
  coverImage?: SanityImageSource & {
    alt?: string;
  };
}

export default async function BlogPage({
  params
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [blogTranslations, format] = await Promise.all([
    getTranslations({ locale, namespace: 'Blog' }),
    getFormatter({ locale })
  ]);

  const posts = await client.fetch<PostListItem[]>(POSTS_QUERY);
  const [featured, ...others] = posts;
  const highlightList = others.slice(0, 3);
  const remainingPosts = others.slice(3);

  return (
    <>
      <Header />

      <main className="bg-background">
        <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-br from-[#E6F0FF] via-white to-white">
          <div className="absolute -left-32 top-20 h-64 w-64 -translate-y-1/2 rounded-full bg-[rgba(0,102,255,0.12)] blur-3xl animate-float-slow" />
          <div className="absolute right-[-6rem] bottom-[-4rem] h-80 w-80 rounded-full bg-[rgba(0,102,255,0.08)] blur-3xl animate-float-delayed" />

          <div className="container relative mx-auto px-6 pb-28 pt-36 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center justify-center rounded-full bg-[rgba(0,102,255,0.12)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-primary-blue">
                {blogTranslations('title')}
              </span>
              <h1 className="mt-6 text-4xl font-quantico font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {blogTranslations('heroTitle')}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
                {blogTranslations('summary')}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            {posts.length === 0 ? (
              <div className="rounded-3xl border border-border/60 bg-card p-12 text-center shadow-xl">
                <p className="text-lg text-muted-foreground">{blogTranslations('empty')}</p>
              </div>
            ) : (
              <div className="space-y-20">
                {featured ? (
                  <div className="grid gap-12 lg:grid-cols-[1.35fr,1fr]">
                    <Link
                      href={`/${locale}/blog/${featured.slug}`}
                      className="group relative block overflow-hidden rounded-3xl border border-border bg-card shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-primary"
                    >
                      <div className="relative aspect-[16/9] w-full overflow-hidden">
                        {featured.coverImage ? (
                          <Image
                            src={urlForImage(featured.coverImage).width(1600).height(900).url()}
                            alt={(featured.coverImage as { alt?: string })?.alt || featured.title}
                            fill
                            className="object-cover transition duration-700 group-hover:scale-105"
                            sizes="(min-width: 1280px) 60vw, 100vw"
                            unoptimized
                          />
                        ) : (
                          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,102,255,0.35),rgba(230,240,255,0.65))]" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#081532]/85 via-[#081532]/10 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
                          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/70">
                            {format.dateTime(new Date(featured.publishedAt), {
                              dateStyle: 'medium'
                            })}
                          </p>
                          <h2 className="mt-3 text-3xl font-quantico font-semibold leading-tight text-white sm:text-4xl">
                            {featured.title}
                          </h2>
                          {featured.excerpt ? (
                            <p className="mt-4 max-w-2xl text-base text-white/80">
                              {featured.excerpt}
                            </p>
                          ) : null}
                          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-white/90">
                            {blogTranslations('readMore')}
                            <span aria-hidden="true">→</span>
                          </span>
                        </div>
                      </div>
                    </Link>

                    <aside className="flex flex-col justify-between rounded-3xl border border-border bg-[#F5F8FF] p-8 shadow-sm">
                      <div>
                        <h3 className="text-sm font-quantico font-semibold uppercase tracking-[0.3em] text-primary-blue">
                          {blogTranslations('highlights')}
                        </h3>
                        <div className="mt-3 h-px w-16 bg-[linear-gradient(to_right,rgba(0,102,255,0.45),rgba(0,102,255,0))]" />
                      </div>

                      <div className="mt-6 space-y-4">
                        {highlightList.length === 0 ? (
                          <p className="text-sm text-muted-foreground">{blogTranslations('empty')}</p>
                        ) : (
                          highlightList.map((post) => (
                            <Link
                              key={post._id}
                              href={`/${locale}/blog/${post.slug}`}
                              className="group block rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
                            >
                              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                                {format.dateTime(new Date(post.publishedAt), {
                                  dateStyle: 'medium'
                                })}
                              </p>
                              <h4 className="mt-3 text-lg font-quantico font-semibold text-foreground transition-colors group-hover:text-primary-blue">
                                {post.title}
                              </h4>
                              {post.excerpt ? (
                                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                                  {post.excerpt}
                                </p>
                              ) : null}
                              <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-blue">
                                {blogTranslations('readMore')}
                                <span aria-hidden="true">→</span>
                              </span>
                            </Link>
                          ))
                        )}
                      </div>
                    </aside>
                  </div>
                ) : null}

                {remainingPosts.length > 0 ? (
                  <div className="space-y-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-2xl font-quantico font-semibold tracking-tight text-foreground sm:text-3xl">
                        {blogTranslations('moreInsights')}
                      </h3>
                      <div className="h-px w-full flex-1 bg-[linear-gradient(to_right,rgba(0,102,255,0.4),rgba(0,102,255,0))] sm:w-auto" />
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                      {remainingPosts.map((post) => {
                        const imageUrl = post.coverImage
                          ? urlForImage(post.coverImage).width(600).height(400).url()
                          : null;
                        const altText = (post.coverImage as { alt?: string } | undefined)?.alt || post.title;

                        return (
                          <article
                            key={post._id}
                            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-2xl"
                          >
                            <Link href={`/${locale}/blog/${post.slug}`} className="flex h-full flex-col">
                              {imageUrl ? (
                                <div className="relative aspect-[4/3] w-full overflow-hidden">
                                  <Image
                                    src={imageUrl}
                                    alt={altText}
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-105"
                                    sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                                    unoptimized
                                  />
                                </div>
                              ) : (
                                <div className="aspect-[4/3] w-full bg-[linear-gradient(135deg,rgba(0,102,255,0.15),rgba(230,240,255,0.7))]" />
                              )}

                              <div className="flex flex-1 flex-col gap-4 p-6">
                                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                                  {format.dateTime(new Date(post.publishedAt), {
                                    dateStyle: 'medium'
                                  })}
                                </p>
                                <h4 className="text-xl font-quantico font-semibold leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary-blue">
                                  {post.title}
                                </h4>
                                {post.excerpt ? (
                                  <p className="flex-1 text-sm text-muted-foreground">
                                    {post.excerpt}
                                  </p>
                                ) : null}
                                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-blue transition group-hover:translate-x-1">
                                  {blogTranslations('readMore')}
                                  <span aria-hidden="true">→</span>
                                </span>
                              </div>
                            </Link>
                          </article>
                        );
                      })}
                    </div>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </>
  );
}
