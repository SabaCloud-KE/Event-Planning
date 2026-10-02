import { ArrowUpRight } from 'lucide-react'
import { CtaBand, Image, SectionIntro, SiteShell } from '@/components/site-shell'
import { images } from '@/lib/images'

const services = [
  [
    'weddings',
    'Luxury Weddings & Harusi',
    'From romantic garden vows to grand African wedding receptions, we orchestrate every opulent detail that transforms your love story into a regal masterpiece.',
    images.hero,
    'Bespoke concept & styling boards, budget governance, premier venue sourcing (Nairobi, Naivasha, Diani Beach), vendor vetting, timeline choreography, and full day-of event management.',
  ],
  [
    'traditional',
    'Traditional Ceremonies & Ruracio',
    'Sacred cultural milestones planned with profound respect, ancestral dignity, and meticulous attention to the traditions and protocols of both families.',
    images.traditional,
    'Cultural protocol advisory, elder reception arrangements, traditional attire coordination, family liaison, authentic catering, cultural instrumentation/musicians, and respectful day-of execution.',
  ],
  [
    'corporate',
    'Corporate Galas, Summits & Awards',
    'High-profile business summits, pan-African executive banquets, end-of-year galas, and brand launches executed with elite precision.',
    images.corporate,
    'Executive concept creation, venue transformation, technical AV and staging coordination, VIP diplomatic protocol, guest journey management, and run-of-show execution.',
  ],
  [
    'private',
    'Private Milestones & Anniversaries',
    'Milestone birthdays, family reunions, graduations, and golden anniversaries celebrating life’s greatest blessings in warmth and luxury.',
    images.party,
    'Bespoke party concept design, entertainment and DJ/MC curation, interactive culinary experiences, ambient lighting, and personalized celebratory favors.',
  ],
  [
    'styling',
    'African Luxury Styling & Floral Décor',
    'Opulent visual environments blending warm African earth tones, handcrafted textures, radiant candelabras, and exotic floral installations.',
    images.table,
    'Full venue styling, artisanal tablescapes, indigenous and exotic floral artistry (proteas, orchids, tropical greens), atmospheric lighting, and dramatic entryway architecture.',
  ],
]

export default function ServicesPage() {
  return (
    <SiteShell>
      <main>
        <section className="page-hero">
          <div className="container">
            <span className="eyebrow">SERVICES &amp; EXPERTISE</span>
            <h1>
              Mastering every detail.<br />
              <em>Creating every memory.</em>
            </h1>
            <p>
              Bespoke event planning, cultural styling, and seamless coordination for extraordinary celebrations across Kenya.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container service-list">
            {services.map(([id, title, description, image, details], i) => (
              <article className="service-row" id={id} key={id}>
                <div className="service-number">0{i + 1}</div>
                <div className="image-frame">
                  <Image src={image} alt={`${title} inspiration`} />
                </div>
                <div>
                  <span className="eyebrow">{i === 4 ? 'STYLE & VISUAL DESIGN' : 'PLANNING & COORDINATION'}</span>
                  <h2>{title}</h2>
                  <p className="lead">{description}</p>
                  <p>{details}</p>
                  <a href="/contact" className="arrow-link">
                    Plan this celebration <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <CtaBand />
      </main>
    </SiteShell>
  )
}
