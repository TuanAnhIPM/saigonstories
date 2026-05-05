'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { TimeSlot, TourStop } from '@/lib/tours'

function ExpandableStop({ stop }: { stop: TourStop }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative flex flex-col gap-1">
      <div className="absolute -left-10 w-7 h-7 rounded-full bg-terracotta flex items-center justify-center text-cream text-xs font-bold shrink-0">
        {stop.number}
      </div>
      <button className="flex items-center justify-between gap-2 text-left w-full group" onClick={() => setOpen(v => !v)}>
        <h3 className="font-heading text-espresso font-bold text-base group-hover:text-terracotta transition-colors">{stop.title}</h3>
        <ChevronDown size={16} className={`text-terracotta shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="mt-1 space-y-1.5">
          <p className="text-sm text-muted leading-relaxed">{stop.description}</p>
          {stop.ingredients && (
            <p className="text-xs text-muted-light bg-sand-light rounded-lg px-3 py-2 leading-relaxed">
              <span className="font-semibold text-espresso-light">Ingredients: </span>{stop.ingredients}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default function TourTimeSelector({ timeSlots }: { timeSlots: TimeSlot[] }) {
  const [active, setActive] = useState(0)
  const slot = timeSlots[active]

  return (
    <div>
      {/* Tab selector */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {timeSlots.map((ts, i) => (
          <button
            key={ts.label}
            onClick={() => setActive(i)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              active === i
                ? 'bg-terracotta text-cream shadow-md'
                : 'bg-sand-light text-espresso-light hover:bg-sand'
            }`}
          >
            {ts.label}
          </button>
        ))}
      </div>

      {/* Departure times for this slot */}
      <div className="flex flex-wrap gap-2 mb-6">
        {slot.departureTimes.map((t) => (
          <span key={t} className="text-sm bg-cream text-espresso-light px-3 py-1.5 rounded-full border border-sand">{t}</span>
        ))}
      </div>

      {/* Stops */}
      <div className="relative flex flex-col gap-5 pl-10">
        <div className="absolute left-3.5 top-2 bottom-2 w-px bg-sand" />
        {slot.stops.map((stop) => (
          <ExpandableStop key={stop.number} stop={stop} />
        ))}
      </div>
    </div>
  )
}
