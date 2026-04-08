export interface Testimonial {
  author: string
  rating: number
  source: 'Google' | 'TripAdvisor'
  date: string
  text: string
}

export const testimonials: Testimonial[] = [
  {
    author: 'Rui M.',
    rating: 5,
    source: 'Google',
    date: 'Mar 2026',
    text: 'Ambiente fantástico e cocktails muito bem elaborados. A equipa é super atenciosa e as sugestões foram todas acertadas. Um dos melhores bares de Aveiro sem dúvida!',
  },
  {
    author: 'Sara L.',
    rating: 5,
    source: 'TripAdvisor',
    date: 'Jan 2026',
    text: 'Adorámos a experiência. O Espresso Martini é de outro nível e o ambiente é perfeito para uma noite a dois. Voltaremos sempre que estivermos em Aveiro.',
  },
  {
    author: 'Marco T.',
    rating: 5,
    source: 'Google',
    date: 'Fev 2026',
    text: 'Cocktails incríveis, serviço impecável. Experimentei o cocktail autoral da casa e fiquei surpreendido. O espaço tem uma decoração muito elegante e acolhedora.',
  },
  {
    author: 'Ana P.',
    rating: 4,
    source: 'TripAdvisor',
    date: 'Dez 2025',
    text: 'Ótimo bar com uma carta variada. Os cocktails clássicos são muito bem feitos e os autorais surpreendem pela criatividade. O serviço é simpático e atento.',
  },
  {
    author: 'João R.',
    rating: 5,
    source: 'Google',
    date: 'Nov 2025',
    text: 'Sem dúvida o melhor cocktail bar da cidade. O Negroni deles é absolutamente perfeito e o ambiente à noite é fantástico. Recomendo vivamente!',
  },
]
