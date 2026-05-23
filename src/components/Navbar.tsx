
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Landmark } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { label: 'Home', labelTa: 'முகப்பு', href: '/' },
  { label: 'About', labelTa: 'பற்றி', href: '/about' },
  { label: 'Vision', labelTa: 'தொலைநோக்கு', href: '/vision' },
  { label: 'Achievements', labelTa: 'சாதனைகள்', href: '/achievements' },
  { label: 'Initiatives', labelTa: 'திட்டங்கள்', href: '/initiatives' },
  { label: 'Constituency', labelTa: 'தொகுதி', href: '/constituency' },
  { label: 'DMK Info', labelTa: 'திமுக', href: '/dmk' },
  { label: 'Join Us', labelTa: 'இணையுங்கள்', href: '/join' },
  { label: 'Contact', labelTa: 'தொடர்பு', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm py-2' : 'bg-white border-b border-dmk-red/10 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-dmk-red rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <div className="w-6 h-6 bg-dmk-gold rounded-full shadow-[0_0_10px_#F5A623]"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-display font-black leading-none tracking-tight uppercase">Anbil Mahesh</span>
              <span className="text-[9px] uppercase tracking-widest text-dmk-red font-bold">Poiyamoli</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6 text-xs font-bold uppercase tracking-widest">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`transition-colors py-2 ${
                  location.pathname === item.href
                    ? 'text-dmk-red border-b-2 border-dmk-red'
                    : 'text-dmk-black/60 hover:text-dmk-red'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/join" className="bg-dmk-red text-white px-6 py-2 rounded-md font-black text-xs uppercase tracking-tighter hover:bg-dmk-black transition-colors">
              Join Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-dmk-black hover:text-dmk-red focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium ${
                    location.pathname === item.href
                      ? 'bg-dmk-red text-white'
                      : 'text-dmk-black hover:bg-dmk-red/5 hover:text-dmk-red'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    <span className="text-xs opacity-70">{item.labelTa}</span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
