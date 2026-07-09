import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import type { LightboxItem } from '../App'
import { useI18n } from '../i18n/I18nContext'

function Stars({ count }: { count: number }) {
  return (
    <div className="flex justify-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? 'text-white' : 'text-white/20'}
          fill={i < count ? 'currentColor' : 'none'}
        />
      ))}
    </div>
  )
}

export default function Testimonials({ onMediaClick }: { onMediaClick: (item: LightboxItem) => void }) {
  const { t } = useI18n()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const review = testimonials[current]

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 md:py-32 section-padding bg-brand-900"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="text-white/50 font-body text-sm tracking-[0.3em] uppercase mb-4">{t('testimonials.kicker')}</p>
          <h2 className="font-display text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
            {t('testimonials.title')}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 relative"
        >
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-center px-4 md:px-16 flex flex-col items-center"
          >
            <Stars count={review.rating} />

            <blockquote className="mt-6 text-white/80 font-body text-lg sm:text-xl leading-relaxed max-w-2xl">
              “{review.text}”
            </blockquote>

            <div className="mt-8">
              <p className="text-white font-display text-lg">{review.author}</p>
              <p className="text-white/35 text-sm mt-1">{t('testimonials.source')}</p>
            </div>

            {review.images.length > 0 && (
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {review.images.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => onMediaClick({ kind: 'image', src: img, alt: `Alavarium - ${review.author}` })}
                    className="w-20 h-20 sm:w-24 sm:h-24 overflow-hidden rounded-md border border-white/10 hover:border-white/40 transition-colors cursor-zoom-in group"
                    aria-label={`Alavarium - ${review.author} ${i + 1}`}
                  >
                    <img
                      src={img}
                      alt={`Alavarium - ${review.author} ${i + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </button>
                ))}
              </div>
            )}

            <a
              href={review.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 hover:border-white/60 text-white/80 hover:text-white text-xs tracking-[0.2em] uppercase font-body transition-colors"
            >
              <span>{t('testimonials.seeOnGoogle')}</span>
              <ExternalLink size={14} />
            </a>
          </motion.div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="p-2 text-white/30 hover:text-white transition-colors"
              aria-label={t('testimonials.prev')}
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-white w-6' : 'bg-white/25'
                  }`}
                  aria-label={`Ir para testemunho ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 text-white/30 hover:text-white transition-colors"
              aria-label={t('testimonials.next')}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
