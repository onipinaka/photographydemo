'use client';
import { motion } from 'motion/react';

export function Blog() {
  const articles = [
    {
      title: "Luxe-Style Hawaii Wedding Overlooking the Ocean",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Luxe-Style Hawaii Wedding Overlooking the Ocean",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Luxe-Style Hawaii Wedding Overlooking the Ocean",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="relative w-full py-24 bg-transparent overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#1A1A1A]/10 pb-12">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="font-serif text-[40px] md:text-[50px] leading-[1.1] text-[#1A1A1A] mb-6"
            >
              My Recent Blog and Articles
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#1A1A1A]/60 text-sm md:text-base leading-relaxed"
            >
              Roaming around capturing western weddings. I travel all over the western united states to photograph Texas ranch weddings.
            </motion.p>
          </div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 md:mt-0 bg-[#b39556] text-white px-8 py-3.5 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase hover:bg-[#9c814b] transition-colors inline-block"
          >
            Blog
          </motion.button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-16">
          {articles.map((article, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              className="flex flex-col items-center group cursor-pointer w-full md:w-1/3"
            >
              <div className="w-full aspect-square rounded-full overflow-hidden mb-8 relative">
                <img 
                  src={article.image} 
                  alt="Blog" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                />
              </div>
              
              <h3 className="font-serif text-[22px] leading-snug text-center text-[#1A1A1A] mb-6 max-w-xs transition-colors group-hover:text-[#b39556]">
                {article.title}
              </h3>
              
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#b39556] hover:text-[#9c814b] transition-colors pb-1 border-b border-[#b39556]/30">
                Read More
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
