export default function ServicesHero() {
  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000",
        color: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom right, #000000, #1a1a1a, #000000)",
          opacity: 0.6,
        }}
      />

      <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 1rem" }}>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 10vw, 5rem)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            marginBottom: "1.5rem",
          }}
        >
          Our Services
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 3vw, 1.5rem)",
            color: "#d1d5db",
            maxWidth: "48rem",
            margin: "0 auto",
            fontWeight: 300,
          }}
        >
          Comprehensive architectural solutions tailored to your vision and requirements
        </p>
      </div>
    </div>
  )
}
