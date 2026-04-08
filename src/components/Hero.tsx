import { motion } from 'framer-motion'
import { MapPin, ChevronDown } from 'lucide-react'

const GMAPS_LINK =
  'https://www.google.com/maps/place/Alavarium+Cocktail+Bar/@40.6412,-8.6538,17z/'

const FEATURED_LINKS = [
  {
    label: 'TripAdvisor',
    href: 'https://www.tripadvisor.com/Restaurant_Review-g189140-d21046543-Reviews-Alavarium_Cocktail_Bar-Aveiro_Aveiro_District_Northern_Portugal.html',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/alavariumcocktailbar/',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/AlavariumCocktailBar/',
  },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/80 via-brand-950/60 to-brand-950/90" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            opacity: { duration: 1, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: 1, ease: [0.22, 1, 0.36, 1] },
          }}
          className="relative mx-auto mb-8 w-fit"
        >
          <div className="absolute -inset-8 rounded-full bg-white/5 blur-3xl" />
          <img
            src="/logo.png"
            alt="Alavarium Cocktail Bar"
            className="relative mx-auto w-48 sm:w-64 md:w-80 rounded-full drop-shadow-[0_14px_28px_rgba(0,0,0,0.55)] will-change-transform"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-2"
        >
          <p className="text-white/60 font-body text-sm sm:text-base tracking-[0.35em] uppercase">
            Cocktail & Wine Bar · Aveiro
          </p>
          <h1 className="font-display text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            Alavarium<br />
            Cocktail Bar
          </h1>
          <p className="text-white/50 font-body text-base sm:text-lg mt-4 max-w-lg mx-auto">
            Noites elegantes, cocktails autorais e ambiente intimista no coração de Aveiro.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#reserve"
            className="px-8 py-3.5 bg-white text-brand-950 text-sm font-semibold uppercase tracking-widest hover:bg-white/90 transition-colors duration-300"
          >
            Reservar Mesa
          </a>
          <a
            href={GMAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-3.5 border border-white/25 text-white text-sm font-semibold uppercase tracking-widest hover:border-white/60 transition-colors duration-300"
          >
            <MapPin size={16} className="group-hover:text-white transition-colors" />
            Ver Localização
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <p className="text-white/30 text-[11px] uppercase tracking-[0.28em] mb-3">
            Encontra-nos em
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {FEATURED_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 text-xs font-medium tracking-wide text-white/75 border border-white/15 bg-white/5 hover:border-white/40 hover:text-white transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white transition-colors"
        aria-label="Descer"
      >
        <ChevronDown size={28} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
