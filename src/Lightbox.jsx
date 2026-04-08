import { useEffect, useCallback } from 'react'

export default function Lightbox({ item, onClose }) {
  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (!item) return
    document.addEventListener('keydown', handleKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prev
    }
  }, [item, handleKey])

  if (!item) return null

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Visualização em ecrã completo"
      onClick={onClose}
    >
      <button type="button" className="lightbox__close" onClick={onClose} aria-label="Fechar">
        ×
      </button>
      <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
        {item.kind === 'video' ? (
          <video
            className="lightbox__media"
            src={item.src}
            controls
            playsInline
            autoPlay
            loop
            muted
          />
        ) : (
          <img className="lightbox__media" src={item.src} alt={item.alt || ''} />
        )}
      </div>
    </div>
  )
}
