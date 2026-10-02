import { ArrowUpRight } from 'lucide-react'
import { CtaBand, SectionIntro, SiteShell } from '@/components/site-shell'

const steps = [
  [
    'Initial Enquiry & Cultural Brief',
    'Share your celebration type, cultural traditions, preferred date, venue dreams, and estimated guest count.',
  ],
  [
    'Discovery Consultation',
    'We meet to explore your vision, family protocols, vendor desires, and establish a clear planning trajectory.',
  ],
  [
    'Creative Concept & Styling Board',
    'We craft an opulent design board blending warm African palettes, bespoke floral installations, and refined tablescapes.',
  ],
  [
    'Budget Architecture & Contracts',
    'A transparent investment blueprint structured around your top priorities, with complete cost clarity.',
  ],
  [
    'Venue Sourcing & Vendor Curation',
    'We contract and manage Kenya’s finest caterers, sound engineers, MCs, traditional musicians, and security teams.',
  ],
  [
    'Family Protocols & Run-of-Show',
    'We lock down every ceremony detail—from elder arrival and traditional blessings to banquet service and dance floor cues.',
  ],
  [
    'Day-Of Flawless Orchestration',
    'You and your families celebrate stress-free while our experienced coordination team steers every moving part seamlessly.',
  ],
  [
    'Post-Event Wrap-Up & Reflections',
    'We oversee vendor pack-downs, finalize venue handovers, and ensure your celebration ends on an absolute high note.',
  ],
]

const faqs = [
  [
    'How far in advance should we engage an event planner in Kenya?',
    'For peak celebration seasons (August through December and Easter), we recommend booking 6 to 12 months in advance to secure Kenya’s top venues and vendors. For corporate galas and private celebrations, 2 to 4 months is generally ideal.',
  ],
  [
    'Do you coordinate traditional ceremonies like Ruracio and Koito?',
    'Yes, with great pride and cultural reverence. We have extensive experience coordinating Kikuyu Ruracio, Kalenjin Koito, Luo traditional introductions, Gusaba, and inter-cultural ceremonies, ensuring elder protocols, authentic food service, and cultural customs are handled flawlessly.',
  ],
  [
    'Do you manage destination celebrations outside Nairobi?',
    'Absolutely. We frequently plan and execute luxury destination weddings and retreats across Kenya, including Naivasha lakefronts, Limuru tea farm estates, Mount Kenya lodges, and coastal celebrations in Diani, Watamu, and Kilifi.',
  ],
  [
    'Do you manage event décor and floral styling directly?',
    'Yes. We offer complete event design and visual styling services—including custom luxury tablescapes, African botanical and protea floral installations, ambient festoon lighting, and grand entryway decor.',
  ],
  [
    'Can you work within a specific family budget?',
    'Yes. Every celebration is tailored around your investment parameters. We provide honest budget guidance and leverage our longstanding relationships with Kenyan vendors to maximize quality, aesthetics, and value.',
  ],
  [
    'What happens on the day of the event?',
    'Our lead planners and on-ground coordination team arrive early to manage load-in, coordinate suppliers, conduct sound checks, welcome VIPs and elders, keep the timeline on track, and discreetly resolve any surprises.',
  ],
]

export default function ProcessPage() {
  return (
    <SiteShell>
      <main>
        <section className="page-hero">
          <div className="container">
            <span className="eyebrow">THE PLANNING PROCESS</span>
            <h1>
              A seamless path to<br />
              <em>an extraordinary day.</em>
            </h1>
            <p>
              Planning an African celebration should feel joyful, organized, and culturally grounded. Here is how we bring your vision to life.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionIntro
              eyebrow="HOW IT WORKS"
              title="From first conversation to final celebration"
              text="We listen attentively, bring calm structure to the complexities, and ensure every detail honors your story."
            />
            <div className="detail-process">
              {steps.map(([title, desc], i) => (
                <div key={title}>
                  <span>0{i + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section cream-section">
          <div className="container faq">
            <SectionIntro
              eyebrow="GOOD TO KNOW"
              title="Frequently asked questions"
              text="Everything you need to know about partnering with our event planning house in Kenya."
            />
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <ArrowUpRight size={18} />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <CtaBand />
      </main>
    </SiteShell>
  )
}
