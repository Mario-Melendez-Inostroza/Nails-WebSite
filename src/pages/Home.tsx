import type { Page } from "../brand"
import { BRAND, CATEGORIES, GALLERY, mapsLink, waLink } from "../brand"
import { Button, InstagramIcon, SectionHead, Spark, WhatsAppButton, WhatsAppIcon } from "../components/ui"

export default function Home({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-rosa blur-3xl" />
        <div className="pointer-events-none absolute top-20 -right-24 h-96 w-96 rounded-full bg-oro/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 pt-14 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20 lg:pb-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-fucsia shadow-sm backdrop-blur">
              <Spark className="h-3.5 w-3.5 text-oro" /> San Bernardo · Santiago
            </div>
            <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.05] text-violeta-deep sm:text-6xl lg:text-[4.2rem]">
              Tu belleza.
              <br />
              Tu bienestar.
              <br />
              <span className="text-fucsia italic">Tu vibra.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-tinta/70">
              Un espacio para cuidar de ti, relajarte y disfrutar tu momento.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <WhatsAppButton size="lg" />
              <Button variant="outline" size="lg" onClick={() => navigate("servicios")}>
                Ver servicios
              </Button>
            </div>
            <p className="mt-8 font-display text-xl italic text-violeta/80">{BRAND.slogan}</p>
          </div>

          {/* Hero image collage */}
          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] bg-rosa shadow-2xl shadow-fucsia/20 rotate-1">
              <img
                src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=900&h=1100&fit=crop&auto=format"
                alt="Manicure profesional en Vibras Nails+"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-2 w-40 overflow-hidden rounded-3xl bg-rosa shadow-xl shadow-violeta/20 sm:-left-8 sm:w-52 -rotate-3">
              <img
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=500&h=500&fit=crop&auto=format"
                alt="Masaje de relajación"
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="absolute -top-5 -right-2 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lg sm:-right-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-oro/20 text-oro-deep">
                <Spark className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-violeta-deep">Belleza & bienestar</div>
                <div className="text-xs text-tinta/60">Atención personalizada</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS DESTACADOS */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 lg:py-24">
        <SectionHead
          center
          eyebrow="Nuestros servicios"
          title="Todo para tu cuidado personal"
          subtitle="Descubre nuestras categorías principales, pensadas para consentirte de pies a cabeza."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="group flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-rosa transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-fucsia/10"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-rosa">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violeta-deep/30 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold text-violeta-deep">{cat.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-tinta/65">{cat.desc}</p>
                <button
                  onClick={() => navigate("servicios")}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-fucsia transition-colors hover:text-fucsia-deep"
                >
                  Ver servicios
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE VIBRAS NAILS+ */}
      <section className="bg-rosa-soft">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 py-16 lg:grid-cols-2 lg:py-24">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-[2.5rem] bg-rosa shadow-xl shadow-violeta/10">
              <img
                src="https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=900&h=700&fit=crop&auto=format"
                alt="Espacio de belleza y bienestar de Vibras Nails+"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-4 hidden rounded-2xl bg-fucsia px-6 py-4 text-white shadow-lg sm:block">
              <span className="brand-wordmark text-2xl">Vibras+</span>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHead eyebrow="Sobre nosotras" title="Un espacio para ti" />
            <p className="mt-5 text-lg leading-relaxed text-tinta/70">
              En {BRAND.name} encontrarás un espacio dedicado a la belleza, el cuidado personal y el bienestar,
              donde cada servicio está pensado para que disfrutes un momento especial.
            </p>
            <div className="mt-8">
              <Button variant="primary" size="lg" onClick={() => navigate("nosotros")}>
                Conoce Vibras Nails+
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA DESTACADA */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 lg:py-24">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHead eyebrow="Galería" title="Conoce nuestro trabajo" />
          <Button variant="outline" onClick={() => navigate("galeria")} className="shrink-0">
            Ver galería completa
          </Button>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {GALLERY.slice(0, 4).map((item, i) => (
            <button
              key={item.id}
              onClick={() => navigate("galeria")}
              className={`group relative overflow-hidden rounded-3xl bg-rosa ${i === 0 ? "col-span-2 row-span-2 md:col-span-2" : ""}`}
            >
              <img
                src={item.image}
                alt={item.label}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  i === 0 ? "aspect-square md:aspect-[4/3.6]" : "aspect-square"
                }`}
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-violeta-deep/60 via-transparent to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-sm font-semibold text-white">{item.label}</span>
              </div>
            </button>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-tinta/60">
          <InstagramIcon className="h-4 w-4 text-fucsia" />
          Síguenos en{" "}
          <a href={BRAND.instagramUrl} target="_blank" rel="noreferrer" className="font-semibold text-fucsia hover:underline">
            {BRAND.instagramHandle}
          </a>
        </div>
      </section>

      {/* RESERVA CTA */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-fucsia via-fucsia-deep to-violeta px-6 py-16 text-center text-white shadow-2xl shadow-fucsia/25 sm:px-16 lg:py-20">
          <div className="pointer-events-none absolute -top-20 -left-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-oro/20 blur-3xl" />
          <Spark className="mx-auto h-8 w-8 text-oro" />
          <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl font-semibold leading-tight sm:text-5xl">
            Regálate un momento para ti
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-white/85">
            Agenda tu hora y disfruta tu experiencia {BRAND.name}.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href={waLink(`¡Hola ${BRAND.name}! Quiero reservar una hora.`)} variant="gold" size="lg">
              <WhatsAppIcon className="h-5 w-5" />
              Reservar por WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="Ubicación" title="Visítanos en San Bernardo" />
            <p className="mt-5 text-lg leading-relaxed text-tinta/70">
              {BRAND.address1}
              <br />
              {BRAND.address2}
            </p>
            <div className="mt-8">
              <Button href={mapsLink()} variant="primary" size="lg">
                Cómo llegar
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] shadow-lg ring-1 ring-rosa">
            <iframe
              title="Mapa Vibras Nails+"
              className="h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(BRAND.mapsQuery)}&output=embed`}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
