import type { Page, Service } from "../brand"
import { BRAND, SERVICE_GROUPS, waLink } from "../brand"
import { Button, SectionHead, Spark, WhatsAppButton, WhatsAppIcon } from "../components/ui"

function ServiceRow({ service }: { service: Service }) {
  return (
    <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="font-display text-lg font-semibold text-violeta-deep">{service.name}</h4>
          {service.promo && (
            <span className="rounded-full bg-oro/20 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-oro-deep">
              Promoción
            </span>
          )}
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-tinta/65">{service.desc}</p>
        {service.duration && (
          <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-violeta/70">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" strokeLinecap="round" />
            </svg>
            {service.duration}
          </span>
        )}
      </div>
      <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end sm:gap-2">
        <div className="text-right">
          <div className={`font-display text-xl font-semibold ${service.price ? "text-fucsia" : "text-tinta/40"}`}>
            {service.price ?? "Consultar"}
          </div>
        </div>
        <a
          href={waLink(`¡Hola ${BRAND.name}! Quiero consultar por "${service.name}".`)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border-2 border-fucsia/20 px-4 py-2 text-xs font-semibold text-fucsia transition-colors hover:border-fucsia hover:bg-fucsia hover:text-white"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Consultar / Reservar
        </a>
      </div>
    </div>
  )
}

export default function Services({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <div>
      <PageHeader
        eyebrow="Servicios"
        title="Nuestros servicios"
        subtitle="Belleza, cuidado personal y bienestar en un solo lugar. Los precios pueden variar según promociones vigentes."
      />

      <div className="mx-auto max-w-5xl px-5 sm:px-8 pb-8">
        <p className="rounded-2xl bg-rosa-soft px-5 py-4 text-sm text-tinta/70">
          <Spark className="mr-2 inline h-4 w-4 text-oro" />
          Contamos con promociones que cambian cada mes. Escríbenos por WhatsApp para conocer los valores y
          disponibilidad actualizados.
        </p>
      </div>

      <div className="mx-auto max-w-5xl space-y-14 px-5 sm:px-8 pb-8">
        {SERVICE_GROUPS.map((group) => (
          <section key={group.id} id={group.id} className="scroll-mt-24">
            <div className="mb-6 flex items-baseline gap-3">
              <h3 className="font-display text-2xl font-semibold text-violeta-deep sm:text-3xl">{group.title}</h3>
              <span className="h-px flex-1 bg-rosa" />
            </div>
            <p className="mb-5 max-w-2xl text-tinta/65">{group.blurb}</p>
            <div className="overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-rosa divide-y divide-rosa">
              {group.services.map((s) => (
                <ServiceRow key={s.name} service={s} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mx-auto max-w-5xl px-5 sm:px-8 pb-4">
        <div className="flex flex-col items-center gap-6 rounded-[2rem] bg-gradient-to-br from-violeta to-violeta-deep px-6 py-12 text-center text-white">
          <SectionHead
            center
            title="¿Lista para tu momento?"
            className="[&_h2]:text-white"
          />
          <div className="flex flex-wrap justify-center gap-4">
            <WhatsAppButton size="lg" />
            <Button variant="gold" size="lg" onClick={() => navigate("galeria")}>
              Ver galería
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Reusable page hero used across inner pages.
export function PageHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-rosa-soft">
      <div className="pointer-events-none absolute -top-24 right-10 h-72 w-72 rounded-full bg-oro/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-rosa blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 py-16 text-center lg:py-20">
        <div className="mb-4 flex items-center justify-center gap-2">
          <Spark className="h-4 w-4 text-oro" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-fucsia">{eyebrow}</span>
        </div>
        <h1 className="font-display text-4xl font-semibold leading-[1.08] text-violeta-deep sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-tinta/70">{subtitle}</p>}
      </div>
    </section>
  )
}
