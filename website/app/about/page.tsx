'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const values = [
  { icon: '🛵', title: 'Born in Saigon', body: 'We grew up riding these streets. The city\'s rhythm, its flavours and its stories are part of who we are — and we can\'t wait to share them.' },
  { icon: '🤝', title: 'Small groups, real connections', body: 'No big buses, no rushed schedules. Our tours are intimate by design so every guest feels like a local, not a tourist.' },
  { icon: '🍜', title: 'Food is how we tell stories', body: 'Every dish on our tours has a history — a family recipe, a neighbourhood tradition, a story of migration and survival.' },
  { icon: '📖', title: 'History that lives in the streets', body: 'Saigon\'s past isn\'t in museums. It\'s in the buildings, the bunkers, the markets and the people. We take you there.' },
]

const lifeImages = [
  { src: '/images/food-tour/IMG_3417.JPG', alt: 'Guest enjoying Vietnamese pizza' },
  { src: '/images/history-tour/IMG_3429.JPG', alt: 'Historical site visit' },
  { src: '/images/food-tour/IMG_3449.JPG', alt: 'Guests at a bánh mì stall' },
  { src: '/images/history-tour/IMG_3430.JPG', alt: 'Saigon cultural landmark' },
  { src: '/images/food-tour/IMG_3435.JPG', alt: 'Street food spread' },
  { src: '/images/history-tour/IMG_3423.JPG', alt: 'Walking through Saigon' },
  { src: '/images/food-tour/IMG_3420.JPG', alt: 'Local food stall experience' },
  { src: '/images/history-tour/IMG_3424.JPG', alt: 'Exploring Chinatown' },
]

function FadeIn({ children, direction = 'up', delay = 0, className = '' }: {
  children: React.ReactNode; direction?: 'up' | 'left' | 'right'; delay?: number; className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const initial = direction === 'left' ? { opacity: 0, x: -40 } : direction === 'right' ? { opacity: 0, x: 40 } : { opacity: 0, y: 30 }
  return (
    <motion.div ref={ref} initial={initial} animate={inView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }} className={className}>
      {children}
    </motion.div>
  )
}

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-cream pt-36 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-terracotta text-sm font-medium tracking-widest uppercase mb-3">Our Story</p>
          <h1 className="font-heading text-espresso text-5xl md:text-6xl font-bold mb-6">We are Saigon&apos;s Stories</h1>
          <p className="text-espresso-light text-lg max-w-2xl mx-auto leading-relaxed">
            A team of passionate Saigon locals who believe the best way to understand a city is through its food, its history and the people who live it every day.
          </p>
        </div>
      </section>

      {/* Our Mission — image LEFT, text RIGHT */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/food-tour/IMG_3452.JPG" alt="Guests enjoying local Vietnamese cuisine" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <p className="text-terracotta text-sm font-medium tracking-widest uppercase mb-4">Our Mission</p>
            <h2 className="font-heading text-espresso text-3xl md:text-4xl font-bold mb-6 leading-tight">Beyond the tourist trail</h2>
            <p className="text-muted leading-relaxed mb-5">Saigon is one of the world&apos;s most vibrant cities — but most visitors only see a fraction of it. We started Saigon&apos;s Stories because we wanted to change that.</p>
            <p className="text-muted leading-relaxed mb-5">Our tours take you to the places locals actually go — the 40-year-old noodle stall down the alley, the coffee shop hidden in a courtyard, the war-era bunker under a family home.</p>
            <p className="text-muted leading-relaxed">Every experience is personal, every guide is a storyteller, and every tour leaves you with something that lasts longer than a photo.</p>
          </FadeIn>
        </div>
      </section>

      {/* Our Stories — text LEFT, image RIGHT (reversed layout) */}
      <section className="bg-sand-light py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left" delay={0.1}>
              <p className="text-terracotta text-sm font-medium tracking-widest uppercase mb-4">Our Stories</p>
              <h2 className="font-heading text-espresso text-3xl md:text-4xl font-bold mb-6 leading-tight">The people behind every tour</h2>
              <p className="text-muted leading-relaxed mb-5">It started with an itch — a restless urge to share what we love most about this city with the people who travel thousands of kilometres to see it. Vietnamese cuisine, history, and culture are extraordinary, and we wanted foreigners to experience them the way we do: from the inside.</p>
              <p className="text-muted leading-relaxed mb-5">Saigon&apos;s Stories is a team of young locals who grew up with these streets, these stalls, and these stories. We speak your language, we know every shortcut, and we genuinely love showing you the real Saigon — not the version in the guidebook.</p>
              <p className="text-muted leading-relaxed">When you join our tour, you&apos;re not buying a product. You&apos;re spending a few hours with someone who loves this city as much as you&apos;re about to.</p>
            </FadeIn>
            <FadeIn direction="right" delay={0.25}>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/history-tour/IMG_3429.JPG" alt="Our local guides in Saigon" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <p className="text-terracotta text-sm font-medium tracking-widest uppercase mb-3">What We Stand For</p>
            <h2 className="font-heading text-espresso text-4xl font-bold">Our values</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="bg-cream rounded-2xl p-7 flex flex-col gap-4 h-full shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-4xl">{v.icon}</span>
                  <h3 className="font-heading text-espresso text-lg font-bold">{v.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{v.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Life on Tour — auto-scrolling marquee */}
      <section className="py-24 bg-espresso overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
          <h2 className="font-heading text-cream text-3xl md:text-4xl font-bold">Life on tour</h2>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-4 animate-marquee w-max">
            {[...lifeImages, ...lifeImages].map((img, i) => (
              <div key={i} className="relative shrink-0 w-72 h-80 rounded-2xl overflow-hidden">
                <Image src={img.src} alt={img.alt} fill sizes="288px" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="bg-cream-dark py-20">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="font-heading text-espresso text-3xl font-bold">How we work</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Booking', items: ['50% deposit to confirm your booking', 'Remaining 50% after tour — cash, PayPal, or Visa/card', 'WhatsApp confirmation within hours'] },
              { title: 'Cancellation', items: ['Cancel 24h+ in advance: full refund', 'Cancel 12h in advance: 50% charge'] },
              { title: 'Children', items: ['Under 4: free (1 per family)', 'Ages 5–10: 75% of adult price', 'Ages 11+: full adult price'] },
            ].map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.1}>
                <div className="bg-cream rounded-2xl p-7 h-full">
                  <h3 className="font-heading text-espresso font-bold text-lg mb-3">{card.title}</h3>
                  <ul className="text-sm text-muted space-y-2 leading-relaxed">
                    {card.items.map((item) => <li key={item}>• {item}</li>)}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-espresso py-20 text-center px-6">
        <h2 className="font-heading text-cream text-3xl md:text-4xl font-bold mb-5">Come ride with us</h2>
        <p className="text-white/95 mb-8 max-w-md mx-auto">Whether it&apos;s your first day in Saigon or your tenth — there&apos;s always more to discover.</p>
        <Link href="/tours" className="inline-flex items-center gap-2 bg-terracotta text-cream font-medium px-8 py-4 rounded-full hover:bg-terracotta-dark transition-colors">
          Explore Our Tours <ArrowRight size={16} />
        </Link>
      </section>
    </>
  )
}
