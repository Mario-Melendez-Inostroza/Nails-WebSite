import { useEffect, useState } from "react"
import type { Page } from "../brand"
import { BRAND, waLink } from "../brand"
import { Button, InstagramIcon, WhatsAppIcon, Wordmark } from "./ui"

const NAV: { id: Page; label: string }[] = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "galeria", label: "Galería" },
  { id: "nosotros", label: "Nosotros" },
  { id: "contacto", label: "Contacto" },
]

export default function Header({ page, navigate }: { page: Page; navigate: (p: Page) => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const go = (p: Page) => {
    navigate(p)
    setOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-crema/90 backdrop-blur-md shadow-[0_6px_30px_-12px_rgba(216,27,135,0.25)]" : "bg-crema/70 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 h-[72px]">
        <button onClick={() => go("inicio")} className="shrink-0" aria-label="Ir a inicio">
          <Wordmark size="sm" />
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                page === item.id ? "text-fucsia" : "text-tinta/70 hover:text-violeta"
              }`}
            >
              {item.label}
              {page === item.id && (
                <span className="absolute left-1/2 -bottom-0.5 h-1 w-1 -translate-x-1/2 rounded-full bg-fucsia" />
              )}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="text-violeta/70 hover:text-fucsia transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <Button href={waLink(`¡Hola ${BRAND.name}! Quiero reservar una hora.`)} variant="primary">
            <WhatsAppIcon className="h-4 w-4" />
            Reservar
          </Button>
        </div>

        <button
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-violeta shadow-sm"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          <div className="relative h-4 w-5">
            <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-5 rounded bg-current transition-all ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-400 ease-out ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <div className="px-5 pb-6 pt-2 flex flex-col gap-1 bg-crema/95 backdrop-blur-md">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={`text-left rounded-2xl px-5 py-3.5 text-lg font-medium transition-colors ${
                page === item.id ? "bg-rosa text-fucsia" : "text-tinta/80 hover:bg-rosa-soft"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="mt-3 flex flex-col gap-3">
            <Button href={waLink(`¡Hola ${BRAND.name}! Quiero reservar una hora.`)} variant="whatsapp" size="lg">
              <WhatsAppIcon className="h-5 w-5" />
              Reservar por WhatsApp
            </Button>
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-violeta/20 px-6 py-3 text-sm font-semibold text-violeta"
            >
              <InstagramIcon className="h-5 w-5" />
              {BRAND.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
