'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const photos = [
  { src: '/images/food-tour/IMG_3452.JPG',         alt: 'Street food Saigon',              deskCls: 'col-start-1 row-start-2 row-span-2', from: { x: -60, y: 0,   scale: 0.9 } },
  { src: '/images/history-tour/IMG_2729.JPG',       alt: 'Guest exploring Saigon',          deskCls: 'col-start-2 row-start-1',            from: { x: 0,   y: -50, scale: 0.9 } },
  { src: '/images/food-tour/IMG_3449.JPG',          alt: 'Group tour on motorbikes',        deskCls: 'col-start-2 row-start-2 row-span-2', from: { x: 0,   y: 60,  scale: 0.88 } },
  { src: '/images/history-tour/IMG_3444.JPG',       alt: 'Tourists with conical hats',      deskCls: 'col-start-3 row-start-1 row-span-2', from: { x: 0,   y: 0,   scale: 0.82 } },
  { src: '/images/food-tour/IMG_3435.JPG',          alt: 'Local food spread',               deskCls: 'col-start-3 row-start-3',            from: { x: 0,   y: 50,  scale: 0.9 } },
  { src: '/images/history-tour/IMG_3454.JPG',       alt: 'Saigon history site',             deskCls: 'col-start-4 row-start-1',            from: { x: 60,  y: 0,   scale: 0.9 } },
  { src: '/images/history-tour/IMG_3503.JPG',       alt: 'Cycling through Saigon greenery', deskCls: 'col-start-4 row-start-2',            from: { x: 50,  y: 30,  scale: 0.9 } },
  { src: '/images/history-tour/IMG_3445.JPG',       alt: 'Saigon street scene',             deskCls: 'col-start-4 row-start-3',            from: { x: 60,  y: 0,   scale: 0.9 } },
]

function PhotoCard({ photo, i, className }: { photo: typeof photos[0]; i: number; className?: string }) {
  return (
    <motion.div
      className={`relative rounded-xl overflow-hidden group cursor-pointer ${className ?? ''}`}
      initial={{ opacity: 0, x: photo.from.x, y: photo.from.y, scale: photo.from.scale }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: i * 0.07 + 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
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
          className="object-cover object-top"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-espresso/40 flex items-end p-3"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-white text-xs font-medium leading-tight drop-shadow">{photo.alt}</p>
      </motion.div>
    </motion.div>
  )
}

export default function AboutUsTeaser() {
  return (
    <section className="bg-sand-light py-20 px-4 sm:px-6 overflow-hidden relative">
      {/* Wave decoration */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3Cpattern id='wave' x='0' y='0' width='120' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 20 Q30 0 60 20 Q90 40 120 20' fill='none' stroke='%23C17F4A' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23wave)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── MOBILE layout (< md) ── */}
      <div className="md:hidden max-w-lg mx-auto">
        {/* Circle CTA centered on top */}
        <motion.div
          className="flex justify-center mb-4"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200, damping: 18 }}
        >
          <Link
            href="/about"
            className="w-28 h-28 rounded-full bg-terracotta flex items-center justify-center shadow-lg
                       transition-all duration-300 hover:bg-terracotta-dark hover:scale-110"
          >
            <span className="font-heading font-black text-cream text-xs tracking-widest uppercase text-center leading-tight px-3">
              ABOUT<br />US
            </span>
          </Link>
        </motion.div>

        {/* 2-column photo grid */}
        <div className="grid grid-cols-2 gap-2">
          {/* Tall image on left (rows 1-2) */}
          <div className="row-span-2">
            <PhotoCard photo={photos[2]} i={0} className="h-full min-h-52" />
          </div>
          {/* Two stacked on right */}
          <PhotoCard photo={photos[1]} i={1} className="aspect-square" />
          <PhotoCard photo={photos[3]} i={2} className="aspect-square" />
          {/* Full row */}
          <PhotoCard photo={photos[0]} i={3} className="aspect-square" />
          <PhotoCard photo={photos[4]} i={4} className="aspect-square" />
          {/* Last row */}
          <PhotoCard photo={photos[5]} i={5} className="aspect-square" />
          <PhotoCard photo={photos[6]} i={6} className="aspect-square" />
        </div>
      </div>

      {/* ── DESKTOP layout (>= md) ── */}
      <div className="hidden md:block max-w-6xl mx-auto">
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: '160px 1fr 1.4fr 1fr',
            gridTemplateRows: '200px 220px 200px',
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
            <PhotoCard key={photo.src} photo={photo} i={i} className={photo.deskCls} />
          ))}
        </div>
      </div>
    </section>
  )
}
