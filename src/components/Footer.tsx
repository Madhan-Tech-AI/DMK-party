
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dmk-black text-white pt-20 pb-8 border-t-4 border-dmk-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Tagline */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-dmk-red rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-dmk-gold rounded-full"></div>
              </div>
              <span className="text-xl font-display font-black uppercase tracking-tight">Anbil Mahesh</span>
            </div>
            <div className="space-y-4">
              <p className="text-white/40 text-xs italic font-serif leading-relaxed">"Serving the People. Transforming Education. Building Tomorrow."</p>
              <p className="text-dmk-gold text-lg font-black font-display tracking-tight">மக்களுக்கு சேவை. கல்வியில் மாற்றம்.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center hover:bg-dmk-red transition-colors"><Facebook size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center hover:bg-dmk-red transition-colors"><Twitter size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center hover:bg-dmk-red transition-colors"><Instagram size={16} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h4 className="label-caps mb-6 text-dmk-red">Navigation</h4>
            <ul className="grid grid-cols-1 gap-3 text-white/50 text-xs font-bold uppercase tracking-wider">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/vision" className="hover:text-white transition-colors">Vision</Link></li>
              <li><Link to="/achievements" className="hover:text-white transition-colors">Achievements</Link></li>
              <li><Link to="/initiatives" className="hover:text-white transition-colors">Initiatives</Link></li>
              <li><Link to="/dmk" className="hover:text-white transition-colors">DMK Info</Link></li>
            </ul>
          </div>

          {/* Constituency Office */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h4 className="label-caps mb-6 text-dmk-gold">Constituency</h4>
            <ul className="space-y-4 text-white/60 text-xs leading-relaxed">
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-dmk-red shrink-0 mt-0.5" />
                <span>Thiruverumbur, Tiruchirappalli, Tamil Nadu - 620 011</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-dmk-red shrink-0" />
                <span>Contact Office</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-dmk-red shrink-0" />
                <span>mahesh@dmk.org</span>
              </li>
            </ul>
          </div>

          {/* DMK Motto */}
          <div className="bg-dmk-red p-8 rounded-2xl border-t-4 border-dmk-gold flex flex-col justify-between">
            <div>
              <h4 className="text-white font-black text-xl mb-1 font-display">கடமை கண்ணியம் கட்டுப்பாடுப</h4>
              <p className="text-[10px] text-white/70 uppercase tracking-[0.2em]">Duty, Dignity, Discipline</p>
            </div>
            <div className="pt-4 flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest text-white">DMK Movement</span>
              <div className="flex gap-1">
                <div className="w-4 h-2 bg-white/20"></div>
                <div className="w-4 h-2 bg-white/20"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/30 text-[10px] font-bold uppercase tracking-widest gap-4">
          <p>© {currentYear} Anbil Mahesh Poiyamoli | Official Educational Portal</p>
          <div className="flex space-x-6 uppercase transition-all">
            <a href="#" className="hover:text-white">Privacy</a>
            <span className="opacity-20">•</span>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
