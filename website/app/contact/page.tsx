import { Phone, MapPin, Clock } from 'lucide-react'
import BookingForm from '@/components/BookingForm'

export const metadata = {
  title: "Book a Tour — Saigon's Stories",
  description: "Book a food tour, history & culture tour or custom experience in Ho Chi Minh City via WhatsApp.",
}

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-cream pt-36 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-terracotta text-sm font-medium tracking-widest uppercase mb-3">Get in Touch</p>
          <h1 className="font-heading text-espresso text-5xl md:text-6xl font-bold mb-5">Book a Tour</h1>
          <p className="text-espresso-light text-lg max-w-xl mx-auto">
            The fastest way to book is WhatsApp — we reply within an hour and can answer any questions before you confirm.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-14">
        {/* Contact info */}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="font-heading text-espresso text-2xl font-bold mb-6">Find us</h2>
            <ul className="flex flex-col gap-5 text-sm">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-terracotta" />
                </div>
                <div>
                  <p className="font-medium text-espresso mb-0.5">Location</p>
                  <p className="text-muted">No. 2/42F, Cao Thắng Street,<br />Bàn Cờ Ward, Hồ Chí Minh City</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-terracotta" />
                </div>
                <div>
                  <p className="font-medium text-espresso mb-0.5">WhatsApp</p>
                  <a
                    href="https://wa.me/84363252764"
                    className="text-terracotta hover:text-terracotta-dark transition-colors"
                  >
                    Message us on WhatsApp
                  </a>
                  <p className="text-muted text-xs mt-1">Fastest way to reach us</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-terracotta" />
                </div>
                <div>
                  <p className="font-medium text-espresso mb-0.5">Response time</p>
                  <p className="text-muted">We reply within 1–2 hours</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Booking notes */}
          <div className="bg-cream-dark rounded-2xl p-6 flex flex-col gap-4">
            <h3 className="font-heading text-espresso font-bold">Before you book</h3>
            <ul className="text-sm text-muted space-y-2.5 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-terracotta font-bold mt-0.5">·</span>
                50% deposit to confirm — remaining 50% after the tour (cash, PayPal, or Visa/card)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-terracotta font-bold mt-0.5">·</span>
                Free cancellation up to 24 hours before departure
              </li>
              <li className="flex items-start gap-2">
                <span className="text-terracotta font-bold mt-0.5">·</span>
                Please let us know about any dietary restrictions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-terracotta font-bold mt-0.5">·</span>
                Holiday surcharge of 25% applies on public holidays
              </li>
              <li className="flex items-start gap-2">
                <span className="text-terracotta font-bold mt-0.5">·</span>
                Scooter tours not available during Lunar New Year
              </li>
            </ul>
          </div>
        </div>

        {/* Booking form */}
        <div className="lg:col-span-2">
          <BookingForm />
        </div>
      </section>
    </>
  )
}
