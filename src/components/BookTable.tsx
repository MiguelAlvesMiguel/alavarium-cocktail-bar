import { motion, useInView } from 'framer-motion'
import { useRef, useState, type FormEvent } from 'react'
import { Clock, Users, CalendarDays, CheckCircle2, Instagram } from 'lucide-react'

const TIME_OPTIONS = [
  '18:00', '18:30', '19:00', '19:30', '20:00',
  '20:30', '21:00', '21:30', '22:00', '22:30', '23:00',
]

export default function BookTable() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [guests, setGuests] = useState('2')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('21:00')
  const [booked, setBooked] = useState(false)

  const handleContinue = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setBooked(true)
  }

  return (
    <section
      id="reserve"
      ref={ref}
      className="relative overflow-hidden bg-brand-950"
    >
      {/* Split layout: content left, bar photo right */}
      <div className="flex flex-col lg:flex-row min-h-[680px]">

        {/* Left panel — pure black, all content */}
        <div className="relative z-10 flex-1 flex items-center section-padding py-24 md:py-32">
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
              <p className="mt-4 text-white/60 text-lg leading-relaxed">
                Garante o teu lugar para uma noite inesquecível.
                Seleciona o número de pessoas, data e hora.
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleContinue}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-10 border border-white/12 bg-white/[0.04] px-6 py-7 text-left"
            >
              <div className="grid sm:grid-cols-3 gap-4">
                <label className="block">
                  <span className="flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-wider mb-2">
                    <Users size={14} />
                    Pessoas
                  </span>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full h-11 px-3 bg-brand-900 border border-white/25 text-white focus:outline-none focus:border-white/60"
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
                    <CalendarDays size={14} />
                    Data
                  </span>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full h-11 px-3 bg-brand-900 border border-white/25 text-white focus:outline-none focus:border-white/60 [color-scheme:dark]"
                  />
                </label>

                <label className="block">
                  <span className="flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-wider mb-2">
                    <Clock size={14} />
                    Hora
                  </span>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full h-11 px-3 bg-brand-900 border border-white/25 text-white focus:outline-none focus:border-white/60"
                  >
                    {TIME_OPTIONS.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-brand-950 text-sm font-semibold uppercase tracking-widest hover:bg-white/90 transition-colors duration-300"
                >
                  Confirmar reserva
                </button>
                <a
                  href="https://www.instagram.com/alavariumcocktailbar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-7 py-3.5 border border-white/30 text-white text-sm font-semibold uppercase tracking-widest hover:border-white/60 transition-colors duration-300"
                >
                  <Instagram size={16} />
                  Via Instagram
                </a>
              </div>

              {booked && (
                <div className="mt-5 flex items-start gap-2.5 border border-emerald-400/40 bg-emerald-950/30 px-4 py-3 text-emerald-200">
                  <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">
                    Pedido de reserva para <strong>{guests}</strong> {guests === '1' ? 'pessoa' : 'pessoas'}
                    {date ? <>{' '}no dia <strong>{date}</strong></> : <> numa data flexível</>}{' '}
                    às <strong>{time}</strong> recebido (modo demonstração).
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
              <Clock size={13} />
              Consulta os horários nas nossas redes sociais
            </motion.p>
          </div>
        </div>

        {/* Right panel — bar photo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block relative lg:w-[45%] xl:w-[48%] overflow-hidden"
        >
          {/* left-to-black fade */}
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
