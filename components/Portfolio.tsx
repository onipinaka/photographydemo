'use client';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Portfolio() {
  const items = [
    {
      title: "Destination Wedding",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop",
      offset: false
    },
    {
      title: "Indore Wedding Photography",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop",
      offset: true
    },
    {
      title: "Couple Session",
      image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=800&auto=format&fit=crop",
      offset: false
    }
  ];

  return (
    <section id="portfolio" className="relative w-full py-24 bg-transparent overflow-hidden mt-10">
      <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32">
        
        <div className="text-center mb-24 relative">
          {/* Decorative faint background element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#b39556]/10 w-full flex justify-center pointer-events-none">
            <svg width="400" height="50" viewBox="0 0 400 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
               <path d="M0 25 C 100 0, 300 50, 400 25" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-serif text-[40px] md:text-[50px] leading-[1.1] text-[#1A1A1A] mb-6"
          >
            Explore My Portfolio
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

        <div className="flex flex-col md:flex-row items-end justify-center gap-6 lg:gap-10 relative pb-10">
          {items.map((item, idx) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
              className={`flex flex-col w-full md:w-1/3 group cursor-pointer ${item.offset ? 'md:-translate-y-16 z-10' : ''}`}
            >
              <div className="aspect-[3/4] w-full rounded-t-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="bg-[#EFEAE1] px-4 py-8 text-center mt-[-2px] relative z-20">
                <h3 className="font-serif text-[22px] text-[#1A1A1A] mb-3">{item.title}</h3>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#1A1A1A]/80 hover:text-[#b39556] transition-colors flex items-center justify-center gap-2">
                  See Album
                </span>
              </div>
            </motion.div>
          ))}
          
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-[#1A1A1A] hover:text-[#b39556] transition-colors z-30 hidden xl:flex translate-x-1/2">
            <ArrowRight size={20} strokeWidth={1.5} />
          </button>
        </div>
        
      </div>
    </section>
  );
}
