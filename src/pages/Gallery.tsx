import { useEffect, useState } from "react"
import { BRAND, GALLERY, GALLERY_FILTERS, type GalleryItem } from "../brand"
import { Button, InstagramIcon } from "../components/ui"
import { PageHeader } from "./Services"

export default function Gallery() {
  const [filter, setFilter] = useState<string>("todos")
  const [active, setActive] = useState<GalleryItem | null>(null)

  const items = filter === "todos" ? GALLERY : GALLERY.filter((g) => g.category === filter)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [active])

  return (
    <div>
      <PageHeader
        eyebrow="Galería"
        title="Nuestro trabajo"
        subtitle="Descubre algunos de nuestros trabajos y servicios."
      />

      {/* Filters */}
      <div className="sticky top-[72px] z-30 border-b border-rosa bg-crema/85 backdrop-blur">
        <div className="no-scrollbar mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 sm:px-8 py-4">
          {GALLERY_FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                filter === f.id
                  ? "bg-fucsia text-white shadow-md shadow-fucsia/25"
                  : "bg-white text-tinta/70 ring-1 ring-rosa hover:text-fucsia"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Placeholder note */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-6">
        <p className="rounded-2xl bg-rosa-soft px-5 py-3 text-center text-sm text-tinta/60">
          Las imágenes son ejemplos referenciales, listas para reemplazarse por fotografías reales de {BRAND.name}.
        </p>
      </div>

      {/* Masonry grid */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10">
        <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item)}
              className="group relative block w-full overflow-hidden rounded-3xl bg-rosa shadow-sm transition-shadow hover:shadow-xl hover:shadow-fucsia/10"
            >
              <img
                src={item.image}
                alt={item.label}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  item.tall ? "aspect-[3/4]" : "aspect-square"
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-violeta-deep/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-sm font-semibold text-white">{item.label}</span>
              </div>
            </button>
          ))}
        </div>
        {items.length === 0 && (
          <p className="py-16 text-center text-tinta/50">Pronto agregaremos trabajos en esta categoría.</p>
        )}
      </div>

      {/* Instagram CTA */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pb-8 text-center">
        <Button href={BRAND.instagramUrl} variant="primary" size="lg">
          <InstagramIcon className="h-5 w-5" />
          Ver más en Instagram
        </Button>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-violeta-deep/80 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
            onClick={() => setActive(null)}
            aria-label="Cerrar"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
          <figure className="max-h-[85vh] max-w-3xl overflow-hidden rounded-3xl bg-rosa shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <img src={active.image.replace(/w=\d+&h=\d+/, "w=1100&h=1300")} alt={active.label} className="max-h-[75vh] w-full object-contain bg-white" />
            <figcaption className="flex items-center justify-between px-6 py-4">
              <span className="font-display text-lg font-semibold text-violeta-deep">{active.label}</span>
              <span className="text-xs uppercase tracking-widest text-fucsia">{active.category}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  )
}
