'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: "HOME", href: "#home", active: true },
    { name: "ABOUT", href: "#about", active: false },
    { name: "SERVICES", href: "#services", active: false },
    { name: "PORTFOLIO", href: "#portfolio", active: false },
    { name: "PRICING", href: "#pricing", active: false },
    { name: "CONTACT", href: "#contact", active: false },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] py-6' : 'bg-transparent py-6'
        }`}
      >
        <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="font-serif text-3xl md:text-4xl tracking-tight text-[#1A1A1A]">
            Logo
          </Link>
          
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-12">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-semibold tracking-[0.15em] transition-colors ${
                  link.active ? 'text-[#b39556]' : 'text-[#1A1A1A]/60 hover:text-[#b39556]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-[#1A1A1A] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
          
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`fixed inset-0 z-40 bg-[#FDFBF7] transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-32 px-10 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-10">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-[16px] font-semibold tracking-[0.15em] transition-colors ${
                link.active ? 'text-[#b39556]' : 'text-[#1A1A1A]/80 hover:text-[#b39556]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
