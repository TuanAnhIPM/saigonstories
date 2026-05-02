import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, guests, tour, date, message } = body

    if (!name || !email || !guests || !tour) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // TODO: Connect to your email provider (Resend, Nodemailer, etc.)
    // Example with Resend:
    //
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'bookings@saigonstories.com',
    //   to: 'hello@saigonstories.com',
    //   subject: `New booking enquiry from ${name}`,
    //   html: `<p>${name} (${email}) wants to book: ${tour}</p>...`,
    // })

    console.log('New booking enquiry:', { name, email, phone, guests, tour, date, message })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
