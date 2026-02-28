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
        title: "Residential Architecture",
        description:
          "We specialize in creating bespoke residential designs that seamlessly blend functionality with aesthetic excellence. Our approach focuses on understanding the lifestyle and aspirations of our clients, translating these into thoughtfully designed living spaces. From contemporary minimalist homes to classic heritage-inspired properties, we deliver architecture that enhances daily living while respecting the surrounding environment.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=700&fit=crop",
        features: ["Bespoke Home Design", "Sustainable Living", "Contextual Integration"]
      },
      {
        title: "Commercial Spaces",
        description:
          "Our commercial architectural expertise spans office buildings, retail spaces, and mixed-use developments. We create dynamic environments that foster productivity, creativity, and commercial success. Each project is designed with careful attention to workflow optimization, natural lighting, and sustainable building practices that reduce operational costs while enhancing occupant well-being.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=700&fit=crop",
        features: ["Workplace Strategy", "Retail Experience", "Adaptive Reuse"]
      },
      {
        title: "Design Philosophy",
        description:
          "Our design philosophy is rooted in the principle that architecture should serve both form and function. We believe in creating spaces that inspire, promote well-being, and stand the test of time. We engage deeply with site context, climatic conditions, and local character to create architecture that feels both timeless and contemporary.",
        image: "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?w=900&h=700&fit=crop",
        features: ["Timeless Aesthetics", "Functionality First", "Environmental Harmony"]
      },
    ],
    nextService: { name: "Planning Applications", slug: "planning-applications" }
  },
  "planning-applications": {
    title: "Planning Applications",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=1000&fit=crop",
    sections: [
      {
        title: "Strategic Planning",
        description:
          "Navigating the planning approval process requires expertise, local knowledge, and strategic thinking. We guide clients through every stage of the planning application, from pre-application consultations through to final approval. Our proactive approach includes pre-application engagement with planning officers to identify and resolve potential issues early.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=700&fit=crop",
        features: ["Feasibility Studies", "Policy Analysis", "Risk Mitigation"]
      },
      {
        title: "Regulatory Compliance",
        description:
          "Building regulations, zoning laws, and environmental regulations form a complex landscape that we navigate with precision. Our planning specialists ensure full compliance with all applicable regulations while optimizing your project's design and timeline. We handle statutory consultations, environmental assessments, and neighbor negotiations with professionalism.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=700&fit=crop",
        features: ["Zoning Laws", "Building Codes", "Environmental Assessments"]
      },
      {
        title: "Community Engagement",
        description:
          "Successful planning outcomes often depend on community support and stakeholder engagement. We develop comprehensive community engagement strategies that build consensus and demonstrate project benefits. Through public consultations and transparent communication, we foster positive relationships and address concerns early in the process.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=700&fit=crop",
        features: ["Public Consultation", "Stakeholder Management", "Presentation Graphics"]
      },
    ],
    nextService: { name: "Interior Design", slug: "interior-design" }
  },
  "interior-design": {
    title: "Interior Design",
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&h=1000&fit=crop",
    sections: [
      {
        title: "Spatial Planning",
        description:
          "Exceptional interior design begins with intelligent spatial planning. We analyze flow patterns, natural light, and spatial relationships to create layouts that maximize functionality and aesthetic impact. Our designs optimize space utilization while creating distinct zones for different activities, ensuring your interior supports both practical needs and lifestyle aspirations.",
        image: "https://images.unsplash.com/photo-1635108197780-5099f0a4e50d?w=900&h=700&fit=crop",
        features: ["Flow Optimization", "Space Utilization", "Zoning Strategy"]
      },
      {
        title: "Material Selection",
        description:
          "The choice of materials profoundly influences the character and durability of interior spaces. We curate premium materials that balance aesthetic appeal with practical performance requirements. Our selection process considers sustainability, maintenance, cost-effectiveness, and design intent, ensuring each material choice contributes cohesively to the overall design vision.",
        image: "https://plus.unsplash.com/premium_photo-1682148691154-68588e72071e?w=900&h=700&fit=crop",
        features: ["Premium Finishes", "Durability Analysis", "Sustainability Focus"]
      },
      {
        title: "Lighting & Ambiance",
        description:
          "Lighting design is crucial to creating spaces that are both functional and emotionally resonant. We integrate natural and artificial lighting strategically to enhance spatial qualities and mood. Through thoughtful illumination design, we create dynamic environments that adapt to different times of day and activities.",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&h=700&fit=crop",
        features: ["Daylight Analysis", "Mood Lighting", "Fixture Specification"]
      },
    ],
    nextService: { name: "Conservation & Heritage", slug: "conservation-heritage" }
  },
  "conservation-heritage": {
    title: "Conservation & Heritage",
    heroImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&h=1000&fit=crop",
    sections: [
      {
        title: "Heritage Restoration",
        description:
          "Restoring heritage buildings requires deep knowledge of historical construction, architectural styles, and conservation principles. We approach each restoration project with meticulous research and respect for historical authenticity. Our team collaborates with conservation specialists to preserve original features while implementing sensitive modern interventions.",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&h=700&fit=crop",
        features: ["Historical Research", "Authentic Restoration", "Sensitive Intervention"]
      },
      {
        title: "Adaptive Reuse",
        description:
          "Historic buildings hold immense cultural and architectural value. We specialize in adaptive reuse projects that breathe new life into heritage structures, transforming them for contemporary use while preserving their character. From historic warehouses converted to modern residences to period properties reimagined as cultural centers.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&h=700&fit=crop",
        features: ["Modern Integration", "Cultural Preservation", "Sustainable Renewal"]
      },
      {
        title: "Regulatory Standards",
        description:
          "Conservation work is governed by strict heritage regulations. We maintain expert knowledge of conservation area regulations, listed building rules, and heritage planning guidelines. Our approach ensures all interventions meet stringent heritage conservation standards while working collaboratively with heritage authorities to achieve approvals.",
        image: "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?w=900&h=700&fit=crop",
        features: ["Listed Building Consent", "Conservation Areas", "Authority Liaison"]
      },
    ],
    nextService: { name: "Create & Construct", slug: "create-construct" }
  },
  "create-construct": {
    title: "Create & Construct",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&h=1000&fit=crop",
    sections: [
      {
        title: "Project Management",
        description:
          "From concept through completion, our project management expertise ensures seamless execution of construction projects. We coordinate all trades, manage timelines and budgets, and maintain rigorous quality standards throughout the building process. Our proactive approach anticipates challenges and implements solutions efficiently.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&h=700&fit=crop",
        features: ["Timeline Management", "Budget Control", "Quality Assurance"]
      },
      {
        title: "Build Quality",
        description:
          "Construction excellence is our hallmark. We employ skilled tradespeople and implement robust quality control processes at every stage. Our attention to detail ensures that finished buildings meet design specifications precisely, with flawless execution of architectural details and superior craftsmanship that creates built environments of lasting quality.",
        image: "https://images.unsplash.com/photo-1582647509711-c8aa8a8bda71?w=900&h=700&fit=crop",
        features: ["Skilled Craftsmanship", "Material Testing", "Flawless Execution"]
      },
      {
        title: "Sustainable Building",
        description:
          "We integrate sustainable construction practices into every project, minimizing environmental impact while reducing long-term operational costs. This includes sustainable material sourcing, energy-efficient building systems, waste reduction strategies, and environmental site management.",
        image: "https://images.unsplash.com/photo-1674821770946-4f774b1907d7?w=900&h=700&fit=crop",
        features: ["Green Certifications", "Energy Efficiency", "Waste Reduction"]
      },
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
