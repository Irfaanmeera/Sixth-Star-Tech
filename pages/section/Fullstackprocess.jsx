"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

export default function FullstackProcess({ steps = [] }) {
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const lineControls = useAnimation()

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (isInView) {
      lineControls.start({
        width: isMobile ? "4px" : "100%",
        height: isMobile ? "100%" : "4px",
        transition: { duration: 1.5, ease: "easeInOut" },
      })
    } else {
      lineControls.start({
        width: isMobile ? "4px" : "0%",
        height: isMobile ? "0%" : "4px",
        transition: { duration: 0.5 },
      })
    }
  }, [isInView, lineControls, isMobile])

  return (
    <div className="py-6 relative" ref={containerRef}>
      <div className="container mx-auto px-2 Full-stack-process">
        <div className="relative">
          {/* Animated Line */}
          <motion.div
            animate={lineControls}
            className="absolute bg-primary z-0"
            style={{
              top: isMobile ? "5px" : "40%",
              left: isMobile ? "calc(7%)" : 0,
              transform: isMobile ? "none" : "translateY(-50%)",
              width: isMobile ? "4px" : "0%",
              height: isMobile ? "0%" : "4px",
              borderRadius: "2px",
            }}
          />

          {/* Steps Layout */}
          <div className={`relative z-10 ${isMobile ? "flex flex-col gap-10" : "flex flex-row justify-between"}`}>
            {steps.map((step, index) => (
              <StepItem
                key={step.id}
                step={step}
                index={index}
                isInView={isInView}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function StepItem({ step, index, isInView, isMobile }) {
  const itemRef = useRef(null)
  const isItemInView = useInView(itemRef, { once: false, amount: 0.5 })
  const shouldAnimate = isInView && isItemInView

  return (
    <div
      ref={itemRef}
      className={`flex flex-col items-center relative text-center ${
        isMobile ? "pl-10" : "w-1/4"
      }`}
    >
      {/* Title */}
      <motion.h4
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ delay: index * 0.2, duration: 0.5 }}
      >
        {step.title}
      </motion.h4>

      {/* Number Circle */}
      <motion.div
        initial={{ scale: 0 }}
        animate={shouldAnimate ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
        className={`flex items-center justify-center bg-primary text-white rounded-full shadow-lg
                    w-12 h-12 font-bold text-xl mb-4 z-20 ${
                      isMobile ? "absolute left-[7%] -translate-x-1/2" : ""
                    }`}
      >
        {step.id}
      </motion.div>

      {/* Description */}
      <motion.p
        className="text-gray-700 pl-6 text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: index * 0.2 + 0.6, duration: 0.5 }}
      >
        {step.description}
      </motion.p>
    </div>
  )
}
