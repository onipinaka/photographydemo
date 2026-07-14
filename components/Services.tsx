'use client';
import { motion } from 'motion/react';
import { Camera, Users, Image as ImageIcon } from 'lucide-react';

export function Services() {
  const services = [
    { title: "Wedding Photography", icon: Camera },
    { title: "Couple Session", icon: Users },
    { title: "Photographic Coaching", icon: ImageIcon },
  ];

  return (
    <section id="services" className="relative w-full py-24 bg-transparent overflow-hidden mt-10">
      <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32 flex flex-col lg:flex-row items-center justify-between">

        {/* Left Side: Text and List */}
        <div className="w-full lg:w-[40%] xl:w-[35%] z-10 mb-16 lg:mb-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-serif text-[40px] md:text-[50px] leading-[1.1] text-[#1A1A1A] mb-6"
          >
            My Photographic Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#1A1A1A]/60 text-base md:text-lg leading-[1.8] mb-12 max-w-lg"
          >
            Roaming around capturing western weddings. I travel all over the western united states to photograph Texas ranch weddings.
          </motion.p>

          <div className="space-y-4 mb-12">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                className="flex items-center gap-6 pb-6 border-b border-[#1A1A1A]/5 last:border-0"
              >
                <div className="w-14 h-14 rounded-full border border-[#b39556]/30 flex items-center justify-center text-[#b39556] bg-[#b39556]/5 shrink-0">
                  <service.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[22px] text-[#1A1A1A]">{service.title}</h3>
              </motion.div>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-[#b39556] text-white px-8 py-3.5 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase hover:bg-[#9c814b] transition-colors inline-block"
          >
            Browse Services
          </motion.button>
        </div>

        {/* Right Side: Image Collage */}
        <div className="w-full lg:w-[55%] relative h-[500px] lg:h-[700px] flex justify-end">

          {/* Main Arch Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute top-0 right-0 w-[90%] lg:w-[85%] h-[85%] lg:h-[90%] rounded-tr-[150px] overflow-hidden"
          >
            <img
              src="https://imgs.search.brave.com/iaLBVmVTPxgjYFT5yqJ5aFCaknwxdhh7-wiZKIffXus/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMS8w/OS8wNi8wNS81NS9s/b3ZlLTY2MDA5MDNf/NjQwLmpwZw"
              alt="Wedding Setup"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Square Overlapping Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="absolute bottom-0 left-[5%] lg:left-0 w-[45%] lg:w-[40%] aspect-[3/4] bg-[#FDFBF7] p-2 lg:p-3 shadow-xl z-20"
          >
            <img
              src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop"
              alt="Church"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Decorative Leaf SVG (Bottom Right) */}
          <div className="absolute bottom-[10%] right-[-5%] opacity-[0.2] pointer-events-none text-[#b39556] w-[200px] h-[200px] hidden md:block">
            <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="80" r="3" />
              <circle cx="30" cy="70" r="2" />
              <circle cx="10" cy="90" r="4" />
              <path d="M40 60 C 50 50, 70 40, 90 20 C 80 40, 60 70, 40 60 Z" opacity="0.5" />
            </svg>
          </div>

        </div>

      </div>
    </section>
  );
}
