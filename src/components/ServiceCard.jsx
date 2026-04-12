import { ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion' // Added for Pro animations

const ServiceCard = ({ title, description, icon, imageSrc }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // Professional Background Zoom Animation
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      className='min-h-[430px] relative overflow-hidden cursor-pointer transition-all duration-500 rounded-xl group'
    >
      {/* 1. Subtle Dark Tint Overlay (Always present for readability) */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

      {/* 2. Title Section - Smooth slide up on hover */}
      <motion.div
        animate={{ y: isHovered ? -10 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 bg-gradient-to-b from-zinc-950/90 py-7 px-7 to-transparent"
      >
        <h2 className="text-5xl clash-display text-white tracking-tight">{title}</h2>
      </motion.div>

      {/* 3. Description Overlay - AnimatePresence for smooth fade/slide */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex-col w-full absolute inset-0 bg-zinc-950/80 backdrop-blur-[2px] px-8 z-20 center-item"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="mb-4 text-sky-400"
            >
              {icon}
            </motion.div>
            <p className='text-center text-zinc-200 leading-relaxed font-medium'>
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Button Section - Stays visible but icon reacts */}
      <div className="bg-gradient-to-t absolute bottom-0 from-zinc-950 py-7 px-7 to-transparent flex min-w-full justify-end z-30">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="h-16 w-16 bg-zinc-100 rounded-full cursor-pointer hover:bg-sky-400 transition-colors duration-300 center-item shadow-2xl"
        >
          <ArrowRight
            className={`text-zinc-800 font-semibold transition-transform duration-500 ${isHovered ? '-rotate-45' : 'rotate-0'}`}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ServiceCard