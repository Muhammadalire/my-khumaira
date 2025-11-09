'use client'

import { motion } from 'framer-motion'

interface BounceCardsProps {
  className?: string
  images: string[]
  containerWidth: number
  containerHeight: number
  animationDelay: number
  animationStagger: number
  easeType?: string
  transformStyles: string[]
  enableHover: boolean
}

export default function BounceCards({
  className,
  images,
  containerWidth,
  containerHeight,
  animationDelay,
  animationStagger,
  easeType,
  transformStyles,
  enableHover
}: BounceCardsProps) {
  return (
    <div 
      className={`relative ${className}`}
      style={{ 
        width: containerWidth, 
        height: containerHeight,
        perspective: '1000px'
      }}
    >
      {images.map((src, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: transformStyles[index],
            transformStyle: 'preserve-3d'
          }}
          initial={{ 
            opacity: 0, 
            scale: 0.3,
            rotateZ: Math.random() * 20 - 10
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotateZ: 0
          }}
          transition={{ 
            delay: animationDelay + (index * animationStagger),
            duration: 0.8,
            ease: easeType as any || "easeOut",
            type: "spring",
            stiffness: 100
          }}
          whileHover={enableHover ? {
            scale: 1.15,
            rotateZ: Math.random() * 10 - 5,
            transition: { duration: 0.3 }
          } : {}}
        >
          <motion.img
            src={src}
            alt={`Memory ${index + 1}`}
            className="rounded-xl shadow-2xl border-2 border-white/30"
            style={{
              width: '120px',
              height: '120px',
              objectFit: 'cover'
            }}
            whileHover={enableHover ? {
              boxShadow: '0 20px 40px rgba(238, 105, 131, 0.3)'
            } : {}}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}