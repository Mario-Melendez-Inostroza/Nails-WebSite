import type { ReactNode } from "react"
import { BRAND, waLink } from "../brand"

// The Vibras Nails+ wordmark, recreated as a typographic lockup that keeps the
// brand's fuchsia "Vibras", violet "nails" and golden "+".
export function Wordmark({ size = "md", className = "" }: { size?: "sm" | "md" | "lg"; className?: string }) {
  const scale = size === "lg" ? "text-4xl sm:text-5xl" : size === "sm" ? "text-2xl" : "text-3xl"
  return (
    <span className={`brand-wordmark inline-flex items-end leading-none ${scale} ${className}`}>
      <span className="text-fucsia">Vibras</span>
      <span className="text-oro -ml-1 mb-1">+</span>
      <span className="text-violeta -ml-2 mt-2 text-[0.7em]">nails</span>
    </span>
  )
}

// Little nail-polish-drop spark used as a restrained decorative accent.
export function Spark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 2c.7 3.9 2.4 5.6 6.3 6.3-3.9.7-5.6 2.4-6.3 6.3-.7-3.9-2.4-5.6-6.3-6.3C9.6 7.6 11.3 5.9 12 2Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.8-2.1-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.7.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.2-.6-.3Z" />
      <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Z" />
    </svg>
  )
}

export function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

type BtnProps = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: "primary" | "outline" | "whatsapp" | "gold" | "ghost"
  size?: "md" | "lg"
  className?: string
}

export function Button({ children, href, onClick, variant = "primary", size = "md", className = "" }: BtnProps) {
  const sizes = size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm"
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-fucsia/30 active:scale-[0.98]"
  const variants: Record<string, string> = {
    primary:
      "bg-fucsia text-white shadow-lg shadow-fucsia/25 hover:bg-fucsia-deep hover:-translate-y-0.5",
    gold: "bg-oro text-violeta-deep shadow-lg shadow-oro/30 hover:bg-oro-deep hover:-translate-y-0.5",
    whatsapp:
      "bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:brightness-105 hover:-translate-y-0.5",
    outline:
      "border-2 border-violeta/25 text-violeta hover:border-fucsia hover:text-fucsia bg-white/60 backdrop-blur",
    ghost: "text-violeta hover:text-fucsia",
  }
  const cls = `${base} ${sizes} ${variants[variant]} ${className}`
  if (href) {
    const external = href.startsWith("http")
    return (
      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className={cls}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  )
}

export function WhatsAppButton({
  children = "Reservar por WhatsApp",
  message,
  size = "md",
  className = "",
}: {
  children?: ReactNode
  message?: string
  size?: "md" | "lg"
  className?: string
}) {
  return (
    <Button href={waLink(message ?? `¡Hola ${BRAND.name}! Quiero reservar una hora.`)} variant="whatsapp" size={size} className={className}>
      <WhatsAppIcon className="h-5 w-5" />
      {children}
    </Button>
  )
}

// Section heading with an eyebrow label and display title.
export function SectionHead({
  eyebrow,
  title,
  subtitle,
  center = false,
  className = "",
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  center?: boolean
  className?: string
}) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-2xl ${className}`}>
      {eyebrow && (
        <div className={`flex items-center gap-2 mb-3 ${center ? "justify-center" : ""}`}>
          <Spark className="h-4 w-4 text-oro" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-fucsia">{eyebrow}</span>
        </div>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-violeta-deep leading-[1.1]">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base sm:text-lg text-tinta/70 leading-relaxed">{subtitle}</p>}
    </div>
  )
}
