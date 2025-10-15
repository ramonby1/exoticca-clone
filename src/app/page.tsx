'use client'
import Link from "next/link";
import { Search, MapPin, Calendar, ChevronRight, ChevronLeft, User, Phone, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

function FlashSaleCarousel() {
  const slides = [
    { title: "Sailing",                image: "/navegacion.jpg" },
    { title: "Horse riding",                  image: "/caballos.jpg" },
    { title: "Whale and dolphin watching",                  image: "/delfines.jpg" },
    { title: "Flamenco tablao",                  image: "/flamenca.jpg" },
    { title: "Flyboarding",                  image: "/flyboard.jpg" },
    { title: "Hot air ballooning",                     image: "/globo.jpg" },
    { title: "Jet skiing",                   image: "/jet-ski.jpg" },
    { title: "Paddle surfing",               image: "/paddle-surf.jpg" },
    { title: "Parasailing",               image: "/parasailing.jpg" },
    { title: "Snorkeling",                   image: "/snorkel.jpg" },
    { title: "Spa",                       image: "/spa.jpg" },
    { title: "Wine cellar tour",                    image: "/bodega.jpg" },
    { title: "Yoga",                      image: "/yoga.jpg" },
    { title: "Diving",                     image: "/buceo.jpg" },
  ]

  const trackRef = useRef<HTMLDivElement | null>(null)
  const [index, setIndex] = useState(0)

  const scrollTo = (i: number) => {
    const el = trackRef.current
    if (!el) return
    const slide = el.children[i] as HTMLElement
    if (!slide) return
    const padLeft = parseInt(getComputedStyle(el).paddingLeft.replace("px", "") || "0", 10)
    el.scrollTo({ left: slide.offsetLeft - padLeft, behavior: "smooth" })
    setIndex(i)
  }

  const next = () => scrollTo((index + 1) % slides.length)
  const prev = () => scrollTo((index - 1 + slides.length) % slides.length)

  // autoplay
  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [index])

  // sincroniza índice cuando haces scroll manual
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const handler = () => {
      const kids = Array.from(el.children) as HTMLElement[]
      const { scrollLeft } = el
      let nearest = 0
      let min = Number.POSITIVE_INFINITY
      kids.forEach((k, i) => {
        const diff = Math.abs(k.offsetLeft - scrollLeft)
        if (diff < min) { min = diff; nearest = i }
      })
      setIndex(nearest)
    }
    el.addEventListener("scroll", handler, { passive: true })
    return () => el.removeEventListener("scroll", handler)
  }, [])

  return (
    <section className="py-16 bg-[#10152b] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-3xl font-bold">
              Activities{" "}
            </h2>
          </div>

          <div className="hidden md:flex gap-2">
            <button
              onClick={prev}
              className="rounded-full border bg-white hover:bg-gray-100 w-11 h-11 grid place-items-center shadow"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="rounded-full border bg-white hover:bg-gray-100 w-11 h-11 grid place-items-center shadow"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carril */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 px-1
                     [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((s, i) => (
            <article
              key={i}
              className="relative snap-start shrink-0 w-[85vw] sm:w-[420px] lg:w-[520px]
                         h-[560px] rounded-[28px] overflow-hidden shadow-xl cursor-pointer group"
            >
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-4xl leading-tight font-extrabold drop-shadow-md">{s.title}</h3>
              </div>
            </article>
          ))}
        </div>


      </div>
    </section>
  )
}

