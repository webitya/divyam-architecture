"use client"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Preloader from "@/components/Preloader"

export default function Template({ children }) {
    const [isLoading, setIsLoading] = useState(true)

    // When a user navigates to a new route, the template component remounts.
    // We initialize isLoading to true to show the preloader.

    return (
        <section>
            <AnimatePresence mode="wait">
                {isLoading && <Preloader onFinish={() => setIsLoading(false)} />}
            </AnimatePresence>

            {/* 
         We fade in the content after preloader finishes or just render it behind.
         Render children always but hide them visually or let them sit behind the z-index cover.
         Since Preloader has z-[9999] and bg-black, it covers content. 
         However, to prevent interaction/scroll during loading, we can conditionally render or style.
      */}
            <div className={`transition-opacity duration-700 ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
                {children}
            </div>
        </section>
    )
}
