'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/',       label: 'Home' },
  { href: '/tours',  label: 'All Tours' },
  { href: '/about',  label: 'About Us' },
  { href: '/contact',label: 'Contact' },
]

const tourDropdown = [
  { href: '/tours/food-tour-scooter', label: 'Food Tour by Scooter' },
  { href: '/tours/walking-food-tour', label: 'Evening Walking Food Tour' },
  { href: '/tours/history-culture',   label: 'History & Culture by Scooter' },
  { href: '/tours/taste-sightseeing', label: 'Bites & Sights by Scooter' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [toursOpen, setToursOpen] = useState(false)

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => { setOpen(false); setToursOpen(false) }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-sand/60">
        <nav className="relative h-18 flex items-center px-6">

          {/* Left: hamburger + MENU */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex items-center gap-2.5 text-espresso hover:text-terracotta transition-colors group"
          >
            {/* Hamburger lines */}
            <span className="flex flex-col gap-1.5">
              <span className="block w-6 h-0.5 bg-current transition-all" />
              <span className="block w-4 h-0.5 bg-current group-hover:w-6 transition-all" />
            </span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase hidden sm:block">Menu</span>
          </button>

          {/* Divider */}
          <span className="hidden sm:block w-px h-8 bg-sand mx-6" />

          {/* Center: Logo (absolute so it's truly centered) */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2.5"
          >
            <div className="relative w-28 h-28">
              <Image
                src="/images/logo/LOGO CTY ĐÃ TÁCH NỀN.png"
                alt="Saigon's Stories"
                fill
                sizes="112px"
                className="object-contain"
              />
            </div>
            <span className="font-heading font-bold text-base leading-tight text-espresso hidden sm:block">
              Saigon&apos;s Stories
            </span>
          </Link>

          {/* Right: Book on WhatsApp */}
          <div className="ml-auto">
            <a
              href="https://wa.me/84363252764"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-terracotta text-cream text-sm font-medium px-5 py-2.5 rounded-full hover:bg-terracotta-dark transition-colors whitespace-nowrap"
            >
              Book on WhatsApp
            </a>
          </div>

        </nav>
      </header>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-60 bg-espresso/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={close}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 left-0 bottom-0 z-70 w-80 bg-cream flex flex-col"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 h-18 border-b border-sand/60">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted">Menu</span>
                <button onClick={close} aria-label="Close menu" className="text-espresso hover:text-terracotta transition-colors">
                  <X size={22} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-1">
                <Link
                  href="/"
                  onClick={close}
                  className="font-heading font-bold text-3xl text-espresso hover:text-terracotta transition-colors py-2"
                >
                  Home
                </Link>

                {/* Tours expandable */}
                <div>
                  <button
                    className="flex items-center justify-between w-full font-heading font-bold text-3xl text-espresso hover:text-terracotta transition-colors py-2"
                    onClick={() => setToursOpen(v => !v)}
                  >
                    Tours
                    <ChevronDown size={20} className={`transition-transform ${toursOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {toursOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-4 flex flex-col gap-1 border-l-2 border-terracotta/30 ml-1 mb-2"
                      >
                        {tourDropdown.map(t => (
                          <Link
                            key={t.href}
                            href={t.href}
                            onClick={close}
                            className="text-sm text-muted hover:text-terracotta transition-colors py-1.5"
                          >
                            {t.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/about"
                  onClick={close}
                  className="font-heading font-bold text-3xl text-espresso hover:text-terracotta transition-colors py-2"
                >
                  About
                </Link>

                <Link
                  href="/blog"
                  onClick={close}
                  className="font-heading font-bold text-3xl text-espresso hover:text-terracotta transition-colors py-2"
                >
                  Blog
                </Link>
              </nav>

              {/* Drawer footer */}
              <div className="px-6 py-6 border-t border-sand/60">
                <a
                  href="https://wa.me/84363252764"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="block bg-terracotta text-cream font-medium text-center px-5 py-3 rounded-full hover:bg-terracotta-dark transition-colors"
                >
                  Book on WhatsApp
                </a>
                <p className="text-xs text-muted-light text-center mt-4">Ho Chi Minh City, Vietnam</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
