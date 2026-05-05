import Image from 'next/image'
import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'
import { tours } from '@/lib/tours'
import HeroSection from '@/components/HeroSection'
import StatsBar from '@/components/StatsBar'
import AnimatedSection from '@/components/AnimatedSection'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'

const featuredTours = [
  tours.find((t) => t.slug === 'food-tour-scooter')!,
  tours.find((t) => t.slug === 'walking-food-tour')!,
  tours.find((t) => t.slug === 'history-culture')!,
]

const galleryImages = [
  { src: '/images/food-tour/IMG_3452.JPG', alt: 'Couple enjoying Vietnamese noodle soup' },
  { src: '/images/history-tour/IMG_3444.JPG', alt: 'Group at historical Saigon landmark' },
  { src: '/images/food-tour/IMG_3435.JPG', alt: 'Street food spread at local eatery' },
  { src: '/images/history-tour/e4fb2704-b390-4437-9a6a-a5de50823241.jpg', alt: 'Scooter ride through Saigon at night' },
  { src: '/images/food-tour/IMG_3449.JPG', alt: 'Guests at iconic bánh mì stall' },
  { src: '/images/food-tour/f4da75c6-584c-4d7c-b63b-67c6da5d92f1.jpg', alt: 'Evening street food experience' },
]

const whyUs = [
  {
    icon: '🛵',
    title: 'Local guides who know every alley',
    body: 'Our guides grew up in Saigon. They know which stall has been there for 40 years and which story nobody else tells.',
  },
  {
    icon: '🍜',
    title: 'Real food, real places',
    body: 'No tourist restaurants. We eat where locals eat — hole-in-the-wall joints, market stalls and family recipes.',
  },
  {
    icon: '🕐',
    title: 'Flexible departure times',
    body: 'Morning, afternoon or evening — we tailor the schedule to your itinerary, not the other way around.',
  },
  {
    icon: '✅',
    title: 'Small groups, personal experience',
    body: 'We keep groups small so every guest gets attention, great food and real conversation with their guide.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <HeroSection />

      {/* ── Stats bar ── */}
      <StatsBar />

      {/* ── Featured Tours ── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <AnimatedSection className="text-center mb-14">
          <p className="text-terracotta text-sm font-medium tracking-widest uppercase mb-3">What We Offer</p>
          <h2 className="font-heading text-espresso text-4xl md:text-5xl font-bold">Our Tours</h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            Each tour is a story. Choose your chapter.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTours.map((tour, i) => (
            <AnimatedSection key={tour.slug} delay={i * 0.15}>
              <Link
                href={`/tours/${tour.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={tour.heroImage}
                    alt={tour.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-espresso/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-terracotta text-cream text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                      ★ Highlight Tour
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-espresso text-xl font-bold mb-2">{tour.title}</h3>
                  <p className="text-muted text-sm mb-4 leading-relaxed">{tour.tagline}</p>
                  <div className="flex items-center justify-between text-sm text-muted-light">
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {tour.duration}
                    </span>
                    <span className="text-terracotta font-semibold">
                      From ${tour.pricing[0].price}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-terracotta text-sm font-medium group-hover:gap-2 transition-all">
                    View tour <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12" delay={0.3}>
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 border border-espresso text-espresso font-medium px-7 py-3.5 rounded-full hover:bg-espresso hover:text-cream transition-all hover:scale-105"
          >
            View All Tours <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </section>

      {/* ── Why Us ── */}
      <section className="bg-sand-light py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <p className="text-terracotta text-sm font-medium tracking-widest uppercase mb-3">Why Saigon&apos;s Stories</p>
            <h2 className="font-heading text-espresso text-4xl md:text-5xl font-bold">
              More than a tour —<br />a local experience
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.12}>
                <div className="bg-cream rounded-2xl p-7 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300 h-full">
                  <span className="text-4xl">{item.icon}</span>
                  <h3 className="font-heading text-espresso text-lg font-bold">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Gallery ── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <AnimatedSection className="text-center mb-12">
          <p className="text-terracotta text-sm font-medium tracking-widest uppercase mb-3">In the Streets</p>
          <h2 className="font-heading text-espresso text-4xl md:text-5xl font-bold">Moments from our tours</h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryImages.map((img, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.08}
              className={`relative overflow-hidden rounded-xl ${i === 0 || i === 5 ? 'aspect-3/4' : 'aspect-square'}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <Testimonials />

      {/* ── Pricing preview ── */}
      <section className="bg-cream-dark py-24">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <p className="text-terracotta text-sm font-medium tracking-widest uppercase mb-3">Transparent Pricing</p>
            <h2 className="font-heading text-espresso text-4xl font-bold">Simple, honest prices</h2>
            <p className="text-muted mt-3">All prices in USD per person. Direct booking rates.</p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-cream rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-espresso text-cream">
                    <th className="text-left py-4 px-6 font-heading font-semibold">Tour</th>
                    <th className="py-4 px-4 font-heading font-semibold text-center">1–2 guests</th>
                    <th className="py-4 px-4 font-heading font-semibold text-center">3–4 guests</th>
                    <th className="py-4 px-4 font-heading font-semibold text-center hidden md:table-cell">Groups 5+</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Food by Scooter', p1: '$38', p2: '$32', p3: '−15%' },
                    { name: 'Evening Walking Tour', p1: '$38', p2: '$32', p3: '−15%' },
                    { name: 'History & Culture', p1: '$33', p2: '$28', p3: '−15%' },
                    { name: '7 Taste & Sightseeing', p1: '$38', p2: '$32', p3: '−15%' },
                  ].map((row, i) => (
                    <tr key={row.name} className={i % 2 === 0 ? 'bg-cream' : 'bg-sand-light'}>
                      <td className="py-4 px-6 font-medium text-espresso">{row.name}</td>
                      <td className="py-4 px-4 text-center text-espresso">{row.p1}</td>
                      <td className="py-4 px-4 text-center text-espresso">{row.p2}</td>
                      <td className="py-4 px-4 text-center text-terracotta font-medium hidden md:table-cell">{row.p3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          <div className="mt-6 text-center text-xs text-muted-light space-y-1">
            <p>Holiday surcharge of 25% applies on Jan 1, Apr 30, May 1, Sep 2 &amp; Dec 31.</p>
            <p>Lunar New Year: scooter tours not operated. Children under 4: free (1 per family).</p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 overflow-hidden">
        <Image
          src="/images/food-tour/IMG_3452.JPG"
          alt="Couple enjoying local Vietnamese food"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-espresso/70" />
        <AnimatedSection className="relative z-10 text-center px-6">
          <h2 className="font-heading text-cream text-4xl md:text-5xl font-bold mb-5">
            Ready to taste Saigon?
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-xl mx-auto">
            Get in touch via WhatsApp or our booking form — we&apos;ll sort the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-terracotta text-cream font-medium px-8 py-4 rounded-full hover:bg-terracotta-dark transition-all hover:scale-105 text-lg shadow-lg"
            >
              Book a Tour
            </Link>
            <Link
              href="/tours"
              className="border-2 border-white/70 text-white font-semibold px-8 py-4 rounded-full hover:bg-cream/10 transition-all hover:scale-105 text-lg"
            >
              Browse Tours
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* ── FAQ ── */}
      <FAQ />

      {/* ── Policies snippet ── */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: '💳', title: '50% Deposit', body: 'Pay 50% to secure your booking. Balance due after the tour departs.' },
            { icon: '🔄', title: 'Free Cancellation', body: 'Cancel up to 24 hours in advance for a full refund. No questions asked.' },
            { icon: '🏨', title: 'Hotel Pickup', body: 'Free pickup from any hotel in Districts 1, 3 & 4. Other areas by arrangement.' },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <div className="hover:scale-105 transition-transform duration-300">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-heading text-espresso font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted">{item.body}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  )
}
