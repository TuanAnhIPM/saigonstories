'use client'

import { useState } from 'react'

const tours = [
  { name: 'Food Tour by Scooter',          icon: '🛵', time: '3.5–4 hrs · Morning / Afternoon / Evening' },
  { name: 'Evening Walking Food Tour',      icon: '🚶', time: '3.5–4 hrs · Evening' },
  { name: 'History & Culture by Scooter',   icon: '🏛️', time: '3.5–4 hrs · Morning / Afternoon / Evening' },
  { name: 'Bites & Sights by Scooter',      icon: '🌃', time: '3.5–4 hrs · Morning / Afternoon / Evening' },
]

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white shrink-0" aria-hidden="true">
      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.823.737 5.471 2.027 7.774L0 32l8.469-2.001A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.771-1.853l-.485-.288-5.029 1.188 1.228-4.903-.317-.503A13.258 13.258 0 0 1 2.667 16C2.667 8.637 8.637 2.667 16 2.667S29.333 8.637 29.333 16 23.363 29.333 16 29.333zm7.265-9.878c-.398-.199-2.352-1.161-2.717-1.293-.365-.133-.631-.199-.897.199-.266.398-1.031 1.293-1.264 1.559-.232.266-.465.299-.863.1-.398-.199-1.681-.619-3.203-1.977-1.184-1.056-1.984-2.36-2.216-2.758-.233-.398-.025-.613.175-.811.179-.178.398-.465.597-.698.199-.232.266-.398.398-.664.133-.266.066-.498-.033-.698-.099-.199-.897-2.161-1.228-2.958-.324-.776-.652-.671-.897-.683-.232-.011-.498-.014-.764-.014-.266 0-.698.1-1.064.498-.365.398-1.395 1.361-1.395 3.319 0 1.957 1.428 3.848 1.627 4.114.199.266 2.81 4.291 6.807 6.018.951.411 1.693.656 2.271.839.954.304 1.822.261 2.509.158.765-.114 2.352-.961 2.684-1.889.332-.928.332-1.724.232-1.889-.099-.166-.365-.266-.764-.465z"/>
    </svg>
  )
}

function Stepper({ value, onChange, min = 0, max = 20, label }: {
  value: number; onChange: (v: number) => void; min?: number; max?: number; label: string
}) {
  return (
    <div className="flex items-center justify-between bg-sand-light rounded-xl px-4 py-3 border border-sand">
      <span className="text-sm text-espresso-light">{label}</span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="w-8 h-8 rounded-full border border-sand bg-white flex items-center justify-center text-espresso text-lg font-bold hover:border-terracotta hover:text-terracotta transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >−</button>
        <span className="w-6 text-center font-bold text-espresso text-base">{value}</span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          className="w-8 h-8 rounded-full border border-sand bg-white flex items-center justify-center text-espresso text-lg font-bold hover:border-terracotta hover:text-terracotta transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >+</button>
      </div>
    </div>
  )
}

