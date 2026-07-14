'use client';
import { motion } from 'motion/react';

export function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop",
  ];

  return (
    <section id="gallery" className="w-full py-24 bg-transparent overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32">
        <div className="text-center mb-16 relative">
           {/* Faint botanical line element */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#b39556]/10 w-[600px] flex justify-center pointer-events-none">
            <svg width="100%" height="40" viewBox="0 0 600 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
               <path d="M0 20 L 250 20 M 350 20 L 600 20" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-serif text-[40px] md:text-[50px] leading-[1.1] text-[#1A1A1A] mb-6"
          >
            My Photographic Gallery
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#1A1A1A]/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Roaming around capturing western weddings. I travel all over the western united states to photograph Texas ranch weddings.
          </motion.p>
        </div>
      </div>

      {/* Edge-to-edge full width gallery strip */}
      <div className="w-full flex flex-wrap md:flex-nowrap">
        {images.map((img, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
            className="w-full md:w-[20%] aspect-[3/4] md:aspect-[4/5] relative group overflow-hidden"
          >
            <img 
              src={img} 
              alt={`Gallery ${idx + 1}`} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
