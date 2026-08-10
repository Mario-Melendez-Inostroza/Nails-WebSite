import { BRAND, mapsLink, waLink } from "../brand"
import { Button, InstagramIcon, Spark, WhatsAppIcon, Wordmark } from "../components/ui"
import { PageHeader } from "./Services"

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s7-6.3 7-11a7 7 0 0 0-14 0c0 4.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

export default function Contact() {
  return (
    <div>
      <PageHeader
        eyebrow="Contacto"
        title="Reserva tu hora"
        subtitle="Estamos a un mensaje de distancia. Escríbenos por WhatsApp y agenda tu experiencia."
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 py-16 lg:grid-cols-[1fr_1.1fr] lg:py-20">
        <div>
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-rosa">
            <Wordmark size="md" />
            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-rosa text-fucsia">
                  <PinIcon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-tinta/40">Dirección</div>
                  <p className="mt-1 text-tinta/80">
                    {BRAND.address1}
                    <br />
                    {BRAND.address2}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-rosa text-[#25D366]">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-tinta/40">WhatsApp</div>
                  <a href={waLink()} target="_blank" rel="noreferrer" className="mt-1 block font-medium text-violeta hover:text-fucsia">
                    {BRAND.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-rosa text-fucsia">
                  <InstagramIcon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-tinta/40">Instagram</div>
                  <a href={BRAND.instagramUrl} target="_blank" rel="noreferrer" className="mt-1 block font-medium text-violeta hover:text-fucsia">
                    {BRAND.instagramHandle}
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3">
              <Button href={waLink(`¡Hola ${BRAND.name}! Quiero reservar una hora.`)} variant="whatsapp" size="lg">
                <WhatsAppIcon className="h-5 w-5" />
                Reservar por WhatsApp
              </Button>
              <Button href={BRAND.instagramUrl} variant="outline" size="lg">
                <InstagramIcon className="h-5 w-5" />
                Ver Instagram
              </Button>
            </div>
          </div>

          <p className="mt-5 flex items-center justify-center gap-2 text-center font-display text-lg italic text-violeta/80">
            <Spark className="h-4 w-4 text-oro" /> {BRAND.slogan}
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] shadow-lg ring-1 ring-rosa">
          <iframe
            title="Mapa Vibras Nails+"
            className="h-full min-h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent(BRAND.mapsQuery)}&output=embed`}
          />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 pb-4 text-center">
        <Button href={mapsLink()} variant="primary" size="lg">
          Cómo llegar
        </Button>
      </div>
    </div>
  )
}
