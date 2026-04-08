import { Instagram, Facebook } from 'lucide-react'

const LINKS = [
  { label: 'Carta', href: '#carta' },
  { label: 'Galeria', href: '#gallery' },
  { label: 'Reservar', href: '#reserve' },
  { label: 'Contacto', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-950 py-16 section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <img
              src="/logo.png"
              alt="Alavarium Cocktail Bar"
              className="h-14 w-auto rounded-full mb-4"
            />
            <p className="text-white/60 text-sm max-w-xs leading-relaxed">
              Cocktails autorais e vinhos selecionados
              no coração de Aveiro, Portugal.
            </p>
          </div>

          <nav className="flex gap-8">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/60 hover:text-white text-sm font-body transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/alavariumcocktailbar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/AlavariumCocktailBar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Alavarium Cocktail Bar. Todos os direitos reservados.
          </p>
          <p className="text-white/35 text-xs">
            Aveiro, Portugal
          </p>
        </div>
      </div>
    </footer>
  )
}
