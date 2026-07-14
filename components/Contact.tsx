'use client';
import { motion } from 'motion/react';

export function Contact() {
  return (
    <section id="contact" className="relative w-full py-24 overflow-hidden bg-transparent mt-10">
      <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[45%] relative z-10"
        >
          {/* Faint leaf graphic */}
          <div className="absolute -top-[10%] -left-[15%] text-[#b39556]/20 w-[300px] h-[300px] pointer-events-none -z-10 hidden md:block">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M10 90 C 20 50, 60 40, 90 10 C 70 30, 40 60, 10 90 Z" opacity="0.6"/>
            </svg>
          </div>
          
          <div className="aspect-[4/3] rounded-[100px] rounded-bl-[10px] overflow-hidden shadow-sm relative">
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop" 
              alt="Couple" 
              className="w-full h-full object-cover object-center" 
            />
          </div>
        </motion.div>
        
        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-[45%]"
        >
          <h2 className="font-serif text-[40px] md:text-[50px] leading-[1.1] text-[#1A1A1A] mb-6">
            Contact With Me
          </h2>
          <p className="text-[#1A1A1A]/60 text-sm md:text-base leading-relaxed mb-10 max-w-sm">
            Roaming around capturing western weddings. I travel all over the western united states to photograph Texas ranch weddings.
          </p>
          
          <form className="space-y-8">
            <div>
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full border-b border-[#1A1A1A]/20 pb-4 bg-transparent focus:outline-none focus:border-[#b39556] transition-colors text-sm text-[#1A1A1A] placeholder-[#1A1A1A]/40" 
              />
            </div>
            <div>
              <input 
                type="tel" 
                placeholder="Phone" 
                className="w-full border-b border-[#1A1A1A]/20 pb-4 bg-transparent focus:outline-none focus:border-[#b39556] transition-colors text-sm text-[#1A1A1A] placeholder-[#1A1A1A]/40" 
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full border-b border-[#1A1A1A]/20 pb-4 bg-transparent focus:outline-none focus:border-[#b39556] transition-colors text-sm text-[#1A1A1A] placeholder-[#1A1A1A]/40" 
              />
            </div>
            <div>
              <textarea 
                placeholder="Message" 
                rows={2}
                className="w-full border-b border-[#1A1A1A]/20 pb-4 bg-transparent focus:outline-none focus:border-[#b39556] transition-colors text-sm resize-none text-[#1A1A1A] placeholder-[#1A1A1A]/40" 
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full lg:w-[250px] bg-[#b39556] hover:bg-[#9c814b] text-white py-4 rounded-full text-[11px] font-semibold transition-colors uppercase tracking-[0.1em] mt-6"
            >
              Submit
            </button>
          </form>
        </motion.div>
        
      </div>
    </section>
  );
}
