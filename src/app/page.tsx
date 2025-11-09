'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import BounceCards from '@/components/BounceCards'
import CircularText from '@/components/CircularText'

export default function LoveLetter() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -300])
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.8, 0.8, 0])
  
  // Replace these with your actual photos of Khumaira
  const images = [
    "her.jpg"
   
  ]

  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)", 
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)"
  ]

  const windowHeight = mounted && typeof window !== 'undefined' ? window.innerHeight : 1000

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-[#FCF5EE] via-[#FFC4C4] to-[#FCF5EE] overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="fixed inset-0 pointer-events-none overflow-hidden"
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              background: `radial-gradient(circle, ${i % 2 === 0 ? '#EE6983' : '#850E35'} 0%, transparent 70%)`,
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              left: `${5 + i * 12}%`,
              top: `${10 + i * 8}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + i * 0.7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center z-10"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "backOut" }}
            className="mb-8"
          >
            <CircularText
              text="MY*KHUMAIRA*MY*KHUMAIRA*MY*KHUMAIRA*"
              onHover="speedUp"
              spinDuration={20}
            />
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-[#850E35] mb-6 bg-gradient-to-r from-[#850E35] to-[#EE6983] bg-clip-text text-transparent"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            For My Khumaira
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-[#EE6983] max-w-2xl mx-auto font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            A love letter across the miles, written with all my heart
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-8 flex justify-center space-x-2"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-[#EE6983] rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-[#EE6983] rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-[#EE6983] rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Beauty Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-[#850E35] bg-gradient-to-r from-[#850E35] to-[#EE6983] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Your Beauty Outshines the Stars
            </motion.h2>
            
            <motion.div className="space-y-6 text-lg text-[#850E35]">
              {[
                "They say the moon is beautiful, but they've never seen the way your eyes light up when you smile.",
                "They compare flowers to beauty, but even the rarest flowers pales next to your natural grace.",
                "The cosmos holds infinite wonders, yet none compare to the constellation of your features.",
                "Sunsets paint the sky in brilliant colors, but your presence brings a warmth no sunset can match.",
                "Stars may twinkle in the night sky, but your spirit shines brighter than any celestial body."
              ].map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.15, duration: 0.8 }}
                  whileHover={{ x: 10 }}
                  className="relative"
                >
                  <motion.div
                    className="absolute -left-4 top-2 w-2 h-2 bg-[#EE6983] rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  />
                  <p className="leading-relaxed pl-4 font-medium">
                    {text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "backOut" }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <BounceCards
                className="custom-bounceCards"
                images={images}
                containerWidth={500}
                containerHeight={250}
                animationDelay={0.8}
                animationStagger={0.08}
                easeType="elastic.out(1, 0.5)"
                transformStyles={transformStyles}
                enableHover={true}
              />
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-[#EE6983] rounded-full opacity-60"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#850E35] rounded-full opacity-40"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [360, 180, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Cuteness Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-transparent to-[#FFC4C4]/30">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center text-[#850E35] mb-16 bg-gradient-to-r from-[#EE6983] to-[#850E35] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Your Adorable Soul
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              { 
                title: "Your Laugh", 
                desc: "Like fragnance of flowers, bringing joy to every moment",
                icon: "✨",
                delay: 0.3
              },
              { 
                title: "Your Smile", 
                desc: "Sunshine breaking through clouds, warming even the coldest days",
                icon: "🌸",
                delay: 0.4
              },
              { 
                title: "Your Voice", 
                desc: "The sweetest melody, a song my heart always longs to hear",
                icon: "🎵",
                delay: 0.5
              },
              { 
                title: "Your Heart", 
                desc: "So pure and kind, making the world a better place just by being in it",
                icon: "💕",
                delay: 0.6
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: item.delay, duration: 0.8 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(238, 105, 131, 0.2)"
                }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#EE6983]/20 relative overflow-hidden group"
              >
                {/* Background decoration */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#EE6983]/20 to-transparent rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-4xl mb-4"
                    animate={{
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-[#850E35] mb-4">{item.title}</h3>
                  <p className="text-[#850E35] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-center"
          >
            <motion.div
              className="inline-block bg-gradient-to-r from-[#EE6983]/20 to-[#850E35]/20 rounded-3xl p-8 backdrop-blur-sm border border-[#EE6983]/30"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-xl text-[#850E35] italic font-medium max-w-3xl mx-auto leading-relaxed">
                "Every little thing you do, from the way you tilt your head to the way you get excited about small things, 
                makes my heart skip a beat. You're not just cute—you're irresistibly adorable in every way."
              </p>
              
              <motion.div
                className="mt-6 flex justify-center space-x-2"
              >
                {[...Array(7)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-gradient-to-r from-[#EE6983] to-[#850E35] rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 1, 0.4]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.15
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Soul Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-transparent to-[#FCF5EE]/50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-[#850E35] mb-16 bg-gradient-to-r from-[#850E35] via-[#EE6983] to-[#850E35] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Your Beautiful Soul
          </motion.h2>
          
          <motion.div 
            className="space-y-12 text-lg text-[#850E35]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-8">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-[#EE6983] to-[#850E35] rounded-full flex items-center justify-center text-white text-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  💖
                </motion.div>
              </div>
              
              <p className="leading-relaxed text-xl font-medium max-w-4xl mx-auto pt-8">
                Beyond your beauty and cuteness lies something even more precious, your soul. 
                The kindness that flows from you, the empathy you show others, the strength you carry with grace.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-8">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-[#850E35] to-[#EE6983] rounded-full flex items-center justify-center text-white text-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  🌟
                </motion.div>
              </div>
              
              <p className="leading-relaxed text-xl font-medium max-w-4xl mx-auto pt-8">
                Your soul is like a garden, full of bloom, nurturing, beauty, and life. 
                You make everyone around you better just by being yourself. Your heart is so big, 
                your spirit so pure, your love so genuine.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-8">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-[#EE6983] to-[#850E35] rounded-full flex items-center justify-center text-white text-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  🌙
                </motion.div>
              </div>
              
              <p className="leading-relaxed text-xl font-medium max-w-4xl mx-auto pt-8">
                Even across the miles, I feel the warmth of your soul. It's the light that guides me, 
                the peace that calms me, the love that completes me. You are, in every way possible, 
                the most beautiful person I've ever known, inside out.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 1, ease: "backOut" }}
            className="mt-20"
          >
            <motion.div
              className="inline-block relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <CircularText
                text="I*LOVE*YOU*MORE*THAN*WORDS*CAN*SAY*"
                onHover="speedUp"
                spinDuration={15}
              />
              
              {/* Central heart */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="text-4xl">❤️</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Floating hearts animation */}
          {mounted && (
            <motion.div
              className="absolute inset-0 pointer-events-none overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-2xl"
                  style={{
                    left: `${10 + i * 15}%`,
                    bottom: '-20px'
                  }}
                  animate={{
                    y: [-20, -windowHeight - 100],
                    x: [0, Math.random() * 100 - 50],
                    rotate: [0, Math.random() * 360],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{
                    duration: 8 + Math.random() * 4,
                    repeat: Infinity,
                    delay: i * 1.5,
                    ease: "easeOut"
                  }}
                >
                  💕
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 text-center bg-gradient-to-t from-[#850E35]/10 to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <motion.div
            className="flex justify-center items-center space-x-4"
            animate={{
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#EE6983]"></div>
            <span className="text-2xl">💕</span>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-[#EE6983]"></div>
          </motion.div>
          
          <motion.p
            className="text-[#850E35] text-xl font-medium"
            animate={{
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Forever yours, across every mile ❤️
          </motion.p>
          
          <motion.div
            className="flex justify-center space-x-3"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-[#EE6983] to-[#850E35] rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </footer>
    </div>
  )
}