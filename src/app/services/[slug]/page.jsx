"use client";

import React, { useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Footer from "@/components/Shared/Footer/Footer";

// --- DATA ---
const serviceDetails = {
  "architectural-design": {
    title: "Architectural Design",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=1000&fit=crop",
    sections: [
      {
        title: "Bespoke Design Solutions",
        description: "We focus on taking inspiration from the past, the context, the client requirements and the future to provide sustainable solutions, creating experience through design.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=700&fit=crop",
        features: ["Sustainable Solutions", "Client-Centric Design", "Future-Ready Architecture"]
      }
    ],
    nextService: { name: "Interior Design", slug: "interior-design" }
  },
  "interior-design": {
    title: "Interior Design",
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&h=1000&fit=crop",
    sections: [
      {
        title: "Elegant Interiors",
        description: "Creating experiences through design. We deliver plans, mood boards, and renderings that bring your dream vision to life.",
        image: "https://images.unsplash.com/photo-1635108197780-5099f0a4e50d?w=900&h=700&fit=crop",
        features: ["Space Planning", "Mood Boards", "Luxury Finishes"]
      }
    ],
    nextService: { name: "Landscape Design", slug: "landscape-design" }
  },
  "landscape-design": {
    title: "Landscape Design",
    heroImage: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1600&h=1000&fit=crop",
    sections: [
      {
        title: "Garden & Outdoor Living",
        description: "We create immersive outdoor spaces that extend your living area into nature. Our landscape designs focus on harmony between architecture and the natural environment.",
        image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=900&h=700&fit=crop",
        features: ["Bespoke Garden Design", "Outdoor Kitchens", "Water Features"]
      }
    ],
    nextService: { name: "3D Elevations & Renders", slug: "renders" }
  },
  "renders": {
    title: "3D Elevations & Renders",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&h=1000&fit=crop",
    sections: [
      {
        title: "Photorealistic Visuals",
        description: "Our high-end 3D renderings and 2D plans help you visualize your dream project before construction begins. We bring plans to life with light and texture.",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&h=700&fit=crop",
        features: ["High-Res Renders", "Walkthrough Animations", "Detailed 2D Plans"]
      }
    ],
    nextService: { name: "Sustainable Home Solutions", slug: "sustainable-solutions" }
  },
  "sustainable-solutions": {
    title: "Sustainable Home Solutions",
    heroImage: "https://images.unsplash.com/photo-1518005020411-3888080c19f1?w=1600&h=1000&fit=crop",
    sections: [
      {
        title: "Eco-Friendly Design",
        description: "We focus on sustainable solutions that reduce environmental impact and lower energy costs. From solar orientation to green materials, we design for the future.",
        image: "https://images.unsplash.com/photo-1518005020411-3888080c19f1?w=900&h=700&fit=crop",
        features: ["Energy Efficiency", "Solar Integration", "Sustainable Materials"]
      }
    ],
    nextService: { name: "Space Planning & Renovations", slug: "renovations" }
  },
  "renovations": {
    title: "Space Planning & Renovations",
    heroImage: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=1600&h=1000&fit=crop",
    sections: [
      {
        title: "Transforming Spaces",
        description: "We breathe new life into existing structures through thoughtful renovations and efficient space planning. We maximize potential and modernize living areas.",
        image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=900&h=700&fit=crop",
        features: ["Structural Changes", "Modernization", "Space Optimization"]
      }
    ],
    nextService: { name: "Professional Advice & Consultation", slug: "consultation" }
  },
  "consultation": {
    title: "Professional Advice & Consultation",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=1000&fit=crop",
    sections: [
      {
        title: "Expert Guidance",
        description: "Our professional consultation services provide you with the insights needed to make informed decisions about your architectural and design projects.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=700&fit=crop",
        features: ["Project Feasibility", "Technological Advice", "Site Analysis"]
      }
    ],
    nextService: { name: "Architectural Design", slug: "architectural-design" }
  },
};

// --- COMPONENTS ---

const Section = ({ title, description, image, features, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section style={{
      padding: "8rem 2rem",
      background: isEven ? "#0a0a0a" : "#121212", // Alternating dark colors
      overflow: "hidden"
    }}>
      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "6rem",
        alignItems: "center"
      }} className="responsive-grid">

        {/* TEXT COLUMN */}
        <motion.div
          style={{ order: isEven ? 1 : 2 }}
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <span style={{ height: "1px", width: "40px", background: "#fff", display: "inline-block" }}></span>
            <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#888" }}>0{index + 1}</span>
          </div>

          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 200,
            lineHeight: 1.1,
            marginBottom: "2rem",
            color: "#fff"
          }}>
            {title}
          </h2>

          <p style={{
            fontSize: "1.1rem",
            lineHeight: 1.7,
            color: "#b0b0b0",
            marginBottom: "2.5rem",
            fontWeight: 300
          }}>
            {description}
          </p>

          <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {features && features.map((feature, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: "1rem", color: "#e5e5e5", fontSize: "0.95rem" }}>
                <CheckCircle2 size={18} color="#fff" strokeWidth={1.5} />
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* IMAGE COLUMN */}
        <motion.div
          style={{ order: isEven ? 2 : 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "1rem", left: "1rem", right: "1rem", bottom: "1rem", border: "1px solid rgba(255,255,255,0.1)", zIndex: 2, pointerEvents: "none" }}></div>
            <img
              src={image}
              alt={title}
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: "4/3",
                objectFit: "cover",
                display: "block",
                filter: "grayscale(20%) contrast(1.1)"
              }}
            />
          </div>
        </motion.div>

      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
           .responsive-grid {
              grid-template-columns: 1fr !important;
              gap: 4rem !important;
           }
           .responsive-grid > div {
             order: unset !important;
           }
        }
      `}</style>
    </section>
  );
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug;
  const detail = serviceDetails[slug];
  const containerRef = useRef(null);

  // Parallax Effect for Hero
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  if (!detail) {
    return (
      <div style={{ minHeight: "100vh", background: "#0a0a0a", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <h1 style={{ color: "#fff", fontSize: "2rem", fontWeight: 200 }}>Service not found</h1>
        <Link href="/" style={{ color: "#888", marginTop: "1rem", textDecoration: "underline" }}>Return Home</Link>
      </div>
    );
  }

  return (
    <>
      <main ref={containerRef} style={{ background: "#0a0a0a", minHeight: "100vh", color: "#f3f4f6" }}>

        {/* --- HERO SECTION --- */}
        <div style={{ height: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <motion.div style={{ position: "absolute", inset: 0, y: y1 }}>
            <img
              src={detail.heroImage}
              alt={detail.title}
              style={{ width: "100%", height: "120%", objectFit: "cover", filter: "brightness(0.6)" }}
            />
          </motion.div>

          <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "2rem" }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ marginBottom: "1.5rem" }}
            >
              <span style={{
                display: "inline-block",
                padding: "0.5rem 1rem",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: "50px",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                backdropFilter: "blur(5px)"
              }}>
                Our Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontSize: "clamp(3rem, 8vw, 7rem)",
                fontWeight: 100,
                lineHeight: 1,
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                marginBottom: "2rem",
                color: "#fff"
              }}
            >
              {detail.title}
            </motion.h1>

            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100px" }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ width: "1px", background: "rgba(255,255,255,0.5)", margin: "0 auto" }}
            />
          </div>
        </div>

        {/* --- CONTENT SECTIONS --- */}
        <div style={{ position: "relative", zIndex: 2, background: "#0a0a0a" }}>
          {detail.sections.map((section, idx) => (
            <Section key={idx} index={idx} {...section} />
          ))}
        </div>

        {/* --- NEXT SERVICE --- */}
        {detail.nextService && (
          <div style={{ padding: "6rem 2rem", borderTop: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>
            <p style={{ color: "#666", textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.8rem", marginBottom: "1rem" }}>Next Service</p>
            <Link href={`/services/${detail.nextService.slug}`} style={{ textDecoration: "none" }}>
              <h3 className="next-link" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 200, color: "#fff", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "1rem" }}>
                {detail.nextService.name}
                <ArrowRight size={40} className="arrow-icon" />
              </h3>
            </Link>
            <style jsx>{`
                    .next-link { transition: opacity 0.3s; }
                    .next-link:hover { opacity: 0.7; }
                    .next-link:hover .arrow-icon { transform: translateX(10px); transition: transform 0.3s; }
                `}</style>
          </div>
        )}

      </main>
      <Footer />
    </>
  );
}
