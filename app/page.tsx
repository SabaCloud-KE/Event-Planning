import Link from 'next/link'
import NextImage from 'next/image'
import { ArrowDownRight, ArrowUpRight, Check, MessageCircle, Sparkles } from 'lucide-react'
import { ArrowLink, CtaBand, Image, SectionIntro, SiteShell, images } from '@/components/site-shell'

const eventTypes = [
  ['Weddings', 'From intimate ceremonies to elegant receptions, we coordinate the details that make your wedding uniquely yours.', images.hero],
  ['Traditional Ceremonies', 'Meaningful cultural celebrations planned with care, respect and attention to the traditions that matter to your family.', images.traditional],
  ['Corporate Events', 'Professional conferences, launches, dinners, team events and corporate celebrations executed with precision.', images.corporate],
  ['Private Celebrations', 'Birthdays, anniversaries, graduations, baby showers and memorable gatherings for life’s special milestones.', images.party],
  ['Engagement & Pre-Wedding', 'Beautifully coordinated engagement parties, bridal showers, traditional introductions and more.', images.couple],
  ['Special Events', 'Custom events designed around your unique idea, audience, venue and occasion.', images.floral],
]

const benefits = ['Personalized planning', 'Creative styling', 'Seamless coordination', 'Attention to detail', 'Local expertise', 'Professional execution']

export default function Page() {
  return <SiteShell>
    <main>
      <section className="hero"><NextImage src={images.hero} alt="Elegant outdoor wedding reception" fill priority sizes="100vw" quality={78} className="hero-image" /><div className="hero-overlay" /><div className="container hero-content"><span className="eyebrow">EVENT PLANNING & COORDINATION <i>•</i> KENYA</span><h1>Creating moments.<br /><em>Planning memories.</em></h1><p>From beautiful weddings and meaningful traditional ceremonies to corporate celebrations and unforgettable private events, we bring your vision to life with thoughtful planning and seamless coordination.</p><div className="button-row"><Link href="/contact" className="button button-light">Plan Your Event <ArrowUpRight size={16} /></Link><Link href="/our-work" className="button button-text-light">Explore Our Work <ArrowDownRight size={16} /></Link></div></div><div className="hero-note"><span>Scroll to explore</span><ArrowDownRight size={18} /></div></section>

      <section className="intro-section section"><div className="container split-layout"><div><SectionIntro eyebrow="OUR APPROACH" title="More than an event. It’s your moment." text="Every celebration has a story. Our role is to help you tell it beautifully. From the first idea to the final guest departure, we coordinate the details, people and moving parts behind your event so you can focus on experiencing the moment." /><ArrowLink href="/about">Discover our approach</ArrowLink></div><div className="image-frame tall"><Image src={images.couple} alt="Couple celebrating at a beautifully styled event" /><span className="image-caption">Thoughtfully planned. Beautifully remembered.</span></div></div></section>

      <section className="section cream-section"><div className="container"><SectionIntro eyebrow="WHAT WE DO" title="Events we bring to life" text="From intimate celebrations to grand occasions, we create experiences designed around you." /><div className="event-grid">{eventTypes.map(([name, description, image], i) => <Link href="/services" className={`event-card ${i === 0 ? 'featured' : ''}`} key={name}><div className="event-image"><Image src={image} alt={`${name} event inspiration`} /></div><div className="event-card-copy"><span className="card-number">0{i + 1}</span><h3>{name}</h3><p>{description}</p><ArrowUpRight size={18} /></div></Link>)}</div></div></section>

      <section className="section"><div className="container"><div className="section-heading-row"><SectionIntro eyebrow="EVENT INSPIRATION" title="Moments we help create" text="A glimpse into the details, atmosphere and possibilities we love bringing together." /><ArrowLink href="/our-work">View full gallery</ArrowLink></div><div className="masonry"><Image src={images.floral} alt="Floral event styling" /><Image src={images.table} alt="Styled event table" /><Image src={images.party} alt="Celebration lights and guests" /><Image src={images.traditional} alt="Cultural event inspiration" /></div></div></section>

      <section className="section dark-section"><div className="container trust-grid"><div><SectionIntro light eyebrow="THE DIFFERENCE" title="Why clients trust us" text="The work is in the details. The feeling is in the experience." /><Link href="/about" className="arrow-link light-link">More about us <ArrowUpRight size={16} /></Link></div><div className="benefit-list">{benefits.map((benefit, i) => <div className="benefit" key={benefit}><span>0{i + 1}</span><div><h3>{benefit}</h3><p>{['Every event is built around your vision, priorities and requirements.', 'We transform ideas into cohesive visual experiences.', 'We coordinate the moving parts so you can enjoy your event.', 'From major decisions to the smallest details, nothing is an afterthought.', 'We understand the Kenyan event environment and celebrations.', 'Clear communication, organized planning and reliable execution.'][i]}</p></div><Check size={17} /></div>)}</div></div></section>

      <section className="section process-section"><div className="container"><SectionIntro eyebrow="THE JOURNEY" title="From idea to celebration" text="A considered process, designed to make planning feel clear and enjoyable." /><div className="process-grid">{['Tell us your vision', 'Consultation', 'Plan & design', 'Coordinate', 'Celebrate'].map((step, i) => <div className="process-step" key={step}><span>0{i + 1}</span><div className="step-line" /><h3>{step}</h3><p>{['Share your event type, date, location, guest count and ideas.', 'We discuss your vision, requirements, priorities and budget.', 'We develop the concept, timeline, styling and coordination plan.', 'We work with venues, suppliers and the event team to bring it together.', 'You enjoy the moment while we take care of the details.'][i]}</p></div>)}</div></div></section>

      <section className="section cream-section"><div className="container split-layout about-preview"><div className="image-frame"><Image src={images.corporate} alt="Elegant event dinner setting" /></div><div><SectionIntro eyebrow="A LITTLE ABOUT US" title="We plan with purpose. We celebrate with you." text="[Company Name] is a Kenyan event planning and coordination company focused on creating meaningful, beautifully executed celebrations. Our approach combines thoughtful planning, creative design and dependable coordination." /><ArrowLink href="/about">Learn more about us</ArrowLink></div></div></section>

      <section className="section social-section"><div className="container"><div className="section-heading-row"><SectionIntro eyebrow="FOLLOW THE MOMENTS" title="Behind the scenes & beautiful details" text="Follow along for inspiration, planning notes and celebrations from our world." /><span className="social-handle"><Sparkles size={16} /> @yourhandle</span></div><div className="social-grid">{[images.hero, images.table, images.floral, images.party, images.couple, images.traditional].map((src, i) => <Image key={src} src={src} alt={`Event inspiration ${i + 1}`} />)}</div></div></section>
      <CtaBand />
    </main>
  </SiteShell>
}
