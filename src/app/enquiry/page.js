import EnquiryForm from "./EnquiryForm";

export const metadata = {
  title: "Enquiry | DIVYAM ARCHITECTURE & DESIGN STUDIO",
  description:
    "Submit your enquiry for architectural design, interior design, landscape design, and more. Our team at DIVYAM ARCHITECTURE & DESIGN STUDIO will connect with you shortly.",
  alternates: {
    canonical: "https://divyamarchitecture.com/enquiry",
  },
  openGraph: {
    title: "Enquiry | DIVYAM ARCHITECTURE & DESIGN STUDIO",
    description:
      "Submit your enquiry for architectural and design services.",
    url: "https://divyamarchitecture.com/enquiry",
    siteName: "DIVYAM ARCHITECTURE & DESIGN STUDIO",
    images: [
      {
        url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function EnquiryPage() {
  return (
    <main className="min-h-[85vh] bg-white text-black px-6 md:px-20 py-16 md:py-20">

      {/* MOBILE: image on top | DESKTOP: image on right */}
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE (FORM) */}
        <div>
          <EnquiryForm />
        </div>

        {/* RIGHT IMAGE (UNSPLASH) */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1616046229478-9901c5536a45"
            alt="Modern Architecture"
            className="w-full h-auto "
          />
        </div>

      </div>

    </main>
  );
}
