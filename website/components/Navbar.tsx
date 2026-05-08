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

          {/* Right: Contact Us */}
          <div className="ml-auto flex items-center gap-3">
            <a
              href="https://wa.me/84363252764"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-xs text-muted hover:text-terracotta transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-terracotta shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              +84 363 252 764
            </a>
            <Link
              href="/contact"
              className="bg-terracotta text-cream text-sm font-medium px-5 py-2.5 rounded-full hover:bg-terracotta-dark transition-colors whitespace-nowrap"
            >
              Contact Us
            </Link>
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
                  <div className="flex items-center justify-between py-2">
                    <Link
                      href="/tours"
                      onClick={close}
                      className="font-heading font-bold text-3xl text-espresso hover:text-terracotta transition-colors"
                    >
                      Tours
                    </Link>
                    <button
                      onClick={() => setToursOpen(v => !v)}
                      className="text-espresso hover:text-terracotta transition-colors p-1"
                      aria-label="Toggle tours menu"
                    >
                      <ChevronDown size={20} className={`transition-transform ${toursOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
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
