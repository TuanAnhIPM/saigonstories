'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/tours', label: 'Tours' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-terracotta ${
                scrolled ? 'text-espresso-light' : 'text-cream'
              }`}
            >
              {link.label}
            </Link>
          ))}
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
        <div className="md:hidden bg-cream border-t border-sand px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-espresso-light font-medium text-lg"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-terracotta text-cream font-medium px-5 py-3 rounded-full text-center"
          >
            Book a Tour
          </Link>
        </div>
      )}
    </header>
  )
}
