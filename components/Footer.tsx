import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-[#EBE5D9] pt-24 pb-8 relative overflow-hidden mt-20">

      {/* Huge Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.06] select-none">
        <span className="font-serif text-[18vw] leading-none text-[#b39556] italic">Aathavani</span>
      </div>

      <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8 border-b border-[#1A1A1A]/10 pb-16">

          <Link href="/" className="font-serif text-3xl md:text-4xl tracking-tight text-[#1A1A1A]">
            Logo
          </Link>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            <Link href="#home" className="text-[10px] font-medium tracking-[0.15em] transition-colors text-[#b39556] uppercase">Home</Link>
            <Link href="#about" className="text-[10px] font-medium tracking-[0.15em] transition-colors text-[#1A1A1A]/60 hover:text-[#b39556] uppercase">About</Link>
            <Link href="#services" className="text-[10px] font-medium tracking-[0.15em] transition-colors text-[#1A1A1A]/60 hover:text-[#b39556] uppercase">Services</Link>
            <Link href="#portfolio" className="text-[10px] font-medium tracking-[0.15em] transition-colors text-[#1A1A1A]/60 hover:text-[#b39556] uppercase">Portfolio</Link>
            <Link href="#pricing" className="text-[10px] font-medium tracking-[0.15em] transition-colors text-[#1A1A1A]/60 hover:text-[#b39556] uppercase">Pricing</Link>
            <Link href="#contact" className="text-[10px] font-medium tracking-[0.15em] transition-colors text-[#1A1A1A]/60 hover:text-[#b39556] uppercase">Contact</Link>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="w-8 h-8 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center text-[#1A1A1A]/70 hover:text-[#b39556] hover:border-[#b39556] transition-all">
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center text-[#1A1A1A]/70 hover:text-[#b39556] hover:border-[#b39556] transition-all">
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center text-[#1A1A1A]/70 hover:text-[#b39556] hover:border-[#b39556] transition-all">
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.34 2.88 2.88 0 012.31-4.53 2.66 2.66 0 011.62.5v-3.5a6.32 6.32 0 00-1.62-.22 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.35 6.35 0 006.34-6.34v-5.6a8.28 8.28 0 004.22 1.15V6.44a4.8 4.8 0 01-1.3-.08z" /></svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[12px] md:text-sm text-[#1A1A1A]/50">
          <p>Copyright 2025. All Rights Reserved!</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-[#b39556] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#b39556] transition-colors">Terms of Condition</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
