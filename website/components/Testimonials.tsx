'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useAnimationFrame } from 'framer-motion'

const reviews = [
  {
    name: 'Warren Lovell',
    source: 'Google',
    rating: 5,
    text: 'We had a great afternoon with Jennie and co. We went to places we would not have discovered on our own, ate lots of tasty food and really enjoyed exploring the city on the back of a scooter.',
  },
  {
    name: 'Jessie Becrite',
    source: 'Google',
    rating: 5,
    text: 'We had a wonderful time. The team (Jennie, Mango, Somi, Ryan, and Vergil) is fantastic, warm, and very welcoming; we immediately felt like family. We also had the pleasure of discovering authentic and delicious local cuisine, prepared with care. A truly wonderful experience that we will cherish.',
  },
  {
    name: 'Nicolas Deelen',
    source: 'Google',
    rating: 5,
    text: 'What a great tour. Somi and Nguyen guided us through Ho Chi Minh, providing all the local food with a great explanation. Not only were they friendly and funny, their English was way better than mine. Also a great experience as a passenger on a scooter — felt very safe as well. Thank you guys!',
  },
  {
    name: 'Anna Lena Töpken',
    source: 'Google',
    badge: 'Local Guide',
    rating: 5,
    text: 'Our food tour in Vietnam with Somi and Hollorance was amazing! They are incredibly friendly and perfect guides who showed us authentic local spots we would have never found on our own. The tour felt very personal, like spending an evening with friends, and everything was perfectly organised. Highly recommended — definitely one of the best experiences of our trip!',
  },
  {
    name: 'Leah Dionne',
    source: 'Google',
    badge: 'Local Guide',
    rating: 5,
    text: 'My husband and I did a private food tour with Jennie on our first night in HCMC. Jennie was incredibly outgoing and very knowledgeable. I highly recommend booking a food tour with Jennie to get a truly local experience.',
  },
  {
    name: 'Remainhere',
    source: 'TripAdvisor',
    rating: 5,
    text: 'What a wonderful trip with our hosts Jennie and Somi. We saw a side of Saigon that we would not have necessarily visited on our own. In-depth knowledge was shared with us. Massive tip — don\'t have breakfast at your hotel before the trip, as you will eat loads of different food along the way. Highly recommended.',
  },
  {
    name: 'Beth Cooper',
    source: 'Google',
    rating: 5,
    text: 'Had a great evening tasting all the best local food and seeing places we wouldn\'t have seen otherwise. Jennie, Porsche and Somi were amazing guides and safe drivers! Would recommend this to anyone coming to Ho Chi Minh.',
  },
  {
    name: 'JC',
    source: 'Google',
    badge: 'Local Guide',
    rating: 5,
    text: 'Somi was such a wonderful tour guide! We learned so much about Vietnam — the history, the meaning and origin of foods. Would have never gone to these places without the help of Somi! Would recommend.',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gold">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function SourceBadge({ source }: { source: string }) {
  if (source === 'TripAdvisor') {
    return (
      <span className="text-xs font-medium text-sage bg-sage/10 px-2 py-0.5 rounded-full">
        TripAdvisor
      </span>
    )
  }
  return (
    <span className="text-xs font-medium text-muted">Google</span>
  )
}

function ReviewCard({ review }: { review: typeof reviews[number] }) {
  return (
    <div className="shrink-0 w-80 bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4 mx-3">
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col gap-1">
          <span className="font-heading font-bold text-espresso text-base">{review.name}</span>
          {review.badge && (
            <span className="text-xs text-terracotta font-medium">{review.badge}</span>
          )}
        </div>
        <SourceBadge source={review.source} />
      </div>
      <StarRating count={review.rating} />
      <p className="text-sm text-muted leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
    </div>
  )
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null)
  const xRef = useRef(0)
  const pausedRef = useRef(false)
  const SPEED = 0.5

  const doubled = [...reviews, ...reviews]

  useAnimationFrame(() => {
    const track = trackRef.current
    if (!track || pausedRef.current) return
    const totalWidth = track.scrollWidth / 2
    xRef.current = (xRef.current + SPEED) % totalWidth
    track.style.transform = `translateX(-${xRef.current}px)`
  })

  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <p className="text-terracotta text-sm font-medium tracking-widest uppercase mb-3">Real Reviews</p>
        <h2 className="font-heading text-espresso text-4xl font-bold">What our guests say</h2>
        <p className="text-muted mt-3 max-w-xl mx-auto">
          Over 500 happy travellers — and counting. Here&apos;s what a few of them had to say.
        </p>
      </div>

      <div
        className="relative"
        onMouseEnter={() => { pausedRef.current = true }}
        onMouseLeave={() => { pausedRef.current = false }}
        onTouchStart={() => { pausedRef.current = true }}
        onTouchEnd={() => { pausedRef.current = false }}
      >
        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{ width: 'max-content' }}
        >
          {doubled.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-cream to-transparent" />
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://maps.app.goo.gl/tzWXpra89SWFJPgW8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-terracotta hover:text-terracotta-dark font-medium transition-colors"
        >
          Read all reviews on Google Maps →
        </a>
      </div>
    </section>
  )
}
