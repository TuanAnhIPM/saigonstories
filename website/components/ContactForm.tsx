'use client'

import { useState } from 'react'
import { tours } from '@/lib/tours'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setState('success')
        form.reset()
      } else {
        throw new Error('Server error')
      }
    } catch {
      setState('error')
      setErrorMsg('Something went wrong. Please try WhatsApp instead.')
    }
  }

  if (state === 'success') {
    return (
      <div className="bg-sage/10 border border-sage/30 rounded-2xl p-10 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="font-heading text-espresso text-2xl font-bold mb-3">We got your message!</h3>
        <p className="text-espresso-light/70">
          We&apos;ll get back to you within a few hours — usually much sooner. Check WhatsApp too!
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-espresso-light mb-1.5" htmlFor="name">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full rounded-xl border border-sand bg-cream px-4 py-3 text-sm text-espresso placeholder:text-espresso-light/40 focus:outline-none focus:border-terracotta transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-espresso-light mb-1.5" htmlFor="email">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-xl border border-sand bg-cream px-4 py-3 text-sm text-espresso placeholder:text-espresso-light/40 focus:outline-none focus:border-terracotta transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-espresso-light mb-1.5" htmlFor="phone">
            WhatsApp / Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 234 567 8900"
            className="w-full rounded-xl border border-sand bg-cream px-4 py-3 text-sm text-espresso placeholder:text-espresso-light/40 focus:outline-none focus:border-terracotta transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-espresso-light mb-1.5" htmlFor="guests">
            Number of Guests *
          </label>
          <select
            id="guests"
            name="guests"
            required
            className="w-full rounded-xl border border-sand bg-cream px-4 py-3 text-sm text-espresso focus:outline-none focus:border-terracotta transition-colors"
          >
            <option value="">Select group size</option>
            <option value="1">1 person</option>
            <option value="2">2 people</option>
            <option value="3-4">3–4 people</option>
            <option value="5-6">5–6 people</option>
            <option value="7-10">7–10 people</option>
            <option value="11+">11+ people</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-espresso-light mb-1.5" htmlFor="tour">
            Tour of Interest *
          </label>
          <select
            id="tour"
            name="tour"
            required
            className="w-full rounded-xl border border-sand bg-cream px-4 py-3 text-sm text-espresso focus:outline-none focus:border-terracotta transition-colors"
          >
            <option value="">Select a tour</option>
            {tours.map((t) => (
              <option key={t.slug} value={t.slug}>{t.title}</option>
            ))}
            <option value="not-sure">Not sure yet — help me choose</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-espresso-light mb-1.5" htmlFor="date">
            Preferred Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            className="w-full rounded-xl border border-sand bg-cream px-4 py-3 text-sm text-espresso focus:outline-none focus:border-terracotta transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-espresso-light mb-1.5" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Any dietary restrictions, special requests or questions?"
          className="w-full rounded-xl border border-sand bg-cream px-4 py-3 text-sm text-espresso placeholder:text-espresso-light/40 focus:outline-none focus:border-terracotta transition-colors resize-none"
        />
      </div>

      {state === 'error' && (
        <p className="text-red-600 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={state === 'loading'}
        className="bg-terracotta text-cream font-medium py-4 rounded-full hover:bg-terracotta-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-base"
      >
        {state === 'loading' ? 'Sending…' : 'Send Booking Enquiry'}
      </button>

      <p className="text-xs text-center text-espresso-light/50">
        We typically reply within 2 hours. Or reach us directly on WhatsApp.
      </p>
    </form>
  )
}
