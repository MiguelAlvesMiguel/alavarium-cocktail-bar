import { Instagram, Facebook } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'

const LINKS = [
  { key: 'nav.menu', href: '#carta' },
  { key: 'nav.gallery', href: '#gallery' },
  { key: 'nav.reserve', href: '#reserve' },
  { key: 'nav.contact', href: '#contact' },
] as const

export default function Footer() {
  const { t } = useI18n()
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
              {t('footer.blurb')}
            </p>
          </div>

          <nav className="flex gap-8">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/60 hover:text-white text-sm font-body transition-colors"
              >
                {t(link.key)}
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
            &copy; {new Date().getFullYear()} Alavarium Cocktail Bar. {t('footer.rights')}
          </p>
          <div className="flex flex-col sm:items-end gap-2 text-xs">
            <p className="text-white/35">
              {t('footer.city')}
            </p>
            <a
              href="https://www.livroreclamacoes.pt/Inicio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/45 underline underline-offset-4 hover:text-white transition-colors"
            >
              {t('footer.complaints')}
            </a>
            <a
              href="https://www.nexosolutions.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/35 underline underline-offset-4 hover:text-white transition-colors"
            >
              {t('footer.developedBy')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
