'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'

const tourDropdown = [
  { href: '/tours/food-tour-scooter', label: '10 Food by Scooter' },
  { href: '/tours/walking-food-tour', label: 'Evening Walking Food Tour' },
  { href: '/tours/history-culture', label: 'History & Culture' },
  { href: '/tours/taste-sightseeing', label: '7 Taste & Sightseeing' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [toursOpen, setToursOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setToursOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const linkClass = 'text-sm font-medium tracking-wide transition-colors hover:text-terracotta text-espresso-light'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream shadow-sm transition-all duration-300">
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="relative w-12 h-12">
            <Image
              src="/images/logo/LOGO CTY ĐÃ TÁCH NỀN.png"
              alt="Saigon's Stories"
              fill
              sizes="48px"
              className="object-contain"
            />
          </div>
          <span
            className="font-heading font-bold text-lg leading-tight text-espresso"
          >
            Saigon&apos;s Stories
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className={linkClass}>Home</Link>

          {/* Tours dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-1 text-sm font-medium tracking-wide transition-colors hover:text-terracotta text-espresso-light"
              onClick={() => setToursOpen((v) => !v)}
            >
              Tours
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${toursOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {toursOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-cream rounded-2xl shadow-xl border border-sand py-2 z-50">
                <Link
                  href="/tours"
                  className="block px-5 py-2.5 text-xs font-semibold text-terracotta uppercase tracking-widest border-b border-sand mb-1"
                  onClick={() => setToursOpen(false)}
                >
                  All Tours
                </Link>
                {tourDropdown.map((t) => (
                  <Link
                    key={t.href}
                    href={t.href}
                    className="block px-5 py-2.5 text-sm text-espresso-light hover:text-terracotta hover:bg-sand-light transition-colors"
                    onClick={() => setToursOpen(false)}
                  >
                    {t.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className={linkClass}>About</Link>

          <Link
            href="/contact"
            className="bg-terracotta text-cream text-sm font-medium px-5 py-2.5 rounded-full hover:bg-terracotta-dark transition-colors"
          >
            Book a Tour
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-espresso"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-cream border-t border-sand px-6 py-6 flex flex-col gap-1">
          <Link href="/" onClick={() => setOpen(false)} className="text-espresso-light font-medium text-lg py-2">Home</Link>

          {/* Tours accordion */}
          <div>
            <button
              className="flex items-center justify-between w-full text-espresso-light font-medium text-lg py-2"
              onClick={() => setToursOpen((v) => !v)}
            >
              Tours
              <ChevronDown size={16} className={`transition-transform ${toursOpen ? 'rotate-180' : ''}`} />
            </button>
            {toursOpen && (
              <div className="pl-4 flex flex-col gap-1 pb-2">
                <Link href="/tours" onClick={() => setOpen(false)} className="text-terracotta text-sm font-semibold py-1.5">All Tours →</Link>
                {tourDropdown.map((t) => (
                  <Link key={t.href} href={t.href} onClick={() => setOpen(false)} className="text-muted text-sm py-1.5 hover:text-terracotta">
                    {t.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" onClick={() => setOpen(false)} className="text-espresso-light font-medium text-lg py-2">About</Link>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-terracotta text-cream font-medium px-5 py-3 rounded-full text-center mt-3"
          >
            Book a Tour
          </Link>
        </div>
      )}
    </header>
  )
}
