import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu";
import Footer from "@/components/Shared/Footer/Footer";
import FloatingButtons from "@/components/Shared/FloatingButtons/FloatingButtons";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});



export const metadata = {
  title: {
    default: "DIVYAM ARCHITECTURE & DESIGN STUDIO",
    template: "%s | DIVYAM ARCHITECTURE & DESIGN STUDIO"
  },

  description:
    "DIVYAM ARCHITECTURE & DESIGN STUDIO – Taking inspiration from the past, context, and client requirements to provide sustainable solutions through design.",

  keywords: [
    "DIVYAM ARCHITECTURE & DESIGN STUDIO",
    "Divyam Gupta",
    "B.ARCH",
    "Architectural Design",
    "Interior Design",
    "Landscape Design",
    "3D Elevations",
    "Renders",
    "Sustainable Home Solutions",
    "Space Planning & Renovations",
    "Professional Advice",
    "Consultation",
    "Shahjahanpur"
  ],

  metadataBase: new URL("https://divyamarchitecture.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "DIVYAM ARCHITECTURE & DESIGN STUDIO",
    description:
      "Creating experience through design. Sustainable solutions for your dream vision.",
    url: "https://divyamarchitecture.com",
    siteName: "DIVYAM ARCHITECTURE & DESIGN STUDIO",
    type: "website",
    images: [
      {
        url: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
        width: 1200,
        height: 630,
        alt: "DIVYAM ARCHITECTURE & DESIGN STUDIO Building Design",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DIVYAM ARCHITECTURE & DESIGN STUDIO",
    description:
      "Architectural design, interiors & sustainable expertise.",
    images: [
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
    ],
    creator: "@divyamarch",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        {/* JSON-LD: ORGANIZATION */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DIVYAM ARCHITECTURE & DESIGN STUDIO",
              url: "https://divyamarchitecture.com",
              logo: "https://divyamarchitecture.com/logo.png",
              email: "ar.divyamgupta@gmail.com",
              telephone: "+91-9956737555",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Near Sumer Nursing Home, Sinzai",
                addressLocality: "Shahjahanpur",
                addressRegion: "UP",
                postalCode: "242001",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.instagram.com/divyam_architecture",
                "https://www.linkedin.com/company/divyam-architecture"
              ],
            }),
          }}
        />

        {/* JSON-LD: WEBSITE */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "DIVYAM ARCHITECTURE & DESIGN STUDIO",
              url: "https://divyamarchitecture.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://divyamarchitecture.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>

      <body className={`${inter.variable} antialiased`}>
        <Menu />

        {children}

        {/* If footer needed in future uncomment */}
        {/* <Footer /> */}

        <FloatingButtons />
      </body>
    </html>
  );
}
