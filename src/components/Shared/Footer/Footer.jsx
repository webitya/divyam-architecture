import SubscribeForm from "../SubscribeForm/SubscribeForm";
import Link from "next/link";

// MUI Icons
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-20 border-t border-white/10">

      <div className="grid md:grid-cols-3 gap-16">

        {/* LEFT — ABOUT COMPANY */}
        <div>
          <img
            src="/divyamarchitechwhitelogo.webp"
            alt="DIVYAM"
            className="w-32 h-auto mb-6 object-contain"
          />
          <h2 className="text-3xl font-bold tracking-wide mb-4">DIVYAM ARCHITECTURE & DESIGN STUDIO</h2>
          <p className="text-gray-300 leading-relaxed">
            DIVYAM ARCHITECTURE & DESIGN STUDIO is a premium architectural & interior design studio,
            taking inspiration from the past and client requirements to provide sustainable solutions.
            We bring your dream vision to life through plans, mood boards, and 3D renderings.
          </p>

          {/* SOCIAL ICONS */}
          <div className="mt-6 flex gap-4">
            <Link href="https://wa.me/919956737555?text=Hello%20Divyam%20Architecture%20%26%20Design%20Studio%2C%20I%20have%20a%20query." target="_blank" className="hover:text-green-400">
              <WhatsAppIcon className="!w-7 !h-7" />
            </Link>
            <Link href="https://www.instagram.com/divyam_architecture" target="_blank" className="hover:text-pink-500">
              <InstagramIcon className="!w-7 !h-7" />
            </Link>
            <Link href="https://www.linkedin.com/company/divyam-architecture" target="_blank" className="hover:text-blue-400">
              <LinkedInIcon className="!w-7 !h-7" />
            </Link>
          </div>
        </div>

        {/* CENTER — EXPLORE (2×2 GRID OF CATEGORIES) */}
        <div>


          <div className="grid grid-cols-2 gap-x-10 gap-y-12">

            {/* SERVICES */}
            <div>
              <p className="text-lg font-semibold text-white tracking-widest mb-3">
                SERVICES
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><Link href="/services/architectural-design" className="hover:text-white">Architectural Design</Link></li>
                <li><Link href="/services/interior-design" className="hover:text-white">Interior Design</Link></li>
                <li><Link href="/services/landscape-design" className="hover:text-white">Landscape Design</Link></li>
                <li><Link href="/services/renders" className="hover:text-white">3D Elevations</Link></li>
                <li><Link href="/services/renders" className="hover:text-white">Renders</Link></li>
                <li><Link href="/services/sustainable-solutions" className="hover:text-white">Sustainable Home Solutions</Link></li>
                <li><Link href="/services/renovations" className="hover:text-white">Space Planning & Renovations</Link></li>
                <li><Link href="/services/consultation" className="hover:text-white">Professional Advice</Link></li>
                <li><Link href="/services/consultation" className="hover:text-white">Consultation</Link></li>
              </ul>
            </div>

            {/* PORTFOLIO */}
            <div>
              <p className="text-lg font-semibold text-white tracking-widest mb-3">
                PORTFOLIO
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><Link href="/residential" className="hover:text-white">Residential</Link></li>
                <li><Link href="/commercial" className="hover:text-white">Commercial</Link></li>
                <li><Link href="/interiors" className="hover:text-white">Interiors</Link></li>
              </ul>
            </div>

            {/* ABOUT */}
            <div>
              <p className="text-lg font-semibold text-white tracking-widest mb-3">
                ABOUT
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><Link href="/about-us" className="hover:text-white">About Us</Link></li>
                <li><Link href="/team" className="hover:text-white">Team</Link></li>
                <li><Link href="/awards" className="hover:text-white">Awards</Link></li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <p className="text-lg font-semibold text-white tracking-widest mb-3">
                CONTACT
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><Link href="/enquiry" className="hover:text-white">Enquiry</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              </ul>
            </div>



          </div>
        </div>

        {/* RIGHT — CONTACT + SUBSCRIBE */}
        <div>
          <h3 className="text-xl font-semibold mb-4 tracking-wide">Contact</h3>

          <p className="text-gray-300 mb-2">
            Email: <a href="mailto:ar.divyamgupta@gmail.com" className="hover:text-white">ar.divyamgupta@gmail.com</a>
          </p>
          <p className="text-gray-300 mb-1">
            Phone 1: +91-9956737555
          </p>
          <p className="text-gray-300 mb-6">
            Phone 2: +91-7080802700
          </p>

          <h3 className="text-xl font-semibold mb-4 tracking-wide">Stay Updated</h3>
          <SubscribeForm />

          {/* LEGAL LINKS (Compact & Horizontal) */}
          <div className="mt-6 flex flex-wrap gap-4 text-xs text-gray-400">
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span>|</span>
            <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
            <span>|</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>

      </div>

      {/* COPYRIGHT + CREDIT LINE */}
      <div className="mt-16 text-center text-gray-500 text-sm border-t border-white/10 pt-6">
        <p>© {new Date().getFullYear()} DIVYAM ARCHITECTURE & DESIGN STUDIO. All Rights Reserved.</p>

        <p className="mt-2 text-gray-400 text-xs tracking-wide">
          Designed & Developed with precision by <a href="https://nextbizdigital.com" target="_blank" className="text-white">Nextbiz Digital</a>
        </p>
      </div>
    </footer>
  );
}
