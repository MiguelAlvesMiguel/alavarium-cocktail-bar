import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { menuCategories } from '../data/menu'

export default function Menu() {
  const [active, setActive] = useState(menuCategories[0].id)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const category = menuCategories.find((c) => c.id === active)!

  return (
    <section
      id="carta"
      ref={ref}
      className="py-24 md:py-32 section-padding bg-brand-950"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-white/50 font-body text-sm tracking-[0.3em] uppercase mb-4">Carta</p>
          <h2 className="font-display text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
            A Nossa Carta
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 -mx-5 sm:-mx-8 md:-mx-12 lg:-mx-20 xl:-mx-32 px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32"
        >
          <div className="menu-tabs flex gap-1 overflow-x-auto pb-4">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`flex-shrink-0 px-4 py-2.5 text-sm font-body tracking-wide transition-colors duration-300 whitespace-nowrap ${
                  active === cat.id
                    ? 'bg-white text-brand-950 font-semibold'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8"
        >
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-8">
            {category.label}
          </p>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {category.items.map((item) => (
              <div key={item.name} className="group border-b border-white/10 pb-4">
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="font-display text-white/90 text-base sm:text-lg leading-snug group-hover:text-white transition-colors duration-300">
                    {item.name}
                  </h4>
                  <span className="flex-shrink-0 text-white/60 font-body text-sm tabular-nums font-medium">
                    €{item.price.toFixed(item.price % 1 === 0 ? 0 : 1)}
                  </span>
                </div>
                {item.description && (
                  <p className="mt-1 text-white/40 text-sm leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