export default function BookingForm() {
  const [tour, setTour] = useState('')
  const [date, setDate] = useState('')
  const [guests, setGuests] = useState(2)
  const [children, setChildren] = useState(0)
  const [note, setNote] = useState('')
  const [touched, setTouched] = useState(false)

  const isValid = tour && date

  const formattedDate = date
    ? new Date(date + 'T12:00:00').toLocaleDateString('en-US', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
      })
    : null

  const handleSubmit = () => {
    setTouched(true)
    if (!isValid) return

    const lines = [
      `Hi! I'd like to book a tour with Saigon's Stories. 🛵`,
      ``,
      `🗺 Tour: ${tour}`,
      `📅 Date: ${formattedDate}`,
      `👥 Adults: ${guests}`,
      `🧒 Children: ${children}`,
      note ? `📝 Note: ${note}` : '',
      ``,
      `Please let me know availability and next steps. Thank you!`,
    ].filter(l => l !== undefined)

    window.open(`https://wa.me/84363252764?text=${encodeURIComponent(lines.join('\n'))}`, '_blank')
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

      {/* Header banner */}
      <div className="bg-espresso px-8 py-6 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 32 32" className="w-6 h-6 fill-[#25D366]" aria-hidden="true">
            <path d="M16 0C7.163 0 0 7.163 0 16c0 2.823.737 5.471 2.027 7.774L0 32l8.469-2.001A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.771-1.853l-.485-.288-5.029 1.188 1.228-4.903-.317-.503A13.258 13.258 0 0 1 2.667 16C2.667 8.637 8.637 2.667 16 2.667S29.333 8.637 29.333 16 23.363 29.333 16 29.333zm7.265-9.878c-.398-.199-2.352-1.161-2.717-1.293-.365-.133-.631-.199-.897.199-.266.398-1.031 1.293-1.264 1.559-.232.266-.465.299-.863.1-.398-.199-1.681-.619-3.203-1.977-1.184-1.056-1.984-2.36-2.216-2.758-.233-.398-.025-.613.175-.811.179-.178.398-.465.597-.698.199-.232.266-.398.398-.664.133-.266.066-.498-.033-.698-.099-.199-.897-2.161-1.228-2.958-.324-.776-.652-.671-.897-.683-.232-.011-.498-.014-.764-.014-.266 0-.698.1-1.064.498-.365.398-1.395 1.361-1.395 3.319 0 1.957 1.428 3.848 1.627 4.114.199.266 2.81 4.291 6.807 6.018.951.411 1.693.656 2.271.839.954.304 1.822.261 2.509.158.765-.114 2.352-.961 2.684-1.889.332-.928.332-1.724.232-1.889-.099-.166-.365-.266-.764-.465z"/>
          </svg>
        </div>
        <div>
          <h2 className="font-heading text-cream! text-xl font-bold">Book Your Tour</h2>
          <p className="text-white/70! text-sm">We'll open WhatsApp with your details ready.</p>
        </div>
      </div>

      <div className="p-6 sm:p-8 flex flex-col gap-7">

        {/* Step 1: Tour */}
        <div>
          <p className="text-xs font-bold text-espresso uppercase tracking-widest mb-3">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-terracotta text-cream text-xs mr-2">1</span>
            Choose your tour
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {tours.map(t => {
              const selected = tour === t.name
              return (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => setTour(t.name)}
                  className={`flex items-start gap-3 rounded-xl border-2 px-4 py-3.5 text-left transition-all duration-200 ${
                    selected
                      ? 'border-terracotta bg-terracotta/5 shadow-sm'
                      : 'border-sand bg-white hover:border-terracotta/50 hover:bg-sand-light'
                  }`}
                >
                  <span className="text-2xl mt-0.5 shrink-0">{t.icon}</span>
                  <div className="min-w-0">
                    <p className={`text-sm font-semibold leading-snug ${selected ? 'text-terracotta' : 'text-espresso'}`}>
                      {t.name}
                    </p>
                    <p className="text-xs text-muted mt-0.5">{t.time}</p>
                  </div>
                  {selected && (
                    <span className="ml-auto shrink-0 w-5 h-5 rounded-full bg-terracotta flex items-center justify-center mt-0.5">
                      <svg viewBox="0 0 12 12" className="w-3 h-3 fill-white"><path d="M10 3L5 8.5 2 5.5"/><path d="M10 3L5 8.5 2 5.5" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                  )}
                </button>
              )
            })}
          </div>
          {touched && !tour && <p className="text-xs text-red-500 mt-1.5">Please select a tour</p>}
        </div>

        {/* Step 2: Date */}
        <div>
          <p className="text-xs font-bold text-espresso uppercase tracking-widest mb-3">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-terracotta text-cream text-xs mr-2">2</span>
            Pick a date
          </p>
          <div className="relative">
            <input
              type="date"
              min={today}
              value={date}
              onChange={e => setDate(e.target.value)}
              className={`w-full rounded-xl border-2 px-4 py-3.5 text-sm text-espresso bg-white outline-none transition-all focus:ring-2 focus:ring-terracotta/30 cursor-pointer ${
                touched && !date ? 'border-red-400 bg-red-50' : date ? 'border-terracotta' : 'border-sand hover:border-terracotta/50'
              }`}
            />
            {formattedDate && (
              <div className="mt-2 flex items-center gap-2 px-1">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-terracotta shrink-0">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm font-medium text-terracotta">{formattedDate}</span>
              </div>
            )}
          </div>
          {touched && !date && <p className="text-xs text-red-500 mt-1.5">Please pick a date</p>}
        </div>

        {/* Step 3: Guests */}
        <div>
          <p className="text-xs font-bold text-espresso uppercase tracking-widest mb-3">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-terracotta text-cream text-xs mr-2">3</span>
            Group size
          </p>
          <div className="flex flex-col gap-2.5">
            <Stepper value={guests} onChange={setGuests} min={1} max={20} label="Adults" />
            <Stepper value={children} onChange={setChildren} min={0} max={10} label="Children (under 10)" />
          </div>
        </div>

        {/* Step 4: Notes */}
        <div>
          <p className="text-xs font-bold text-espresso uppercase tracking-widest mb-3">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-sand text-muted text-xs mr-2">4</span>
            Notes <span className="normal-case tracking-normal font-normal text-muted">(optional)</span>
          </p>
          <textarea
            rows={3}
            placeholder="Dietary restrictions, allergies, hotel name for pickup, preferred time…"
            value={note}
            onChange={e => setNote(e.target.value)}
            className="w-full rounded-xl border-2 border-sand px-4 py-3 text-sm text-espresso bg-white outline-none transition-all focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta hover:border-terracotta/50 resize-none"
          />
        </div>

        {/* Summary preview */}
        {(tour || date) && (
          <div className="bg-sand-light rounded-xl p-4 flex flex-col gap-1.5 text-sm text-espresso-light border border-sand">
            <p className="font-semibold text-espresso text-xs uppercase tracking-widest mb-1">Booking summary</p>
            {tour && <p>🗺 {tour}</p>}
            {formattedDate && <p>📅 {formattedDate}</p>}
            <p>👥 {guests} adult{guests !== 1 ? 's' : ''}{children > 0 ? ` · ${children} child${children !== 1 ? 'ren' : ''}` : ''}</p>
          </div>
        )}

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold text-base px-8 py-4 rounded-2xl hover:bg-[#1ebe5d] transition-all hover:scale-[1.02] active:scale-100 shadow-lg w-full"
        >
          <WhatsAppIcon />
          Send via WhatsApp
        </button>

        <p className="text-xs text-center text-muted -mt-3">+84 363 252 764 · We reply within 1–2 hours</p>
      </div>
    </div>
  )
}
