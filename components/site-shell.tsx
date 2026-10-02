'use client'

import Link from 'next/link'
import NextImage from 'next/image'
import { useState } from 'react'
import { ArrowUpRight, Camera, Instagram, MapPin, Menu, MessageCircle, Phone, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Contact', href: '/contact' },
]

export const WHATSAPP_NUMBER = '254700000000'

export function whatsappLink(message = "Hello, I'd like to enquire about your African event planning and coordination services.") {
  return WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}` : '#contact'
}

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="Event Brand Kenya Home">
          <span className="brand-mark">EB</span>
          <span><strong>EVENT BRAND</strong><small>KENYA &bull; BESPOKE CELEBRATIONS</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/contact" className="button button-dark button-small">Get a Quote <ArrowUpRight size={15} /></Link>
        </nav>
        <button className="menu-button" onClick={() => setOpen(true)} aria-label="Open navigation menu"><Menu size={23} /></button>
      </div>
      {open && <div className="mobile-menu" role="dialog" aria-label="Mobile navigation">
        <div className="mobile-menu-top"><span className="eyebrow">EVENT BRAND KENYA</span><button className="icon-button" onClick={() => setOpen(false)} aria-label="Close navigation menu"><X size={22} /></button></div>
        <nav>{navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={16} /></Link>)}</nav>
        <Link href="/contact" className="button button-dark" onClick={() => setOpen(false)}>Get a Quote <ArrowUpRight size={16} /></Link>
        <a className="mobile-whatsapp" href={whatsappLink()}><MessageCircle size={17} /> WhatsApp Us</a>
      </div>}
    </header>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand brand-footer">
            <span className="brand-mark">EB</span>
            <span><strong>EVENT BRAND</strong><small>KENYA &bull; BESPOKE CELEBRATIONS</small></span>
          </Link>
          <p className="footer-copy">
            Thoughtful planning, cultural ceremony styling and seamless coordination for extraordinary celebrations across Kenya and beyond.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>

        <div>
          <h3>Celebrations</h3>
          <Link href="/services#weddings">Luxury Weddings &amp; Harusi</Link>
          <Link href="/services#traditional">Traditional Ceremonies &amp; Ruracio</Link>
          <Link href="/services#corporate">Corporate Galas &amp; Summits</Link>
          <Link href="/services#private">Private Celebrations &amp; Milestones</Link>
          <Link href="/services#styling">Event Styling &amp; Floral Décor</Link>
        </div>

        <div>
          <h3>Contact &amp; Visit</h3>
          <span><MapPin size={15} /> Nairobi, Kenya</span>
          <span><Phone size={15} /> +254 700 000 000</span>
          <a href={whatsappLink()}><MessageCircle size={15} /> Chat on WhatsApp</a>
          <div className="socials">
            <a href="#instagram" aria-label="Instagram"><Camera size={16} /></a>
            <a href="#facebook" aria-label="Facebook">f</a>
            <a href="#tiktok" aria-label="TikTok">♪</a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>&copy; {new Date().getFullYear()} Event Brand Kenya. All Rights Reserved.</span>
        <span>Crafted with pride in Nairobi &bull; Celebrating African Love &amp; Milestones.</span>
      </div>
    </footer>
  )
}

export function WhatsAppFloat() {
  return (
    <a className="whatsapp-float" href={whatsappLink()} aria-label="Chat with our event planners on WhatsApp">
      <MessageCircle size={22} />
      <span>Chat with us</span>
    </a>
  )
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <WhatsAppFloat />
      <Footer />
    </>
  )
}

export { images } from '@/lib/images'

export const ArrowLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link className="arrow-link" href={href}>
    {children}
    <ArrowUpRight size={16} />
  </Link>
)

export const Image = ({ src, alt, className = '', priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) => {
  if (!src) return null
  return (
    <NextImage
      src={src}
      alt={alt}
      width={1200}
      height={900}
      sizes="(max-width: 768px) 100vw, 50vw"
      className={className}
      loading={priority ? undefined : 'lazy'}
      priority={priority}
      quality={78}
    />
  )
}

export const SectionIntro = ({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) => (
  <div className={`section-intro ${light ? 'light' : ''}`}>
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>
)

export const CtaBand = () => (
  <section className="cta-band">
    <div className="container cta-content">
      <span className="eyebrow">KARIBU &bull; START A CONVERSATION</span>
      <h2>Let&apos;s create something unforgettable.</h2>
      <p>Whether an intimate traditional ceremony or a grand safari celebration, tell us your vision and let&apos;s begin crafting a memory worth treasuring.</p>
      <div className="button-row">
        <Link href="/contact" className="button button-light">Plan Your Event <ArrowUpRight size={16} /></Link>
        <a href={whatsappLink()} className="button button-outline-light"><MessageCircle size={17} /> Chat on WhatsApp</a>
      </div>
    </div>
  </section>
)
