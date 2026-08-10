// Central brand + business info. Edit here to update across the whole site.
export const BRAND = {
  name: "Vibras Nails+",
  tagline: "Donde la belleza vibra contigo",
  slogan: "Tu momento, tu bienestar, tu vibra.",
  phoneDisplay: "+56 9 7479 1621",
  whatsappNumber: "56974791621", // used for wa.me links
  instagramHandle: "@vibrasnailsmas",
  instagramUrl: "https://instagram.com/vibrasnailsmas",
  address1: "Urmeneta 476, Oficina 205",
  address2: "San Bernardo, Santiago, Chile",
  mapsQuery: "Urmeneta 476, San Bernardo, Santiago, Chile",
}

export function waLink(message?: string) {
  const base = `https://wa.me/${BRAND.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export function mapsLink() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRAND.mapsQuery)}`
}

export type Page = "inicio" | "servicios" | "galeria" | "nosotros" | "contacto"

// Featured service categories shown on the home page.
export const CATEGORIES = [
  {
    id: "manos-pies",
    title: "Manicure & Pedicure",
    desc: "Uñas prolijas, nivelación con base rubber y diseños que realzan tu estilo.",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=1000&fit=crop&auto=format",
  },
  {
    id: "podologia",
    title: "Podología",
    desc: "Podología clínica básica para pies sanos, sin dolor y libres de molestias.",
    image:
      "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&h=1000&fit=crop&auto=format",
  },
  {
    id: "masajes",
    title: "Masajes",
    desc: "Descontracturantes, de relajación y reductivos para tu bienestar físico y mental.",
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&h=1000&fit=crop&auto=format",
  },
  {
    id: "belleza",
    title: "Belleza",
    desc: "Pestañas, peinados y detalles que resaltan tu belleza natural.",
    image:
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&h=1000&fit=crop&auto=format",
  },
] as const

// Full service catalog. Prices marked from real brand material are set;
// everything else is "Consultar" so nothing is invented. Edit freely —
// promotions can change monthly.
export type Service = {
  name: string
  desc: string
  duration?: string
  price?: string // leave undefined -> shown as "Consultar"
  promo?: boolean
}

export type ServiceGroup = {
  id: string
  title: string
  blurb: string
  services: Service[]
}

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: "manos-pies",
    title: "Manicure & Pedicure",
    blurb: "Manos y pies cuidados con acabados prolijos y de larga duración.",
    services: [
      { name: "Manicure", desc: "Limado, cutícula y esmaltado prolijo." },
      {
        name: "Nivelación con base rubber + Pedicura de un solo tono",
        desc: "Promoción de inauguración. Nivelación con base rubber más pedicura de un solo tono.",
        price: "$27.000",
        promo: true,
      },
      { name: "Pedicure", desc: "Cuidado completo de pies y esmaltado." },
      { name: "Diseños y servicios relacionados", desc: "Decoración y detalles a elección." },
    ],
  },
  {
    id: "podologia",
    title: "Podología",
    blurb: "Pies sanos, sin dolor y libres de durezas y molestias.",
    services: [
      {
        name: "Podología clínica básica",
        desc: "Limpieza profunda, corte y fresado de uñas y eliminación de durezas.",
        price: "$18.000",
        promo: true,
      },
      { name: "Limpieza profunda", desc: "Higiene y cuidado profundo de los pies." },
      { name: "Corte y fresado de uñas", desc: "Corte técnico y fresado prolijo." },
      { name: "Eliminación de durezas", desc: "Previene callos, hongos y molestias." },
    ],
  },
  {
    id: "masajes",
    title: "Masajes",
    blurb: "Masajes profesionales para tu bienestar físico y mental.",
    services: [
      {
        name: "Masaje descontracturante — cuerpo completo",
        desc: "Alivia contracturas, reduce la tensión muscular y mejora tu movilidad.",
        duration: "1 hora",
        price: "$30.000",
      },
      {
        name: "Masaje descontracturante — por zona",
        desc: "Alivia contracturas y tensión localizada donde más lo necesitas.",
        duration: "30 minutos",
        price: "$20.000",
      },
      {
        name: "Masaje de relajación — cuerpo completo",
        desc: "Disfruta de una sensación de calma total y bienestar profundo.",
        duration: "1 hora",
        price: "$30.000",
      },
      {
        name: "Masaje de relajación — por zona",
        desc: "Relaja tu cuerpo y mente en la zona que más lo necesita.",
        duration: "30 minutos",
        price: "$15.000",
      },
      {
        name: "Piernas cansadas",
        desc: "Mejora la circulación, reduce la hinchazón y alivia la pesadez.",
        duration: "15 minutos",
        price: "$15.000",
      },
      {
        name: "Masaje craneofacial",
        desc: "Libera tensiones en rostro, cuello y cabeza y mejora tu descanso.",
        duration: "10 minutos",
        price: "$10.000",
      },
      {
        name: "Masaje japonés",
        desc: "Técnica milenaria que equilibra la energía y promueve un bienestar integral.",
        duration: "20 minutos",
        price: "$20.000",
      },
      {
        name: "Masaje reductivo",
        desc: "Ayuda a moldear la figura y activar la circulación.",
      },
    ],
  },
  {
    id: "belleza",
    title: "Belleza",
    blurb: "Detalles que resaltan tu belleza natural.",
    services: [
      { name: "Pestañas", desc: "Realza tu mirada con un acabado natural o intenso." },
      { name: "Peinados", desc: "Peinados para cada ocasión." },
      { name: "Otros servicios de belleza", desc: "Consúltanos por servicios adicionales." },
    ],
  },
]

