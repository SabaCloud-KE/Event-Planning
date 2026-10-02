import { ArrowUpRight, Check } from 'lucide-react'
import { ArrowLink, CtaBand, Image, SectionIntro, SiteShell } from '@/components/site-shell'
import { images } from '@/lib/images'

const values = [
  ['Cultural Reverence', 'Honouring African traditions, family genealogies, and cultural customs with care and authenticity.'],
  ['Opulent Creativity', 'Fusing rich African textures, earth tones, and modern luxury design into bespoke celebration concepts.'],
  ['Integrity & Trust', 'Transparent pricing, honest advice, and dependable commitments you and your family can rely upon.'],
  ['Attentive Coordination', 'Managing every logistical timeline, elder greeting, and vendor queue with quiet mastery.'],
  ['Collaborative Spirit', 'Working hand-in-hand with families, couples, and top-tier African artisans to bring ideas alive.'],
  ['Ubuntu Hospitality', 'Treating every single attendee not just as a guest, but as an esteemed part of the celebration.'],
]

export default function AboutPage() {
  return (
    <SiteShell>
      <main>
        {/* Page Hero */}
        <section className="page-hero">
          <div className="container">
            <span className="eyebrow">ABOUT EVENT BRAND KENYA</span>
            <h1>
              Flawless planning is<br />
              <em>felt in every moment.</em>
            </h1>
            <p>
              We curate the sanctuary for you and your family to be fully immersed in the joy, honour, and beauty of African celebration.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="section">
          <div className="container split-layout">
            <div className="image-frame tall">
              <Image src={images.adornment} alt="African bride adorned in regal celebration attire" />
            </div>
            <div>
              <SectionIntro
                eyebrow="OUR STORY &amp; HERITAGE"
                title="Rooted in Kenya. Celebrating African grandeur."
                text="Event Brand Kenya was established to bridge authentic cultural heritage with world-class event production. In East Africa, celebrations are landmark milestones that weave families together."
              />
              <p className="body-copy">
                From coordinating multi-day traditional introduction rites and Ruracio dowry ceremonies to staging luxury lakefront wedding receptions in Naivasha and high-level corporate galas in Nairobi, our role is to bring calm, structure, and opulent aesthetic distinction to your milestone.
              </p>
              <ArrowLink href="/contact">Begin Your Journey With Us</ArrowLink>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="section cream-section">
          <div className="container">
            <SectionIntro
              eyebrow="OUR FOUNDATION"
              title="Values that shape every celebration"
              text="The guiding principles woven into every client consultation, family engagement, and event day."
            />
            <div className="values-grid">
              {values.map(([name, desc], i) => (
                <div className="value-card" key={name}>
                  <span>0{i + 1}</span>
                  <h3>{name}</h3>
                  <p>{desc}</p>
                  <Check size={18} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Promise Dark Section */}
        <section className="section dark-section">
          <div className="container split-layout about-dark">
            <div>
              <SectionIntro
                light
                eyebrow="OUR SACRED PROMISE"
                title="You bring the vision. We bring the tranquility."
                text="We manage every complex logistic, family dynamic, and timeline detail so you can focus entirely on celebrating the people who matter most."
              />
            </div>
            <div className="image-frame">
              <Image src={images.table} alt="Warm candlelit event dinner setting" />
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
    </SiteShell>
  )
}
