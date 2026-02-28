"use client"

import { useRef, useState, useEffect } from "react"

export default function ServicesSlider({ services, onSelectService }) {
  const scrollContainerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll)
    return () => window.removeEventListener("resize", checkScroll)
  }, [])

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }} className="bg-black">
      {/* Slider Container */}
      <div style={{ flex: 1, overflow: "hidden" }}>
        <div
          ref={scrollContainerRef}
          style={{
            display: "flex",
            height: "100%",
            overflowX: "auto",
            gap: "1rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            scrollBehavior: "smooth",
          }}
        >
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => onSelectService(service.id)}
              style={{
                flexShrink: 0,
                width: "320px",
                height: "100%",
                cursor: "pointer",
                border: "none",
                background: "none",
                padding: 0,
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)"
              }}
              aria-label={`View ${service.title} details`}
            >
              <div
                style={{
                  position: "relative",
                  height: "100%",
                  borderRadius: "0.75rem",
                  overflow: "hidden",
                  backgroundColor: "#1f2937",
                }}
              >
                <img
                  src={service.image || "/placeholder.svg?height=500&width=320"}
                  alt={service.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)"
                  }}
                />
                {/* Gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2), transparent)",
                    opacity: 0.8,
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.9"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "0.8"
                  }}
                />

                {/* Content */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "1.5rem",
                    color: "white",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.75rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#d1d5db",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Service
                  </p>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 300, marginBottom: "0.5rem", wordWrap: "break-word" }}>
                    {service.title}
                  </h3>
                  <p style={{ color: "#d1d5db", fontSize: "0.875rem", fontWeight: 300 }}>{service.subtitle}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          padding: "1.5rem",
          paddingBottom: "1rem",
        }}
      >
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          style={{
            padding: "0.5rem",
            borderRadius: "50%",
            border: "1px solid #374151",
            background: "none",
            cursor: canScrollLeft ? "pointer" : "not-allowed",
            opacity: canScrollLeft ? 1 : 0.3,
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
          onMouseEnter={(e) => {
            if (canScrollLeft) e.currentTarget.style.backgroundColor = "#1f2937"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent"
          }}
          aria-label="Scroll left"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div style={{ display: "flex", gap: "0.5rem" }}>
          {services.map((_, index) => (
            <div
              key={index}
              style={{
                height: "0.25rem",
                transition: "all 0.3s ease",
                backgroundColor: index === 0 ? "#f3f4f6" : "#6b7280",
                width: index === 0 ? "1.5rem" : "0.5rem",
              }}
            />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          style={{
            padding: "0.5rem",
            borderRadius: "50%",
            border: "1px solid #374151",
            background: "none",
            cursor: canScrollRight ? "pointer" : "not-allowed",
            opacity: canScrollRight ? 1 : 0.3,
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
          onMouseEnter={(e) => {
            if (canScrollRight) e.currentTarget.style.backgroundColor = "#1f2937"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent"
          }}
          aria-label="Scroll right"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  )
}
