import { ArrowUpRight } from 'lucide-react'
import { CtaBand, Image, SectionIntro, SiteShell } from '@/components/site-shell'
import { images } from '@/lib/images'

const services = [
  ['weddings', 'Weddings', 'From the first idea to the final dance, we coordinate the details that make your wedding uniquely yours.', images.hero, 'Event concept, budget planning, venue and vendor coordination, styling, timeline and event-day management.'],
  ['traditional', 'Traditional ceremonies', 'Meaningful cultural celebrations planned with care, respect and attention to the traditions that matter to your family.', images.traditional, 'Planning support, family coordination, supplier liaison, timelines and respectful event-day execution.'],
  ['corporate', 'Corporate events', 'Professional conferences, launches, dinners, team events and corporate celebrations executed with precision.', images.corporate, 'Concept development, venue sourcing, supplier management, guest experience and run-of-show.'],
  ['private', 'Private celebrations', 'Birthdays, anniversaries, graduations, baby showers and memorable gatherings for life’s special milestones.', images.party, 'Planning, styling, entertainment coordination, guest flow and the details that make it personal.'],
  ['styling', 'Event styling & décor', 'Cohesive visual experiences that transform a venue and make every detail feel intentional.', images.floral, 'Venue styling, tablescapes, floral styling, lighting coordination and entrance or reception styling.'],
]

export default function ServicesPage() { return <SiteShell><main><section className="page-hero"><div className="container"><span className="eyebrow">WHAT WE DO</span><h1>Planning every detail.<br /><em>Creating every experience.</em></h1><p>Thoughtful support for celebrations of every shape, scale and story.</p></div></section><section className="section"><div className="container service-list">{services.map(([id, title, description, image, details], i) => <article className="service-row" id={id} key={id}><div className="service-number">0{i + 1}</div><div className="image-frame"><Image src={image} alt={`${title} inspiration`} /></div><div><span className="eyebrow">{i === 4 ? 'STYLE & DESIGN' : 'PLANNING & COORDINATION'}</span><h2>{title}</h2><p className="lead">{description}</p><p>{details}</p><a href="/contact" className="arrow-link">Discuss your event <ArrowUpRight size={16} /></a></div></article>)}</div></section><CtaBand /></main></SiteShell> }
