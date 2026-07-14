'use client';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[90vh] pt-32 lg:pt-25 flex items-center overflow-hidden bg-transparent">

      {/* Decorative Botanical Leaf (Abstract SVG representation) */}
      <div className="absolute top-[10%] right-[40%] opacity-[0.15] pointer-events-none text-[#b39556] w-[400px] h-[400px] hidden lg:block">
        <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 100 C 50 50, 20 40, 10 20 C 30 30, 45 40, 50 60 C 50 60, 60 40, 80 20 C 70 40, 50 50, 50 100 Z" opacity="0.3" />
          <path d="M50 80 C 50 40, 30 30, 25 15 C 35 25, 45 35, 50 50 C 50 50, 55 35, 65 15 C 60 25, 50 40, 50 80 Z" opacity="0.5" />
        </svg>
      </div>

      <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32 flex flex-col lg:flex-row items-center justify-between">

        {/* Left Side: Text Content */}
        <div className="w-full lg:w-[45%] z-10 lg:pr-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-[50px] md:text-[70px] lg:text-[80px] xl:text-[100px] leading-[1.05] tracking-tight text-[#1A1A1A] mb-8"
          >
            Capture Your <br />
            Perfect <span className="text-[#b39556] italic font-normal">Wedding</span> <br />
            Moments
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#1A1A1A]/60 mb-10 text-base md:text-lg max-w-[480px] leading-relaxed"
          >
            Roaming around capturing western weddings. I travel all over the western united states to photograph Texas ranch weddings.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#b39556] text-white px-8 py-3 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase hover:bg-[#9c814b] transition-colors"
          >
            Contact Me
          </motion.button>
        </div>

        {/* Right Side: Overlapping Image Composition */}
        <div className="w-full lg:w-[50%] relative h-[600px] lg:h-[800px] mt-16 lg:mt-0 flex justify-end items-center">

          {/* Main Arch Image (Top Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute top-0 right-0 w-[80%] lg:w-[75%] h-[80%] lg:h-[85%] rounded-t-[200px] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop"
              alt="Wedding Couple"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>

          {/* Square Overlapping Image (Bottom Left of the right container) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="absolute bottom-0 lg:bottom-[10%] left-0 w-[55%] lg:w-[50%] aspect-[4/3] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[8px] border-[#FDFBF7] bg-[#FDFBF7] z-20"
          >
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop"
              alt="Wedding Details"
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
