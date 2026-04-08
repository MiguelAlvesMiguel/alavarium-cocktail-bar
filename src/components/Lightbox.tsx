import { useEffect, useCallback } from 'react'
import { X } from 'lucide-react'
import type { LightboxItem } from '../App'

export default function Lightbox({
  item,
  onClose,
}: {
  item: LightboxItem
  onClose: () => void
}) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose],
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
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 z-[101] w-10 h-10 flex items-center justify-center border border-white/20 rounded-full text-white/80 hover:text-white hover:border-white/40 transition-colors"
        aria-label="Fechar"
      >
        <X size={20} />
      </button>
      <div className="max-w-[92vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        {item.kind === 'video' ? (
          <video
            src={item.src}
            controls
            autoPlay
            playsInline
            loop
            className="max-w-full max-h-[90vh] w-auto h-auto"
          />
        ) : (
          <img
            src={item.src}
            alt={item.alt || ''}
            className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
          />
        )}
      </div>
    </div>
  )
}
