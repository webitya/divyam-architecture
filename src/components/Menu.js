"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

import Link from "next/link"

export default function Menu() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)
  const [showServicesSlider, setShowServicesSlider] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  const pathname = usePathname();
  useEffect(() => {
    Promise.resolve().then(() => {
      setOpen(false);
      setActive(null);
      setShowServicesSlider(false);
    });
  }, [pathname]);




  const menuItems = [
    {
      name: "Services",
      sub: [
        { title: "Architectural Design", path: "/services/architectural-design", icon: "🏛️" },
        { title: "Interior Design", path: "/services/interior-design", icon: "🎨" },
        { title: "Landscape Design", path: "/services/landscape-design", icon: "🌳" },
        { title: "3D Elevations", path: "/services/renders", icon: "🏙️" },
        { title: "Renders", path: "/services/renders", icon: "🖥️" },
        { title: "Sustainable Home Solutions", path: "/services/sustainable-solutions", icon: "🌿" },
        { title: "Space Planning & Renovations", path: "/services/renovations", icon: "🔧" },
        { title: "Professional Advice", path: "/services/consultation", icon: "💡" },
        { title: "Consultation", path: "/services/consultation", icon: "📞" },
      ],
    },
    {
      name: "Portfolio",
      sub: [
        { title: "Residential", path: "/residential" },
        { title: "Commercial", path: "/commercial" },
        { title: "Interiors", path: "/interiors" },
      ],
    },
    {
      name: "About",
      sub: [
        { title: "About Us", path: "/about-us" },
        { title: "Team", path: "/team" },
        { title: "Awards", path: "/awards" },
      ],
    },
    {
      name: "Contact",
      sub: [
        { title: "Enquiry", path: "/enquiry" },
        { title: "Careers", path: "/careers" },
      ],
    },
  ]

  const handleScroll = (direction) => {
    const container = document.getElementById("services-carousel")
    if (container) {
      const scrollAmount = 350
      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" })
        setScrollPosition(container.scrollLeft - scrollAmount)
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" })
        setScrollPosition(container.scrollLeft + scrollAmount)
      }
    }
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowServicesSlider(false)
    }
  }

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUpIn {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .menu-item-link {
          position: relative;
          display: inline-block;
        }
        
        .menu-item-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, rgba(255,255,255,0.8), rgba(255,255,255,0.2));
          transition: width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .menu-item-link:hover::after {
          width: 100%;
        }

        /* Responsive Services Carousel */
        .services-carousel-container {
            padding: 0 5rem;
        }
        
        @media (max-width: 768px) {
            .services-carousel-container {
                padding: 0 1rem !important;
            }
            /* Hide nav buttons on mobile if touch is available, or just make them smaller/unobtrusive */
            .carousel-nav-btn {
                display: none !important;
            }
        }
      `}</style>

      <nav style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 50 }}>
        {/* TOP NAVBAR */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(229, 231, 235, 0.5)",
            transition: "all 0.3s ease",
          }}
        >
          <div
            style={{
              margin: "0 auto",
              padding: "1rem 1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* LOGO */}
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                textDecoration: "none",
                transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <img
                src="/divyamarchitectlogo.webp"
                alt="DIVYAM ARCHITECTURE & DESIGN STUDIO"
                style={{
                  height: "40px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
                <span
                  style={{
                    fontSize: "1.5rem",
                    color: "#27272a",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                  }}
                >
                  DIVYAM
                </span>

                <span
                  style={{
                    fontSize: "0.625rem",
                    letterSpacing: "0.35em",
                    color: "#52525b",
                    fontWeight: 500,
                    marginTop: "1px",
                  }}
                >
                  DIVYAM ARCHITECTURE & DESIGN STUDIO
                </span>
              </div>
            </Link>

            {/* RIGHT SIDE BUTTONS */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <button
                onClick={() => setShowServicesSlider(!showServicesSlider)}
                style={{
                  padding: "0.6rem",
                  borderRadius: "0.5rem",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)"
                }}
                aria-label="Open services slider"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  style={{
                    color: "#27272a",
                    transition: "all 0.3s ease",
                  }}
                >
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
              </button>

              {/* Hamburger button */}
              <button
                onClick={() => {
                  setOpen(!open)
                  setActive(null)
                }}
                style={{
                  padding: "0.6rem",
                  borderRadius: "0.5rem",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.375rem",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.7"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1"
                }}
              >
                <span
                  style={{
                    height: "2px",
                    width: "1.75rem",
                    backgroundColor: "#27272a",
                    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    transformOrigin: "center",
                  }}
                />
                <span
                  style={{
                    height: "2px",
                    width: "1.75rem",
                    backgroundColor: "#27272a",
                    transition: "all 0.3s ease",
                  }}
                />
                <span
                  style={{
                    height: "2px",
                    width: "1.75rem",
                    backgroundColor: "#27272a",
                    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    transformOrigin: "center",
                  }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* FULL SCREEN MENU */}
        {open && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              backdropFilter: "blur(50px)",
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem",
              animation: "fadeIn 0.5s ease-out",
              overflowY: "auto",
            }}
          >
            <button
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "0.5rem",
                transition: "opacity 0.3s ease",
                width: "2.5rem",
                height: "2.5rem",
                zIndex: 50,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.6"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1"
              }}
              aria-label="Close menu"
            >
              <svg width="28" height="28" stroke="white" fill="none" strokeWidth="2">
                <path d="M18 6L6 18" />
                <path d="M6 6L18 18" />
              </svg>
            </button>

            <div style={{ width: "100%", maxWidth: "600px", textAlign: "center", animation: "scaleIn 0.5s ease-out" }}>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {menuItems.map((item, idx) => (
                  <li key={item.name} style={{ animation: `slideInUp 0.6s ease-out ${idx * 0.1}s both`, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <button
                      onClick={() => setActive(active === item.name ? null : item.name)}
                      style={{
                        fontSize: "clamp(1.5rem, 4vw, 2.25rem)", /* Reduced size */
                        fontWeight: 300,
                        color: active === item.name ? "#ffffff" : "#f3f4f6",
                        backgroundColor: "transparent",
                        border: "none",
                        cursor: "pointer",
                        letterSpacing: "0.05em",
                        transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        position: "relative",
                        paddingBottom: "0.5rem",
                        textTransform: "uppercase",
                        textShadow: active === item.name ? "0 4px 30px rgba(255, 255, 255, 0.25)" : "none",
                      }}
                      onMouseEnter={(e) => {
                        if (active !== item.name) e.currentTarget.style.color = "#ffffff"
                      }}
                      onMouseLeave={(e) => {
                        if (active !== item.name) e.currentTarget.style.color = "#f3f4f6"
                      }}
                    >
                      {item.name}
                    </button>

                    {/* DROPDOWN SUBMENU with Smooth Animation */}
                    <AnimatePresence>
                      {active === item.name && item.sub && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }} // smooth bezier
                          style={{
                            listStyle: "none",
                            padding: 0,
                            margin: 0,
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.75rem",
                            alignItems: "center",
                            overflow: "hidden", // needed for height anim
                          }}
                        >
                          <div style={{ paddingTop: "1rem" }}> {/* Spacer inside anim container */}
                            {item.sub.map((subItem, subIdx) => (
                              <motion.li
                                key={subItem.title}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3, delay: subIdx * 0.05 }} // Staggered delay
                              >
                                <Link
                                  href={subItem.path}
                                  onClick={() => setOpen(false)}
                                  style={{
                                    fontSize: "0.9rem",
                                    color: "rgba(255, 255, 255, 0.7)",
                                    textDecoration: "none",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em",
                                    transition: "all 0.3s ease",
                                    display: "block",
                                    padding: "0.25rem 0",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.color = "#ffffff"
                                    e.currentTarget.style.letterSpacing = "0.15em"
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)"
                                    e.currentTarget.style.letterSpacing = "0.1em"
                                  }}
                                >
                                  {subItem.title}
                                </Link>
                              </motion.li>
                            ))}
                          </div>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>

      {/* Services Slider */}
      {showServicesSlider && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          onClick={handleOverlayClick}
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: "320px", // Reduced height
            backgroundColor: "rgba(18, 18, 18, 0.95)",
            backdropFilter: "blur(20px)",
            zIndex: 45,
            display: "flex",
            flexDirection: "column",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 -20px 50px rgba(0,0,0,0.5)"
          }}
        >
          {/* Header / Close Bar */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.75rem 2rem", // Reduced padding
            borderBottom: "1px solid rgba(255,255,255,0.05)"
          }}>
            <h4 style={{
              color: "#fff",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              fontWeight: 400,
              opacity: 0.7
            }}>
              Explore Services
            </h4>
            <button
              onClick={() => setShowServicesSlider(false)}
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "none",
                color: "#ffffff",
                width: "1.75rem",
                height: "1.75rem",
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)";
                e.currentTarget.style.transform = "rotate(90deg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                e.currentTarget.style.transform = "rotate(0deg)";
              }}
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 3l-8 8m0-8l8 8" />
              </svg>
            </button>
          </div>

          {/* Services slider container */}
          <div
            style={{
              flex: 1,
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* Left arrow button */}
            <button
              onClick={() => handleScroll("left")}
              style={{
                position: "absolute",
                left: "1.5rem",
                zIndex: 20,
                backgroundColor: "rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#ffffff",
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
                backdropFilter: "blur(4px)"
              }}
              className="carousel-nav-btn"
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.backgroundColor = "#fff"; e.currentTarget.style.color = "#000"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.5)"; e.currentTarget.style.color = "#fff"; }}
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 17l-5-5 5-5" />
              </svg>
            </button>

            {/* Carousel container */}
            <div
              id="services-carousel"
              style={{
                display: "flex",
                gap: "1rem",
                overflowX: "auto",
                scrollBehavior: "smooth",
                msOverflowStyle: "none",
              }}
              className="services-carousel-container"
              onScroll={(e) => setScrollPosition(e.target.scrollLeft)}
            >
              <style>{`
                #services-carousel::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              {[
                {
                  id: "architectural-design",
                  title: "Architectural Design",
                  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
                  path: "/services/architectural-design",
                },
                {
                  id: "interior-design",
                  title: "Interior Design",
                  image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500&h=300&fit=crop",
                  path: "/services/interior-design",
                },
                {
                  id: "landscape-design",
                  title: "Landscape Design",
                  image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=500&h=300&fit=crop",
                  path: "/services/landscape-design",
                },
                {
                  id: "renders",
                  title: "3D Elevations & Renders",
                  image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&h=300&fit=crop",
                  path: "/services/renders",
                },
                {
                  id: "sustainable-solutions",
                  title: "Sustainable Solutions",
                  image: "https://images.unsplash.com/photo-1518005020411-3888080c19f1?w=500&h=300&fit=crop",
                  path: "/services/sustainable-solutions",
                },
              ].map((service, idx) => (
                <Link
                  key={service.id}
                  href={service.path}
                  onClick={() => setShowServicesSlider(false)}
                  style={{ textDecoration: "none" }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    style={{
                      position: "relative",
                      width: "260px", // Reduced width
                      height: "160px", // Reduced height
                      borderRadius: "6px",
                      overflow: "hidden",
                      flexShrink: 0,
                    }}
                    whileHover="hover"
                  >
                    {/* Image Layer */}
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      variants={{ hover: { scale: 1.1 } }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Gradient Overlay */}
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)"
                    }} />

                    {/* Text Layer */}
                    <motion.div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        padding: "1rem"
                      }}
                      variants={{ hover: { y: -3 } }}
                    >
                      <h3 style={{
                        color: "#fff",
                        fontSize: "0.95rem",
                        fontWeight: 400,
                        margin: 0,
                        letterSpacing: "0.02em"
                      }}>
                        {service.title}
                      </h3>
                      <motion.div
                        style={{
                          height: "1px",
                          backgroundColor: "#fff",
                          marginTop: "0.3rem",
                          width: "0%"
                        }}
                        variants={{ hover: { width: "100%" } }}
                      />
                    </motion.div>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Right arrow button */}
            <button
              onClick={() => handleScroll("right")}
              style={{
                position: "absolute",
                right: "1.5rem",
                zIndex: 20,
                backgroundColor: "rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#ffffff",
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
                backdropFilter: "blur(4px)"
              }}
              className="carousel-nav-btn"
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.backgroundColor = "#fff"; e.currentTarget.style.color = "#000"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.5)"; e.currentTarget.style.color = "#fff"; }}
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10 17l5-5-5-5" />
              </svg>
            </button>
          </div >
        </motion.div >
      )
      }
    </>
  )
}
