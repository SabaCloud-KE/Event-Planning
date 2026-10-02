import Link from 'next/link'
import NextImage from 'next/image'
import { ArrowDownRight, ArrowUpRight, Check, Sparkles } from 'lucide-react'
import { ArrowLink, CtaBand, Image, SectionIntro, SiteShell } from '@/components/site-shell'
import { images } from '@/lib/images'

const eventTypes = [
  [
    'Luxury Weddings & Harusi',
    'From sun-drenched outdoor garden ceremonies to grand banquet receptions, we curate every romantic detail that makes your love story unforgettable.',
    images.hero,
  ],
  [
    'Traditional Ceremonies & Ruracio',
    'Sacred cultural milestones honoured with profound respect, vibrant traditional styling, and seamless coordination for your families.',
    images.traditional,
  ],
  [
    'Cultural Introductions & Blessings',
    'Dowry celebrations, family introductions, and cultural blessings orchestrated with authentic customs and contemporary luxury.',
    images.traditionalCelebration,
  ],
  [
    'Corporate Galas & Summits',
    'Executive banquets, pan-African conferences, and brand launches executed with immaculate punctuality and sophistication.',
    images.corporate,
  ],
  [
    'Private Milestones & Soirées',
    'Joyful milestone birthdays, anniversaries, and family reunions celebrating life’s blessings surrounded by beauty and warmth.',
    images.party,
  ],
  [
    'Bespoke Styling & Floral Décor',
    'Transformative tablescapes, exotic botanical installations, warm lantern lighting, and cultural design concepts.',
    images.table,
  ],
]

const benefits = [
  'Deep Cultural Reverence',
  'Bespoke African Luxury',
  'Stress-Free Coordination',
  'Meticulous Attention to Detail',
  'Elite Kenyan Vendor Network',
  'Warm Ubuntu Hospitality',
]

const benefitDescriptions = [
  'Profound understanding of Kenyan family protocols, dowry customs, and traditional milestones.',
  'Infusing rich African textures, warm earthy palettes, and regal opulence into modern design.',
  'We manage vendors, schedules, and unexpected dynamics so you stay fully present in the moment.',
  'From floral table centerpieces to elder hospitality, nothing is left to chance.',
  'Trusted relationships with Kenya’s finest venues, caterers, stylists, and master musicians.',
  'Every guest, parent, and elder is welcomed with warmth, dignity, and attentive care.',
]

const processSteps = [
  ['Share Your Vision', 'Tell us about your event type, cultural traditions, preferred location, guest count, and dream aesthetic.'],
  ['Curated Consultation', 'We meet to explore your vision, family priorities, styling concepts, and investment plan.'],
  ['Concept & Design', 'We craft a comprehensive styling board, run-of-show, supplier selection, and cultural protocol plan.'],
  ['Vendor Orchestration', 'We manage caterers, decor stylists, sound, lighting, and venues so every piece aligns harmoniously.'],
  ['Celebrate In Elegance', 'Step into your celebration stress-free while our experienced team coordinates every detail effortlessly.'],
]

