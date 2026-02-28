"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react"; // Using Lucide for consistency
import Footer from "@/components/Shared/Footer/Footer";

export default function TeamPage() {
  React.useEffect(() => {
    document.title = "Our Team | Plan Edge Architect";
  }, []);

  const teamMembers = [
    { name: "Michael Chen", title: "Principal Architect", specialty: "Sustainable Design" },
    { name: "Sarah Anderson", title: "Lead Designer", specialty: "Interior Architecture" },
    { name: "James Mitchell", title: "Structural Engineer", specialty: "Engineering Solutions" },
    { name: "Elena Rodriguez", title: "Project Manager", specialty: "Project Delivery" },
    { name: "David Park", title: "Urban Planner", specialty: "Urban Design" },
    { name: "Lisa Thompson", title: "Design Director", specialty: "Brand Architecture" },
  ];

  return (
    <>
      <main style={{ background: "#0a0a0a", minHeight: "100vh", color: "#f3f4f6" }}>

        {/* HERO SECTION */}
        <section style={{
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Background Texture/Gradient */}
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, #1a1a1a 0%, #0a0a0a 70%)" }} />

          <div className="container mx-auto px-8 relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                fontSize: "clamp(3rem, 6vw, 6rem)",
                fontWeight: 200,
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
                color: "#fff"
              }}
            >
              OUR TEAM
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ height: "1px", width: "60px", background: "#fff", margin: "0 auto 2rem", opacity: 0.3 }}
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontSize: "1.2rem",
                fontWeight: 300,
                color: "#aaa",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.6
              }}
            >
              The collaborative minds crafting the future of architecture.
              Merging technical precision with artistic vision.
            </motion.p>
          </div>
        </section>

        {/* TEAM GRID */}
        <section style={{ padding: "6rem 2rem", background: "#0a0a0a" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "3rem"
            }}>
              {teamMembers.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  style={{
                    background: "#111",
                    borderRadius: "4px",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.05)",
                    position: "relative"
                  }}
                  whileHover={{ y: -10 }}
                >
                  {/* Avatar / Image Placeholder */}
                  <div style={{
                    height: "320px",
                    background: "#1a1a1a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden"
                  }}>
                    {/* In a real app, use next/image here */}
                    <div style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      background: "#222",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#333",
                      fontSize: "3rem",
                      fontWeight: 100
                    }}>
                      {member.name.charAt(0)}
                    </div>
                  </div>

                  <div style={{ padding: "2rem" }}>
                    <h3 style={{ fontSize: "1.5rem", fontWeight: 400, color: "#fff", marginBottom: "0.5rem" }}>
                      {member.name}
                    </h3>
                    <p style={{
                      textTransform: "uppercase",
                      fontSize: "0.75rem",
                      letterSpacing: "0.1em",
                      color: "#666",
                      marginBottom: "1rem"
                    }}>
                      {member.title}
                    </p>
                    <div style={{ height: "1px", width: "100%", background: "rgba(255,255,255,0.1)", marginBottom: "1rem" }}></div>
                    <p style={{ fontSize: "0.95rem", color: "#aaa", fontWeight: 300, marginBottom: "2rem" }}>
                      Specializing in <span style={{ color: "#fff" }}>{member.specialty}</span>
                    </p>

                    <div style={{ display: "flex", gap: "1.5rem" }}>
                      <div style={{ color: "#555", cursor: "pointer", transition: "color 0.3s" }} className="hover:text-white">
                        <Linkedin size={20} />
                      </div>
                      <div style={{ color: "#555", cursor: "pointer", transition: "color 0.3s" }} className="hover:text-white">
                        <Twitter size={20} />
                      </div>
                      <div style={{ color: "#555", cursor: "pointer", transition: "color 0.3s" }} className="hover:text-white">
                        <Mail size={20} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
