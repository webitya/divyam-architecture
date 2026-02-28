"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "./Shared/Footer/Footer";

export default function PortfolioClient({ projects, category }) {
    const [selectedProject, setSelectedProject] = useState(null);
    const scrollContainerRef = useRef(null);

    const scrollPrev = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
        }
    };

    const scrollNext = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: window.innerWidth, behavior: "smooth" });
        }
    };

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedProject]);

    return (
        <>
            <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Project Card Hover Effects */
        .project-card .project-image {
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.7s ease !important;
        }
        
        .project-card:hover .project-image {
          transform: scale(1.05) !important;
          filter: grayscale(0%) contrast(1) !important;
        }
        
        .project-card:hover .hover-overlay {
          opacity: 1 !important;
        }

        /* Responsive Grid */
        .portfolio-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
            gap: 3rem;
            max-width: 1800px;
            margin: 0 auto;
        }

        /* Responsive Overlay Slide */
        .portfolio-slide-container {
            flex: 0 0 100vw;
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: row;
            scroll-snap-align: start;
            position: relative;
        }
        
        .portfolio-image-section {
            flex: 1.6;
            height: 100%;
            position: relative;
        }

        .portfolio-text-panel {
            flex: 1;
            min-width: 600px;
            padding: 0 6rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: #0a0a0a;
            border-left: 1px solid rgba(255,255,255,0.05);
            position: relative;
        }

        @media (max-width: 1024px) {
            .portfolio-grid {
                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                gap: 2rem;
            }
            
            .portfolio-slide-container {
                flex-direction: column;
                height: auto; /* Allow auto height on mobile so it scrolls vertically if needed */
                min-height: 100vh;
                overflow-y: auto;
            }

            .portfolio-image-section {
                flex: none;
                height: 50vh; /* Half screen image */
                width: 100%;
            }

            .portfolio-text-panel {
                flex: none;
                min-width: 100%;
                width: 100%;
                padding: 3rem 2rem;
                border-left: none;
                border-top: 1px solid rgba(255,255,255,0.05);
            }
        }

        @media (max-width: 640px) {
             .portfolio-grid {
                grid-template-columns: 1fr;
                gap: 3rem;
            }
        }
      `}</style>

            {/* --- GRID VIEW --- */}
            <section style={{
                padding: "120px 2rem 4rem",
                minHeight: "100vh",
                background: "#0a0a0a",
                color: "#f3f4f6"
            }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: "5rem", textAlign: "center" }}
                >
                    <h1 style={{
                        fontSize: "clamp(2rem, 4vw, 3.5rem)",
                        fontWeight: 200,
                        letterSpacing: "-0.02em",
                        marginBottom: "1.5rem",
                        textTransform: "uppercase",
                        background: "linear-gradient(to bottom, #ffffff, #888888)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}>
                        {category}
                    </h1>
                    <div style={{ height: "1px", width: "40px", background: "#fff", margin: "0 auto", opacity: 0.3 }}></div>
                </motion.div>

                {/* Grid */}
                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layoutId={`project-card-${project.id}`}
                            onClick={() => setSelectedProject(project)}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            style={{ cursor: "pointer" }}
                            className="project-card"
                            whileHover={{ y: -10 }}
                        >
                            {/* Image Container */}
                            <div style={{
                                position: "relative",
                                aspectRatio: "16/10",
                                overflow: "hidden",
                                borderRadius: "2px",
                                marginBottom: "1.5rem",
                                background: "#1a1a1a"
                            }}>
                                <motion.img
                                    layoutId={`project-image-${project.id}`}
                                    src={project.cover}
                                    alt={project.title}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        filter: "grayscale(20%) contrast(1.1)"
                                    }}
                                    className="project-image"
                                />
                                <div style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "rgba(0,0,0,0.3)",
                                    opacity: 0,
                                    transition: "opacity 0.4s ease"
                                }} className="hover-overlay" />
                            </div>

                            {/* Metadata */}
                            <motion.div layoutId={`project-info-${project.id}`} style={{ paddingLeft: "0.5rem" }}>
                                <h2 style={{ fontSize: "1.5rem", fontWeight: 300, marginBottom: "0.5rem", color: "#fff" }}>{project.title}</h2>
                                <p style={{ fontSize: "0.85rem", color: "#888", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                                    {project.location} &mdash; {project.year}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />

            {/* --- SLIDE DETAIL OVERLAY --- */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        layoutId={`project-card-${selectedProject.id}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: "fixed",
                            inset: 0,
                            zIndex: 100,
                            background: "#000000",
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                        {/* Top Bar */}
                        <div style={{
                            padding: "2rem 3rem",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            zIndex: 20,
                            mixBlendMode: "difference"
                        }}>
                            <motion.h2
                                layoutId={`project-info-${selectedProject.id}`}
                                style={{ fontSize: "1rem", fontWeight: 400, letterSpacing: "0.1em", color: "#fff", textTransform: "uppercase" }}
                            >
                                {selectedProject.title}
                            </motion.h2>

                            <button
                                onClick={() => setSelectedProject(null)}
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    cursor: "pointer",
                                    color: "#fff",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    fontSize: "0.8rem",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em"
                                }}
                            >
                                <span>Close</span>
                                <div style={{ border: "1px solid rgba(255,255,255,0.4)", borderRadius: "50%", padding: "8px" }}>
                                    <X size={16} />
                                </div>
                            </button>
                        </div>

                        {/* Horizontal Scroll Slide Container */}
                        <div
                            ref={scrollContainerRef}
                            className="no-scrollbar"
                            style={{
                                flex: 1,
                                overflowX: "auto",
                                overflowY: "hidden",
                                display: "flex",
                                scrollSnapType: "x mandatory",
                                scrollBehavior: "smooth"
                            }}
                        >
                            {/* Slide 1: Hero Visual & Brief */}
                            <div className="portfolio-slide-container">
                                {/* Image Section */}
                                <div className="portfolio-image-section">
                                    <motion.img
                                        layoutId={`project-image-${selectedProject.id}`}
                                        src={selectedProject.cover}
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                    {/* Gradient Overlay */}
                                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.6), transparent)" }} />
                                </div>

                                {/* Text Panel */}
                                <div className="portfolio-text-panel">
                                    <motion.h1
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                                        style={{
                                            fontSize: "4rem",
                                            fontWeight: 200,
                                            lineHeight: 1.1,
                                            marginBottom: "3rem",
                                            color: "#ffffff"
                                        }}
                                    >
                                        {selectedProject.title}
                                    </motion.h1>

                                    <motion.div
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5, duration: 0.8 }}
                                    >
                                        <p style={{
                                            fontSize: "1.1rem",
                                            lineHeight: 1.8,
                                            color: "#d4d4d4", // Very Light Grey for Contrast
                                            fontWeight: 300,
                                            marginBottom: "4rem",
                                            maxWidth: "90%"
                                        }}>
                                            {selectedProject.description}
                                        </p>

                                        <div style={{
                                            display: "grid",
                                            gridTemplateColumns: "repeat(2, 1fr)",
                                            gap: "4rem",
                                            borderTop: "1px solid rgba(255,255,255,0.1)",
                                            paddingTop: "2rem"
                                        }}>
                                            <div>
                                                <h4 style={{ color: "#888", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1rem" }}>Year</h4>
                                                <p style={{ fontSize: "1.25rem", color: "#fff", fontWeight: 400 }}>{selectedProject.year}</p>
                                            </div>
                                            <div>
                                                <h4 style={{ color: "#888", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1rem" }}>Type</h4>
                                                <p style={{ fontSize: "1.25rem", color: "#fff", fontWeight: 400 }}>{category}</p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1, duration: 1 }}
                                        style={{
                                            marginTop: "auto",
                                            paddingBottom: "3rem",
                                            display: "flex",
                                            gap: "1.5rem",
                                            alignItems: "center",
                                            color: "#fff",
                                            fontSize: "0.9rem",
                                            opacity: 0.8
                                        }}
                                    >
                                        <div style={{ padding: "10px", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50%" }}>
                                            <ArrowRight size={20} />
                                        </div>
                                        <span style={{ textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "0.8rem" }}>Swipe to explore gallery</span>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Additional Slides: Gallery Images */}
                            {selectedProject.gallery && selectedProject.gallery.map((img, i) => (
                                <div key={i} style={{
                                    flex: "0 0 100vw", // Full viewport items for immersive feel
                                    height: "100vh",
                                    position: "relative",
                                    scrollSnapAlign: "center",
                                    background: "#000",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    <img
                                        src={img}
                                        alt={`Gallery ${i}`}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "contain",
                                            padding: "2rem" // Reduced padding for maximizing image
                                        }}
                                    />
                                    <div style={{
                                        position: "absolute",
                                        bottom: "2rem",
                                        right: "3rem",
                                        color: "rgba(255,255,255,0.5)",
                                        fontSize: "3rem",
                                        fontWeight: 100
                                    }}>
                                        0{i + 1}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Buttons (Bottom Left) */}
                        <div style={{
                            position: "fixed",
                            bottom: "3rem",
                            left: "3rem",
                            display: "flex",
                            gap: "1rem",
                            zIndex: 110,
                            pointerEvents: "none"
                        }}>
                            <button
                                onClick={(e) => { e.stopPropagation(); scrollPrev(); }}
                                style={{
                                    pointerEvents: "auto",
                                    background: "transparent",
                                    border: "1px solid rgba(255,255,255,0.3)",
                                    padding: "0.8rem 1.5rem",
                                    color: "#fff",
                                    cursor: "pointer",
                                    backdropFilter: "blur(4px)",
                                    transition: "all 0.3s ease",
                                    fontSize: "0.75rem",
                                    letterSpacing: "0.2em",
                                    textTransform: "uppercase",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "#fff";
                                    e.currentTarget.style.color = "#000";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "transparent";
                                    e.currentTarget.style.color = "#fff";
                                }}
                            >
                                PREV
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); scrollNext(); }}
                                style={{
                                    pointerEvents: "auto",
                                    background: "transparent",
                                    border: "1px solid rgba(255,255,255,0.3)",
                                    padding: "0.8rem 1.5rem",
                                    color: "#fff",
                                    cursor: "pointer",
                                    backdropFilter: "blur(4px)",
                                    transition: "all 0.3s ease",
                                    fontSize: "0.75rem",
                                    letterSpacing: "0.2em",
                                    textTransform: "uppercase",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "#fff";
                                    e.currentTarget.style.color = "#000";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "transparent";
                                    e.currentTarget.style.color = "#fff";
                                }}
                            >
                                NEXT
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