// Gallery items. These are clearly-labelled placeholders, ready to be swapped
// for real Vibras Nails+ photos. Filter categories match the brief.
export type GalleryItem = {
  id: number
  category: "uñas" | "pedicure" | "podologia" | "masajes" | "belleza"
  label: string
  image: string
  tall?: boolean
}

export const GALLERY_FILTERS = [
  { id: "todos", label: "Todos" },
  { id: "uñas", label: "Uñas" },
  { id: "pedicure", label: "Pedicure" },
  { id: "podologia", label: "Podología" },
  { id: "masajes", label: "Masajes" },
  { id: "belleza", label: "Belleza" },
] as const

export const GALLERY: GalleryItem[] = [
  { id: 1, category: "uñas", label: "Manicure", tall: true, image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=700&h=900&fit=crop&auto=format" },
  { id: 2, category: "pedicure", label: "Pedicure", image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=700&h=560&fit=crop&auto=format" },
  { id: 3, category: "masajes", label: "Masaje relajación", image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=700&h=560&fit=crop&auto=format" },
  { id: 4, category: "uñas", label: "Diseño de uñas", image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=700&h=560&fit=crop&auto=format" },
  { id: 5, category: "belleza", label: "Pestañas", tall: true, image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=700&h=900&fit=crop&auto=format" },
  { id: 6, category: "podologia", label: "Podología", image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=700&h=560&fit=crop&auto=format" },
  { id: 7, category: "uñas", label: "Nivelación rubber", image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=700&h=560&fit=crop&auto=format" },
  { id: 8, category: "masajes", label: "Descontracturante", tall: true, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=700&h=900&fit=crop&auto=format" },
  { id: 9, category: "belleza", label: "Peinados", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=700&h=560&fit=crop&auto=format" },
  { id: 10, category: "uñas", label: "Esmaltado", image: "https://images.unsplash.com/photo-1636018943302-b34fdf2b1c37?w=700&h=560&fit=crop&auto=format" },
  { id: 11, category: "pedicure", label: "Pedicure spa", tall: true, image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=700&h=900&fit=crop&auto=format" },
  { id: 12, category: "masajes", label: "Piernas cansadas", image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=700&h=560&fit=crop&auto=format" },
]
