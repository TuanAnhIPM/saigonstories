import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { blogPosts, formatDate } from '@/lib/blog'

export const metadata = {
  title: "Blog — Saigon's Stories",
  description: "Stories, dishes and hidden corners from the streets of Ho Chi Minh City.",
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      {/* Header */}
      <section className="bg-cream pt-36 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-terracotta text-sm font-medium tracking-widest uppercase mb-3">From the Streets</p>
          <h1 className="font-heading text-espresso text-5xl md:text-6xl font-bold mb-5">Stories & Food</h1>
          <p className="text-espresso-light text-lg max-w-xl mx-auto">
            Dishes, corners, and moments from the heart of Saigon — written by the people who show it every day.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Featured post */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 mb-16"
        >
          <div className="relative h-72 lg:h-auto">
            <Image
              src={featured.coverImage}
              alt={featured.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="bg-espresso p-10 flex flex-col justify-center gap-4">
            <span className="text-xs text-terracotta font-bold tracking-widest uppercase">{featured.category}</span>
            <h2 className="font-heading text-cream! text-3xl font-bold leading-snug group-hover:text-terracotta! transition-colors">
              {featured.title}
            </h2>
            <p className="text-white/75! text-sm leading-relaxed line-clamp-3">{featured.excerpt}</p>
            <div className="flex items-center gap-4 text-xs text-white/50 mt-1">
              <span>{formatDate(featured.date)}</span>
              <span>·</span>
              <span>{featured.readingTime}</span>
            </div>
            <div className="flex items-center gap-1 text-terracotta text-sm font-medium group-hover:gap-2 transition-all mt-2">
              Read article <ArrowRight size={14} />
            </div>
          </div>
        </Link>

        {/* Rest of posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-espresso/80 text-cream text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h2 className="font-heading text-espresso text-xl font-bold mb-2 leading-snug group-hover:text-terracotta transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted text-sm leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-sand text-xs text-muted-light">
                  <span>{formatDate(post.date)}</span>
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sand-light py-20 text-center px-6">
        <p className="text-terracotta text-sm font-medium tracking-widest uppercase mb-3">Come See for Yourself</p>
        <h2 className="font-heading text-espresso text-4xl font-bold mb-4">Taste the stories in person</h2>
        <p className="text-muted mb-8 max-w-md mx-auto">Words only go so far. The real thing is waiting for you on the streets of Saigon.</p>
        <Link
          href="/tours"
          className="inline-flex items-center gap-2 bg-terracotta text-cream font-medium px-7 py-3.5 rounded-full hover:bg-terracotta-dark transition-colors"
        >
          Browse Our Tours <ArrowRight size={16} />
        </Link>
      </section>
    </>
  )
}
