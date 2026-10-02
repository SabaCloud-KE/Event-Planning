'use client'

import { FormEvent, useState } from 'react'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { SiteShell, whatsappLink } from '@/components/site-shell'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <SiteShell>
      <main>
        <section className="page-hero">
          <div className="container">
            <span className="eyebrow">START A CONVERSATION</span>
            <h1>
              Tell us about<br />
              <em>your celebration.</em>
            </h1>
            <p>
              A few initial details are all we need to begin curating an extraordinary African celebration tailored to your family and story.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container contact-layout">
            <div>
              <span className="eyebrow">BESPOKE CONSULTATION</span>
              <h2>Let&apos;s create something beautiful.</h2>
              <p className="lead">
                Whether you are planning a traditional Ruracio, a romantic Naivasha wedding, or an executive Nairobi gala, we would love to connect.
              </p>

              <div className="contact-note">
                <span>Prefer an instant conversation?</span>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  Chat directly on WhatsApp <MessageCircle size={17} />
                </a>
              </div>
            </div>

            {sent ? (
              <div className="success-panel">
                <span className="eyebrow">ASANTE SANA &bull; THANK YOU</span>
                <h2>We&apos;ve received your celebration details.</h2>
                <p>
                  Our lead planning team will review your requirements and reach out within 24 business hours to schedule your discovery consultation.
                </p>
                <a href="/" className="arrow-link">
                  Return to Home <ArrowUpRight size={16} />
                </a>
              </div>
            ) : (
              <form className="enquiry-form" onSubmit={submit}>
                <label>
                  Full Name / Couple Names
                  <input required name="name" placeholder="e.g. Amani &amp; Zawadi" />
                </label>

                <div className="form-row">
                  <label>
                    Phone / WhatsApp Number
                    <input required name="phone" type="tel" placeholder="+254 7..." />
                  </label>
                  <label>
                    Email Address
                    <input required name="email" type="email" placeholder="you@domain.com" />
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    Celebration Type
                    <select required name="event" defaultValue="">
                      <option value="" disabled>Select event type</option>
                      <option value="Luxury Wedding &amp; Harusi">Luxury Wedding &amp; Harusi</option>
                      <option value="Traditional Ceremony (Ruracio / Koito / Gusaba)">Traditional Ceremony (Ruracio / Koito / Gusaba)</option>
                      <option value="Cultural Introduction / Dowry Milestone">Cultural Introduction / Dowry Milestone</option>
                      <option value="Corporate Gala &amp; Leadership Summit">Corporate Gala &amp; Leadership Summit</option>
                      <option value="Private Milestone &amp; Jubilee">Private Milestone &amp; Jubilee</option>
                      <option value="Event Styling &amp; Floral Décor Only">Event Styling &amp; Floral Décor Only</option>
                      <option value="Destination Celebration">Destination Celebration</option>
                      <option value="Other Bespoke Event">Other Bespoke Event</option>
                    </select>
                  </label>

                  <label>
                    Target Event Date
                    <input name="date" type="date" />
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    Location / Preferred Venue
                    <input name="location" placeholder="e.g. Nairobi, Naivasha, Diani, Upcountry..." />
                  </label>
                  <label>
                    Estimated Guest Count
                    <input name="guests" type="number" min="10" placeholder="e.g. 250" />
                  </label>
                </div>

                <label>
                  Estimated Budget Investment (KES)
                  <select name="budget" defaultValue="Prefer to discuss">
                    <option value="Prefer to discuss">Prefer to discuss during consultation</option>
                    <option value="KES 350,000 – KES 750,000">KES 350,000 – KES 750,000</option>
                    <option value="KES 750,000 – KES 1,500,000">KES 750,000 – KES 1,500,000</option>
                    <option value="KES 1,500,000 – KES 3,000,000">KES 1,500,000 – KES 3,000,000</option>
                    <option value="KES 3,000,000 – KES 6,000,000">KES 3,000,000 – KES 6,000,000</option>
                    <option value="KES 6,000,000+ (Grand Luxury / Multi-Day)">KES 6,000,000+ (Grand Luxury / Multi-Day)</option>
                  </select>
                </label>

                <label>
                  Tell us about your celebration vision
                  <textarea
                    name="details"
                    rows={5}
                    placeholder="Share your dream aesthetic, family cultural traditions, preferred vibe, or specific coordination needs..."
                  />
                </label>

                <button className="button button-dark" type="submit">
                  Send Event Enquiry <ArrowUpRight size={16} />
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
    </SiteShell>
  )
}
