import { useI18n } from '../i18n/I18nContext'
import type { Lang } from '../i18n/translations'

const OPTIONS: Lang[] = ['pt', 'en']

export default function LanguageSwitcher({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const { lang, setLang } = useI18n()
  const dark = variant === 'dark'

  return (
    <div className="inline-flex items-center gap-1 text-xs font-body tracking-widest uppercase">
      {OPTIONS.map((opt, i) => (
        <span key={opt} className="inline-flex items-center">
          {i > 0 && (
            <span className={`${dark ? 'text-white/30' : 'text-brand-300'} mx-1.5`} aria-hidden>
              /
            </span>
          )}
          <button
            type="button"
            onClick={() => setLang(opt)}
            aria-pressed={lang === opt}
            className={
              lang === opt
                ? dark
                  ? 'text-white'
                  : 'text-brand-900'
                : dark
                ? 'text-white/50 hover:text-white transition-colors'
                : 'text-brand-500 hover:text-brand-900 transition-colors'
            }
          >
            {opt.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  )
}
