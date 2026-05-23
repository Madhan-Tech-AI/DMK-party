
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Send, Landmark } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-dmk-black py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-display font-black mb-6">Contact Us</h1>
              <p className="text-xl text-dmk-gold font-bold uppercase tracking-[0.2em] mb-8">தொடர்பு கொள்ளுங்கள்</p>
              <p className="text-gray-400 text-lg leading-relaxed">We respond to all constituency grievances and public inquiries. Every voice is heard.</p>
           </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
               {/* Contact Form */}
               <div className="space-y-10">
                  <div>
                     <h2 className="text-4xl font-display font-black text-dmk-black mb-4">Send a Message</h2>
                     <p className="text-gray-500">Submit your petition or message directly to the office. Our team will review and respond within 48 hours.</p>
                  </div>
                  
                  <form className="space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-xs font-black uppercase text-gray-400">Name</label>
                           <input type="text" className="w-full bg-brand-cream border border-gray-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-dmk-red transition-all" placeholder="Full name" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-xs font-black uppercase text-gray-400">Phone</label>
                           <input type="tel" className="w-full bg-brand-cream border border-gray-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-dmk-red transition-all" placeholder="Mobile number" />
                        </div>
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-black uppercase text-gray-400">Message Type</label>
                        <select className="w-full bg-brand-cream border border-gray-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-dmk-red transition-all">
                           <option>General Inquiry</option>
                           <option>Constituency Grievance</option>
                           <option>Education Reform Idea</option>
                           <option>Press Inquiry</option>
                        </select>
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-black uppercase text-gray-400">Petition / Message</label>
                        <textarea className="w-full bg-brand-cream border border-gray-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-dmk-red transition-all h-40" placeholder="Type your detailed message here..."></textarea>
                     </div>
                     <button type="submit" className="w-full bg-dmk-red text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-dmk-red/20 card-hover">
                        Send Message <Send size={20} />
                     </button>
                  </form>
               </div>

               {/* Details */}
               <div className="space-y-16">
                  {/* Offices */}
                  <div className="space-y-10">
                     <div className="bg-brand-cream p-10 rounded-[50px] border border-gray-100">
                        <h3 className="text-xl font-display font-black text-dmk-red mb-6 flex items-center gap-3">
                           <MapPin /> Constituency Office
                        </h3>
                        <div className="space-y-2 text-gray-600 mb-8">
                           <p className="font-bold text-dmk-black">Thiruverumbur, Tiruchirappalli</p>
                           <p>Tamil Nadu — 620 011</p>
                        </div>
                        <div className="flex flex-col gap-4 text-sm font-bold">
                           <a href="#" className="flex items-center gap-3 text-dmk-black hover:text-dmk-red transition-colors"><Phone size={18} /> [Contact Number]</a>
                           <a href="#" className="flex items-center gap-3 text-dmk-black hover:text-dmk-red transition-colors"><Mail size={18} /> mahesh@dmk.org</a>
                        </div>
                     </div>

                     <div className="bg-dmk-black p-10 rounded-[50px] text-white">
                        <h3 className="text-xl font-display font-black text-dmk-red mb-6 flex items-center gap-3">
                           <Landmark /> Ministerial Office
                        </h3>
                        <div className="space-y-2 opacity-60 mb-8">
                           <p className="font-bold text-white">Office of the Minister for School Education</p>
                           <p>Fort St. George, Chennai — 600 009</p>
                        </div>
                        <p className="text-xs text-dmk-gold font-bold uppercase tracking-widest">Office Hours: Mon–Sat | 10AM–5PM</p>
                     </div>
                  </div>

                  {/* Socials */}
                  <div>
                     <h3 className="text-lg font-bold mb-6">Social Media Handles</h3>
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                          { icon: <Facebook />, name: 'Facebook' },
                          { icon: <Twitter />, name: 'Twitter' },
                          { icon: <Instagram />, name: 'Instagram' },
                          { icon: <Youtube />, name: 'YouTube' }
                        ].map((s, i) => (
                           <a key={i} href="#" className="flex flex-col items-center gap-3 p-6 bg-brand-cream rounded-3xl hover:bg-white hover:shadow-xl transition-all border border-gray-50 border-dmk-red/5">
                              <span className="text-dmk-red">{s.icon}</span>
                              <span className="text-xs font-bold uppercase tracking-tighter">{s.name}</span>
                           </a>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
