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
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setToursOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const linkClass = `text-sm font-medium tracking-wide transition-colors hover:text-terracotta ${
    scrolled ? 'text-espresso-light' : 'text-cream'
  }`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream shadow-sm' : 'bg-transparent'
      }`}
    >
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
            className={`font-heading font-bold text-lg leading-tight transition-colors ${
              scrolled ? 'text-espresso' : 'text-cream'
            }`}
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
              className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors hover:text-terracotta ${
                scrolled ? 'text-espresso-light' : 'text-cream'
              }`}
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

          <a
            href="https://wa.me/84363252764"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-terracotta ${scrolled ? 'text-espresso-light' : 'text-cream'}`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>

          <Link
            href="/contact"
            className="bg-terracotta text-cream text-sm font-medium px-5 py-2.5 rounded-full hover:bg-terracotta-dark transition-colors"
          >
            Book a Tour
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className={`md:hidden p-2 transition-colors ${
            scrolled ? 'text-espresso' : 'text-cream'
          }`}
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
