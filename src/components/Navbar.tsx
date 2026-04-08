import { useState, useEffect } from 'react'
import { Menu, X, Instagram, Facebook } from 'lucide-react'

const NAV_LINKS = [
  { href: '#about', label: 'Sobre' },
  { href: '#carta', label: 'Carta' },
  { href: '#gallery', label: 'Galeria' },
  { href: '#testimonials', label: 'Testemunhos' },
  { href: '#reserve', label: 'Reservar' },
  { href: '#contact', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'navbar-scrolled' : 'bg-transparent'
      }`}
    >
      <nav className="section-padding flex items-center justify-between h-16 md:h-20">
        <a href="#" className="relative z-50 flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Alavarium"
            className="h-10 md:h-12 w-auto rounded-full"
          />
          <span className="hidden sm:inline text-white font-display text-lg tracking-wide">
            Alavarium
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white/70 hover:text-white text-sm font-body tracking-wide uppercase transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://www.instagram.com/alavariumcocktailbar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://www.facebook.com/AlavariumCocktailBar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>
          <a
            href="#reserve"
            className="ml-2 px-5 py-2 bg-white text-brand-950 text-xs font-semibold uppercase tracking-widest hover:bg-white/90 transition-colors duration-300"
          >
            Reservar
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="relative z-50 lg:hidden text-white"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        className={`fixed inset-0 bg-brand-950 transition-all duration-500 lg:hidden flex flex-col items-center justify-center ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.href}
              style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
              className={`transition-all duration-500 ${
                open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white text-2xl font-display tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex items-center gap-6">
          <a
            href="https://www.instagram.com/alavariumcocktailbar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors"
          >
            <Instagram size={22} />
          </a>
          <a
            href="https://www.facebook.com/AlavariumCocktailBar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors"
          >
            <Facebook size={22} />
          </a>
        </div>
        <a
          href="#reserve"
          onClick={() => setOpen(false)}
          className="mt-8 px-8 py-3 bg-white text-brand-950 text-sm font-semibold uppercase tracking-widest hover:bg-white/90 transition-colors"
        >
          Reservar Mesa
        </a>
      </div>
    </header>
  )
}
