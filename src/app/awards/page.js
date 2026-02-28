"use client";
import React from "react";
import { motion } from "framer-motion";
import { Trophy, Star, Award } from "lucide-react";
import Footer from "@/components/Shared/Footer/Footer";

export default function AwardsPage() {
  React.useEffect(() => {
    document.title = "Awards & Recognition | DIVYAM ARCHITECTURE & DESIGN STUDIO";
  }, []);

  const awards = [
    { year: "2024", title: "International Architecture Excellence Award", category: "Sustainable Design" },
    { year: "2023", title: "Design Innovation Prize", category: "Urban Planning" },
    { year: "2023", title: "Best Commercial Project", category: "Commercial Architecture" },
    { year: "2022", title: "Global Design Leaders Award", category: "Excellence in Design" },
    { year: "2022", title: "Sustainable Building Award", category: "Green Architecture" },
    { year: "2021", title: "Emerging Architects Award", category: "Innovation" },
  ];

  return (
    <>
      <main style={{ background: "#0a0a0a", minHeight: "100vh", color: "#f3f4f6" }}>

        {/* HERO SECTION */}
        <section style={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #111 0%, #0a0a0a 100%)" }} />

          <div className="relative z-10 text-center px-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ marginBottom: "2rem", display: "inline-block", padding: "2rem", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "50%" }}
            >
              <Trophy size={64} strokeWidth={1} color="#fff" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontSize: "clamp(3rem, 6vw, 6rem)",
                fontWeight: 200,
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
                color: "#fff",
                textTransform: "uppercase"
              }}
            >
              Recognition
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontSize: "1.1rem",
                fontWeight: 300,
                color: "#888",
                letterSpacing: "0.1em",
                textTransform: "uppercase"
              }}
            >
              Celebrating Excellence in Design
            </motion.p>
          </div>
        </section>

        {/* AWARDS LIST SECTION */}
        <section style={{ padding: "0 2rem 8rem", maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            {awards.map((award, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{
                  padding: "3rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  display: "grid",
                  gridTemplateColumns: "1fr 3fr 1fr",
                  alignItems: "baseline",
                  gap: "2rem"
                }}
                className="award-item"
              >
                {/* Year */}
                <div style={{ fontSize: "1.2rem", color: "#666", fontWeight: 300 }}>
                  {award.year}
                </div>

                {/* Title */}
                <div>
                  <h3 style={{ fontSize: "2rem", fontWeight: 400, color: "#fff", marginBottom: "0.5rem" }}>
                    {award.title}
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#888" }}>
                    <Award size={16} />
                    <span style={{ textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "0.05em" }}>{award.category}</span>
                  </div>
                </div>

                {/* Icon/Arrow (Decorative) */}
                <div style={{ justifySelf: "end", opacity: 0.3 }}>
                  <Star size={24} color="#fff" strokeWidth={1} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Responsive Adjustments */}
          <style jsx>{`
                @media (max-width: 768px) {
                    .award-item {
                        grid-template-columns: 1fr !important;
                        gap: 1rem !important;
                    }
                }
            `}</style>
        </section>

      </main>
      <Footer />
    </>
  );
}
