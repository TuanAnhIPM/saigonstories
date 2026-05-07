import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Clock, Check, X, ArrowLeft, MapPin, Users } from 'lucide-react'
import { tours, getTourBySlug } from '@/lib/tours'
import TourStops from '@/components/TourStops'
import TourTimeSelector from '@/components/TourTimeSelector'
import TourImageSlideshow from '@/components/TourImageSlideshow'

export async function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata(props: PageProps<'/tours/[slug]'>) {
  const { slug } = await props.params
  const tour = getTourBySlug(slug)
  if (!tour) return {}
  return { title: `${tour.title} — Saigon's Stories`, description: tour.tagline }
}

export default async function TourDetailPage(props: PageProps<'/tours/[slug]'>) {
  const { slug } = await props.params
  const tour = getTourBySlug(slug)
  if (!tour) notFound()

  return (
    <>
      {/* Hero */}
      <section className="bg-cream pt-24">
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div className="flex flex-col gap-6">
            <Link href="/tours" className="inline-flex items-center gap-2 text-muted text-sm hover:text-terracotta transition-colors w-fit">
              <ArrowLeft size={14} /> All Tours
            </Link>
            {tour.badge === 'Best Seller' && (
              <div className="w-fit">
                <span className="bg-[#4a5a28] text-white text-xs font-black tracking-widest uppercase px-4 py-2 block leading-tight rounded-lg">
                  <span className="block">Best</span><span className="block">Seller</span>
                </span>
              </div>
            )}
            <h1 className="font-heading text-espresso text-4xl md:text-5xl font-bold leading-tight">{tour.title}</h1>
            <p className="text-espresso-light text-lg leading-relaxed">{tour.tagline}</p>
            {/* Quick info */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 bg-sand-light rounded-xl px-4 py-3">
                <MapPin size={16} className="text-terracotta shrink-0" />
                <div>
                  <p className="text-muted text-xs">Location</p>
                  <p className="text-espresso text-sm font-medium">Ho Chi Minh City</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-sand-light rounded-xl px-4 py-3">
                <Clock size={16} className="text-terracotta shrink-0" />
                <div>
                  <p className="text-muted text-xs">Duration</p>
                  <p className="text-espresso text-sm font-medium">{tour.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-sand-light rounded-xl px-4 py-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 text-terracotta shrink-0">
                  <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                </svg>
                <div>
                  <p className="text-muted text-xs">Departure</p>
                  <p className="text-espresso text-sm font-medium">Flexible</p>
                </div>
              </div>
            </div>
          </div>
          {/* Right: auto slideshow */}
          <TourImageSlideshow
            images={[tour.heroImage, ...tour.galleryImages]}
            title={tour.title}
          />
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main */}
        <div className="lg:col-span-2 flex flex-col gap-14">
          {/* Highlights */}
          <div>
            <h2 className="font-heading text-espresso text-2xl font-bold mb-6">Tour Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tour.highlights.map((h) => (
                <div key={h} className="flex items-start gap-3 bg-sand-light rounded-xl p-4">
                  <Check size={16} className="text-terracotta mt-0.5 shrink-0" />
                  <span className="text-sm text-espresso-light">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Video — food tour only */}
          {slug === 'food-tour-scooter' && (
            <div>
              <h2 className="font-heading text-espresso text-2xl font-bold mb-6">See it in action</h2>
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-video">
                <video
                  src="/videos/food-tour-highlight.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Stops — time slot selector or plain expandable list */}
          <div>
            <h2 className="font-heading text-espresso text-2xl font-bold mb-2">{tour.category === 'food' ? 'Tasting Menu' : 'The Itinerary'}</h2>
            {tour.itineraryIntro && (
              <p className="text-espresso-light leading-relaxed mb-4">{tour.itineraryIntro}</p>
            )}
            <p className="text-sm text-muted mb-6">
              {tour.timeSlots ? 'Choose your preferred time, then tap each stop for details' : 'Tap each stop to see ingredients & details'}
            </p>
            {tour.timeSlots ? (
              <TourTimeSelector timeSlots={tour.timeSlots} />
            ) : (
              <TourStops stops={tour.stops} />
            )}
          </div>

          {/* Inclusions / Exclusions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h2 className="font-heading text-espresso text-xl font-bold mb-4">Included</h2>
              <ul className="flex flex-col gap-2.5">
                {tour.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-espresso-light">
                    <Check size={15} className="text-sage mt-0.5 shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-espresso text-xl font-bold mb-4">Not Included</h2>
              <ul className="flex flex-col gap-2.5">
                {tour.exclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                    <X size={15} className="text-espresso-light/60 mt-0.5 shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {tour.note && (
            <div className="bg-cream-dark border-l-4 border-terracotta rounded-r-xl p-5 text-sm text-espresso-light leading-relaxed">
              <strong className="text-espresso">Good to know:</strong> {tour.note}
            </div>
          )}

          {/* Gallery */}
          <div>
            <h2 className="font-heading text-espresso text-2xl font-bold mb-6">From This Tour</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {tour.galleryImages.map((src, i) => (
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
                  <Image src={src} alt={`${tour.title} — photo ${i + 1}`} fill sizes="(max-width: 640px) 50vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 flex flex-col gap-6">
            {/* Pricing */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="font-heading text-espresso text-xl font-bold mb-5">Pricing</h3>
              <div className="flex flex-col gap-3 mb-5">
                {tour.pricing.map((tier) => (
                  <div key={tier.group} className="flex items-start justify-between py-2.5 border-b border-sand last:border-0 gap-2">
                    <div>
                      <span className="text-sm text-espresso-light block">{tier.group}</span>
                      {tier.note && <span className="text-xs text-terracotta">{tier.note}</span>}
                    </div>
                    <span className="font-semibold text-red-600 shrink-0">${tier.price} <span className="text-xs font-normal text-muted-light">/ person</span></span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="block bg-terracotta text-cream text-center font-medium px-6 py-3.5 rounded-full hover:bg-terracotta-dark transition-colors w-full">
                Book This Tour
              </Link>
              <p className="text-xs text-center text-muted mt-3">50% deposit to book · Balance after tour · Free cancellation 24h+</p>
            </div>

            {/* Ways to Pay */}
            <div className="bg-cream-dark rounded-2xl p-6">
              <h3 className="font-heading text-espresso text-base font-bold mb-3">Ways to Pay</h3>
              <ul className="text-sm text-muted space-y-2.5">
                <li className="flex items-start gap-2">
                  <span className="text-terracotta font-bold mt-0.5">·</span>
                  <span><strong className="text-espresso-light">Deposit:</strong> 50% upfront to confirm your booking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terracotta font-bold mt-0.5">·</span>
                  <span><strong className="text-espresso-light">After tour:</strong> Remaining 50% by cash, PayPal, or Visa/card</span>
                </li>
              </ul>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-sand">
                {['PayPal', 'Visa', 'Cash'].map((m) => (
                  <span key={m} className="text-xs font-semibold text-muted bg-sand px-3 py-1.5 rounded-full">{m}</span>
                ))}
              </div>
            </div>

            {/* Departure times */}
            <div className="bg-cream-dark rounded-2xl p-6">
              <h3 className="font-heading text-espresso text-base font-bold mb-3">Departure Times</h3>
              <div className="flex flex-wrap gap-2">
                {tour.departureTimes.map((t) => (
                  <span key={t} className="text-sm bg-cream text-espresso-light px-3 py-1.5 rounded-full border border-sand">{t}</span>
                ))}
              </div>
              <p className="text-xs text-muted mt-3">Flexible — contact us to customise your time.</p>
            </div>

            {/* WhatsApp */}
            <div className="bg-sage rounded-2xl p-6 text-center">
              <p className="text-cream font-heading font-bold mb-2">Questions?</p>
              <p className="text-white/85 text-sm mb-4">We answer fast on WhatsApp.</p>
              <a href="https://wa.me/84363252764" className="inline-block bg-cream text-sage font-medium px-5 py-2.5 rounded-full text-sm hover:bg-cream-dark transition-colors">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* More tours */}
      <section className="bg-cream-dark py-16 text-center px-6">
        <h2 className="font-heading text-espresso text-3xl font-bold mb-4">Explore more tours</h2>
        <p className="text-muted mb-8">Each tour tells a different side of Saigon&apos;s story.</p>
        <Link href="/tours" className="inline-flex items-center gap-2 bg-espresso text-cream font-medium px-7 py-3.5 rounded-full hover:bg-espresso-light transition-colors">
          <ArrowLeft size={16} /> Back to All Tours
        </Link>
      </section>
    </>
  )
}
