import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Instagram } from 'lucide-react'
import type { LightboxItem } from '../App'

const GALLERY_IMAGES = [
  '/assets/alavariumcocktailbar__2026-04-02T130942.000Z.jpg',
  '/assets/alavariumcocktailbar__2026-04-01T090048.000Z.jpg',
  '/assets/alavariumcocktailbar__2026-03-25T180321.000Z.jpg',
  '/assets/alavariumcocktailbar__2026-02-12T121149.000Z.jpg',
  '/assets/alavariumcocktailbar__2024-01-11T132334.000Z.webp',
  '/assets/alavariumcocktailbar__2023-04-11T193834.000Z.webp',
  '/assets/alavariumcocktailbar__2020-05-22T171716.000Z.jpg',
  '/assets/alavariumcocktailbar__2018-11-17T214154.000Z.jpg',
  '/assets/alavariumcocktailbar__2026-04-01T090048.000Z_1.jpg',
  '/assets/alavariumcocktailbar__2024-12-27T140048.000Z.jpg',
]

const GALLERY_VIDEOS = [
  '/assets/alavariumcocktailbar__2023-04-25T182758.000Z.mp4',
  '/assets/alavariumcocktailbar__2023-06-20T131810.000Z.mp4',
]

type GalleryMedia = { src: string; kind: 'image' | 'video' }

const galleryMedia: GalleryMedia[] = [
  ...GALLERY_IMAGES.slice(0, 3).map((src) => ({ src, kind: 'image' as const })),
  { src: GALLERY_VIDEOS[0], kind: 'video' as const },
  ...GALLERY_IMAGES.slice(3, 7).map((src) => ({ src, kind: 'image' as const })),
  { src: GALLERY_VIDEOS[1], kind: 'video' as const },
  ...GALLERY_IMAGES.slice(7).map((src) => ({ src, kind: 'image' as const })),
]

export default function Gallery({ onMediaClick }: { onMediaClick: (item: LightboxItem) => void }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-24 md:py-32 section-padding bg-brand-50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-brand-500 font-body text-sm tracking-[0.3em] uppercase mb-4">Galeria</p>
            <h2 className="font-display text-brand-900 text-3xl sm:text-4xl md:text-5xl leading-tight">
              Momentos & Sabores
            </h2>
          </div>
          <a
            href="https://www.instagram.com/alavariumcocktailbar/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-brand-600 hover:text-brand-900 text-sm font-medium transition-colors"
          >
            <Instagram size={16} />
            <span>Ver mais no Instagram</span>
          </a>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 [column-fill:_balance]">
          {galleryMedia.map((media, i) => (
            <motion.div
              key={`${media.src}-${i}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="mb-3 break-inside-avoid overflow-hidden group"
            >
              {media.kind === 'video' ? (
                <button
                  type="button"
                  onClick={() => onMediaClick({ kind: 'video', src: media.src })}
                  className="relative w-full aspect-[9/16] max-h-[620px] bg-black cursor-zoom-in"
                >
                  <video
                    src={media.src}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => onMediaClick({ kind: 'image', src: media.src, alt: 'Alavarium' })}
                  className="w-full cursor-zoom-in"
                >
                  <img
                    src={media.src}
                    alt={`Alavarium ${i + 1}`}
                    loading="lazy"
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
