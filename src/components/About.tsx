import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Wine, Music, GlassWater } from 'lucide-react'
import type { LightboxItem } from '../App'
import { useI18n } from '../i18n/I18nContext'

export default function About(_props: { onMediaClick: (item: LightboxItem) => void }) {
  const { t } = useI18n()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const highlights = [
    { icon: Wine, title: t('about.h1'), desc: t('about.h1d') },
    { icon: Music, title: t('about.h2'), desc: t('about.h2d') },
    { icon: GlassWater, title: t('about.h3'), desc: t('about.h3d') },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 section-padding bg-brand-50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-brand-500 font-body text-sm tracking-[0.3em] uppercase mb-4">{t('about.kicker')}</p>
          <h2 className="font-display text-brand-900 text-3xl sm:text-4xl md:text-5xl leading-tight">
            {t('about.title')}
          </h2>
          <p className="mt-6 text-brand-500 text-lg leading-relaxed">
            {t('about.body')}
          </p>
        </motion.div>

        <div className="mt-16 md:mt-20 grid md:grid-cols-3 gap-12 md:gap-8">
          {highlights.map((item, i) => (
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
