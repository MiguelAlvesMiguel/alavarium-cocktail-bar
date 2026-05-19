import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { menuCategories, tr } from '../data/menu'
import { useI18n } from '../i18n/I18nContext'
import LanguageSwitcher from './LanguageSwitcher'

export default function MenuPage() {
  const { t, lang } = useI18n()

  useEffect(() => {
    const prev = document.title
    document.title =
      lang === 'pt'
        ? 'Carta — Alavarium Cocktail Bar'
        : 'Menu — Alavarium Cocktail Bar'
    return () => {
      document.title = prev
    }
  }, [lang])

  return (
    <div className="min-h-dvh bg-brand-950 text-white">
      <header className="sticky top-0 z-50 navbar-scrolled">
        <nav className="section-padding flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Alavarium"
              className="h-10 md:h-12 w-auto rounded-full"
            />
            <span className="hidden sm:inline text-white font-display text-lg tracking-wide">
              Alavarium
            </span>
          </a>
          <div className="flex items-center gap-5">
            <LanguageSwitcher variant="dark" />
            <a
              href="/"
              className="hidden sm:inline-flex items-center gap-2 text-white/60 hover:text-white text-xs font-body tracking-widest uppercase transition-colors"
            >
              <ArrowLeft size={15} />
              {t('menuPage.back')}
            </a>
          </div>
        </nav>
      </header>

      <main className="section-padding pb-28 pt-16 md:pt-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="text-white/50 font-body text-sm tracking-[0.3em] uppercase mb-4">
              {t('menuPage.kicker')}
            </p>
            <h1 className="font-display text-white text-4xl sm:text-5xl md:text-6xl leading-tight">
              {t('menuPage.title')}
            </h1>
            <p className="mt-5 text-white/50 font-body text-base max-w-xl mx-auto leading-relaxed">
              {t('menuPage.subtitle')}
            </p>
            <div className="mx-auto mt-10 h-px w-16 bg-white/20" />
          </motion.div>

          <div className="mt-16 md:mt-20 space-y-16 md:space-y-20">
            {menuCategories.map((category, ci) => (
              <motion.section
                key={category.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: Math.min(ci * 0.05, 0.2),
                }}
              >
                <h2 className="font-display text-white text-2xl sm:text-3xl mb-2">
                  {tr(category.label, lang)}
                </h2>
                <div className="h-px w-full bg-white/10 mb-8" />

                <div className="grid md:grid-cols-2 gap-x-14 gap-y-7">
                  {category.items.map((item) => (
                    <div
                      key={item.name.pt}
                      className="group border-b border-white/[0.07] pb-4"
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-display text-white/90 text-lg leading-snug group-hover:text-white transition-colors duration-300">
                          {tr(item.name, lang)}
                        </h3>
                        <span className="flex-shrink-0 text-white/60 font-body text-sm tabular-nums font-medium">
                          €{item.price.toFixed(item.price % 1 === 0 ? 0 : 1)}
                        </span>
                      </div>
                      {item.description && (
                        <p className="mt-1.5 text-white/40 text-sm leading-relaxed">
                          {tr(item.description, lang)}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-white/30 font-body text-xs tracking-wide mb-8">
              {t('menuPage.note')}
            </p>
            <a
              href="/#reserve"
              className="inline-flex items-center px-8 py-3 bg-white text-brand-950 text-xs font-semibold uppercase tracking-widest hover:bg-white/90 transition-colors duration-300"
            >
              {t('menuPage.reserve')}
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
