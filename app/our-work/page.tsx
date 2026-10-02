'use client'

import { useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import { CtaBand, Image, SiteShell } from '@/components/site-shell'
import { images } from '@/lib/images'

const categories = ['All', 'Weddings', 'Traditional', 'Corporate', 'Private', 'Styling']

const galleryItems = [
  { src: images.hero, category: 'Weddings', title: 'Lush Garden Harusi Vows, Karen' },
  { src: images.traditional, category: 'Traditional', title: 'Traditional Ruracio Ceremony, Kiambu' },
  { src: images.traditionalCelebration, category: 'Traditional', title: 'Cultural Introduction & Dowry Milestone' },
  { src: images.table, category: 'Styling', title: 'Warm Candlelit Savanna Banquet, Naivasha' },
  { src: images.adornment, category: 'Traditional', title: 'Regal Bridal Adornment & Traditional Attire' },
  { src: images.corporate, category: 'Corporate', title: 'Pan-African Executive Gala, Nairobi' },
  { src: images.party, category: 'Private', title: 'Milestone Jubilee Evening, Diani Beach' },
  { src: images.floral, category: 'Styling', title: 'Protea & Indigenous Botanical Styling' },
  { src: images.couple, category: 'Weddings', title: 'Golden Hour Couple Portrait' },
]

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState('All')
  const [selected, setSelected] = useState<string | null>(null)

  const filteredItems = activeTab === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeTab)

  return (
    <SiteShell>
      <main>
        <section className="page-hero">
          <div className="container">
            <span className="eyebrow">PORTFOLIO &amp; INSPIRATION</span>
            <h1>
              Our <em>celebrations.</em>
            </h1>
            <p>
              A curated collection of African wedding celebrations, sacred cultural ceremonies, and opulent visual styling across Kenya.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="filter-tabs" role="tablist" aria-label="Portfolio categories">
              {categories.map((tab) => (
                <button
                  key={tab}
                  className={activeTab === tab ? 'active' : ''}
                  onClick={() => setActiveTab(tab)}
                  role="tab"
                  aria-selected={activeTab === tab}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="gallery-grid">
              {filteredItems.map((item, i) => (
                <button
                  className="gallery-item"
                  key={`${item.src}-${i}`}
                  onClick={() => setSelected(item.src)}
                  aria-label={`View ${item.title}`}
                >
                  <Image src={item.src} alt={item.title} />
                  <span>
                    {item.title} <ArrowUpRight size={16} />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {selected && (
          <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setSelected(null)}>
            <button onClick={() => setSelected(null)} aria-label="Close image">
              <X size={28} />
            </button>
            <img src={selected} alt="Selected African celebration highlight" onClick={(e) => e.stopPropagation()} />
          </div>
        )}

        <CtaBand />
      </main>
    </SiteShell>
  )
}
