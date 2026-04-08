import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Wine, Music, GlassWater } from 'lucide-react'
import type { LightboxItem } from '../App'

const HIGHLIGHTS = [
  {
    icon: Wine,
    title: 'Cocktails Autorais',
    desc: 'Criações exclusivas da nossa equipa com ingredientes premium e técnicas modernas de mixologia.',
  },
  {
    icon: Music,
    title: 'Ambiente Único',
    desc: 'Um espaço intimista com música selecionada e iluminação pensada para noites inesquecíveis.',
  },
  {
    icon: GlassWater,
    title: 'Vinhos & Spirits',
    desc: 'Uma carta cuidadosamente selecionada de vinhos portugueses e destilados internacionais.',
  },
]

const ABOUT_IMAGE = '/assets/alavariumcocktailbar__2024-12-27T140048.000Z.jpg'

export default function About({ onMediaClick }: { onMediaClick: (item: LightboxItem) => void }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 section-padding bg-brand-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <p className="text-brand-500 font-body text-sm tracking-[0.3em] uppercase mb-4">Sobre Nós</p>
            <h2 className="font-display text-brand-900 text-3xl sm:text-4xl md:text-5xl leading-tight">
              Onde a sofisticação<br />encontra o sabor
            </h2>
            <p className="mt-6 text-brand-500 text-lg leading-relaxed max-w-xl">
              No coração de Aveiro, o Alavarium Cocktail Bar é um destino para
              apreciadores de cocktails e de noites bem passadas. Com dedicação à arte
              da mixologia, oferecemos uma experiência que celebra sabores únicos,
              criatividade e um ambiente envolvente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <button
              type="button"
              onClick={() => onMediaClick({ kind: 'image', src: ABOUT_IMAGE, alt: 'Alavarium' })}
              className="w-full h-[320px] sm:h-[380px] lg:h-[430px] bg-brand-100 shadow-[0_24px_60px_rgba(0,0,0,0.15)] cursor-zoom-in overflow-hidden"
            >
              <img
                src={ABOUT_IMAGE}
                alt="Interior Alavarium Cocktail Bar"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
              />
            </button>
            <div className="absolute -bottom-4 -left-4 hidden sm:block w-24 h-24 border border-brand-300" />
          </motion.div>
        </div>

        <div className="mt-16 md:mt-20 grid md:grid-cols-3 gap-12 md:gap-8">
          {HIGHLIGHTS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <item.icon
                size={28}
                strokeWidth={1.5}
                className="text-brand-400 mb-4"
              />
              <h3 className="font-display text-brand-900 text-xl mb-2">
                {item.title}
              </h3>
              <p className="text-brand-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
