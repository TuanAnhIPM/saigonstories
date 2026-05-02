'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

const tagline = ['ride', 'taste', 'explore']

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 600], [0, 120])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  const [activeTag, setActiveTag] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTag((prev) => (prev + 1) % tagline.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={ref} className="relative h-screen min-h-150 flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          src="/images/history-tour/IMG_3444.JPG"
          alt="Group of guests at a Saigon historical landmark"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-110"
        />
      </motion.div>

      {/* Multi-layer overlay for better text contrast */}
      <div className="absolute inset-0 bg-linear-to-b from-espresso/80 via-espresso/65 to-espresso/75" />

      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={{ opacity }}
      >
        {/* Animated tagline */}
        <div className="flex items-center justify-center gap-3 mb-8">
          {tagline.map((word, i) => (
            <motion.span
              key={word}
              className={`text-sm font-semibold tracking-[0.25em] uppercase transition-colors duration-500 ${
                i === activeTag ? 'text-terracotta' : 'text-cream/50'
              }`}
              animate={{ scale: i === activeTag ? 1.08 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {word}
              {i < tagline.length - 1 && <span className="text-cream/25 ml-3">·</span>}
            </motion.span>
          ))}
        </div>

        {/* Headline — heavier weight, tighter */}
        <motion.h1
          className="font-heading text-white text-5xl md:text-7xl font-black leading-[1.1] mb-6 drop-shadow-lg"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Saigon from the<br />
          <motion.span
            className="text-terracotta italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            inside out
          </motion.span>
        </motion.h1>

        {/* Subheading — white, full opacity, semibold */}
        <motion.p
          className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Authentic food, history and culture tours through Ho Chi Minh City&apos;s hidden streets —
          led by guides who call this city home.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <Link
            href="/tours"
            className="bg-terracotta text-white font-semibold px-8 py-4 rounded-full hover:bg-terracotta-dark transition-all hover:scale-105 text-lg shadow-xl"
          >
            Explore Our Tours
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white/70 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/15 transition-all hover:scale-105 text-lg backdrop-blur-sm"
          >
            Book Now
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className="w-px h-10 bg-white/40"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  )
}
