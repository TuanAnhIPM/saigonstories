import Link from 'next/link'
import Image from 'next/image'
import { Clock, ArrowRight, MapPin, Users } from 'lucide-react'
import { tours } from '@/lib/tours'

export const metadata = {
  title: "All Tours — Saigon's Stories",
  description: 'Browse food tours, history & culture tours, and sightseeing experiences in Ho Chi Minh City.',
}

export default function ToursPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-cream pt-36 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-terracotta text-sm font-medium tracking-widest uppercase mb-3">Explore</p>
          <h1 className="font-heading text-espresso text-5xl md:text-6xl font-bold mb-5">Our Tours</h1>
          <p className="text-espresso-light text-lg max-w-xl mx-auto">
            Every tour is an invitation to go deeper — into Saigon&apos;s food, its history, and the lives of the people who make it extraordinary.
          </p>
        </div>
      </section>

      {/* Tour grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <Link
              key={tour.slug}
              href={`/tours/${tour.slug}`}
              className="group block bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {(() => {
                const adultTier = tour.pricing.find(p => !p.group.toLowerCase().includes('children') && !p.group.toLowerCase().includes('1 guest')) ?? tour.pricing[0]
                const childTier = tour.pricing.find(p => p.group.toLowerCase().includes('children'))
                const groupTier = tour.pricing.find(p => p.group.includes('11+'))
                return (
                  <>
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={tour.heroImage}
                        alt={tour.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-espresso/30 to-transparent" />
                      {(tour.badge === 'Best Seller' || tour.badge === 'Premium') && (
                        <div className="absolute top-0 left-0">
                          <span className={`text-white text-xs font-black tracking-widest uppercase px-4 py-2.5 block leading-tight rounded-br-xl ${tour.badge === 'Premium' ? 'bg-amber-600' : 'bg-[#4a5a28]'}`}>
                            {tour.badge.split(' ').map((w, i) => <span key={i} className="block">{w}</span>)}
                          </span>
                        </div>
                      )}
                      <div className="absolute bottom-4 right-4 flex flex-col items-end gap-1">
                        <span className="bg-white/95 text-red-600 text-base font-black px-3 py-1.5 rounded-full shadow">
                          ${adultTier.price}
                        </span>
                        {childTier && (
                          <span className="bg-white/90 text-espresso text-xs font-semibold px-2.5 py-1 rounded-full shadow">
                            Child ${childTier.price}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="p-6 flex flex-col gap-3">
                      <h2 className="font-heading text-espresso text-xl font-bold">{tour.title}</h2>
                      <p className="text-muted text-sm leading-relaxed">{tour.tagline}</p>

                      <div className="flex flex-wrap gap-3 text-xs text-muted-light mt-1">
                        <span className="flex items-center gap-1.5"><Clock size={13} className="text-terracotta" />{tour.duration}</span>
                        <span className="flex items-center gap-1.5"><MapPin size={13} className="text-terracotta" />Ho Chi Minh City</span>
                        {tour.minGuests && (
                          <span className="flex items-center gap-1.5"><Users size={13} className="text-terracotta" />Min {tour.minGuests} guests</span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {tour.departureTimes.slice(0, 3).map((t) => (
                          <span key={t} className="text-xs bg-sand-light text-espresso-light px-2.5 py-1 rounded-full border border-sand">{t}</span>
                        ))}
                        {tour.departureTimes.length > 3 && (
                          <span className="text-xs text-muted-light px-1">+{tour.departureTimes.length - 3} more</span>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-3 pt-4 border-t border-sand">
                        <div className="flex flex-col gap-0.5">
                          {groupTier && (
                            <span className="text-xs text-muted-light">{groupTier.note}</span>
                          )}
                          {childTier && (
                            <span className="text-xs text-muted-light">Children 5–10 yrs: <span className="text-red-600 font-semibold">${childTier.price}</span>/person</span>
                          )}
                        </div>
                        <span className="flex items-center gap-1 text-terracotta text-sm font-semibold group-hover:gap-2 transition-all">
                          View <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </>
                )
              })()}

            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-espresso py-20 text-center px-6">
        <h2 className="font-heading text-cream text-3xl md:text-4xl font-bold mb-4">Not sure which tour to choose?</h2>
        <p className="text-white/85 mb-8 max-w-md mx-auto">Send us a message — we&apos;ll help you find the perfect experience based on your interests, group size and schedule.</p>
        <Link href="/contact" className="inline-block bg-terracotta text-cream font-medium px-8 py-4 rounded-full hover:bg-terracotta-dark transition-colors">Ask Us Anything</Link>
      </section>
    </>
  )
}
