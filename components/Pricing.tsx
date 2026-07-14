'use client';
import { motion } from 'motion/react';
import { Check, Image as ImageIcon, Camera, Users } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      title: "Wedding Photography",
      icon: Camera,
      price: "20000/-",
      features: [
        "Full day support",
        "Picture with one wedding video",
        "Full day support",
        "Picture with one wedding video"
      ]
    },
    {
      title: "Couple Session",
      icon: Users,
      price: "20000/-",
      features: [
        "Full day support",
        "Picture with one wedding video",
        "Full day support",
        "Picture with one wedding video"
      ]
    },
    {
      title: "Photographic Coaching",
      icon: ImageIcon,
      price: "20000/-",
      features: [
        "Full day support",
        "Picture with one wedding video",
        "Full day support",
        "Picture with one wedding video"
      ]
    }
  ];

  return (
    <section id="pricing" className="relative w-full py-24 bg-transparent overflow-hidden">
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
              See My Pricing
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
            Pricing
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              className="bg-[#F8F4EE] border border-[#1A1A1A]/5 p-12 flex flex-col group hover:shadow-lg transition-all duration-500 rounded-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full border border-[#b39556]/30 flex items-center justify-center text-[#b39556] bg-[#b39556]/5 shrink-0">
                  <plan.icon size={18} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[22px] text-[#1A1A1A]">{plan.title}</h3>
              </div>

              <div className="mb-10">
                <span className="text-[56px] font-serif text-[#1A1A1A] leading-none">{plan.price}</span>
              </div>

              <div className="mb-8 font-serif text-sm font-medium border-b border-[#1A1A1A]/10 pb-4 text-[#1A1A1A]">
                Wedding Package Details
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-[13px] text-[#1A1A1A]/70">
                    <Check className="text-[#b39556] shrink-0 mt-[2px]" size={14} strokeWidth={2.5} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-[#b39556] text-white py-4 rounded-full text-[11px] font-semibold transition-colors uppercase tracking-[0.15em] hover:bg-[#9c814b]">
                Hire Me
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
