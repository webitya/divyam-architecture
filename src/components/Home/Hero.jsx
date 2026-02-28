"use client"

import { motion } from "framer-motion"

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center px-6 md:px-16 overflow-hidden">
            {/* Background with Parallax effect */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 -z-20"
                style={{
                    backgroundImage: "url('/hero.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            {/* Sophisticated Overlays */}
            <div className="absolute inset-0 bg-black/20 -z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent -z-10" />

            {/* Content Container */}
            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-8 lg:col-span-7">
                    {/* Brand Tagline */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <div className="h-[1px] w-12 bg-white/40" />
                        <span className="text-xs uppercase tracking-[0.5em] text-white/60 font-medium">
                            DIVYAM ARCHITECTURE
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 1 }}
                        className="text-4xl sm:text-6xl lg:text-7xl font-light leading-[1] tracking-tighter mb-10 text-white"
                    >
                        Designing <br />
                        <span className="font-semibold italic font-serif">Spaces,</span> <br />
                        Shaping <span className="text-white">Experiences.</span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed mb-12 font-light border-l-2 border-white/10 pl-8"
                    >
                        We focus on taking inspiration from the past and the future to provide sustainable solutions, creating meaningful stories through contextual design.
                    </motion.p>

                    {/* Call to Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="flex flex-wrap gap-6 items-center"
                    >
                        <a
                            href="/commercial"
                            className="group relative px-10 py-5 bg-white text-black text-xs uppercase tracking-[0.3em] font-bold hover:bg-black hover:text-white transition-all duration-500 rounded-sm overflow-hidden border border-white"
                        >
                            <span className="relative z-10">View Projects</span>
                            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </a>

                    </motion.div>
                </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 2 }}
                className="absolute bottom-12 right-12 hidden lg:flex flex-col items-end gap-4"
            >
                <div className="w-[1px] h-32 bg-gradient-to-t from-white/40 to-transparent" />
                <span className="text-[10px] uppercase tracking-[1em] text-white/40 [writing-mode:vertical-lr] rotate-180">
                    SCROLL
                </span>
            </motion.div>
        </section>
    )
}
