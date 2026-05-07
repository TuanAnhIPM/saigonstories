'use client'

import { useState } from 'react'

const tours = [
  '10 Food by Scooter',
  'Evening Walking Food Tour',
  'History & Culture Tour',
  '7 Taste & Sightseeing',
]

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white shrink-0" aria-hidden="true">
      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.823.737 5.471 2.027 7.774L0 32l8.469-2.001A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.771-1.853l-.485-.288-5.029 1.188 1.228-4.903-.317-.503A13.258 13.258 0 0 1 2.667 16C2.667 8.637 8.637 2.667 16 2.667S29.333 8.637 29.333 16 23.363 29.333 16 29.333zm7.265-9.878c-.398-.199-2.352-1.161-2.717-1.293-.365-.133-.631-.199-.897.199-.266.398-1.031 1.293-1.264 1.559-.232.266-.465.299-.863.1-.398-.199-1.681-.619-3.203-1.977-1.184-1.056-1.984-2.36-2.216-2.758-.233-.398-.025-.613.175-.811.179-.178.398-.465.597-.698.199-.232.266-.398.398-.664.133-.266.066-.498-.033-.698-.099-.199-.897-2.161-1.228-2.958-.324-.776-.652-.671-.897-.683-.232-.011-.498-.014-.764-.014-.266 0-.698.1-1.064.498-.365.398-1.395 1.361-1.395 3.319 0 1.957 1.428 3.848 1.627 4.114.199.266 2.81 4.291 6.807 6.018.951.411 1.693.656 2.271.839.954.304 1.822.261 2.509.158.765-.114 2.352-.961 2.684-1.889.332-.928.332-1.724.232-1.889-.099-.166-.365-.266-.764-.465z"/>
    </svg>
  )
}

export default function BookingForm() {
  const [tour, setTour] = useState('')
  const [date, setDate] = useState('')
  const [guests, setGuests] = useState('2')
  const [note, setNote] = useState('')
  const [touched, setTouched] = useState(false)

  const isValid = tour && date && guests

  const handleSubmit = () => {
    setTouched(true)
    if (!isValid) return

    const formattedDate = new Date(date).toLocaleDateString('en-GB', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
    })

    const lines = [
      `Hi! I'd like to book a tour with Saigon's Stories. 🛵`,
      ``,
      `🗺 Tour: ${tour}`,
      `📅 Date: ${formattedDate}`,
      `👥 Guests: ${guests}`,
      note ? `📝 Note: ${note}` : '',
      ``,
      `Please let me know availability and next steps. Thank you!`,
    ].filter(l => l !== undefined)

    const message = lines.join('\n')
    window.open(`https://wa.me/84363252764?text=${encodeURIComponent(message)}`, '_blank')
  }

  // Min date = today
  const today = new Date().toISOString().split('T')[0]

  const inputCls = (val: string) =>
    `w-full rounded-xl border px-4 py-3 text-sm text-espresso bg-white outline-none transition-all focus:ring-2 focus:ring-terracotta/40 focus:border-terracotta ${
      touched && !val ? 'border-red-400 bg-red-50' : 'border-sand'
    }`

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 32 32" className="w-7 h-7 fill-[#25D366]" aria-hidden="true">
            <path d="M16 0C7.163 0 0 7.163 0 16c0 2.823.737 5.471 2.027 7.774L0 32l8.469-2.001A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.771-1.853l-.485-.288-5.029 1.188 1.228-4.903-.317-.503A13.258 13.258 0 0 1 2.667 16C2.667 8.637 8.637 2.667 16 2.667S29.333 8.637 29.333 16 23.363 29.333 16 29.333zm7.265-9.878c-.398-.199-2.352-1.161-2.717-1.293-.365-.133-.631-.199-.897.199-.266.398-1.031 1.293-1.264 1.559-.232.266-.465.299-.863.1-.398-.199-1.681-.619-3.203-1.977-1.184-1.056-1.984-2.36-2.216-2.758-.233-.398-.025-.613.175-.811.179-.178.398-.465.597-.698.199-.232.266-.398.398-.664.133-.266.066-.498-.033-.698-.099-.199-.897-2.161-1.228-2.958-.324-.776-.652-.671-.897-.683-.232-.011-.498-.014-.764-.014-.266 0-.698.1-1.064.498-.365.398-1.395 1.361-1.395 3.319 0 1.957 1.428 3.848 1.627 4.114.199.266 2.81 4.291 6.807 6.018.951.411 1.693.656 2.271.839.954.304 1.822.261 2.509.158.765-.114 2.352-.961 2.684-1.889.332-.928.332-1.724.232-1.889-.099-.166-.365-.266-.764-.465z"/>
          </svg>
        </div>
        <div>
          <h2 className="font-heading text-espresso text-xl font-bold">Quick Booking</h2>
          <p className="text-muted text-sm">Fill in the details — we&apos;ll open WhatsApp with your message ready.</p>
        </div>
      </div>

      {/* Form fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Tour */}
        <div className="sm:col-span-2 flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-espresso uppercase tracking-widest">Which tour?</label>
          <select
            value={tour}
            onChange={e => setTour(e.target.value)}
            className={inputCls(tour)}
          >
            <option value="">Select a tour…</option>
            {tours.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          {touched && !tour && <p className="text-xs text-red-500">Please select a tour</p>}
        </div>

        {/* Date */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-espresso uppercase tracking-widest">Preferred date</label>
          <input
            type="date"
            min={today}
            value={date}
            onChange={e => setDate(e.target.value)}
            className={inputCls(date)}
          />
          {touched && !date && <p className="text-xs text-red-500">Please pick a date</p>}
        </div>

        {/* Guests */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-espresso uppercase tracking-widest">Number of guests</label>
          <select
            value={guests}
            onChange={e => setGuests(e.target.value)}
            className={inputCls(guests)}
          >
            {[1,2,3,4,5,6,7,8,9,10].map(n => (
              <option key={n} value={String(n)}>{n} {n === 1 ? 'guest' : 'guests'}</option>
            ))}
            <option value="10+">10+ guests</option>
          </select>
        </div>

        {/* Note */}
        <div className="sm:col-span-2 flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-espresso uppercase tracking-widest">
            Dietary needs / notes <span className="text-muted normal-case tracking-normal font-normal">(optional)</span>
          </label>
          <textarea
            rows={3}
            placeholder="Vegetarian, allergies, hotel name for pickup…"
            value={note}
            onChange={e => setNote(e.target.value)}
            className="w-full rounded-xl border border-sand px-4 py-3 text-sm text-espresso bg-white outline-none transition-all focus:ring-2 focus:ring-terracotta/40 focus:border-terracotta resize-none"
          />
        </div>
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-[#1ebe5d] transition-all hover:scale-[1.02] active:scale-100 shadow-md w-full"
      >
        <WhatsAppIcon />
        Send via WhatsApp
      </button>

      <p className="text-xs text-center text-muted">+84 363 252 764 · Replies within 1–2 hours</p>
    </div>
  )
}
