'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface CircularTextProps {
  text: string
  onHover?: 'speedUp' | 'slowDown' | 'pause' | 'reverse'
  spinDuration: number
  className?: string
}

export default function CircularText({
  text,
  onHover = 'speedUp',
  spinDuration,
  className = ''
}: CircularTextProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [currentDuration, setCurrentDuration] = useState(spinDuration)
  
  useEffect(() => {
    if (onHover === 'speedUp') {
      setCurrentDuration(isHovered ? spinDuration / 2 : spinDuration)
    } else if (onHover === 'slowDown') {
      setCurrentDuration(isHovered ? spinDuration * 2 : spinDuration)
    }
  }, [isHovered, onHover, spinDuration])

  const radius = 70
  const textLength = text.length
  const angleStep = 360 / textLength

  return (
    <div 
      className={`relative inline-block cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.svg
        width="200"
        height="200"
        className="drop-shadow-lg"
        animate={{
          rotate: onHover === 'reverse' && isHovered ? -360 : 
                 onHover === 'pause' && isHovered ? 0 : 360
        }}
        transition={{
          duration: currentDuration,
          ease: "linear",
          repeat: onHover === 'pause' && isHovered ? 0 : Infinity
        }}
      >
        <defs>
          <path
            id="circle-path"
            d={`M 100, 100 m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        
        {/* Gradient definition for text */}
        <defs>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EE6983" />
            <stop offset="50%" stopColor="#850E35" />
            <stop offset="100%" stopColor="#EE6983" />
          </linearGradient>
        </defs>
        
        <text
          fill="url(#textGradient)"
          fontSize="14"
          fontWeight="600"
          letterSpacing="2px"
        >
          <textPath href="#circle-path" startOffset="0%">
            {text}
          </textPath>
        </text>
        
        {/* Inner decorative circle */}
        <motion.circle
          cx="100"
          cy="100"
          r="60"
          fill="none"
          stroke="url(#textGradient)"
          strokeWidth="1"
          opacity="0.3"
          animate={{
            strokeDasharray: [0, 377],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.svg>
      
      {/* Center content can be added here if needed */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-2 h-2 bg-[#EE6983] rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  )
}