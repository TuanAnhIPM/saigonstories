'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { ItineraryStop } from '@/lib/tours'

function ItineraryStopCard({ stop }: { stop: ItineraryStop }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative flex flex-col gap-1">
      {/* Number bubble */}
      <div className="absolute -left-10 w-7 h-7 rounded-full bg-terracotta flex items-center justify-center text-cream text-xs font-bold shrink-0">
        {stop.number}
      </div>

      {/* Header */}
      <button
        className="flex items-center justify-between gap-2 text-left w-full group"
        onClick={() => setOpen(v => !v)}
      >
        <h3 className="font-heading text-espresso font-bold text-base group-hover:text-terracotta transition-colors">
          {stop.title}
        </h3>
        <ChevronDown
          size={16}
          className={`text-terracotta shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Collapsed preview: food pill row */}
      {!open && (
        <div className="flex flex-wrap gap-1.5 mt-1">
          {stop.foods.map(f => (
            <span
              key={f}
              className="text-xs bg-terracotta/10 text-terracotta font-medium px-2.5 py-1 rounded-full border border-terracotta/20"
            >
              {f}
            </span>
          ))}
        </div>
      )}

      {/* Expanded: story + food pills */}
      {open && (
        <div className="mt-2 space-y-3">
          <p className="text-sm text-muted leading-relaxed">{stop.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {stop.foods.map(f => (
              <span
                key={f}
                className="text-xs bg-terracotta text-white font-semibold px-2.5 py-1 rounded-full"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function TourItinerary({ stops }: { stops: ItineraryStop[] }) {
  return (
    <div className="relative flex flex-col gap-6 pl-10">
      <div className="absolute left-3.5 top-2 bottom-2 w-px bg-sand" />
      {stops.map(stop => (
        <ItineraryStopCard key={stop.number} stop={stop} />
      ))}
    </div>
  )
}
