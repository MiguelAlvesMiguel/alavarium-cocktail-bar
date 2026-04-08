import { useState, useCallback } from 'react'
import Lightbox from './Lightbox.jsx'
import {
  HERO_IMAGE_URL,
  LOGO_URL,
  EURO_AND_BOOKING_IMAGE,
  LINKS,
  LOCAL_IMAGES,
  LOCAL_VIDEOS,
} from './constants.js'
import './App.css'

function openExternal(url) {
  window.open(url, '_blank', 'noopener,noreferrer')
}

export default function App() {
  const [lightbox, setLightbox] = useState(null)

  const showImage = useCallback((src, alt = '') => {
    setLightbox({ kind: 'image', src, alt })
  }, [])

  const showVideo = useCallback((src) => {
    setLightbox({ kind: 'video', src })
  }, [])

  const closeLb = useCallback(() => setLightbox(null), [])

  return (
    <div className="app">
      <Lightbox item={lightbox} onClose={closeLb} />

      <header className="site-header">
        <a href="#center" className="brand">
          <button
            type="button"
            className="brand__logo-btn"
            onClick={() => showImage(LOGO_URL, 'Alavarium Cocktail Bar')}
            aria-label="Ampliar logótipo"
          >
            <img src={LOGO_URL} alt="" className="brand__logo" width={56} height={56} />
          </button>
          <span className="brand__name">Alavarium</span>
        </a>
        <nav className="nav" aria-label="Principal">
          <a href="#center">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#euro">Euro</a>
          <a href="#carta">Carta</a>
          <a href="#galeria">Galeria</a>
          <a href="#videos">Vídeos</a>
          <a href="#reservas">Reservas</a>
          <a href="#contactos">Contactos</a>
        </nav>
      </header>

      <main>
        <section id="center" className="hero">
          <button
            type="button"
            className="hero__media-btn"
            onClick={() => showImage(HERO_IMAGE_URL, 'Alavarium Cocktail Bar')}
            aria-label="Ampliar imagem do bar"
          >
            <img
              className="hero__img"
              src={HERO_IMAGE_URL}
              alt="Alavarium Cocktail Bar em Aveiro"
            />
          </button>
          <div className="hero__overlay" />
          <div className="hero__content">
            <p className="hero__eyebrow">Cocktail bar · Aveiro</p>
            <h1>Alavarium Cocktail Bar</h1>
            <p className="hero__tag">
              Noites elegantes, cocktails autorais e ambiente intimista no coração da cidade.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#reservas">
                Reservar mesa
              </a>
              <a className="btn btn--ghost" href="#carta">
                Ver carta
              </a>
            </div>
          </div>
        </section>

        <div className="ticks" aria-hidden="true" />

        <section id="next-steps" className="panel panel--tight">
          <div className="panel__grid panel__grid--split">
            <div>
              <h2 className="section-title">Documentação</h2>
              <p className="muted">O teu próximo cocktail começa aqui.</p>
              <ul className="link-list">
                <li>
                  <a href={LINKS.instagram} target="_blank" rel="noreferrer">
                    Instagram — novidades e eventos
                  </a>
                </li>
                <li>
                  <a href={LINKS.facebook} target="_blank" rel="noreferrer">
                    Facebook — comunidade Alavarium
                  </a>
                </li>
                <li>
                  <a href={LINKS.tripadvisor} target="_blank" rel="noreferrer">
                    Tripadvisor — avaliações de visitantes
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="section-title">Liga-te a nós</h2>
              <p className="muted">Segue as redes e marca a tua visita a Aveiro.</p>
              <ul className="link-list">
                <li>
                  <button type="button" className="link-button" onClick={() => openExternal(LINKS.instagram)}>
                    Instagram
                  </button>
                </li>
                <li>
                  <button type="button" className="link-button" onClick={() => openExternal(LINKS.facebook)}>
                    Facebook
                  </button>
                </li>
                <li>
                  <button type="button" className="link-button" onClick={() => openExternal(LINKS.tripadvisor)}>
                    Tripadvisor
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="ticks" aria-hidden="true" />

        <section id="sobre" className="panel">
          <h2 className="section-title">Sobre nós</h2>
          <p className="lead">
            O Alavarium é um espaço dedicado à mistura de sabores, à música certa e a noites que ficam na
            memória. Uma equipa focada em serviço e em cocktails que equilibram técnica e criatividade.
          </p>
          <div className="gallery-row">
            {LOCAL_IMAGES.slice(0, 3).map((src) => (
              <button
                key={src}
                type="button"
                className="thumb-btn"
                onClick={() => showImage(src, 'Alavarium')}
              >
                <img src={src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </section>

        <div className="ticks" aria-hidden="true" />

        <section id="euro" className="band band--image">
          <button
            type="button"
            className="band__bg-btn"
            onClick={() => showImage(EURO_AND_BOOKING_IMAGE, 'Ambiente Alavarium')}
            aria-label="Ampliar imagem de fundo"
          >
            <img className="band__bg" src={EURO_AND_BOOKING_IMAGE} alt="" />
          </button>
          <div className="band__scrim" />
          <div className="band__inner">
            <h2 className="section-title section-title--on-dark">Secção Euro</h2>
            <p className="band__text">
              Inspiramo-nos na tradição dos grandes bares europeus: ingredientes selecionados, copos
              gelados e uma carta que viaja pela Europa em cada gole. Esta imagem resume o nosso ADN —
              sofisticação em preto e branco.
            </p>
            <button
              type="button"
              className="btn btn--ghost btn--on-dark"
              onClick={() => showImage(EURO_AND_BOOKING_IMAGE, 'Ambiente Alavarium')}
            >
              Ampliar imagem
            </button>
          </div>
        </section>

        <div className="ticks" aria-hidden="true" />

        <section id="carta" className="panel">
          <h2 className="section-title">Carta</h2>
          <p className="lead">
            Clássicos reinventados e criações de autor. Pergunta à equipa pelas sugestões da noite e pelas
            novidades sazonais.
          </p>
          <div className="menu-grid">
            <article className="menu-card">
              <h3>Clássicos</h3>
              <p>Negroni, Old Fashioned, Manhattan, Margarita, entre outros.</p>
            </article>
            <article className="menu-card">
              <h3>Autorais</h3>
              <p>Combinações exclusivas com destilados premium e botanicals locais.</p>
            </article>
            <article className="menu-card">
              <h3>Sem álcool</h3>
              <p>Opções elaboradas com a mesma atenção ao detalhe e apresentação.</p>
            </article>
          </div>
        </section>

        <div className="ticks" aria-hidden="true" />

        <section id="galeria" className="panel">
          <h2 className="section-title">Galeria</h2>
          <p className="muted">Toca numa fotografia para a veres em tamanho real.</p>
          <div className="gallery-grid">
            {LOCAL_IMAGES.map((src) => (
              <button
                key={src}
                type="button"
                className="gallery-grid__item"
                onClick={() => showImage(src, 'Alavarium Cocktail Bar')}
              >
                <img src={src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </section>

        <div className="ticks" aria-hidden="true" />

        <section id="videos" className="panel">
          <h2 className="section-title">Vídeos</h2>
          <p className="muted">Reprodução automática (sem som); toca para ver em ecrã completo.</p>
          <div className="video-row">
            {LOCAL_VIDEOS.map((src) => (
              <button
                key={src}
                type="button"
                className="video-tile"
                onClick={() => showVideo(src)}
                aria-label="Ampliar vídeo"
              >
                <video
                  className="video-tile__v"
                  src={src}
                  muted
                  loop
                  playsInline
                  autoPlay
                />
              </button>
            ))}
          </div>
        </section>

        <div className="ticks" aria-hidden="true" />

        <section id="reservas" className="band band--image band--booking">
          <button
            type="button"
            className="band__bg-btn"
            onClick={() => showImage(EURO_AND_BOOKING_IMAGE, 'Reservar mesa — Alavarium')}
            aria-label="Ampliar imagem de fundo"
          >
            <img className="band__bg" src={EURO_AND_BOOKING_IMAGE} alt="" />
          </button>
          <div className="band__scrim" />
          <div className="band__inner">
            <h2 className="section-title section-title--on-dark">Reservar mesa</h2>
            <p className="band__text">
              Garante o teu lugar nas noites de maior procura. Contacta-nos por mensagem nas redes ou pelo
              telefone quando disponível — a equipa confirma a disponibilidade com todo o gosto.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href={LINKS.instagram} target="_blank" rel="noreferrer">
                Reservar via Instagram
              </a>
              <button
                type="button"
                className="btn btn--ghost btn--on-dark"
                onClick={() => showImage(EURO_AND_BOOKING_IMAGE, 'Ambiente para reservas')}
              >
                Ampliar imagem
              </button>
            </div>
          </div>
        </section>

        <div className="ticks" aria-hidden="true" />

        <section id="contactos" className="panel">
          <h2 className="section-title">Contactos</h2>
          <p className="lead">Aveiro, distrito de Aveiro — consulta horários atualizados nas redes.</p>
          <ul className="contact-list">
            <li>
              <a href={LINKS.instagram} target="_blank" rel="noreferrer">
                instagram.com/alavariumcocktailbar
              </a>
            </li>
            <li>
              <a href={LINKS.facebook} target="_blank" rel="noreferrer">
                facebook.com/AlavariumCocktailBar
              </a>
            </li>
            <li>
              <a href={LINKS.tripadvisor} target="_blank" rel="noreferrer">
                Avaliações no Tripadvisor
              </a>
            </li>
          </ul>
        </section>

        <section id="spacer" className="spacer" aria-hidden="true" />
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Alavarium Cocktail Bar · Aveiro, Portugal</p>
      </footer>
    </div>
  )
}
