export const images = {
  hero: 'https://images.unsplash.com/photo-1684253866485-b26f847ff97e?auto=format&fit=crop&fm=webp&w=1600&q=80',
  couple: 'https://images.unsplash.com/photo-1665416557437-6dd757e90ce8?auto=format&fit=crop&fm=webp&w=1000&q=75',
  table: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&fm=webp&w=1000&q=75',
  traditional: 'https://images.unsplash.com/photo-1661332517932-2d441bfb2994?auto=format&fit=crop&fm=webp&w=1000&q=75',
  traditionalCelebration: 'https://images.unsplash.com/photo-1660675133902-acd1b057f75d?auto=format&fit=crop&fm=webp&w=1000&q=75',
  floral: 'https://images.unsplash.com/photo-1617813437449-c4f8f233dcd6?auto=format&fit=crop&fm=webp&w=1000&q=75',
  corporate: 'https://images.unsplash.com/photo-1513623935135-c896b59073c1?auto=format&fit=crop&fm=webp&w=1000&q=75',
  party: 'https://images.unsplash.com/photo-1699730164892-d7c433524ff3?auto=format&fit=crop&fm=webp&w=1000&q=75',
  adornment: 'https://images.unsplash.com/photo-1618999114008-fbf937170cdb?auto=format&fit=crop&fm=webp&w=1000&q=75',
} as const

export type ImageKey = keyof typeof images
