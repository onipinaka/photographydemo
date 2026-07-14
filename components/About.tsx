'use client';
import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="relative w-full py-24 overflow-hidden bg-transparent mt-16">
      <div className="w-full flex flex-col md:flex-row items-center justify-between">

        {/* Left Image - Cut off circle */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-[25%] lg:w-[20%] xl:w-[22%] aspect-[4/5] rounded-r-[200px] overflow-hidden mb-12 md:mb-0 shrink-0"
        >
          <img
            src="https://imgs.search.brave.com/pXL4a0dyv4vSXvv4B-zRiGKcUxVAxatd0LYvFcavmis/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMy8w/OC8wOC8wOS8yMS9j/b3VwbGUtODE3Njg2/OV82NDAuanBn"
            alt="Photographer"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Center Text */}
        <div className="w-full md:w-[50%] lg:w-[45%] text-center px-6 relative py-16">
          {/* Faint 'tora' watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
            <span className="font-serif text-[120px] sm:text-[180px] lg:text-[250px] text-[#b39556]/[0.07] italic leading-none select-none">
              Aathavani
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-serif text-[40px] md:text-[50px] lg:text-[56px] text-[#1A1A1A] mb-8"
          >
            Hello, I am Aathavani
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#1A1A1A]/60 text-base md:text-lg leading-[1.8] max-w-2xl mx-auto mb-10"
          >
            Roaming around capturing western weddings. I travel all over the western united states to photograph Texas ranch weddings. Colorado weddings, New Mexico weddings and beyond. I specialize in all kinds of rustic weddings to include western weddings, ranch weddings, barn weddings, farm weddings and couples photography.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#b39556] text-white px-8 py-3.5 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase hover:bg-[#9c814b] transition-colors inline-block"
          >
            About Me
          </motion.button>
        </div>

        {/* Right Image - Cut off semi-circle/arch */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-[25%] lg:w-[25%] xl:w-[22%] aspect-[3/4] rounded-tl-[150px] overflow-hidden mt-12 md:mb-0 shrink-0"
        >
          <img
            src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=800&auto=format&fit=crop"
            alt="Photographer taking picture"
            className="w-full h-full object-cover object-left"
          />
        </motion.div>

      </div>
    </section>
  );
}