export default function Page() {
  return (
    <SiteShell>
      <main>
        {/* African Luxury Hero */}
        <section className="hero">
          <NextImage
            src={images.hero}
            alt="Opulent African wedding celebration in Kenya"
            fill
            priority
            sizes="100vw"
            quality={80}
            className="hero-image"
          />
          <div className="hero-overlay" />
          <div className="container hero-content">
            <span className="eyebrow">BESPOKE EVENT PLANNING &bull; KENYA &bull; EAST AFRICA</span>
            <h1>
              Honouring Heritage.<br />
              <em>Crafting Unforgettable Moments.</em>
            </h1>
            <p>
              From opulent African weddings and deeply meaningful cultural ceremonies (Ruracio, Koito, Gusaba) to premier corporate galas, we bring your vision to life with warmth, grandeur, and seamless coordination.
            </p>
            <div className="button-row">
              <Link href="/contact" className="button button-light">
                Plan Your Event <ArrowUpRight size={16} />
              </Link>
              <Link href="/our-work" className="button button-text-light">
                Explore Our Portfolio <ArrowDownRight size={16} />
              </Link>
            </div>
          </div>
          <div className="hero-note">
            <span>Scroll to explore</span>
            <ArrowDownRight size={18} />
          </div>
        </section>

        {/* Intro Section */}
        <section className="intro-section section">
          <div className="container split-layout">
            <div>
              <SectionIntro
                eyebrow="OUR PHILOSOPHY"
                title="More than an event. A celebration of your story."
                text="In African tradition, every gathering is a tapestry of family, culture, and love. Our purpose is to orchestrate every moving part behind the scenes—navigating logistics, vendor synchronisation, and styling—so you can immerse yourself in joy."
              />
              <ArrowLink href="/about">Discover our approach</ArrowLink>
            </div>
            <div className="image-frame tall">
              <Image src={images.couple} alt="African couple celebrating at a beautifully styled celebration" />
              <span className="image-caption">Rooted in tradition. Elevated by luxury.</span>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="section cream-section">
          <div className="container">
            <SectionIntro
              eyebrow="WHAT WE DO"
              title="Celebrations we bring to life"
              text="From intimate traditional ceremonies in ancestral homesteads to lavish destination celebrations in Naivasha and Diani."
            />
            <div className="event-grid">
              {eventTypes.map(([name, description, image], i) => (
                <Link href="/services" className={`event-card ${i === 0 ? 'featured' : ''}`} key={name}>
                  <div className="event-image">
                    <Image src={image} alt={`${name} celebration inspiration`} />
                  </div>
                  <div className="event-card-copy">
                    <span className="card-number">0{i + 1}</span>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <ArrowUpRight size={18} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Masonry */}
        <section className="section">
          <div className="container">
            <div className="section-heading-row">
              <SectionIntro
                eyebrow="EVENT INSPIRATION"
                title="Moments of African elegance"
                text="A glimpse into the textures, golden sunlight, and vibrant atmosphere we bring together."
              />
              <ArrowLink href="/our-work">View full gallery</ArrowLink>
            </div>
            <div className="masonry">
              <Image src={images.traditional} alt="Traditional African ceremony styling" />
              <Image src={images.table} alt="Warm outdoor banquet tablescape" />
              <Image src={images.party} alt="Celebration toast and happy guests" />
              <Image src={images.traditionalCelebration} alt="Vibrant African traditional wedding celebration" />
            </div>
          </div>
        </section>

        {/* Trust & Heritage Section */}
        <section className="section dark-section">
          <div className="container trust-grid">
            <div>
              <SectionIntro
                light
                eyebrow="THE DIFFERENCE"
                title="Why families & brands trust us"
                text="The beauty is in the cultural authenticity. The peace of mind is in our meticulous coordination."
              />
              <Link href="/about" className="arrow-link light-link">
                More about our philosophy <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="benefit-list">
              {benefits.map((benefit, i) => (
                <div className="benefit" key={benefit}>
                  <span>0{i + 1}</span>
                  <div>
                    <h3>{benefit}</h3>
                    <p>{benefitDescriptions[i]}</p>
                  </div>
                  <Check size={18} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section process-section">
          <div className="container">
            <SectionIntro
              eyebrow="THE JOURNEY"
              title="From vision to celebration"
              text="A warm, collaborative planning experience crafted to make you feel supported at every step."
            />
            <div className="process-grid">
              {processSteps.map(([step, desc], i) => (
                <div className="process-step" key={step}>
                  <span>0{i + 1}</span>
                  <div className="step-line" />
                  <h3>{step}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="section cream-section">
          <div className="container split-layout about-preview">
            <div className="image-frame">
              <Image src={images.adornment} alt="African bride adorned in regal traditional elegance" />
            </div>
            <div>
              <SectionIntro
                eyebrow="KARIBU &bull; ABOUT US"
                title="We plan with intention. We celebrate with soul."
                text="Event Brand Kenya is a premier event planning and coordination house dedicated to curating meaningful, culturally grounded, and aesthetically breathtaking experiences. Our approach harmonizes traditional Kenyan warmth with modern luxury standards."
              />
              <ArrowLink href="/about">Learn more about our team</ArrowLink>
            </div>
          </div>
        </section>

        {/* Social Feed Preview */}
        <section className="section social-section">
          <div className="container">
            <div className="section-heading-row">
              <SectionIntro
                eyebrow="FOLLOW THE MOMENTS"
                title="Behind the scenes & celebrations"
                text="Follow along for celebration diaries, decor moodboards, and live moments from our events."
              />
              <span className="social-handle"><Sparkles size={16} /> @eventbrandke</span>
            </div>
            <div className="social-grid">
              {[
                images.hero,
                images.traditional,
                images.table,
                images.couple,
                images.traditionalCelebration,
                images.floral,
              ].map((src, i) => (
                <Image key={`${src}-${i}`} src={src} alt={`African event inspiration ${i + 1}`} />
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
    </SiteShell>
  )
}
