'use client';
import { motion } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full py-24 bg-[#EBE5D9]">
      <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-serif text-[40px] md:text-[50px] leading-[1.1] text-[#1A1A1A] mb-6"
          >
            Client Testimonials
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#1A1A1A]/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Roaming around capturing western weddings. I travel all over the western united states.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row relative z-10 max-w-6xl mx-auto items-center">
          
          {/* Decorative Branch SVG behind image */}
          <div className="absolute top-[-5%] left-[-5%] text-[#b39556]/30 w-[150px] h-[150px] pointer-events-none -z-10 hidden md:block">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M20 80 C 40 60, 60 40, 80 20 C 70 40, 50 60, 20 80 Z" opacity="0.8"/>
            </svg>
          </div>

          {/* Left Side: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[55%] h-[400px] lg:h-[500px] rounded-tl-[100px] overflow-hidden shadow-lg z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop" 
              alt="Happy Couple" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Right Side: Quote Box */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[45%] bg-[#FDFBF7] p-10 md:p-16 lg:p-20 flex flex-col items-center text-center rounded-t-full rounded-br-[100px] shadow-sm lg:-ml-12 lg:mt-12 z-20"
          >
            <Quote className="text-[#b39556]/40 w-12 h-12 mb-8" />
            
            <p className="text-sm md:text-base text-[#1A1A1A]/80 leading-loose italic mb-8 max-w-sm">
              "Thanks for the most beautiful wedding photos. Thank you for the lunch dates and phone calls to answer all of my questions. Thank you for coordinating the timeline and working with us to make a wonderful elopement. I will cherish these photos forever."
            </p>
            
            <h4 className="font-serif text-[22px] text-[#b39556] mb-8">Munna & Madhuri</h4>
            
            {/* Navigation Controls */}
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full border border-[#b39556]/30 flex items-center justify-center text-[#1A1A1A]/60 hover:bg-[#b39556] hover:text-white hover:border-[#b39556] transition-all">
                <ChevronLeft size={18} />
              </button>
              <button className="w-10 h-10 rounded-full border border-[#b39556]/30 flex items-center justify-center text-[#1A1A1A]/60 hover:bg-[#b39556] hover:text-white hover:border-[#b39556] transition-all">
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
