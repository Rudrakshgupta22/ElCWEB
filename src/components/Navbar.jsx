// import { useEffect, useState } from 'react';

// const navigation = [
//   { href: '#patrons', label: 'Leadership' },
//   { href: '#about', label: 'About' },
//   { href: '#team', label: 'Team' },
//   { href: '#events', label: 'Events' },
//   { href: '#sponsors', label: 'Partners' },
//   { href: '#contact', label: 'Contact' }
// ];

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState('hero');

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 40);
//       const sections = document.querySelectorAll('section[id]');
//       let current = 'hero';
//       sections.forEach((section) => {
//         if (window.scrollY >= section.offsetTop - 120) {
//           current = section.id;
//         }
//       });
//       setActiveSection(current);
//     };

//     handleScroll();
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const closeOnLink = () => setMenuOpen(false);
//     if (!menuOpen) return undefined;
//     document.body.style.overflow = 'hidden';
//     return () => {
//       document.body.style.overflow = '';
//       closeOnLink();
//     };
//   }, [menuOpen]);

//   return (
//     <header
//       className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
//         scrolled
//           ? 'bg-brand-navy/95 backdrop-blur-md shadow-lg border-b border-brand-gold/20 py-2'
//           : 'bg-brand-navy py-4'
//       }`}
//     >
//       <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 lg:px-10">
        
//         {/* Logo Section */}
//         <a href="#hero" className="flex items-center gap-4 group">
//           <div className="flex h-12 w-12 items-center justify-center bg-brand-gold text-brand-navy font-black text-lg transition-transform group-hover:scale-105">
//             ELC
//           </div>
//           <div className="hidden flex-col sm:flex">
//             <span className="text-sm font-bold tracking-widest text-white uppercase">Experiential Learning</span>
//             <span className="text-xs font-medium tracking-[0.2em] text-brand-gold uppercase">Corporation</span>
//           </div>
//         </a>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-10">
//           {navigation.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               className={`relative text-xs font-bold uppercase tracking-widest transition-colors py-2 ${
//                 activeSection === link.href.slice(1)
//                   ? 'text-brand-gold'
//                   : 'text-gray-300 hover:text-white'
//               }`}
//             >
//               {link.label}
//               {/* Animated Underline */}
//               <span 
//                 className={`absolute bottom-0 left-0 h-[2px] bg-brand-gold transition-all duration-300 ${
//                   activeSection === link.href.slice(1) ? 'w-full' : 'w-0 hover:w-full'
//                 }`} 
//               />
//             </a>
//           ))}
//         </nav>

//         {/* CTA & Mobile Toggle */}
//         <div className="flex items-center gap-4">
//           <a
//             href="#join"
//             className="hidden md:inline-flex items-center justify-center border-2 border-brand-gold bg-transparent px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-brand-gold transition-all hover:bg-brand-gold hover:text-brand-navy"
//           >
//             Join the Enterprise
//           </a>

//           {/* Mobile Menu Button */}
//           <button
//             type="button"
//             onClick={() => setMenuOpen((open) => !open)}
//             className="md:hidden flex h-10 w-10 flex-col justify-center items-center gap-1.5 text-white"
//             aria-label="Toggle mobile menu"
//           >
//             <span className={`block h-[2px] w-6 bg-current transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
//             <span className={`block h-[2px] w-6 bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
//             <span className={`block h-[2px] w-6 bg-current transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Full-Screen Menu */}
//       <div 
//         className={`fixed inset-0 top-[72px] bg-brand-navy border-t border-brand-gold/20 transition-transform duration-300 md:hidden ${
//           menuOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         <div className="flex flex-col px-6 py-8 space-y-6">
//           {navigation.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               className="text-2xl font-black text-white tracking-wider hover:text-brand-gold transition-colors"
//               onClick={() => setMenuOpen(false)}
//             >
//               {link.label}
//             </a>
//           ))}
//           <div className="pt-8 mt-8 border-t border-gray-800">
//             <a
//               href="#join"
//               className="inline-flex w-full justify-center bg-brand-gold px-6 py-4 text-sm font-bold uppercase tracking-widest text-brand-navy transition hover:bg-white"
//               onClick={() => setMenuOpen(false)}
//             >
//               Join the Enterprise
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Navbar;


import { useEffect, useState } from 'react';

const navigation = [
  { href: '#patrons', label: 'Leadership' },
  { href: '#about', label: 'About' },
  { href: '#team', label: 'Team' },
  { href: '#events', label: 'Events' },
  { href: '#partners', label: 'Partners' },
  { href: '#contact', label: 'Contact' }
];

function PremiumMatteNavbar() {
  const [activeSection, setActiveSection] = useState('patrons');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = document.querySelectorAll('section[id]');
      let current = 'hero';
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 120) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A192F]/90 backdrop-blur-lg border-b border-[#E5B05C]/10' : 'bg-[#0A192F]'}`}>
      
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
        
        {/* Left Side: Logo Block */}
        <a href="#hero" className="flex items-center gap-4">
          <img
            src="/images/logo.png"
            alt="ELC Logo"
            className="h-10 w-auto object-contain md:h-12"
          />
        </a>

        {/* Center: Premium Matte Glass Navigation */}
        <nav className="hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:flex items-center gap-1 rounded-full bg-white/5 backdrop-blur-md p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-white/10">
          {navigation.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveSection(link.href.slice(1))}
                className={`relative px-5 py-2 text-[14px] font-medium transition-colors duration-200 ${
                  isActive ? 'text-[#E5B05C]' : 'text-gray-300 hover:text-white'
                }`}
              >
                {/* 
                  Anti-Lag Active Background:
                  Always in the DOM, simply scaling and fading in/out via GPU acceleration.
                */}
                <span 
                  className={`absolute inset-0 rounded-full bg-[#E5B05C]/10 border border-[#E5B05C]/20 -z-10 transition-all duration-200 ease-out ${
                    isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`} 
                />
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Side: Corporate Ghost Button */}
        <div className="flex items-center">
          <a
            href="#join"
            className="hidden md:inline-flex items-center justify-center border border-[#E5B05C] bg-transparent px-6 py-3 text-[13px] font-bold uppercase tracking-widest text-[#E5B05C] transition-all hover:bg-[#E5B05C] hover:text-[#0A192F]"
          >
            Join The Enterprise
          </a>
          
          <button className="md:hidden text-[#E5B05C] p-2">
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
             </svg>
          </button>
        </div>

      </div>
    </header>
  );
}

export default PremiumMatteNavbar;