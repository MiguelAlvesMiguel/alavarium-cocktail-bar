import { motion, useInView } from 'framer-motion'
import { useRef, useState, type FormEvent } from 'react'
import { MapPin, Clock, Instagram, Facebook, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { submitNetlifyForm } from '../lib/netlifyForms'

const GMAPS_LINK =
  'https://www.google.com/maps/place/Alavarium+Cocktail+Bar/@40.6412,-8.6538,17z/data=!4m6!3m5!1s0xd2398033df80d7f:0xe8dde7e6b0398a7a!8m2!3d40.6428084!4d-8.6563199!16s%2Fg%2F11ckvlf0rn?entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D'

const inquiryFieldClass =
  'w-full min-h-[44px] px-3 py-2.5 text-base bg-white border border-brand-200 text-brand-900 placeholder:text-brand-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 touch-manipulation'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const inquiryRef = useRef<HTMLFormElement>(null)
  const [inquiryName, setInquiryName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [inquirySubmitting, setInquirySubmitting] = useState(false)
  const [inquirySent, setInquirySent] = useState(false)
  const [inquiryError, setInquiryError] = useState<string | null>(null)

  const handleInquiry = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setInquiryError(null)
    setInquirySent(false)
    const form = inquiryRef.current
    if (!form) return

    const trimmedName = inquiryName.trim()
    const trimmedEmail = email.trim()
    const trimmedMessage = message.trim()

    if (!trimmedName) {
      setInquiryError('Indica o teu nome.')
      return
    }
    if (!trimmedEmail) {
      setInquiryError('Indica um e-mail para podermos responder.')
      return
    }
    if (!trimmedMessage) {
      setInquiryError('Escreve a tua mensagem.')
      return
    }

    setInquirySubmitting(true)
    try {
      await submitNetlifyForm(form)
      setInquirySent(true)
      form.reset()
      setInquiryName('')
      setEmail('')
      setMessage('')
    } catch {
      setInquiryError('Não foi possível enviar. Tenta outra vez ou contacta-nos nas redes sociais.')
    } finally {
      setInquirySubmitting(false)
    }
  }

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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 border border-brand-200 bg-white p-5 sm:p-6 shadow-sm"
            >
              <h3 className="font-display text-brand-900 text-xl sm:text-2xl">Enviar mensagem</h3>
              <p className="mt-2 text-brand-600 text-sm leading-relaxed">
                Dúvidas ou sugestões? Escreve-nos — respondemos por e-mail.
              </p>
              <form
                ref={inquiryRef}
                name="site-inquiry"
                method="POST"
                action="/"
                className="mt-6 space-y-4"
                onSubmit={handleInquiry}
              >
                <input type="hidden" name="form-name" value="site-inquiry" />
                <p className="sr-only" aria-hidden="true">
                  <label htmlFor="inquiry-bot-field">Leave empty</label>
                  <input id="inquiry-bot-field" name="bot-field" tabIndex={-1} autoComplete="off" />
                </p>

                <label className="block">
                  <span className="text-brand-800 text-xs font-semibold uppercase tracking-wider mb-2 block">
                    Nome
                  </span>
                  <input
                    type="text"
                    name="inquiry-name"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    autoComplete="name"
                    className={inquiryFieldClass}
                    required
                  />
                </label>

                <label className="block">
                  <span className="text-brand-800 text-xs font-semibold uppercase tracking-wider mb-2 block">
                    E-mail
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    inputMode="email"
                    className={inquiryFieldClass}
                    required
                  />
                </label>

                <label className="block">
                  <span className="text-brand-800 text-xs font-semibold uppercase tracking-wider mb-2 block">
                    Mensagem
                  </span>
                  <textarea
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className={`${inquiryFieldClass} min-h-[8rem] resize-y`}
                    required
                  />
                </label>

                <button
                  type="submit"
                  disabled={inquirySubmitting}
                  className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-900 text-white text-sm font-semibold uppercase tracking-widest hover:bg-brand-800 transition-colors disabled:opacity-60 disabled:pointer-events-none touch-manipulation"
                >
                  {inquirySubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" aria-hidden />
                      A enviar…
                    </>
                  ) : (
                    <>
                      <Send size={16} aria-hidden />
                      Enviar
                    </>
                  )}
                </button>

                {inquiryError && (
                  <div
                    role="alert"
                    className="flex items-start gap-2.5 border border-red-200 bg-red-50 px-4 py-3 text-red-800"
                  >
                    <AlertCircle size={18} className="mt-0.5 flex-shrink-0" aria-hidden />
                    <p className="text-sm leading-relaxed">{inquiryError}</p>
                  </div>
                )}

                {inquirySent && (
                  <div
                    role="status"
                    aria-live="polite"
                    className="flex items-start gap-2.5 border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-900"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0" aria-hidden />
                    <p className="text-sm leading-relaxed">
                      Mensagem enviada. Obrigado — vamos responder em breve.
                    </p>
                  </div>
                )}
              </form>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-72 sm:h-80 lg:h-full min-h-[280px] sm:min-h-[320px] lg:min-h-[360px]"
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
