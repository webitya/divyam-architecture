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
    default: "Planedge Architect",
    template: "%s | Planedge Architect"
  },

  description:
    "Planedge Architect – Premium architectural design, planning, interiors, and construction excellence.",

  keywords: [
    "architecture firm",
    "interior design",
    "architectural planning",
    "construction design",
    "Infrastructure designs",
    "Planedge Architect"
  ],

  metadataBase: new URL("https://planedgearchitect.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Planedge Architect",
    description:
      "Premium architecture, planning & interior design studio shaping meaningful experiences.",
    url: "https://planedgearchitect.com",
    siteName: "Planedge Architect",
    type: "website",
    images: [
      {
        url: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
        width: 1200,
        height: 630,
        alt: "Planedge Architect Building Design",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Planedge Architect",
    description:
      "Architectural design, interiors & construction expertise.",
    images: [
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
    ],
    creator: "@planedgearchitect",
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
              name: "Planedge Architect",
              url: "https://planedgearchitect.com",
              logo: "https://planedgearchitect.com/logo.png",
              email: "planedgearchitect@gmail.com",
              telephone: "+91 9971189665",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.instagram.com/planedgearchitect",
                "https://www.linkedin.com/company/plan-edge-architect"
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
              name: "Planedge Architect",
              url: "https://planedgearchitect.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://planedgearchitect.com/search?q={search_term_string}",
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
