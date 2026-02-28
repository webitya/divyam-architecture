"use client";

import { useEffect, useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function FloatingButtons() {
  const [show, setShow] = useState(false);

  // Show buttons after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-3 flex flex-col gap-2 z-50 transition-opacity duration-700 ${show ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
    >

      {/* CALL BUTTON — white background */}
      <a
        href="tel:+919956737555"
        className="w-11 h-11 bg-white text-black rounded-lg 
                   flex items-center justify-center 
                   shadow-lg border border-gray-300
                   hover:bg-gray-100 transition cursor-pointer"
      >
        <CallIcon fontSize="medium" />
      </a>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919956737555?text=Hello%20Divyam%20Architecture%20%26%20Design%20Studio%2C%20I%20have%20a%20query."
        target="_blank"
        className="w-11 h-11 bg-green-500 text-white rounded-lg 
                   flex items-center justify-center 
                   shadow-lg hover:bg-green-600 transition cursor-pointer"
      >
        <WhatsAppIcon fontSize="medium" />
      </a>

    </div>
  );
}
