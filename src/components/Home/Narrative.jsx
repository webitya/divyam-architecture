"use client"

import { motion } from "framer-motion"

export default function Narrative() {
    return (
        <section className="bg-[#0a0a0a] py-24 md:py-32 px-6 md:px-16 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col md:flex-row gap-12 md:gap-24 items-start"
                >
                    <div className="md:w-1/3">
                        <h2 className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium mb-4">
                            Our Narrative
                        </h2>
                        <p className="text-3xl md:text-4xl font-light leading-tight text-white tracking-tight">
                            Crafting <span className="font-semibold text-white">Sustainable</span> Futures through Contextual Design.
                        </p>
                    </div>

                    <div className="md:w-2/3">
                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light mb-8 italic">
                            "We focus on taking inspiration from the past, the context, the client requirements and the future to provide sustainable solutions, creating experience through design."
                        </p>
                        <p className="text-base text-gray-500 leading-relaxed max-w-2xl">
                            At DIVYAM ARCHITECTURE & DESIGN STUDIO, we believe that architecture is more than just buildings; it's about the stories we tell and the experiences we create. Our approach balances legacy with innovation, ensuring every line drawn serves a purpose for both the inhabitant and the environment.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
