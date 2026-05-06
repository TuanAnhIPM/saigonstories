'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

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

      <div className="flex flex-col gap-3">
        {faqs.map((faq, i) => {
          const isOpen = open === i
          return (
            <div
              key={i}
              className={`rounded-2xl border transition-colors duration-200 ${
                isOpen ? 'border-terracotta/40 bg-cream' : 'border-sand bg-white hover:border-terracotta/30'
              }`}
            >
              <button
                className="flex items-center justify-between w-full px-6 py-5 text-left gap-4"
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className={`font-heading font-semibold text-base transition-colors duration-200 ${isOpen ? 'text-terracotta' : 'text-espresso'}`}>
                  {faq.q}
                </span>
                <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
                  isOpen ? 'bg-terracotta text-cream' : 'bg-sand text-espresso-light'
                }`}>
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="px-6 pb-5">
                      <div className="border-l-4 border-terracotta pl-4 py-1">
                        <p className="text-sm text-espresso-light leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
