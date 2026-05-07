'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    src: '/images/hero-3.JPG',
    alt: 'Motorbike tour through Saigon streets',
    objectPos: 'object-top',
    eyebrow: 'Ho Chi Minh City, Vietnam',
    line1: 'See Saigon',
    line2: 'Differently',
    sub: 'Skip the tourist trail. We show you the city through its food, its history, and the people who call it home.',
  },
  {
    src: '/images/hero-1.JPG',
    alt: 'Street food tour in Saigon',
    objectPos: 'object-center',
    eyebrow: 'Authentic Local Flavors',
    line1: 'Taste the',
    line2: 'Streets',
    sub: 'Slurp pho in a tiny alley, bite into bánh mì — discover the real Saigon on a plate.',
  },
  {
    src: '/images/hero-2.JPG',
    alt: 'Cultural history tour Saigon',
    objectPos: 'object-center',
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

// Split "Saigon's Stories" into letters for stagger animation
const brandLetters = "Saigon's Stories".split('')

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [showIntro, setShowIntro] = useState(true)

  const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent(c => (c - 1 + slides.length) % slides.length), [])

  // Dismiss intro after 3.2s
  useEffect(() => {
    const id = setTimeout(() => setShowIntro(false), 3200)
    return () => clearTimeout(id)
  }, [])

  useEffect(() => {
    if (paused || showIntro) return
    const id = setInterval(next, 5500)
    return () => clearInterval(id)
  }, [paused, showIntro, next])

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
            className={`object-cover ${slide.objectPos}`}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/60 to-transparent" />

      {/* Slideshow text */}
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

      {/* ── Intro overlay ── */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-espresso"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.9, ease: 'easeInOut' } }}
          >
            {/* "Welcome to" */}
            <motion.p
              className="text-white/60 text-sm sm:text-base font-semibold tracking-[0.3em] uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Welcome to
            </motion.p>

            {/* "Saigon's Stories" — letter by letter */}
            <div
              className="font-heading font-black text-cream flex flex-wrap justify-center"
              style={{ fontSize: 'clamp(2.6rem, 7vw, 6rem)', lineHeight: 1.1 }}
            >
              {brandLetters.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.7 + i * 0.045,
                    duration: 0.4,
                    ease: 'easeOut',
                  }}
                  style={{ display: char === ' ' ? 'inline-block' : undefined, width: char === ' ' ? '0.35em' : undefined }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Thin divider line */}
            <motion.div
              className="mt-8 h-px bg-white/25"
              initial={{ width: 0 }}
              animate={{ width: '6rem' }}
              transition={{ delay: 1.6, duration: 0.6 }}
            />

            {/* Tagline */}
            <motion.p
              className="mt-5 text-white/50 text-xs tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              Ride · Taste · Explore
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
