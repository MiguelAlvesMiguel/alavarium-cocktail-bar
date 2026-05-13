import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, Instagram, Clock } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'

const PHONE_DISPLAY = '+351 918 489 986'
const PHONE_TEL = '+351918489986'

export default function BookTable() {
  const { t } = useI18n()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="reserve"
      ref={ref}
      className="relative overflow-hidden bg-brand-950"
    >
      <div className="flex flex-col lg:flex-row min-h-[680px]">
        <div className="relative z-10 flex-1 flex items-center section-padding py-20 md:py-28 lg:py-32">
          <div className="w-full max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-white/50 font-body text-sm tracking-[0.3em] uppercase mb-4">{t('book.kicker')}</p>
              <h2 className="font-display text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
                {t('book.title')}
              </h2>
              <p className="mt-4 text-white/60 text-base sm:text-lg leading-relaxed">
                {t('book.body')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-10 grid gap-4 sm:grid-cols-2"
            >
              <div className="border border-white/12 bg-white/[0.04] p-6 flex flex-col">
                <div className="flex items-center gap-2.5 text-white">
                  <Phone size={18} aria-hidden />
                  <h3 className="font-display text-lg">{t('book.callTitle')}</h3>
                </div>
                <p className="mt-3 text-white/55 text-sm leading-relaxed">
                  {t('book.callBody')}
                </p>
                <p className="mt-4 text-white font-display text-2xl tabular-nums">{PHONE_DISPLAY}</p>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="mt-5 inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 bg-white text-brand-950 text-sm font-semibold uppercase tracking-widest hover:bg-white/90 transition-colors duration-300"
                >
                  <Phone size={16} aria-hidden />
                  {t('book.callCta')}
                </a>
              </div>

              <div className="border border-white/12 bg-white/[0.04] p-6 flex flex-col">
                <div className="flex items-center gap-2.5 text-white">
                  <Instagram size={18} aria-hidden />
                  <h3 className="font-display text-lg">{t('book.dmTitle')}</h3>
                </div>
                <p className="mt-3 text-white/55 text-sm leading-relaxed">
                  {t('book.dmBody')}
                </p>
                <p className="mt-4 text-white font-display text-2xl">@alavariumcocktailbar</p>
                <a
                  href="https://www.instagram.com/alavariumcocktailbar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 border border-white/30 text-white text-sm font-semibold uppercase tracking-widest hover:border-white/60 transition-colors duration-300"
                >
                  <Instagram size={16} aria-hidden />
                  {t('book.dmCta')}
                </a>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 flex items-center gap-2 text-white/40 text-sm"
            >
              <Clock size={13} aria-hidden />
              {t('book.hours')}
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block relative lg:w-[45%] xl:w-[48%] overflow-hidden"
        >
          <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-brand-950 to-transparent" />
          <img
            src="/bar.jpg"
            alt={t('book.barAlt')}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-brand-950/30" />
        </motion.div>
      </div>
    </section>
  )
}
