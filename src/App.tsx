import { useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import BookTable from './components/BookTable'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Lightbox from './components/Lightbox'

export type LightboxItem = {
  kind: 'image' | 'video'
  src: string
  alt?: string
} | null

export default function App() {
  const [lightbox, setLightbox] = useState<LightboxItem>(null)

  const openLightbox = useCallback((item: LightboxItem) => setLightbox(item), [])
  const closeLightbox = useCallback(() => setLightbox(null), [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About onMediaClick={openLightbox} />
        <Menu />
        <Gallery onMediaClick={openLightbox} />
        <Testimonials />
        <BookTable />
        <Contact />
      </main>
      <Footer />
      <Lightbox item={lightbox} onClose={closeLightbox} />
    </>
  )
}
