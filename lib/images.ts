export const images = {
  hero: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&fm=webp&w=1440&q=70',
  couple: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&fm=webp&w=900&q=70',
  table: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&fm=webp&w=900&q=70',
  traditional: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&fm=webp&w=900&q=70',
  floral: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&fm=webp&w=900&q=70',
  corporate: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&fm=webp&w=900&q=70',
  party: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&fm=webp&w=900&q=70',
} as const

export type ImageKey = keyof typeof images
