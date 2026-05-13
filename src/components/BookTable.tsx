import { motion, useInView } from 'framer-motion'
import { useRef, useState, type FormEvent } from 'react'
import { Clock, Users, CalendarDays, CheckCircle2, Instagram, AlertCircle, Loader2 } from 'lucide-react'
import { submitNetlifyForm } from '../lib/netlifyForms'

const TIME_OPTIONS = [
  '18:00', '18:30', '19:00', '19:30', '20:00',
  '20:30', '21:00', '21:30', '22:00', '22:30', '23:00',
]

const fieldClass =
  'w-full min-h-[44px] px-3 py-2.5 text-base bg-brand-900 border border-white/25 text-white placeholder:text-white/35 focus:outline-none focus:border-white/60 [color-scheme:dark] touch-manipulation'

export default function BookTable() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const formRef = useRef<HTMLFormElement>(null)
  const [guests, setGuests] = useState('2')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('21:00')
  const [customerName, setCustomerName] = useState('')
  const [phone, setPhone] = useState('')
  const [notes, setNotes] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleContinue = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)
    setSubmitted(false)
    const form = formRef.current
    if (!form) return

    const trimmedName = customerName.trim()
    const trimmedPhone = phone.trim()
    if (!trimmedName) {
      setError('Indica o teu nome para confirmarmos a reserva.')
      return
    }
    if (!trimmedPhone) {
      setError('Indica um telemóvel ou telefone para te contactarmos.')
      return
    }
    if (!date) {
      setError('Escolhe a data da reserva.')
      return
    }

    setSubmitting(true)
    try {
      await submitNetlifyForm(form)
      setSubmitted(true)
      form.reset()
      setGuests('2')
      setDate('')
      setTime('21:00')
      setCustomerName('')
      setPhone('')
      setNotes('')
    } catch {
      setError('Não foi possível enviar o pedido. Tenta novamente ou contacta-nos pelo Instagram.')
    } finally {
      setSubmitting(false)
    }
  }

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
              <p className="text-white/50 font-body text-sm tracking-[0.3em] uppercase mb-4">Reservas</p>
              <h2 className="font-display text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
                Reservar Mesa
              </h2>
              <p className="mt-4 text-white/60 text-base sm:text-lg leading-relaxed">
                Garante o teu lugar para uma noite inesquecível.
                Seleciona o número de pessoas, data e hora.
              </p>
            </motion.div>

            <motion.form
              ref={formRef}
              name="table-reservation"
              method="POST"
              action="/"
              onSubmit={handleContinue}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-10 border border-white/12 bg-white/[0.04] px-5 py-6 sm:px-6 sm:py-7 text-left"
            >
              <input type="hidden" name="form-name" value="table-reservation" />

              <p className="sr-only" aria-hidden="true">
                <label htmlFor="reservation-bot-field">Leave empty</label>
                <input id="reservation-bot-field" name="bot-field" tabIndex={-1} autoComplete="off" />
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block sm:col-span-2">
                  <span className="flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-wider mb-2">
                    Nome
                  </span>
                  <input
                    type="text"
                    name="customer-name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    autoComplete="name"
                    className={fieldClass}
                    required
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-wider mb-2">
                    Telemóvel / telefone
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="tel"
                    inputMode="tel"
                    className={fieldClass}
                    required
                  />
                </label>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <label className="block">
                  <span className="flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-wider mb-2">
                    <Users size={14} className="flex-shrink-0" aria-hidden />
                    Pessoas
                  </span>
                  <select
                    name="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className={fieldClass}
                  >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={String(n)}>
                        {n} {n === 1 ? 'pessoa' : 'pessoas'}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-wider mb-2">
                    <CalendarDays size={14} className="flex-shrink-0" aria-hidden />
                    Data
                  </span>
                  <input
                    type="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={fieldClass}
                    required
                  />
                </label>

                <label className="block">
                  <span className="flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-wider mb-2">
                    <Clock size={14} className="flex-shrink-0" aria-hidden />
                    Hora
                  </span>
                  <select
                    name="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className={fieldClass}
                  >
                    {TIME_OPTIONS.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block mt-4">
                <span className="text-white text-xs font-semibold uppercase tracking-wider mb-2 block">
                  Notas <span className="text-white/40 font-normal normal-case">(opcional)</span>
                </span>
                <textarea
                  name="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  className={`${fieldClass} resize-y min-h-[5.5rem]`}
                  placeholder="Alguma preferência de mesa ou ocasião especial?"
                />
              </label>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 sm:flex-none min-h-[44px] flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-brand-950 text-sm font-semibold uppercase tracking-widest hover:bg-white/90 transition-colors duration-300 disabled:opacity-60 disabled:pointer-events-none touch-manipulation"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" aria-hidden />
                      A enviar…
                    </>
                  ) : (
                    'Confirmar reserva'
                  )}
                </button>
                <a
                  href="https://www.instagram.com/alavariumcocktailbar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none min-h-[44px] flex items-center justify-center gap-2 px-7 py-3.5 border border-white/30 text-white text-sm font-semibold uppercase tracking-widest hover:border-white/60 transition-colors duration-300 touch-manipulation"
                >
                  <Instagram size={16} aria-hidden />
                  Via Instagram
                </a>
              </div>

              {error && (
                <div
                  role="alert"
                  className="mt-5 flex items-start gap-2.5 border border-red-400/40 bg-red-950/40 px-4 py-3 text-red-200"
                >
                  <AlertCircle size={18} className="mt-0.5 flex-shrink-0" aria-hidden />
                  <p className="text-sm leading-relaxed">{error}</p>
                </div>
              )}

              {submitted && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-5 flex items-start gap-2.5 border border-emerald-400/40 bg-emerald-950/30 px-4 py-3 text-emerald-200"
                >
                  <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0" aria-hidden />
                  <p className="text-sm leading-relaxed">
                    Pedido de reserva recebido. Entraremos em contacto em breve para confirmar.
                  </p>
                </div>
              )}
            </motion.form>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 flex items-center gap-2 text-white/40 text-sm"
            >
              <Clock size={13} aria-hidden />
              Consulta os horários nas nossas redes sociais
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
            alt="Bar Alavarium"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-brand-950/30" />
        </motion.div>

      </div>
    </section>
  )
}
