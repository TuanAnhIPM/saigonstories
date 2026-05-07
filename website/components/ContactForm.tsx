'use client'

import { useState } from 'react'
import { tours } from '@/lib/tours'
import { AlertCircle, Loader2 } from 'lucide-react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const inputClass =
  'w-full rounded-xl border border-sand bg-white px-4 py-3 text-sm text-espresso placeholder:text-espresso-light/60 focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/15 transition-all'

const labelClass = 'block text-sm font-semibold text-espresso mb-1.5'

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
        <p className="text-espresso-light">
          We&apos;ll get back to you within a few hours — usually much sooner. Check WhatsApp too!
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="name">Full Name *</label>
          <input
            id="name" name="name" type="text" required
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">Email Address *</label>
          <input
            id="email" name="email" type="email" required
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="phone">WhatsApp / Phone</label>
          <input
            id="phone" name="phone" type="tel"
            placeholder="+1 234 567 8900"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="guests">Number of Guests *</label>
          <select id="guests" name="guests" required className={inputClass}>
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
          <label className={labelClass} htmlFor="tour">Tour of Interest *</label>
          <select id="tour" name="tour" required className={inputClass}>
            <option value="">Select a tour</option>
            {tours.map((t) => (
              <option key={t.slug} value={t.slug}>{t.title}</option>
            ))}
            <option value="not-sure">Not sure yet — help me choose</option>
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="date">Preferred Date</label>
          <input
            id="date" name="date" type="date"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">Message</label>
        <textarea
          id="message" name="message" rows={4}
          placeholder="Any dietary restrictions, special requests or questions?"
          className={`${inputClass} resize-none`}
        />
      </div>

      {state === 'error' && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">{errorMsg}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={state === 'loading'}
        className="flex items-center justify-center gap-2 bg-terracotta text-cream font-semibold py-4 rounded-full hover:bg-terracotta-dark transition-all hover:scale-[1.02] active:scale-100 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 text-base shadow-md"
      >
        {state === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending…
          </>
        ) : 'Send Booking Enquiry'}
      </button>

      <p className="text-sm text-center text-muted">
        We typically reply within 2 hours. Or reach us directly on{' '}
        <a href="https://wa.me/84363252764" target="_blank" rel="noopener noreferrer" className="text-terracotta font-medium hover:underline">
          WhatsApp
        </a>.
      </p>
    </form>
  )
}
