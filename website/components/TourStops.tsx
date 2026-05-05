'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { TourStop } from '@/lib/tours'

function ExpandableStop({ stop }: { stop: TourStop }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative flex flex-col gap-1">
      <div className="absolute -left-10 w-7 h-7 rounded-full bg-terracotta flex items-center justify-center text-cream text-xs font-bold shrink-0">
        {stop.number}
      </div>
      <button
        className="flex items-center justify-between gap-2 text-left w-full group"
        onClick={() => setOpen((v) => !v)}
      >
        <h3 className="font-heading text-espresso font-bold text-base group-hover:text-terracotta transition-colors">
          {stop.title}
        </h3>
        <ChevronDown
          size={16}
          className={`text-terracotta shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
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

export default function TourStops({ stops }: { stops: TourStop[] }) {
  return (
    <div className="relative flex flex-col gap-5 pl-10">
      <div className="absolute left-3.5 top-2 bottom-2 w-px bg-sand" />
      {stops.map((stop) => (
        <ExpandableStop key={stop.number} stop={stop} />
      ))}
    </div>
  )
}
