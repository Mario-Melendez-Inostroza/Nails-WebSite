import type { Page } from "../brand"
import { BRAND } from "../brand"
import { Button, SectionHead, Spark, WhatsAppButton } from "../components/ui"
import { PageHeader } from "./Services"

const VALUES = [
  { title: "Profesionalismo", desc: "Técnicas cuidadas y productos de calidad en cada servicio." },
  { title: "Cercanía", desc: "Un trato cálido para que te sientas en casa desde que llegas." },
  { title: "Atención personalizada", desc: "Escuchamos lo que necesitas y lo adaptamos a ti." },
  { title: "Bienestar", desc: "Un espacio para relajarte y disfrutar tu momento." },
]

export default function About({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <div>
      <PageHeader eyebrow="Nosotros" title="Conoce Vibras Nails+" />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 py-16 lg:grid-cols-2 lg:py-20">
        <div className="relative">
          <div className="overflow-hidden rounded-[2.5rem] bg-rosa shadow-xl shadow-fucsia/10">
            <img
              src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=900&h=1000&fit=crop&auto=format"
              alt="Atención personalizada en Vibras Nails+"
              className="aspect-[4/4.4] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-3 rounded-2xl bg-oro px-6 py-4 text-violeta-deep shadow-lg">
            <span className="brand-wordmark text-2xl">Vibras+</span>
          </div>
        </div>

        <div>
          <SectionHead eyebrow="Nuestro espacio" title="Belleza y bienestar en San Bernardo" />
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-tinta/70">
            <p>
              {BRAND.name} es un espacio dedicado a la belleza, el cuidado personal y el bienestar en San Bernardo,
              Santiago. Cada servicio está pensado para que disfrutes un momento especial, te relajes y te sientas
              renovada.
            </p>
            <p className="font-display text-xl italic text-violeta">{BRAND.tagline}.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <WhatsAppButton />
            <Button variant="outline" onClick={() => navigate("servicios")}>
              Ver servicios
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-rosa-soft">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 lg:py-20">
          <SectionHead center eyebrow="Por qué elegirnos" title="Lo que nos representa" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-[1.75rem] bg-white p-7 shadow-sm ring-1 ring-rosa">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rosa text-fucsia">
                  <Spark className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-violeta-deep">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-tinta/65">{v.desc}</p>
              </div>
            ))}
          </div>
          {/* Editable placeholder for future brand story */}
          <p className="mx-auto mt-10 max-w-2xl rounded-2xl bg-white/70 px-5 py-4 text-center text-sm text-tinta/55">
            Este espacio queda disponible para agregar la historia, el equipo o información adicional de {BRAND.name}
            cuando lo desees.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 text-center lg:py-20">
        <SectionHead center title="Te esperamos" subtitle={`${BRAND.address1} · ${BRAND.address2}`} />
        <div className="mt-8 flex justify-center gap-4">
          <WhatsAppButton size="lg" />
          <Button variant="outline" size="lg" onClick={() => navigate("contacto")}>
            Contacto
          </Button>
        </div>
      </section>
    </div>
  )
}
