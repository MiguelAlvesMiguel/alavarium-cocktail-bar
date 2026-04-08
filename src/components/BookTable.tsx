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
      className="relative py-24 md:py-32 section-padding overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-950/88" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-white/50 font-body text-sm tracking-[0.3em] uppercase mb-4">Reservas</p>
          <h2 className="font-display text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
            Reservar Mesa
          </h2>
          <p className="mt-4 text-white/45 max-w-lg mx-auto text-lg">
            Garante o teu lugar para uma noite inesquecível.
            Seleciona o número de pessoas, data e hora.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleContinue}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 w-full max-w-3xl mx-auto border border-white/15 bg-white/[0.03] backdrop-blur-sm px-6 sm:px-8 py-7 sm:py-8 text-left"
        >
          <div className="grid sm:grid-cols-3 gap-4">
            <label className="block">
              <span className="flex items-center gap-2 text-white/80 text-xs font-semibold uppercase tracking-wider mb-2">
                <Users size={14} />
                Pessoas
              </span>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full h-11 px-3 bg-brand-950 border border-white/20 text-white focus:outline-none focus:border-white/50"
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={String(n)}>
                    {n} {n === 1 ? 'pessoa' : 'pessoas'}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="flex items-center gap-2 text-white/80 text-xs font-semibold uppercase tracking-wider mb-2">
                <CalendarDays size={14} />
                Data
              </span>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full h-11 px-3 bg-brand-950 border border-white/20 text-white focus:outline-none focus:border-white/50"
              />
            </label>

            <label className="block">
              <span className="flex items-center gap-2 text-white/80 text-xs font-semibold uppercase tracking-wider mb-2">
                <Clock size={14} />
                Hora
              </span>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full h-11 px-3 bg-brand-950 border border-white/20 text-white focus:outline-none focus:border-white/50"
              >
                {TIME_OPTIONS.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-brand-950 text-sm font-semibold uppercase tracking-widest hover:bg-white/90 transition-colors duration-300"
            >
              Confirmar reserva
            </button>
            <a
              href="https://www.instagram.com/alavariumcocktailbar/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 border border-white/25 text-white text-sm font-semibold uppercase tracking-widest hover:border-white/50 transition-colors duration-300"
            >
              <Instagram size={16} />
              Reservar via Instagram
            </a>
          </div>

          {booked && (
            <div className="mt-5 flex items-start gap-2.5 border border-emerald-400/40 bg-emerald-950/30 px-4 py-3 text-emerald-200">
              <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0" />
              <p className="text-sm leading-relaxed">
                O teu pedido de reserva para <strong>{guests}</strong> {guests === '1' ? 'pessoa' : 'pessoas'}
                {date ? (
                  <>
                    {' '}no dia <strong>{date}</strong>
                  </>
                ) : (
                  <> numa data flexível</>
                )}{' '}
                às <strong>{time}</strong> foi recebido (modo demonstração).
              </p>
            </div>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-12 flex items-center justify-center gap-2 text-white/30"
        >
          <Clock size={14} />
          <span className="text-sm font-body">
            Consulta os horários atualizados nas nossas redes sociais
          </span>
        </motion.div>
      </div>
    </section>
  )
}
