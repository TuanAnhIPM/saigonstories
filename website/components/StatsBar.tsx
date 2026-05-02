'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

const stats = [
  { value: 500, suffix: '+', label: 'Happy Guests' },
  { value: 6, suffix: '', label: 'Unique Tours' },
  { value: 4.9, suffix: '★', label: 'Average Rating', decimal: true },
  { value: 100, suffix: '%', label: 'Local Knowledge' },
]

function Counter({ target, suffix, decimal }: { target: number; suffix: string; decimal?: boolean }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1500
    const steps = 50
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className="font-heading text-terracotta text-3xl font-bold">
      {decimal ? count.toFixed(1) : Math.floor(count)}{suffix}
    </span>
  )
}

export default function StatsBar() {
  return (
    <section className="bg-espresso">
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <Counter target={s.value} suffix={s.suffix} decimal={s.decimal} />
            <div className="text-cream/60 text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
