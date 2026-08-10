import type { Page } from "../brand"
import { BRAND, waLink } from "../brand"
import { InstagramIcon, Spark, WhatsAppIcon, Wordmark } from "./ui"

const LINKS: { id: Page; label: string }[] = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "galeria", label: "Galería" },
  { id: "nosotros", label: "Nosotros" },
  { id: "contacto", label: "Contacto" },
]

export default function Footer({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <footer className="relative mt-24 overflow-hidden bg-violeta-deep text-white">
      <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-fucsia/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-oro/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Wordmark size="md" className="[&_.text-violeta]:text-rosa" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">{BRAND.tagline}</p>
          <p className="mt-4 font-display text-lg text-oro">{BRAND.slogan}</p>
        </div>

        <div>
          <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-white/60">
            <Spark className="h-3.5 w-3.5 text-oro" /> Navegación
          </h3>
          <ul className="space-y-2.5">
            {LINKS.map((l) => (
              <li key={l.id}>
                <button onClick={() => navigate(l.id)} className="text-white/80 transition-colors hover:text-oro">
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-white/60">
            <Spark className="h-3.5 w-3.5 text-oro" /> Contacto
          </h3>
          <p className="text-sm leading-relaxed text-white/80">
            {BRAND.address1}
            <br />
            {BRAND.address2}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/20"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/20"
            >
              <InstagramIcon className="h-4 w-4" /> {BRAND.instagramHandle}
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {BRAND.name} — Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
