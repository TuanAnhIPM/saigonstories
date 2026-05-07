'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    src: '/images/food-tour/IMG_3449.JPG',
    alt: 'Motorbike tour through Saigon streets',
    eyebrow: 'Ho Chi Minh City, Vietnam',
    line1: 'Start a New',
    line2: 'Adventure',
    sub: "Đi thôi (Let's go)! Put on the helmet, get on the motorbike and go with the flow!",
  },
  {
    src: '/images/food-tour/IMG_3452.JPG',
    alt: 'Street food tour in Saigon',
    eyebrow: 'Authentic Local Flavors',
    line1: 'Taste the',
    line2: 'Streets',
    sub: 'Slurp pho in a tiny alley, bite into bánh mì — discover the real Saigon on a plate.',
  },
  {
    src: '/images/history-tour/IMG_3444.JPG',
    alt: 'Cultural history tour Saigon',
    eyebrow: "Saigon's Hidden Stories",
    line1: 'Explore Our',
    line2: 'Stories',
    sub: 'Uncover war history, colonial architecture and the soul of a city that never stops moving.',
  },
]

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { delay, duration: 0.6 } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.25 } },
})

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent(c => (c - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 5500)
    return () => clearInterval(id)
  }, [paused, next])

  const slide = slides[current]

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background images with crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${current}`}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={current === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/60 to-transparent" />

      {/* Text content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 sm:px-16 max-w-3xl">
        <AnimatePresence mode="wait">
          <div key={`text-${current}`}>
            <motion.p
              {...fadeUp(0)}
              className="text-white! text-sm font-semibold tracking-widest uppercase mb-4"
            >
              {slide.eyebrow}
            </motion.p>

            <motion.h1
              {...fadeUp(0.12)}
              className="font-heading font-black text-white! leading-none mb-5"
              style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
            >
              {slide.line1}
              <br />
              <span className="text-white! italic">{slide.line2}</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.24)}
              className="text-white! text-base sm:text-lg leading-relaxed max-w-md mb-7"
            >
              {slide.sub}
            </motion.p>

            <motion.div {...fadeUp(0.36)}>
              <Link
                href="/tours"
                className="inline-block bg-white text-espresso font-bold px-8 py-3 uppercase tracking-widest text-sm hover:bg-terracotta hover:text-white transition-all duration-300"
              >
                View Tours
              </Link>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>

      {/* Arrow navigation */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition-colors p-2"
      >
        <ChevronLeft size={36} strokeWidth={1.5} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition-colors p-2"
      >
        <ChevronRight size={36} strokeWidth={1.5} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-white w-6' : 'bg-white/45 w-2'}`}
          />
        ))}
      </div>

      {/* Ride · Taste · Explore tagline */}
      <motion.div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 text-center whitespace-nowrap"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <p
          className="text-white/90"
          style={{ fontFamily: 'var(--font-script)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
        >
          Ride - Taste - Explore
        </p>
      </motion.div>
    </section>
  )
}
