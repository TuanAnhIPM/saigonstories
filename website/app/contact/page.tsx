import { Phone, MapPin, Clock } from 'lucide-react'

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
                  <p className="text-muted">Cao Thắng, Bàn Cờ,<br />Hồ Chí Minh 70000, Vietnam</p>
                  <p className="text-muted text-xs mt-1">Free pickup: Districts 1, 3 &amp; 4</p>
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

        {/* WhatsApp CTA */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="bg-white rounded-2xl p-10 shadow-sm flex flex-col items-center text-center gap-6">
            <div className="w-20 h-20 rounded-full bg-[#25D366]/10 flex items-center justify-center">
              <svg viewBox="0 0 32 32" className="w-10 h-10 fill-[#25D366]" aria-hidden="true">
                <path d="M16 0C7.163 0 0 7.163 0 16c0 2.823.737 5.471 2.027 7.774L0 32l8.469-2.001A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.771-1.853l-.485-.288-5.029 1.188 1.228-4.903-.317-.503A13.258 13.258 0 0 1 2.667 16C2.667 8.637 8.637 2.667 16 2.667S29.333 8.637 29.333 16 23.363 29.333 16 29.333zm7.265-9.878c-.398-.199-2.352-1.161-2.717-1.293-.365-.133-.631-.199-.897.199-.266.398-1.031 1.293-1.264 1.559-.232.266-.465.299-.863.1-.398-.199-1.681-.619-3.203-1.977-1.184-1.056-1.984-2.36-2.216-2.758-.233-.398-.025-.613.175-.811.179-.178.398-.465.597-.698.199-.232.266-.398.398-.664.133-.266.066-.498-.033-.698-.099-.199-.897-2.161-1.228-2.958-.324-.776-.652-.671-.897-.683-.232-.011-.498-.014-.764-.014-.266 0-.698.1-1.064.498-.365.398-1.395 1.361-1.395 3.319 0 1.957 1.428 3.848 1.627 4.114.199.266 2.81 4.291 6.807 6.018.951.411 1.693.656 2.271.839.954.304 1.822.261 2.509.158.765-.114 2.352-.961 2.684-1.889.332-.928.332-1.724.232-1.889-.099-.166-.365-.266-.764-.465z"/>
              </svg>
            </div>

            <div>
              <h2 className="font-heading text-espresso text-3xl font-bold mb-3">Chat with us on WhatsApp</h2>
              <p className="text-muted max-w-md mx-auto leading-relaxed">
                Tell us which tour you&apos;re interested in, your preferred date, and how many guests — and we&apos;ll take care of the rest.
              </p>
            </div>

            <a
              href="https://wa.me/84363252764"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-semibold text-lg px-10 py-4 rounded-full hover:bg-[#1ebe5d] transition-all hover:scale-[1.03] active:scale-100 shadow-md"
            >
              <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white shrink-0" aria-hidden="true">
                <path d="M16 0C7.163 0 0 7.163 0 16c0 2.823.737 5.471 2.027 7.774L0 32l8.469-2.001A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.771-1.853l-.485-.288-5.029 1.188 1.228-4.903-.317-.503A13.258 13.258 0 0 1 2.667 16C2.667 8.637 8.637 2.667 16 2.667S29.333 8.637 29.333 16 23.363 29.333 16 29.333zm7.265-9.878c-.398-.199-2.352-1.161-2.717-1.293-.365-.133-.631-.199-.897.199-.266.398-1.031 1.293-1.264 1.559-.232.266-.465.299-.863.1-.398-.199-1.681-.619-3.203-1.977-1.184-1.056-1.984-2.36-2.216-2.758-.233-.398-.025-.613.175-.811.179-.178.398-.465.597-.698.199-.232.266-.398.398-.664.133-.266.066-.498-.033-.698-.099-.199-.897-2.161-1.228-2.958-.324-.776-.652-.671-.897-.683-.232-.011-.498-.014-.764-.014-.266 0-.698.1-1.064.498-.365.398-1.395 1.361-1.395 3.319 0 1.957 1.428 3.848 1.627 4.114.199.266 2.81 4.291 6.807 6.018.951.411 1.693.656 2.271.839.954.304 1.822.261 2.509.158.765-.114 2.352-.961 2.684-1.889.332-.928.332-1.724.232-1.889-.099-.166-.365-.266-.764-.465z"/>
              </svg>
              Open WhatsApp
            </a>

            <p className="text-sm text-muted">+84 363 252 764 &nbsp;·&nbsp; Replies within 1–2 hours</p>
          </div>

          {/* What to include */}
          <div className="bg-cream-dark rounded-2xl p-8">
            <h3 className="font-heading text-espresso font-bold text-lg mb-5">What to mention in your message</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted">
              {[
                { title: 'Which tour', detail: 'Food tour, History & Culture, or Custom' },
                { title: 'Your date', detail: "Or a few options if you're flexible" },
                { title: 'Group size', detail: 'Number of guests joining' },
                { title: 'Dietary needs', detail: 'Vegetarian, allergies, etc.' },
              ].map(({ title, detail }) => (
                <div key={title} className="flex items-start gap-3">
                  <span className="text-terracotta font-bold text-base mt-0.5">·</span>
                  <div>
                    <p className="font-medium text-espresso">{title}</p>
                    <p>{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