function ThematicCarousel() {
  const slides = [
    { title: "Sports",   image: "/golf.jpg" },         // golf
    { title: "Water sports",   image: "/acuatico.jpg" },     // windsurf/agua
    { title: "Adventure",   image: "/bici.jpg" },         // bici de montaña
    { title: "Wine tourism", image: "/enoturismo.jpg" },   // viñedo
    { title: "Recreational", image: "/pesca.jpg" },        // pesca
  ]

  const trackRef = useRef<HTMLDivElement | null>(null)
  const [index, setIndex] = useState(0)

  const scrollTo = (i: number) => {
    const el = trackRef.current
    if (!el) return
    const slide = el.children[i] as HTMLElement
    if (!slide) return
    const padLeft = parseInt(getComputedStyle(el).paddingLeft.replace("px", "") || "0", 10)
    el.scrollTo({ left: slide.offsetLeft - padLeft, behavior: "smooth" })
    setIndex(i)
  }

  const next = () => scrollTo((index + 1) % slides.length)
  const prev = () => scrollTo((index - 1 + slides.length) % slides.length)

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [index])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const handler = () => {
      const kids = Array.from(el.children) as HTMLElement[]
      const { scrollLeft } = el
      let nearest = 0
      let min = Number.POSITIVE_INFINITY
      kids.forEach((k, i) => {
        const diff = Math.abs(k.offsetLeft - scrollLeft)
        if (diff < min) { min = diff; nearest = i }
      })
      setIndex(nearest)
    }
    el.addEventListener("scroll", handler, { passive: true })
    return () => el.removeEventListener("scroll", handler)
  }, [])

  return (
    <section className="py-16 bg-[#fee6ca]">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-3xl font-bold">Themes</h2>
          </div>

          <div className="hidden md:flex gap-2">
            <button
              onClick={prev}
              className="rounded-full border bg-white hover:bg-gray-100 w-11 h-11 grid place-items-center shadow"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="rounded-full border bg-white hover:bg-gray-100 w-11 h-11 grid place-items-center shadow"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carril */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 px-1
                     [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((s, i) => (
            <article
              key={i}
              className="relative snap-start shrink-0 w-[85vw] sm:w-[420px] lg:w-[520px]
                         h-[560px] rounded-[28px] overflow-hidden shadow-xl cursor-pointer group"
            >
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-4xl leading-tight font-extrabold drop-shadow-md">{s.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
function HotelsCarousel() {
  const slides = [
    { title: "Mallorca",        subtitle: "Balearic Islands", image: "/mallorca-ciudad-istock.jpg" },
    { title: "Ribera del Duero",subtitle: "Castilla y León",  image: "/ribera-del-duero.jpg" },
    { title: "Gran Canaria",    subtitle: "Canary Islands",   image: "/gran-canaria-arguineguin.jpg" },
    { title: "Cadaqués-Empordà",subtitle: "Costa Brava",      image: "/costa-brava-cadaques-barquito.jpg" },
    { title: "Barcelona",       subtitle: "Catalonia",        image: "/barcelona.jpg" },
  ]

  const trackRef = useRef<HTMLDivElement | null>(null)
  const [index, setIndex] = useState(0)

  const scrollTo = (i: number) => {
    const el = trackRef.current
    if (!el) return
    const slide = el.children[i] as HTMLElement
    if (!slide) return
    const padLeft = parseInt(getComputedStyle(el).paddingLeft.replace("px","") || "0", 10)
    el.scrollTo({ left: slide.offsetLeft - padLeft, behavior: "smooth" })
    setIndex(i)
  }

  const next = () => scrollTo((index + 1) % slides.length)
  const prev = () => scrollTo((index - 1 + slides.length) % slides.length)

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [index])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const handler = () => {
      const kids = Array.from(el.children) as HTMLElement[]
      const { scrollLeft } = el
      let nearest = 0, min = Number.POSITIVE_INFINITY
      kids.forEach((k, i) => {
        const diff = Math.abs(k.offsetLeft - scrollLeft)
        if (diff < min) { min = diff; nearest = i }
      })
      setIndex(nearest)
    }
    el.addEventListener("scroll", handler, { passive: true })
    return () => el.removeEventListener("scroll", handler)
  }, [])

  return (
    <section className="py-16 bg-[#10152b] text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="text-3xl font-bold">Hotels</h2>
          <div className="hidden md:flex gap-2">
            <button
              onClick={prev}
              className="rounded-full border bg-white hover:bg-gray-100 w-11 h-11 grid place-items-center shadow"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="rounded-full border bg-white hover:bg-gray-100 w-11 h-11 grid place-items-center shadow"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 px-1
                     [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((s, i) => (
            <article
              key={i}
              className="relative snap-start shrink-0 w-[85vw] sm:w-[420px] lg:w-[520px]
                         h-[560px] rounded-[28px] overflow-hidden shadow-xl cursor-pointer group"
            >
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-4xl leading-tight font-extrabold drop-shadow-md">{s.title}</h3>
                <p className="opacity-90 text-lg drop-shadow-sm">{s.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      <header className="bg-[#10152b] text-white sticky top-0 z-50 shadow-lg">
  <div className="container mx-auto px-4">
    <div className="relative flex items-center justify-center h-16">
      {/* LOGO centrado */}
      <Link
  href="/"
  className="absolute left-1/2 -translate-x-1/2 flex items-center"
  aria-label="Unique Experiences - Home"
>
  <img
    src="/logo-horiz-beige.png"
    alt="Unique Experiences"
    className="h-8 md:h-10 object-contain"
    draggable={false}
  />
</Link>


      {/* Teléfono e iconos a la derecha */}
      <div className="absolute right-0 flex items-center gap-6">
        {/* ...lo que ya tenías... */}
      </div>
    </div>
  </div>
</header>



      {/* Hero Section con video de fondo pantalla completa */}
<section className="relative h-screen overflow-hidden">
  {/* Video de fondo */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/hero.mp4" type="video/mp4" />
    Tu navegador no soporta videos.
  </video>

  {/* Capa oscura para contraste */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Contenido centrado vertical y horizontalmente */}
  <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
    {/* Search Bar */}
    <div className="bg-white rounded-full shadow-lg p-2 flex items-center gap-2 max-w-2xl w-full">
      <div className="flex items-center gap-2 px-4 flex-1">
        <MapPin className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Departure city"
          className="outline-none text-sm w-full text-black"
        />
      </div>
      <div className="border-l h-8" />
      <div className="flex items-center gap-2 px-4 flex-1">
        <MapPin className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="To"
          className="outline-none text-sm w-full text-black"
        />
      </div>
      <div className="border-l h-8" />
      <div className="flex items-center gap-2 px-4 flex-1">
        <Calendar className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Departure date"
          className="outline-none text-sm w-full text-black"
        />
      </div>
      <Button className="rounded-full bg-[#1C1D21] hover:bg-[#2C2D31] w-12 h-12">
        <Search className="w-5 h-5" />
      </Button>
    </div>
  </div>
</section>

<FlashSaleCarousel />
<ThematicCarousel />
<HotelsCarousel />   {/* <-- nuevo */}


      {/* Where to next Section */}
      <section className="py-16 bg-[#fee6ca]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Where to next?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Mallorca", trips: "Balearic Island", image: "/mallorca-ciudad-istock.jpg" },
              { name: "Ribera del Duero", trips: "Castilla y León", image: "/ribera-del-duero.jpg" },
              { name: "Gran Canaria", trips: "Canary Islands", image: "/gran-canaria-arguineguin.jpg" },
              { name: "Cadaqués-Emporda", trips: "Costa Brava", image: "/costa-brava-cadaques-barquito.jpg" },
              { name: "Barcelona", trips: "Catalonia", image: "/barcelona.jpg" }
            ].map((dest, i) => (
              <div key={i} className="relative h-40 rounded-xl overflow-hidden group cursor-pointer">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{dest.name}</h3>
                  <p className="text-sm">{dest.trips}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
            {[
              { name: "Sevilla", trips: "Andalusia", image: "sevilla.jpg" },
              { name: "Tenerife", trips: "Canary Islands", image: "/tenerife.jpg" },
              { name: "Ibiza", trips: "Balearic Islands", image: "/ibiza-roca.jpg" },
              { name: "Rias Baixas", trips: "Galicia", image: "rias-baixas.jpg" },
              { name: "Granada", trips: "Andalusia", image: "/granada.jpg" }
            ].map((dest, i) => (
              <div key={i} className="relative h-40 rounded-xl overflow-hidden group cursor-pointer">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{dest.name}</h3>
                  <p className="text-sm">{dest.trips}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#10152b] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Refer a friend program</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Regala Unique</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Customer support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Chat with us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center & FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">0034 685 046 871</a></li>
                <li><a href="#" className="hover:text-white transition-colors">0044 (0) 751 356 928</a></li>
                <li><a href="#" className="hover:text-white transition-colors">info@experiencesunique.com</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Policies</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">General conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies policy</a></li>
              </ul>
            </div>
          </div>

          {/* Social and Payment Icons */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/><path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>

              <div className="flex gap-4 items-center">
                <div className="flex gap-2">
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
