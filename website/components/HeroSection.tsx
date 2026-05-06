'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const collage = [
  { src: '/images/food-tour/IMG_3449.JPG', alt: 'Scooter ride through Saigon market' },
  { src: '/images/history-tour/IMG_3444.JPG', alt: 'Happy guests on a Saigon tour' },
  { src: '/images/food-tour/IMG_3452.JPG', alt: 'Couple enjoying Vietnamese noodle soup' },
]

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.scrollY < 80) {
        const bottom = sectionRef.current?.offsetHeight ?? window.innerHeight
        window.scrollTo({ top: bottom - 80, behavior: 'smooth' })
      }
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section ref={sectionRef} className="min-h-screen bg-cream flex items-center relative">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 pt-28 pb-16">

        {/* Left: Text */}
        <div className="flex flex-col justify-center gap-8">
          <div>
            <motion.p
              className="text-terracotta text-sm font-semibold tracking-widest uppercase mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Ho Chi Minh City, Vietnam
            </motion.p>

            <motion.h1
              className="font-heading text-espresso font-black leading-none mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ fontSize: 'clamp(3rem, 6.5vw, 5.5rem)' }}
            >
              Welcome<br />
              to{' '}
              <span className="text-terracotta italic">Saigon</span>
            </motion.h1>

            <motion.p
              className="text-espresso-light text-lg leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              Authentic food, history and culture tours through Ho Chi Minh City&apos;s
              hidden streets — led by guides who&apos;ve called this city home for generations.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link
              href="/tours"
              className="bg-terracotta text-white font-semibold px-8 py-4 rounded-full hover:bg-terracotta-dark transition-all hover:scale-105 text-base shadow-md text-center"
            >
              Explore Our Tours
            </Link>
            <a
              href="https://wa.me/84363252764"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-espresso/25 text-espresso font-semibold px-8 py-4 rounded-full hover:border-espresso/60 transition-all hover:scale-105 text-base text-center"
            >
              Book on WhatsApp
            </a>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <span>⭐ 5.0 on TripAdvisor</span>
            <span className="text-sand hidden sm:block">·</span>
            <span>🛵 500+ happy guests</span>
            <span className="text-sand hidden sm:block">·</span>
            <span>📍 Ho Chi Minh City</span>
          </motion.div>
        </div>

        {/* Right: Photo collage — desktop */}
        <motion.div
          className="hidden lg:grid gap-3 h-145"
          style={{ gridTemplateColumns: '1.15fr 1fr', gridTemplateRows: '1fr 1fr' }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Large photo spanning both rows */}
          <div className="relative rounded-2xl overflow-hidden row-span-2 shadow-lg">
            <Image
              src={collage[0].src}
              alt={collage[0].alt}
              fill
              priority
              sizes="25vw"
              className="object-cover"
            />
          </div>
          {/* Top-right photo */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={collage[1].src}
              alt={collage[1].alt}
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          {/* Bottom-right photo */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={collage[2].src}
              alt={collage[2].alt}
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Mobile: single feature image */}
        <motion.div
          className="lg:hidden relative h-72 rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Image
            src={collage[0].src}
            alt={collage[0].alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

      </div>

      {/* Bouncing scroll indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-espresso/40 hover:text-terracotta transition-colors"
        onClick={() => {
          const bottom = sectionRef.current?.offsetHeight ?? window.innerHeight
          window.scrollTo({ top: bottom - 80, behavior: 'smooth' })
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={28} strokeWidth={1.5} />
        </motion.div>
      </motion.button>

    </section>
  )
}
