"use client"

import { motion } from "framer-motion"


export default function HomePage() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden font-['NeueHaasGroteskDisplay','Inter','sans-serif']">
      <motion.section
        className="relative flex flex-col items-center justify-center min-h-screen px-6 md:px-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          style={{
            backgroundImage: "url('/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.92)",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/25 to-black/10 -z-10"></div>

        {/* Heading */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight mb-6 leading-tight drop-shadow-lg"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Designing Spaces,
          <br />
          <span className="font-semibold">Shaping Experiences</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-gray-100 text-lg sm:text-xl max-w-2xl leading-relaxed mb-12 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Planedge Architect creates thoughtful spaces where design meets
          purpose and everyday living becomes extraordinary
        </motion.p>

        {/* CTA */}
        <motion.a
          href="/commercial"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/10 text-white rounded-full text-lg font-medium tracking-wider backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/40 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] overflow-hidden"
        >
          <span className="relative z-10">Explore Our Projects</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.a>
      </motion.section>
    </main>
  )
}

