'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Props = {
  images: string[]
  title: string
}

export default function TourImageSlideshow({ images, title }: Props) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent(c => (c + 1) % images.length), [images.length])
  const prev = useCallback(() => setCurrent(c => (c - 1 + images.length) % images.length), [images.length])

  useEffect(() => {
    if (paused || images.length <= 1) return
    const id = setInterval(next, 4000)
    return () => clearInterval(id)
  }, [paused, next, images.length])

  return (
    <div
      className="relative h-96 lg:h-130 rounded-2xl overflow-hidden shadow-lg group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Crossfade images */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <Image
            src={images[current]}
            alt={`${title} — photo ${current + 1}`}
            fill
            priority={current === 0}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Arrows — show on hover */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Photo ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-white w-5' : 'bg-white/50 w-1.5'}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
