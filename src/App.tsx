import { useEffect, useState } from "react"
import type { Page } from "./brand"
import Header from "./components/Header"
import Footer from "./components/Footer"
import WhatsAppFloat from "./components/WhatsAppFloat"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Gallery from "./pages/Gallery"
import About from "./pages/About"
import Contact from "./pages/Contact"

const PAGES: Page[] = ["inicio", "servicios", "galeria", "nosotros", "contacto"]

function currentHash(): Page {
  const h = window.location.hash.replace("#/", "").replace("#", "") as Page
  return PAGES.includes(h) ? h : "inicio"
}

export default function App() {
  const [page, setPage] = useState<Page>(currentHash)

  const navigate = (p: Page) => {
    window.location.hash = `/${p}`
    setPage(p)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    const onHash = () => setPage(currentHash())
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [])

  return (
    <div className="min-h-screen bg-crema">
      <Header page={page} navigate={navigate} />
      <main>
        {page === "inicio" && <Home navigate={navigate} />}
        {page === "servicios" && <Services navigate={navigate} />}
        {page === "galeria" && <Gallery />}
        {page === "nosotros" && <About navigate={navigate} />}
        {page === "contacto" && <Contact />}
      </main>
      <Footer navigate={navigate} />
      <WhatsAppFloat />
    </div>
  )
}
