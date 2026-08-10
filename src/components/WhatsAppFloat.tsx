import { BRAND, waLink } from "../brand"
import { WhatsAppIcon } from "./ui"

// Floating WhatsApp action, prominent especially on mobile.
export default function WhatsAppFloat() {
  return (
    <a
      href={waLink(`¡Hola ${BRAND.name}! Quiero reservar una hora.`)}
      target="_blank"
      rel="noreferrer"
      aria-label="Reservar por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-xl shadow-[#25D366]/40 transition-all hover:-translate-y-0.5 sm:bottom-8 sm:right-8"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/50" />
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
        <WhatsAppIcon className="h-6 w-6" />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[10rem] sm:max-w-[10rem]">
        Reservar
      </span>
    </a>
  )
}
