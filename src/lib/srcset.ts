// Smaller WebP variants generated next to each original (same picture, same crop).
// The original stays as the largest candidate, so nothing can look softer on a large screen.
const A = '/assets/alavariumcocktailbar__'
const FULL_WIDTH: Record<string, number> = {
  '/hero.jpg': 4032,
  '/logo.png': 1024,
  [`${A}2018-11-17T214154.000Z.jpg`]: 1080,
  [`${A}2023-04-11T193834.000Z.webp`]: 962,
}
const VARIANTS: Record<string, number[]> = {
  '/hero.jpg': [800, 1200, 1600, 2000, 2560, 3400],
  '/logo.png': [96, 192, 384, 640],
}

export function srcSet(src: string): string {
  const full = FULL_WIDTH[src] ?? 1440
  const widths = VARIANTS[src] ?? [200, 400, 800]
  const base = src.replace(/\.(jpe?g|png|webp)$/, '')
  return [...widths.map((w) => `${base}-${w}w.webp ${w}w`), `${src} ${full}w`].join(', ')
}
