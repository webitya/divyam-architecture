"use client"

import { motion } from "framer-motion"
import Hero from "@/components/Home/Hero"
import Narrative from "@/components/Home/Narrative"
import ServiceShowcase from "@/components/Home/ServiceShowcase"
import HomeInquiry from "@/components/Home/HomeInquiry"
import Footer from "@/components/Shared/Footer/Footer"

export default function HomePage() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden font-['NeueHaasGroteskDisplay','Inter','sans-serif']">
      <Hero />

      {/* Narrative Section */}
      <Narrative />

      {/* Service Showcase */}
      <ServiceShowcase />

      {/* Home Inquiry */}
      <HomeInquiry />

      <Footer />
    </main>
  )
}

