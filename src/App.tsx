import { useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Lightbox from './components/Lightbox'
import MenuPage from './components/MenuPage'

export type LightboxItem = {
  kind: 'image' | 'video'
  src: string
  alt?: string
} | null

export default function App() {
  const [lightbox, setLightbox] = useState<LightboxItem>(null)

  const openLightbox = useCallback((item: LightboxItem) => setLightbox(item), [])
  const closeLightbox = useCallback(() => setLightbox(null), [])

  if (typeof window !== 'undefined' && /^\/menu\/?$/.test(window.location.pathname)) {
    return <MenuPage />
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Gallery onMediaClick={openLightbox} />
        <Testimonials onMediaClick={openLightbox} />
        <Contact />
      </main>
      <Footer />
      <Lightbox item={lightbox} onClose={closeLightbox} />
    </>
  )
}
