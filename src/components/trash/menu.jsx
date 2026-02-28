"use client"

import { useState } from "react"
import Link from "next/link"

export default function Menu() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)
  const [showServicesSlider, setShowServicesSlider] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [hoveredService, setHoveredService] = useState(null)

  const menuItems = [
    {
      name: "Services",
      sub: [
        { title: "Architectural Design", path: "/services/architectural-design", icon: "🏛️" },
        { title: "Planning Applications", path: "/services/planning-applications", icon: "📋" },
        { title: "Interior Design", path: "/services/interior-design", icon: "🎨" },
        { title: "Conservation & Heritage Design", path: "/services/conservation-heritage", icon: "🏰" },
        { title: "Create & Construct", path: "/services/create-construct", icon: "🔨" },
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
        { title: "Studio", path: "/studio" },
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
        
        @keyframes floatHover {
          from { transform: translateY(0px); }
          to { transform: translateY(-8px); }
        }
        
        @keyframes shimmer {
          from { background-position: -1000px 0; }
          to { background-position: 1000px 0; }
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
      `}</style>

      <nav style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 50 }}>
        {/* TOP NAVBAR */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(229, 231, 235, 0.5)",
            boxShadow: "0 2px 20px rgba(0, 0, 0, 0.05)",
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
                flexDirection: "column",
                lineHeight: 0,
                textDecoration: "none",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)"
              }}
            >
              <span
                style={{
                  fontSize: "1.5rem",
                  color: "#27272a",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                }}
              >
                PEA
              </span>
              <span
                style={{
                  fontSize: "0.625rem",
                  letterSpacing: "0.35em",
                  color: "#52525b",
                  marginTop: "-0.25rem",
                  fontWeight: 500,
                }}
              >
                PLAN EDGE ARCHITECT
              </span>
            </Link>

            {/* RIGHT SIDE BUTTONS */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <button
                onClick={() => setShowServicesSlider(!showServicesSlider)}
                style={{
                  padding: "0.6rem",
                  borderRadius: "0.5rem",
                  backgroundColor: "transparent",
                  border: "1px solid transparent",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.08)"
                  e.currentTarget.style.border = "1px solid rgba(0, 0, 0, 0.1)"
                  e.currentTarget.style.transform = "scale(1.08)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"
                  e.currentTarget.style.border = "1px solid transparent"
                  e.currentTarget.style.transform = "scale(1)"
                }}
                aria-label="Open services slider"
              >
                {/* Grid icon SVG */}
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

              <button
                onClick={() => {
                  setOpen(!open)
                  setActive(null)
                }}
                style={{
                  padding: "0.6rem",
                  borderRadius: "0.5rem",
                  backgroundColor: "transparent",
                  border: "1px solid transparent",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.375rem",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.08)"
                  e.currentTarget.style.border = "1px solid rgba(0, 0, 0, 0.1)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"
                  e.currentTarget.style.border = "1px solid transparent"
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
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem",
              animation: "fadeIn 0.5s ease-out",
            }}
          >
            {/* CLOSE BTN */}
            <button
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                cursor: "pointer",
                padding: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "0.5rem",
                transition: "all 0.3s ease",
                width: "2.5rem",
                height: "2.5rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)"
                e.currentTarget.style.transform = "rotate(90deg) scale(1.1)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)"
                e.currentTarget.style.transform = "rotate(0deg) scale(1)"
              }}
              aria-label="Close menu"
            >
              <svg
                width="28"
                height="28"
                stroke="white"
                fill="none"
                strokeWidth="2"
                style={{ transition: "all 0.3s ease" }}
              >
                <path d="M18 6L6 18" />
                <path d="M6 6L18 18" />
              </svg>
            </button>

            {/* FIRST CENTER VIEW */}
            {active === null && (
              <div style={{ textAlign: "center", animation: "scaleIn 0.5s ease-out" }}>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "2.5rem",
                  }}
                >
                  {menuItems.map((item, idx) => (
                    <li key={item.name} style={{ animation: `slideInUp 0.6s ease-out ${idx * 0.12}s both` }}>
                      <button
                        onClick={() => setActive(item.name)}
                        style={{
                          fontSize: "clamp(2rem, 8vw, 3.5rem)",
                          fontWeight: 300,
                          color: "#f3f4f6",
                          backgroundColor: "transparent",
                          border: "none",
                          cursor: "pointer",
                          letterSpacing: "0.05em",
                          transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                          position: "relative",
                          paddingBottom: "0.5rem",
                          textTransform: "uppercase",
                          textShadow: "0 2px 20px rgba(0, 0, 0, 0.3)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#ffffff"
                          e.currentTarget.style.letterSpacing = "0.15em"
                          e.currentTarget.style.textShadow = "0 4px 30px rgba(255, 255, 255, 0.2)"
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#f3f4f6"
                          e.currentTarget.style.letterSpacing = "0.05em"
                          e.currentTarget.style.textShadow = "0 2px 20px rgba(0, 0, 0, 0.3)"
                        }}
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* SPLIT VIEW WITH SUBMENUS */}
            {active !== null && (
              <div
                style={{
                  width: "100%",
                  maxWidth: "1000px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "4rem",
                  animation: "slideInUp 0.6s ease-out",
                }}
              >
                {/* LEFT MAIN MENU */}
                <div style={{ textAlign: "right", paddingRight: "2.5rem", animation: "slideInLeft 0.5s ease-out" }}>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "2rem",
                    }}
                  >
                    {menuItems.map((item, idx) => (
                      <li key={item.name} style={{ animation: `slideInLeft 0.5s ease-out ${idx * 0.1}s both` }}>
                        <button
                          onClick={() => setActive(item.name)}
                          style={{
                            fontSize: "1.875rem",
                            backgroundColor: "transparent",
                            border: "none",
                            cursor: "pointer",
                            color: active === item.name ? "#ffffff" : "rgba(255, 255, 255, 0.5)",
                            transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                            position: "relative",
                            paddingBottom: "0.5rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            fontWeight: active === item.name ? 500 : 300,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#ffffff"
                            e.currentTarget.style.letterSpacing = "0.1em"
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = active === item.name ? "#ffffff" : "rgba(255, 255, 255, 0.5)"
                            e.currentTarget.style.letterSpacing = "0.05em"
                          }}
                        >
                          {item.name}
                          {active === item.name && (
                            <div
                              style={{
                                height: "2px",
                                width: "100%",
                                background: "linear-gradient(90deg, rgba(255,255,255,0.8), rgba(255,255,255,0.2))",
                                marginTop: "0.5rem",
                                animation: "slideInDown 0.4s ease-out 0.2s both",
                              }}
                            />
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* RIGHT SUBMENU */}
                <div
                  style={{ textAlign: "left", paddingLeft: "2.5rem", animation: "slideInDown 0.5s ease-out 0.1s both" }}
                >
                  <h3
                    style={{
                      fontSize: "1.875rem",
                      color: "#ffffff",
                      marginBottom: "2.5rem",
                      fontWeight: 300,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      textShadow: "0 2px 20px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {active}
                  </h3>

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
                    {(menuItems.find((m) => m.name === active)?.sub || []).map((s, idx) => (
                      <li key={s.title} style={{ animation: `slideInDown 0.5s ease-out ${idx * 0.1 + 0.3}s both` }}>
                        <Link
                          href={s.path}
                          onClick={() => setOpen(false)}
                          className="menu-item-link"
                          style={{
                            fontSize: "1.125rem",
                            color: "rgba(255, 255, 255, 0.75)",
                            textDecoration: "none",
                            transition: "all 0.3s ease",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.75rem",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#ffffff"
                            e.currentTarget.style.letterSpacing = "0.05em"
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "rgba(255, 255, 255, 0.75)"
                            e.currentTarget.style.letterSpacing = "0em"
                          }}
                        >
                          <span style={{ fontSize: "1.25rem" }}>→</span>
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}
      </nav>

      {showServicesSlider && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50vh",
            backgroundColor: "#0f0f0f",
            zIndex: 45,
            boxShadow: "0 -8px 40px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            animation: "slideUpIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
            display: "flex",
            flexDirection: "column",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setShowServicesSlider(false)}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#ffffff",
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "0.5rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
              transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              fontSize: "1.5rem",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff"
              e.currentTarget.style.color = "#0f0f0f"
              e.currentTarget.style.transform = "rotate(90deg) scale(1.15)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)"
              e.currentTarget.style.color = "#ffffff"
              e.currentTarget.style.transform = "rotate(0deg) scale(1)"
            }}
          >
            ✕
          </button>

          {/* Services slider container */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              position: "relative",
              padding: "2rem 0",
            }}
          >
            {/* Left arrow button */}
            <button
              onClick={() => handleScroll("left")}
              style={{
                position: "absolute",
                left: "1rem",
                zIndex: 20,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#ffffff",
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "0.5rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.25)"
                e.currentTarget.style.transform = "scale(1.1) translateX(-4px)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)"
                e.currentTarget.style.transform = "scale(1) translateX(0)"
              }}
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ transition: "all 0.3s ease" }}
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Carousel container */}
            <div
              id="services-carousel"
              style={{
                display: "flex",
                gap: "1.5rem",
                overflowX: "auto",
                overflowY: "hidden",
                scrollBehavior: "smooth",
                padding: "0 4rem",
                width: "100%",
                height: "100%",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
              onScroll={(e) => setScrollPosition(e.target.scrollLeft)}
            >
              <style>{`
                #services-carousel::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              {/* Service cards */}
              {[
                {
                  id: "architectural-design",
                  title: "Architectural Design",
                  image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=500&h=350&fit=crop",
                  path: "/services/architectural-design",
                },
                {
                  id: "planning-applications",
                  title: "Planning Applications",
                  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=350&fit=crop",
                  path: "/services/planning-applications",
                },
                {
                  id: "interior-design",
                  title: "Interior Design",
                  image: "https://images.unsplash.com/photo-1565183938294-7563f3ff68e5?w=500&h=350&fit=crop",
                  path: "/services/interior-design",
                },
                {
                  id: "conservation-heritage",
                  title: "Conservation & Heritage Design",
                  image: "https://images.unsplash.com/photo-1577720643272-265f434efd75?w=500&h=350&fit=crop",
                  path: "/services/conservation-heritage",
                },
                {
                  id: "create-construct",
                  title: "Create & Construct",
                  image: "https://images.unsplash.com/photo-1541123603104-852dbe8bd8d3?w=500&h=350&fit=crop",
                  path: "/services/create-construct",
                },
              ].map((service, idx) => (
                <Link
                  key={service.id}
                  href={service.path}
                  onClick={() => setShowServicesSlider(false)}
                  style={{
                    flex: "0 0 320px",
                    height: "280px",
                    borderRadius: "0.75rem",
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer",
                    animation: `slideUpIn 0.5s ease-out ${idx * 0.08}s both`,
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.06) translateY(-12px)"
                    const img = e.currentTarget.querySelector("img")
                    if (img) img.style.transform = "scale(1.15) rotate(2deg)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1) translateY(0)"
                    const img = e.currentTarget.querySelector("img")
                    if (img) img.style.transform = "scale(1) rotate(0deg)"
                  }}
                >
                  {/* Card image */}
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    }}
                  />

                  {/* Card overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%)",
                      display: "flex",
                      alignItems: "flex-end",
                      padding: "1.5rem",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.85) 100%)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%)"
                    }}
                  >
                    {/* Card title */}
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        color: "#ffffff",
                        margin: 0,
                        fontWeight: 500,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        lineHeight: "1.4",
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>

            {/* Right arrow button */}
            <button
              onClick={() => handleScroll("right")}
              style={{
                position: "absolute",
                right: "1rem",
                zIndex: 20,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#ffffff",
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "0.5rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.25)"
                e.currentTarget.style.transform = "scale(1.1) translateX(4px)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)"
                e.currentTarget.style.transform = "scale(1) translateX(0)"
              }}
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ transition: "all 0.3s ease" }}
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
