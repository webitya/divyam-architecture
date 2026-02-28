"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Preloader({ onFinish }) {
  const [progress, setProgress] = useState(0)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight })
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        // Random increment for realistic feel
        const increment = Math.floor(Math.random() * 5) + 2
        return Math.min(prev + increment, 100)
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (progress === 100) {
      // Small delay after reaching 100% before triggering finish
      const timeout = setTimeout(() => {
        onFinish?.()
      }, 800)
      return () => clearTimeout(timeout)
    }
  }, [progress, onFinish])

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} 0 Q${dimension.width / 2} 0 0 0 L0 0`

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white text-black px-4"
    >
      {/* Logo Text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Main Logo Text */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-black tracking-[0.25em] mb-4">
          PEA
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-light tracking-[0.35em] text-gray-600 uppercase">
          PLANEDGE ARCHITECT
        </p>
      </motion.div>

      {/* SVG Curve Overlay for smooth exit */}
      {dimension.width > 0 && (
        <svg className="absolute top-0 w-full h-[calc(100vh+300px)] pointer-events-none z-0">
          <motion.path
            variants={curve}
            initial="initial"
            exit="exit"
            fill="white"
          ></motion.path>
        </svg>
      )}
    </motion.div>
  )
}
