'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Is hotel pickup included?',
    a: 'Free pickup is included for guests staying in Districts 1, 3 and 4. For other areas, we arrange pickup via WhatsApp — just let us know when you book.',
  },
  {
    q: 'How do I pay?',
    a: 'Cash bookings require a 50% deposit to confirm, with the balance paid after the tour. If you prefer to pay by PayPal or Visa, full payment is required at the time of booking.',
  },
  {
    q: 'Can you accommodate dietary restrictions?',
    a: 'Absolutely. Just let us know when you book — vegetarian, gluten-free, allergies and other requirements are all handled. Our menus are flexible and our guides are experienced at managing this.',
  },
  {
    q: 'What if it rains?',
    a: 'The tour runs in light rain — we provide raincoats and helmets on all scooter tours. In heavy weather we may adjust the route slightly, but we very rarely cancel.',
  },
  {
    q: 'How small are the groups?',
    a: 'Our tours are kept intentionally small. Most departures have 2–8 guests, so you get real time with your guide and a genuinely personal experience.',
  },
  {
    q: 'Can I book a solo tour?',
    a: 'Yes. For the walking food tour, a 200,000 VND solo supplement applies. All other tours can be booked for 1 person at the standard rate.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Cancel 24+ hours before: full refund. Cancel 12 hours before: 50% charge. Cancel 5 hours before: 75% charge. Less than 5 hours: 100% charge.',
  },
  {
    q: 'Do you offer group discounts?',
    a: 'Yes — groups of 11 or more guests receive a 15% discount across all tours. Contact us via WhatsApp to arrange your group booking.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="max-w-3xl mx-auto px-6 py-24">
      <div className="text-center mb-12">
        <p className="text-terracotta text-sm font-medium tracking-widest uppercase mb-3">Got questions?</p>
        <h2 className="font-heading text-espresso text-4xl font-bold">Frequently asked</h2>
      </div>

      <div className="flex flex-col divide-y divide-sand">
        {faqs.map((faq, i) => (
          <div key={i}>
            <button
              className="flex items-center justify-between w-full py-5 text-left gap-4"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="font-heading text-espresso font-semibold text-base">{faq.q}</span>
              <ChevronDown
                size={18}
                className={`text-terracotta shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
              />
            </button>
            {open === i && (
              <p className="text-sm text-muted leading-relaxed pb-5">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
