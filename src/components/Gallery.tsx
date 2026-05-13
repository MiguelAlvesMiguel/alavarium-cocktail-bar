import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Instagram } from 'lucide-react'
import type { LightboxItem } from '../App'
import { useI18n } from '../i18n/I18nContext'

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

// Row-by-row visual order; videos interleaved so they don't cluster.
const galleryMedia: GalleryMedia[] = [
  ...GALLERY_IMAGES.slice(0, 3).map((src) => ({ src, kind: 'image' as const })),
  { src: GALLERY_VIDEOS[0], kind: 'video' as const },
  ...GALLERY_IMAGES.slice(3, 7).map((src) => ({ src, kind: 'image' as const })),
  { src: GALLERY_VIDEOS[1], kind: 'video' as const },
  ...GALLERY_IMAGES.slice(7).map((src) => ({ src, kind: 'image' as const })),
]

export default function Gallery({ onMediaClick }: { onMediaClick: (item: LightboxItem) => void }) {
  const { t } = useI18n()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="gallery"
      ref={ref}
      className="pt-24 pb-12 md:pt-32 md:pb-16 section-padding bg-brand-50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-brand-500 font-body text-sm tracking-[0.3em] uppercase mb-4">
              {t('gallery.kicker')}
            </p>
            <h2 className="font-display text-brand-900 text-3xl sm:text-4xl md:text-5xl leading-tight">
              {t('gallery.title')}
            </h2>
          </div>
          <a
            href="https://www.instagram.com/alavariumcocktailbar/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-brand-600 hover:text-brand-900 text-sm font-medium transition-colors"
          >
            <Instagram size={16} />
            <span>{t('gallery.instagram')}</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {galleryMedia.map((media, i) => (
            <motion.div
              key={`${media.src}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: Math.min(i * 0.05, 0.6),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative aspect-square overflow-hidden group bg-brand-100"
            >
              {media.kind === 'video' ? (
                <button
                  type="button"
                  onClick={() => onMediaClick({ kind: 'video', src: media.src })}
                  className="block w-full h-full cursor-zoom-in"
                  aria-label="Ver vídeo"
                >
                  <video
                    src={media.src}
                    muted
                    loop
                    autoPlay
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => onMediaClick({ kind: 'image', src: media.src, alt: 'Alavarium' })}
                  className="block w-full h-full cursor-zoom-in"
                  aria-label="Ver imagem"
                >
                  <img
                    src={media.src}
                    alt={`Alavarium ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
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
