'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const photos = [
  // Col 1: rows 2-3 tall — slide from left
  { src: '/images/food-tour/IMG_3452.JPG',         alt: 'Street food Saigon',              cls: 'col-start-1 row-start-2 row-span-2', from: { x: -60, y: 0,   scale: 0.9 } },
  // Col 2: row 1 — slide from top
  { src: '/images/history-tour/IMG_2729.JPG',       alt: 'Guest exploring Saigon',          cls: 'col-start-2 row-start-1',            from: { x: 0,   y: -50, scale: 0.9 } },
  // Col 2: rows 2-3 tall — slide from bottom
  { src: '/images/food-tour/IMG_3449.JPG',          alt: 'Group tour on motorbikes',        cls: 'col-start-2 row-start-2 row-span-2', from: { x: 0,   y: 60,  scale: 0.88 } },
  // Col 3: rows 1-2 tall — zoom in from center
  { src: '/images/history-tour/IMG_3444.JPG',       alt: 'Tourists with conical hats',      cls: 'col-start-3 row-start-1 row-span-2', from: { x: 0,   y: 0,   scale: 0.82 } },
  // Col 3: row 3 — slide from bottom
  { src: '/images/food-tour/IMG_3435.JPG',          alt: 'Local food spread',               cls: 'col-start-3 row-start-3',            from: { x: 0,   y: 50,  scale: 0.9 } },
  // Col 4: row 1 — slide from right
  { src: '/images/history-tour/IMG_3454.JPG',       alt: 'Saigon history site',             cls: 'col-start-4 row-start-1',            from: { x: 60,  y: 0,   scale: 0.9 } },
  // Col 4: row 2 — slide from right + down
  { src: '/images/history-tour/IMG_3503.JPG',       alt: 'Cycling through Saigon greenery', cls: 'col-start-4 row-start-2',            from: { x: 50,  y: 30,  scale: 0.9 } },
  // Col 4: row 3 — slide from right
  { src: '/images/history-tour/IMG_3445.JPG',       alt: 'Saigon street scene',             cls: 'col-start-4 row-start-3',            from: { x: 60,  y: 0,   scale: 0.9 } },
]

export default function AboutUsTeaser() {
  return (
    <section className="bg-sand-light py-20 px-6 overflow-hidden relative">
      {/* Wave decoration */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3Cpattern id='wave' x='0' y='0' width='120' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 20 Q30 0 60 20 Q90 40 120 20' fill='none' stroke='%23C17F4A' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23wave)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: '160px 1fr 1.4fr 1fr',
            gridTemplateRows: '180px 200px 180px',
          }}
        >
          {/* Circle CTA */}
          <motion.div
            className="col-start-1 row-start-1 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.1 }}
          >
            <Link
              href="/about"
              className="w-36 h-36 rounded-full bg-terracotta flex items-center justify-center shadow-lg
                         transition-all duration-300 hover:bg-terracotta-dark hover:scale-110 hover:shadow-xl hover:shadow-terracotta/30"
            >
              <span className="font-heading font-black text-cream text-sm tracking-widest uppercase text-center leading-tight px-3">
                ABOUT<br />US
              </span>
            </Link>
          </motion.div>

          {/* Photo cells */}
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              className={`${photo.cls} relative rounded-xl overflow-hidden group cursor-pointer`}
              initial={{ opacity: 0, x: photo.from.x, y: photo.from.y, scale: photo.from.scale }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.7,
                delay: i * 0.07 + 0.05,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
            >
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center"
                />
              </motion.div>

              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-espresso/40 flex items-end p-3"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-white text-xs font-medium leading-tight drop-shadow">{photo.alt}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
