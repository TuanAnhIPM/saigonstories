import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { blogPosts, getBlogPost, formatDate } from '@/lib/blog'

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params
  const post = getBlogPost(slug)
  if (!post) return {}
  return { title: `${post.title} — Saigon's Stories`, description: post.excerpt }
}

export default async function BlogPostPage(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <>
      {/* Hero image */}
      <div className="relative h-[55vh] min-h-80 w-full">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-espresso/50" />
        <div className="absolute inset-0 flex flex-col justify-end pb-12 px-6">
          <div className="max-w-3xl mx-auto w-full">
            <span className="text-xs text-terracotta font-bold tracking-widest uppercase mb-3 block">{post.category}</span>
            <h1 className="font-heading text-cream! text-4xl md:text-5xl font-bold leading-tight mb-4">{post.title}</h1>
            <div className="flex items-center gap-3 text-white/70 text-sm">
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted text-sm hover:text-terracotta transition-colors mb-10"
        >
          <ArrowLeft size={14} /> All Articles
        </Link>

        <p className="text-espresso-light text-lg leading-relaxed mb-10 font-medium">{post.excerpt}</p>

        <div className="flex flex-col gap-8">
          {post.content.map((block, i) => {
            if (block.type === 'paragraph') {
              return (
                <p key={i} className="text-espresso-light leading-relaxed text-base">
                  {block.text}
                </p>
              )
            }
            if (block.type === 'heading') {
              return (
                <h2 key={i} className="font-heading text-espresso text-2xl font-bold mt-4">
                  {block.text}
                </h2>
              )
            }
            if (block.type === 'image') {
              return (
                <figure key={i} className="my-4">
                  <div className="relative aspect-video rounded-2xl overflow-hidden">
                    <Image
                      src={block.src}
                      alt={block.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 768px"
                      className="object-cover"
                    />
                  </div>
                  {block.caption && (
                    <figcaption className="text-xs text-muted text-center mt-3 italic">
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              )
            }
            if (block.type === 'quote') {
              return (
                <blockquote key={i} className="border-l-4 border-terracotta pl-6 py-2 my-2">
                  <p className="font-heading text-espresso text-xl italic leading-relaxed">{block.text}</p>
                </blockquote>
              )
            }
            return null
          })}
        </div>
      </article>

      {/* More articles */}
      {otherPosts.length > 0 && (
        <section className="bg-sand-light py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-espresso text-3xl font-bold mb-10 text-center">More from the Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={p.coverImage}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs text-terracotta font-bold tracking-widest uppercase mb-2">{p.category}</span>
                    <h3 className="font-heading text-espresso text-lg font-bold leading-snug group-hover:text-terracotta transition-colors flex-1">
                      {p.title}
                    </h3>
                    <p className="text-xs text-muted-light mt-3">{formatDate(p.date)} · {p.readingTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-cream py-20 text-center px-6">
        <p className="text-terracotta text-sm font-medium tracking-widest uppercase mb-3">Ready to Taste It?</p>
        <h2 className="font-heading text-espresso text-4xl font-bold mb-4">Join us on the streets</h2>
        <p className="text-muted mb-8 max-w-md mx-auto">Words only go so far. Book a tour and taste Saigon for yourself.</p>
        <Link
          href="/tours"
          className="inline-flex items-center gap-2 bg-terracotta text-cream font-medium px-7 py-3.5 rounded-full hover:bg-terracotta-dark transition-colors"
        >
          Browse Our Tours
        </Link>
      </section>
    </>
  )
}
