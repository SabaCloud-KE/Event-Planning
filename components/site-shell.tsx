'use client'

import Link from 'next/link'
import NextImage from 'next/image'
import { useState } from 'react'
import { ArrowUpRight, Camera, Menu, MessageCircle, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Contact', href: '/contact' },
]

export const WHATSAPP_NUMBER = ''

export function whatsappLink(message = "Hello, I'd like to enquire about your event planning services.") {
  return WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}` : '#contact'
}

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="Event Brand Logo home">
          <span className="brand-mark">EB</span>
          <span><strong>EVENT BRAND</strong><small>PLANNING & COORDINATION</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/contact" className="button button-dark button-small">Get a Quote <ArrowUpRight size={15} /></Link>
        </nav>
        <button className="menu-button" onClick={() => setOpen(true)} aria-label="Open navigation menu"><Menu size={23} /></button>
      </div>
      {open && <div className="mobile-menu" role="dialog" aria-label="Mobile navigation">
        <div className="mobile-menu-top"><span className="eyebrow">EVENT BRAND</span><button className="icon-button" onClick={() => setOpen(false)} aria-label="Close navigation menu"><X size={22} /></button></div>
        <nav>{navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={16} /></Link>)}</nav>
        <Link href="/contact" className="button button-dark" onClick={() => setOpen(false)}>Get a Quote <ArrowUpRight size={16} /></Link>
        <a className="mobile-whatsapp" href={whatsappLink()}><MessageCircle size={17} /> WhatsApp Us</a>
      </div>}
    </header>
  )
}

export function Footer() {
  return <footer className="site-footer">
    <div className="container footer-grid">
      <div><Link href="/" className="brand brand-footer"><span className="brand-mark">EB</span><span><strong>EVENT BRAND</strong><small>PLANNING & COORDINATION</small></span></Link><p className="footer-copy">Thoughtful planning, creative styling and seamless coordination for celebrations in Kenya.</p></div>
      <div><h3>Explore</h3>{navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
      <div><h3>Events</h3><Link href="/services#weddings">Weddings</Link><Link href="/services#traditional">Traditional Ceremonies</Link><Link href="/services#corporate">Corporate Events</Link><Link href="/services#private">Private Celebrations</Link><Link href="/services#styling">Event Styling</Link></div>
      <div><h3>Contact</h3><span>Nairobi, Kenya</span><span>Phone / email to be added</span><a href={whatsappLink()}><MessageCircle size={15} /> WhatsApp</a><div className="socials"><a href="#instagram" aria-label="Instagram"><Camera size={18} /></a><a href="#facebook" aria-label="Facebook">f</a><a href="#tiktok" aria-label="TikTok">♪</a></div></div>
    </div>
    <div className="container footer-bottom"><span>© 2026 [Company Name]. All Rights Reserved.</span><span>Designed for meaningful moments.</span></div>
  </footer>
}

export function WhatsAppFloat() { return <a className="whatsapp-float" href={whatsappLink()} aria-label="Chat on WhatsApp"><MessageCircle size={23} /><span>Chat with us</span></a> }

export function SiteShell({ children }: { children: React.ReactNode }) { return <><Header />{children}<WhatsAppFloat /><Footer /></> }

export const images = {
  hero: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&fm=webp&w=1440&q=70',
  couple: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&fm=webp&w=900&q=70',
  table: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&fm=webp&w=900&q=70',
  traditional: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&fm=webp&w=900&q=70',
  floral: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&fm=webp&w=900&q=70',
  corporate: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&fm=webp&w=900&q=70',
  party: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&fm=webp&w=900&q=70',
}

export const ArrowLink = ({ href, children }: { href: string; children: React.ReactNode }) => <Link className="arrow-link" href={href}>{children}<ArrowUpRight size={16} /></Link>

export const Image = ({ src, alt, className = '', priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) => <NextImage src={src} alt={alt} width={1200} height={900} sizes="(max-width: 768px) 100vw, 50vw" className={className} loading={priority ? undefined : 'lazy'} priority={priority} quality={72} />

export const SectionIntro = ({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) => <div className={`section-intro ${light ? 'light' : ''}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>

export const CtaBand = () => <section className="cta-band"><div className="container cta-content"><span className="eyebrow">START A CONVERSATION</span><h2>Let&apos;s plan something unforgettable.</h2><p>Tell us about your event and let&apos;s start turning your ideas into a celebration worth remembering.</p><div className="button-row"><Link href="/contact" className="button button-light">Get a Quote <ArrowUpRight size={16} /></Link><a href={whatsappLink()} className="button button-outline-light"><MessageCircle size={17} /> Chat on WhatsApp</a></div></div></section>
