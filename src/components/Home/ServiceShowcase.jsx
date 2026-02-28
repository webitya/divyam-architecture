"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const services = [
    {
        title: "Architectural Design",
        description: "From conceptual sketches to structural reality, we design spaces that breathe and inspire. Our architectural solutions are deeply rooted in context and sustainability.",
        image: "/modern-architectural-design.jpg",
        link: "/services/architectural-design",
        tag: "Concept to Reality"
    },
    {
        title: "Interior Design",
        description: "Creating curated atmospheres that reflect your identity. We blend functionality with high-end aesthetics to transform every interior into a masterpiece of spatial design.",
        image: "/interior-spatial-design.jpg",
        link: "/services/interior-design",
        tag: "Curated Atmospheres",
        reversed: true
    },
    {
        title: "Landscape Design",
        description: "Harmonizing the built environment with nature. Our landscape designs focus on ecological balance and creating outdoor spaces that extend your living experience.",
        image: "/luxury-residential-home.jpg",
        link: "/services/landscape-design",
        tag: "Nature Integrated"
    }
]

export default function ServiceShowcase() {
    return (
        <section className="bg-white text-black overflow-hidden">
            {services.map((service, idx) => (
                <div key={idx} className={`flex flex-col ${service.reversed ? 'md:flex-row-reverse' : 'md:flex-row'} min-h-[70vh]`}>
                    {/* Image Side */}
                    <div className="md:w-1/2 relative h-[400px] md:h-auto overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${service.image})` }}
                            initial={{ scale: 1.1 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                        <div className="absolute inset-0 bg-black/5 md:bg-transparent" />
                    </div>

                    {/* Content Side */}
                    <div className="md:w-1/2 flex flex-col justify-center p-10 md:p-20 lg:p-32">
                        <motion.span
                            initial={{ opacity: 0, x: service.reversed ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-6 block"
                        >
                            {service.tag}
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-4xl md:text-5xl font-light mb-8 tracking-tight"
                        >
                            {service.title}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="text-lg text-gray-600 leading-relaxed mb-10 font-light"
                        >
                            {service.description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            <Link
                                href={service.link}
                                className="inline-flex items-center gap-4 text-sm font-semibold tracking-widest uppercase group border-b border-black/10 pb-2 transition-all hover:border-black"
                            >
                                Learn More
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            ))}
        </section>
    )
}
