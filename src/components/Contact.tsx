import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Clock, Instagram, Facebook } from 'lucide-react'

const GMAPS_LINK =
  'https://www.google.com/maps/place/Alavarium+Cocktail+Bar/@40.6412,-8.6538,17z/data=!4m6!3m5!1s0xd2398033df80d7f:0xe8dde7e6b0398a7a!8m2!3d40.6428084!4d-8.6563199!16s%2Fg%2F11ckvlf0rn?entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 md:py-32 section-padding bg-brand-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-brand-500 font-body text-sm tracking-[0.3em] uppercase mb-4">Contacto</p>
            <h2 className="font-display text-brand-900 text-3xl sm:text-4xl md:text-5xl leading-tight">
              Visita-nos
            </h2>

            <div className="mt-10 space-y-8">
              <div className="flex gap-4">
                <MapPin size={20} className="text-brand-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-brand-900 font-medium">Morada</p>
                  <p className="text-brand-500 mt-1 leading-relaxed">
                    R. do Lavadouro 2<br />
                    3800-198 Aveiro<br />
                    Portugal
                  </p>
                  <a
                    href={GMAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-brand-700 hover:text-brand-900 text-sm font-medium transition-colors"
                  >
                    Obter direções &rarr;
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock size={20} className="text-brand-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-brand-900 font-medium">Horário</p>
                  <div className="text-brand-500 mt-1 space-y-1 text-sm leading-relaxed">
                    <p><strong className="text-brand-700">Segunda:</strong> 10:30 – 20:00</p>
                    <p><strong className="text-brand-700">Terça a Sábado:</strong> 10:30 – 02:00</p>
                    <p><strong className="text-brand-700">Domingo:</strong> Encerrado</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Instagram size={20} className="text-brand-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-brand-900 font-medium">Redes Sociais</p>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="https://www.instagram.com/alavariumcocktailbar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-brand-500 hover:text-brand-900 text-sm transition-colors"
                    >
                      <Instagram size={14} />
                      Instagram
                    </a>
                    <a
                      href="https://www.facebook.com/AlavariumCocktailBar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-brand-500 hover:text-brand-900 text-sm transition-colors"
                    >
                      <Facebook size={14} />
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-80 lg:h-full min-h-[360px]"
          >
            <iframe
              title="Localização Alavarium Cocktail Bar"
              src="https://maps.google.com/maps?q=Alavarium+Cocktail+Bar+Aveiro+Portugal&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 grayscale-[0.3] contrast-[1.1]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
