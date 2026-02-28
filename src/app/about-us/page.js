"use client"

import React from "react"
import ArchitectureIcon from "@mui/icons-material/Architecture"
import BuildIcon from "@mui/icons-material/Build"
import EngineeringIcon from "@mui/icons-material/Engineering"
import GroupIcon from "@mui/icons-material/Group"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import VisibilityIcon from "@mui/icons-material/Visibility"
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects"
import PaletteIcon from "@mui/icons-material/Palette"
import Footer from "@/components/Shared/Footer/Footer"

export default function AboutPage() {
  React.useEffect(() => {
    document.title = "About Us | Planedge Architect - Premium Architectural Design"
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Discover Planedge Architects mission, vision, and core values. Leading architectural design and planning solutions for 15+ years.",
      )
    }
  }, [])

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Planedge Architect",
    alternateName: "PEA",
    url: "https://planegedearchitect.com",
    description: "Premium architectural design and planning solutions",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Architecture Ave",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10001",
      addressCountry: "US",
    },
    telephone: "+1-800-222-8764",
    email: "info@planegedearchitect.com",
  }

  const services = [
    { title: "Architectural Design", desc: "Innovative and contemporary design solutions", icon: ArchitectureIcon },
    { title: "Urban Planning", desc: "Strategic planning for sustainable communities", icon: LocationOnIcon },
    { title: "Structural Engineering", desc: "Advanced structural solutions and analysis", icon: EngineeringIcon },
    { title: "Interior Design", desc: "Elegant and functional interior spaces", icon: PaletteIcon },
    { title: "Sustainability", desc: "Green building and eco-friendly practices", icon: EmojiObjectsIcon },
    { title: "Project Management", desc: "Expert coordination and delivery oversight", icon: BuildIcon },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <main className="min-h-screen bg-white text-gray-900">
        {/* Hero Section */}
        <section
          className="relative w-full h-screen bg-black text-white flex items-center overflow-hidden"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1673014202349-38687dd47f94')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* ZOOM EFFECT LAYER */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-110 animate-zoomSlow"
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1673014202349-38687dd47f94')",
            }}
          ></div>

          {/* DARK GRADIENT OVERLAY */}
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-900 to-transparent opacity-40"></div>

          {/* TEXT CONTENT */}
          <div className="relative z-10 max-w-6xl mx-auto px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
                PLAN EDGE ARCHITECT
              </h1>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                A forward-thinking architectural firm shaping the built environment
                through innovative design and sustainable practices.
              </p>
              <button className="px-8 py-4 bg-white text-black font-semibold hover:bg-gray-200 transition">
                Read More
              </button>
            </div>
          </div>
        </section>


        {/* About Section - Split Layout */}
        <section className="relative w-full bg-gray-50">
          <div className="grid md:grid-cols-2">
            {/* Left: Content */}
            <div className="py-32 px-8 md:px-12 flex flex-col justify-center">
              <p className="text-gray-600 uppercase text-sm tracking-widest mb-6">Who We Are</p>
              <h2 className="text-5xl font-bold mb-8 leading-tight">Planedge Architect</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Planedge Architect (PEA) is an established architectural and design firm dedicated to creating
                innovative, sustainable, and transformative spaces. With over 15 years of industry experience, we have
                established ourselves as leaders in architectural excellence.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our award-winning team collaborates seamlessly to deliver projects that exceed expectations. We believe
                that great architecture goes beyond aesthetics—it creates functional spaces that enhance lives and
                communities.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                From concept to completion, we maintain the highest standards of excellence, ensuring every project
                reflects our commitment to innovation, sustainability, and timeless design.
              </p>
            </div>

            {/* Right: Visual */}
            <div className="relative mx-auto flex items-start justify-center 
                pt-10 h-64 w-64
                sm:pt-50 sm:h-64 sm:w-64">

              {/* Bottom Image */}
              <img
                src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600"
                className="
      absolute object-cover rounded-xl shadow-xl

      /* Mobile size */
      w-48 h-48

      /* Desktop size */
      sm:w-70 sm:h-70
    "
                style={{
                  transform: "rotate(-8deg)",
                  zIndex: 1,
                }}
              />

              {/* Top Image */}
              <img
                src="https://images.unsplash.com/photo-1723110994499-df46435aa4b3?w=1200"
                className="
      absolute object-cover rounded-xl shadow-xl

      /* Mobile size */
      w-68 h-68

      /* Desktop size */
      sm:w-70 sm:h-70
    "
                style={{
                  /* Mobile position */
                  transform: "translate(60px, 25px) rotate(10deg)",

                  /* Desktop position (overrides in sm:) */
                  "--tw-translate-x": "80px",
                  "--tw-translate-y": "30px",
                  zIndex: 2,
                }}
              />
            </div>


          </div>
        </section>

        {/* Stats Section */}
        <section className="relative w-full py-24 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="text-5xl font-bold text-black mb-2">400+</h3>
                <p className="text-gray-600 text-lg">Projects Completed</p>
              </div>
              <div className="text-center border-l border-gray-300">
                <h3 className="text-5xl font-bold text-black mb-2">50+</h3>
                <p className="text-gray-600 text-lg">Team Members</p>
              </div>
              <div className="text-center border-l border-gray-300">
                <h3 className="text-5xl font-bold text-black mb-2">15+</h3>
                <p className="text-gray-600 text-lg">Years Experience</p>
              </div>
              <div className="text-center border-l border-gray-300">
                <h3 className="text-5xl font-bold text-black mb-2">25+</h3>
                <p className="text-gray-600 text-lg">Awards Won</p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Matters Section */}
        <section className="relative w-full bg-black text-white">
          <div className="grid md:grid-cols-2">
            {/* Left: Visual */}
            <div className="min-h-96 md:min-h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-12">
              <div className="text-center">
                <h2 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight">
                  DESIGN
                  <br />
                  MATTERS
                </h2>
              </div>
            </div>

            {/* Right: Content */}
            <div className="py-24 px-12 flex flex-col justify-center">
              <p className="text-gray-400 uppercase text-sm tracking-widest mb-6">Design Philosophy</p>
              <h3 className="text-4xl font-bold mb-8">Our Design Philosophy</h3>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Design is not just about creating beautiful spaces. It is about solving problems, improving lives, and
                shaping how people experience their environment. Every project is an opportunity to innovate and make a
                meaningful impact.
              </p>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We believe that thoughtful design should balance aesthetics with functionality, sustainability with
                innovation, and vision with practicality. Our approach ensures that every space we create enhances both
                the built environment and the lives of those who inhabit it.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex gap-3 items-start">
                  <CheckCircleIcon className="text-white flex-shrink-0 mt-1" sx={{ fontSize: 24 }} />
                  <p className="text-gray-300">Innovative design solutions tailored to every project s unique needs</p>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircleIcon className="text-white flex-shrink-0 mt-1" sx={{ fontSize: 24 }} />
                  <p className="text-gray-300">Sustainable practices integrated at every stage of development</p>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircleIcon className="text-white flex-shrink-0 mt-1" sx={{ fontSize: 24 }} />
                  <p className="text-gray-300">Client collaboration and transparent communication throughout</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="relative w-full py-32 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-gray-600 uppercase text-sm tracking-widest mb-4">Our Foundation</p>
              <h2 className="text-5xl md:text-6xl font-bold">Core Values</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <BuildIcon className="text-black" sx={{ fontSize: 32 }} />
                  <h3 className="text-2xl font-bold">Share</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We share our design ideas with clients and collaborators openly, ensuring that our clients feel
                  confident with our vision for their projects.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <VisibilityIcon className="text-black" sx={{ fontSize: 32 }} />
                  <h3 className="text-2xl font-bold">Design</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Design excellence drives everything we do. We invest time in understanding how spaces impact people
                  and their experiences.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <EmojiObjectsIcon className="text-black" sx={{ fontSize: 32 }} />
                  <h3 className="text-2xl font-bold">People</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  People are at the center of everything we create. Great design serves people, improves lives, and
                  creates meaningful connections.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Design Studio Section */}
        <section className="relative w-full bg-black text-white">
          <div className="grid md:grid-cols-2">
            {/* Left: Content */}
            <div className="py-32 px-12 flex flex-col justify-center order-2 md:order-1">
              <p className="text-gray-400 uppercase text-sm tracking-widest mb-6">Studio Overview</p>
              <h2 className="text-5xl font-bold mb-8">Our Design Studio</h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our studio represents a diverse team of architects, engineers, and designers who bring unique
                perspectives and expertise. We pride ourselves on fostering a collaborative culture where ideas flourish
                and innovation thrives.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                The studio combines creativity and innovation with a commitment to producing high-quality architectural
                solutions. Excellence is the standard we expect in everything we do, from initial concept to final
                delivery.
              </p>
            </div>

            {/* Right: Visual */}
            <div
              className="min-h-96 md:min-h-full bg-gradient-to-br from-gray-900 to-black order-1 md:order-2 bg-cover bg-center"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600&fit=crop")`,
                backgroundBlendMode: "overlay", // keeps gradient on top
              }}
            ></div>
          </div>
        </section>

        {/* Publications Section */}
        <section className="relative w-full py-32 px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-gray-600 uppercase text-sm tracking-widest mb-4">Recognition</p>
              <h2 className="text-5xl md:text-6xl font-bold">Publications & Awards</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-12 items-center">
              <div className="h-24 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                <span className="text-xl font-bold text-gray-900">GRAND DESIGNS</span>
              </div>
              <div className="h-24 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                <span className="text-2xl font-bold text-gray-900">HOME</span>
              </div>
              <div className="h-24 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                <span className="text-xl font-bold text-gray-900">LIVINGETC</span>
              </div>
              <div className="h-24 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                <span className="text-sm font-bold text-gray-900">SQUARE BOOKS</span>
              </div>
            </div>
          </div>
        </section>



        {/* Services */}


      </main>
      <Footer />
    </>
  )
}
