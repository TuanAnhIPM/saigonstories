import Image from 'next/image'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: "Book a Tour — Saigon's Stories",
  description: "Contact Saigon's Stories to book a food tour, history & culture tour or custom experience in Ho Chi Minh City.",
}

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-40 pb-20 bg-espresso overflow-hidden">
        <Image
          src="/images/food-tour/IMG_3449.JPG"
          alt="Guests at a Saigon food stall"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-terracotta text-sm font-medium tracking-widest uppercase mb-3">Get in Touch</p>
          <h1 className="font-heading text-cream text-5xl md:text-6xl font-bold mb-5">Book a Tour</h1>
          <p className="text-white/85 text-lg max-w-xl mx-auto">
            Fill in the form and we&apos;ll confirm your tour within a few hours. Or just send us a WhatsApp — we&apos;re always there.
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
                  <p className="text-muted">Ho Chi Minh City (Saigon), Vietnam</p>
                  <p className="text-espresso-light/50 text-xs mt-1">Free pickup: Districts 1, 3 &amp; 4</p>
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
                  <p className="text-espresso-light/50 text-xs mt-1">Fastest way to reach us</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-terracotta" />
                </div>
                <div>
                  <p className="font-medium text-espresso mb-0.5">Email</p>
                  <a
                    href="mailto:hello@saigonstories.com"
                    className="text-terracotta hover:text-terracotta-dark transition-colors"
                  >
                    hello@saigonstories.com
                  </a>
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
                50% deposit required to confirm your booking
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

        {/* Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="font-heading text-espresso text-2xl font-bold mb-6">Send an Enquiry</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
