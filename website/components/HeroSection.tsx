'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

const tagline = ['ride', 'taste', 'explore']

const heroImages = [
  { src: '/images/history-tour/IMG_3444.JPG', alt: 'Group of guests at a Saigon historical landmark' },
  { src: '/images/food-tour/IMG_3452.JPG', alt: 'Couple enjoying Vietnamese noodle soup' },
  { src: '/images/food-tour/IMG_3449.JPG', alt: 'Guests at iconic bánh mì stall' },
  { src: '/images/history-tour/e4fb2704-b390-4437-9a6a-a5de50823241.jpg', alt: 'Scooter ride through Saigon at night' },
]

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 600], [0, 120])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  const [activeTag, setActiveTag] = useState(0)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTag((prev) => (prev + 1) % tagline.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={ref} className="relative h-screen min-h-150 flex items-center justify-center overflow-hidden">
      {/* Image carousel */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <AnimatePresence mode="sync">
          <motion.div
            key={activeImage}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
          >
            <Image
              src={heroImages[activeImage].src}
              alt={heroImages[activeImage].alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center scale-110"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Uniform base darkens the whole image enough for text contrast */}
      <div className="absolute inset-0 bg-espresso/45" />
      {/* Extra gradient at bottom for depth */}
      <div className="absolute inset-0 bg-linear-to-t from-espresso/70 via-transparent to-transparent" />

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
                i === activeTag ? 'text-terracotta' : 'text-cream/80'
              }`}
              animate={{ scale: i === activeTag ? 1.08 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {word}
              {i < tagline.length - 1 && <span className="text-cream/50 ml-3">·</span>}
            </motion.span>
          ))}
        </div>

        {/* Headline */}
        <motion.h1
          className="font-heading text-cream text-5xl md:text-7xl font-black leading-[1.1] mb-6 drop-shadow-lg"
          style={{ textShadow: '0 2px 24px rgba(0,0,0,0.8), 0 4px 48px rgba(0,0,0,0.6)' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Saigon from the<br />
          <motion.span
            className="text-cream italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            inside out
          </motion.span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ textShadow: '0 2px 16px rgba(0,0,0,0.9), 0 4px 32px rgba(0,0,0,0.7)' }}
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
            className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all hover:scale-105 text-lg backdrop-blur-sm"
          >
            Book Now
          </Link>
        </motion.div>
      </motion.div>

      {/* Carousel dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveImage(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-400 ${
              i === activeImage ? 'bg-white w-6' : 'bg-white/50 w-2'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className="w-px h-10 bg-white/70"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  )
}
