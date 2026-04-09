import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data/testimonials'

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
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

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]

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
          <p className="text-white/50 font-body text-sm tracking-[0.3em] uppercase mb-4">Testemunhos</p>
          <h2 className="font-display text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
            O que dizem os nossos clientes
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
            className="text-center px-4 md:px-16"
          >
            <Stars count={t.rating} />

            <blockquote className="mt-6 text-white/80 font-body text-lg sm:text-xl leading-relaxed">
              {t.text}
            </blockquote>

            <div className="mt-8">
              <p className="text-white font-display text-lg">{t.author}</p>
              <p className="text-white/35 text-sm mt-1">
                {t.source} &middot; {t.date}
              </p>
            </div>
          </motion.div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="p-2 text-white/30 hover:text-white transition-colors"
              aria-label="Testemunho anterior"
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
              aria-label="Próximo testemunho"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
