import Image from 'next/image'
import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'
import { tours } from '@/lib/tours'
import HeroSection from '@/components/HeroSection'
import StatsBar from '@/components/StatsBar'
import TrustBar from '@/components/TrustBar'
import AnimatedSection from '@/components/AnimatedSection'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import AboutUsTeaser from '@/components/AboutUsTeaser'

const featuredTours = [
  tours.find((t) => t.slug === 'food-tour-scooter')!,
  tours.find((t) => t.slug === 'walking-food-tour')!,
  tours.find((t) => t.slug === 'history-culture')!,
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

      {/* ── Trust bar ── */}
      <TrustBar />

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {featuredTours.map((tour, i) => (
            <AnimatedSection key={tour.slug} delay={i * 0.15} className="h-full">
              <Link
                href={`/tours/${tour.slug}`}
                className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-56 shrink-0 overflow-hidden">
                  <Image
                    src={tour.heroImage}
                    alt={tour.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={`object-cover group-hover:scale-105 transition-transform duration-500 ${tour.slug === 'food-tour-scooter' ? 'object-[25%]' : 'object-center'}`}
                  />
                  {tour.badge === 'Best Seller' && (
                    <div className="absolute top-0 left-0">
                      <span className="bg-[#4a5a28] text-white text-xs font-black tracking-widest uppercase px-4 py-2.5 block leading-tight rounded-br-xl">
                        <span className="block">Best</span>
                        <span className="block">Seller</span>
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading text-espresso text-xl font-bold mb-2">{tour.title}</h3>
                  <p className="text-muted text-sm mb-4 leading-relaxed flex-1">{tour.tagline}</p>
                  <div className="flex items-center justify-between text-sm text-muted-light">
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {tour.duration}
                    </span>
                    <span className="text-red-600 text-base font-black">
                      ${tour.pricing[0].price}
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

      {/* ── About Us teaser ── */}
      <AboutUsTeaser />

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
                    <th className="py-4 px-4 font-heading font-semibold text-center">1–10 guests</th>
                    <th className="py-4 px-4 font-heading font-semibold text-center">11+ guests</th>
                    <th className="py-4 px-4 font-heading font-semibold text-center hidden sm:table-cell">Children<br/><span className="text-xs font-normal opacity-70">5–10 yrs · 75%</span></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Food Tour by Scooter',         p1: '$38', p2: '$32', disc: '−15%', chd: '$28' },
                    { name: 'Walking Food Tour *',           p1: '$38', p2: '$27', disc: '−30%', chd: '$28' },
                    { name: 'History & Culture by Scooter', p1: '$33', p2: '$28', disc: '−15%', chd: '$25' },
                    { name: 'Bites & Sights by Scooter',    p1: '$34', p2: '$29', disc: '−15%', chd: '$25' },
                    { name: 'Seafood & Rooftop Bar',         p1: '$45', p2: '$38', disc: '−15%', chd: '$34' },
                  ].map((row, i) => (
                    <tr key={row.name} className={i % 2 === 0 ? 'bg-cream' : 'bg-sand-light'}>
                      <td className="py-4 px-6 font-medium text-espresso">{row.name}</td>
                      <td className="py-4 px-4 text-center text-red-600 font-semibold">{row.p1}</td>
                      <td className="py-4 px-4 text-center text-red-600 font-semibold">{row.p2} <span className="text-muted font-normal text-xs">({row.disc})</span></td>
                      <td className="py-4 px-4 text-center text-red-600 font-semibold hidden sm:table-cell">{row.chd}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-light mt-3 px-1">* Walking Food Tour requires min. 2 guests. Solo supplement +$8 (~200,000 VND) applies for 1 guest. Children under 5: free (1 per family).</p>
          </AnimatedSection>

          <div className="mt-6 text-center text-xs text-muted-light space-y-1">
            <p>Holiday surcharge of 25% applies on Jan 1, Apr 30, May 1, Sep 2 &amp; Dec 31.</p>
            <p>Lunar New Year: scooter tours not operated. Children under 4: free (1 per family).</p>
          </div>

          {/* Payment methods */}
          <AnimatedSection delay={0.3} className="mt-10">
            <div className="flex flex-col items-center gap-4">
              <p className="text-xs font-semibold text-muted uppercase tracking-widest">We accept</p>
              <div className="flex items-center gap-3 flex-wrap justify-center">

                {/* Cash */}
                <div className="flex items-center gap-2 bg-white border border-sand rounded-xl px-4 py-2.5 shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-espresso-light">
                    <rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 12h.01M18 12h.01"/>
                  </svg>
                  <span className="text-xs font-bold text-espresso tracking-wide">CASH</span>
                </div>

                {/* PayPal */}
                <div className="bg-white border border-sand rounded-xl px-4 py-2.5 shadow-sm flex items-center h-10">
                  <span className="font-bold text-base" style={{ color: '#003087' }}>Pay</span>
                  <span className="font-bold text-base" style={{ color: '#009cde' }}>Pal</span>
                </div>

                {/* Visa */}
                <div className="bg-white border border-sand rounded-xl px-4 py-2.5 shadow-sm flex items-center h-10">
                  <svg viewBox="0 0 750 471" className="h-5" aria-label="Visa">
                    <rect width="750" height="471" rx="40" fill="white"/>
                    <path d="M278 334L311 137h52L330 334h-52zM524 141c-10-4-26-8-46-8-51 0-87 27-87 66 0 29 26 44 46 54 20 10 27 16 27 25 0 13-16 20-31 20-21 0-32-3-49-11l-7-3-7 44c12 5 34 10 57 10 54 0 88-27 89-68 0-23-14-40-44-54-18-9-29-15-29-24 0-8 9-17 29-17 17 0 29 4 38 8l5 2 7-44zM611 137h-40c-12 0-21 4-27 17L462 334h54l11-30h66l6 30h47L611 137zm-63 126l20-55 11 55h-31zM222 137l-50 134-5-27-18-92c-3-13-12-17-23-17h-82l-1 5c20 5 38 12 53 20l45 172h55l82-195h-56z" fill="#1434CB"/>
                  </svg>
                </div>

                {/* Mastercard */}
                <div className="bg-white border border-sand rounded-xl px-4 py-2.5 shadow-sm flex items-center gap-1 h-10">
                  <svg viewBox="0 0 38 24" className="h-5" aria-label="Mastercard">
                    <circle cx="15" cy="12" r="10" fill="#EB001B"/>
                    <circle cx="23" cy="12" r="10" fill="#F79E1B"/>
                    <path d="M19 5.3a10 10 0 0 1 0 13.4A10 10 0 0 1 19 5.3z" fill="#FF5F00"/>
                  </svg>
                  <span className="text-xs font-bold text-espresso tracking-wide">Mastercard</span>
                </div>

              </div>
              <p className="text-xs text-muted-light">50% deposit to confirm · Remaining 50% after tour</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

{/* ── FAQ ── */}
      <FAQ />

      {/* ── Policies snippet ── */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: '💳', title: '50% Deposit', body: 'Pay 50% to confirm your booking. The remaining 50% is paid after the tour — by cash, PayPal, or card.' },
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
