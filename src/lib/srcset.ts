// Smaller WebP variants generated next to each original (same picture, exactly the same aspect ratio).
// The original stays as the largest candidate, so nothing can look softer on a large screen.
// Widths are per file: a variant only exists where its height is a whole number of pixels.
const A = '/assets/alavariumcocktailbar__'
const STD = [400, 800, 1200]
const IMAGES: Record<string, { full: number; widths: number[] }> = {
  '/hero.jpg': { full: 4032, widths: [800, 1200, 1600, 2000, 2560, 3400] },
  '/logo.png': { full: 1024, widths: [96, 192, 384, 640] },
  [`${A}2018-11-17T214154.000Z.jpg`]: { full: 1080, widths: [400, 800] },
  [`${A}2020-05-22T171716.000Z.jpg`]: { full: 1440, widths: STD },
  [`${A}2023-04-11T193834.000Z.webp`]: { full: 962, widths: [481] },
  [`${A}2024-01-11T132334.000Z.webp`]: { full: 1440, widths: STD },
  [`${A}2024-12-27T140048.000Z.jpg`]: { full: 1440, widths: STD },
  [`${A}2026-02-12T121149.000Z.jpg`]: { full: 1440, widths: [540, 900, 1260] },
  [`${A}2026-03-25T180321.000Z.jpg`]: { full: 1440, widths: STD },
  [`${A}2026-04-01T090048.000Z.jpg`]: { full: 1440, widths: [402, 801, 1200] },
  [`${A}2026-04-01T090048.000Z_1.jpg`]: { full: 1440, widths: [402, 801, 1200] },
  [`${A}2026-04-02T130942.000Z.jpg`]: { full: 1440, widths: STD },
}

// Returns undefined for an image without variants, so the <img> keeps its plain src.
export function srcSet(src: string): string | undefined {
  const img = IMAGES[src]
  if (!img) return undefined
  const base = src.replace(/\.(jpe?g|png|webp)$/, '')
  return [...img.widths.map((w) => `${base}-${w}w.webp ${w}w`), `${src} ${img.full}w`].join(', ')
}
