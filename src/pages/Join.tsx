
import { motion } from 'motion/react';
import { User, Mail, MapPin, Phone, ShieldCheck, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Join() {
  const [step, setStep] = useState(1);

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="bg-brand-cream border-b border-gray-100 py-32 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4">
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
              <h2 className="text-dmk-red font-display font-bold uppercase tracking-widest text-sm mb-4">Be Part of the Growth</h2>
              <h1 className="text-5xl md:text-7xl font-display font-black text-dmk-black mb-8 leading-tight italic">
                Join the <span className="text-dmk-red not-italic">DMK Family</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed">
                The DMK is not just a political party — it is a movement of the people, for the people. If you believe in an equitable Tamil Nadu, your place is with us.
              </p>
           </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Info Column */}
              <div className="space-y-12">
                 <h2 className="text-4xl font-display font-black">Why Volunteer?</h2>
                 {[
                   { icon: <User />, title: 'Your Voice Matters', desc: 'From booth-level meetings to district conferences, your opinion shapes the party direction.' },
                   { icon: <ShieldCheck />, title: 'Community of Change', desc: 'Join thousands of volunteers working on education drives, welfare, and youth outreach.' },
                   { icon: <ChevronRight />, title: 'Leadership Pathways', desc: 'DMK provides a career path for youth — from booth secretary to state-level leadership.' }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6 group">
                      <div className="w-16 h-16 rounded-2xl bg-brand-cream text-dmk-red flex items-center justify-center shrink-0 group-hover:bg-dmk-red group-hover:text-white transition-all">
                         {item.icon}
                      </div>
                      <div>
                         <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                         <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                 ))}

                 <div className="p-8 bg-dmk-black rounded-[40px] text-white">
                    <h3 className="text-xl font-display font-bold mb-4 text-dmk-gold">WhatsApp Community</h3>
                    <p className="text-sm opacity-60 mb-6">Stay updated on constituency news, events, and announcements directly on your phone.</p>
                    <a href="#" className="inline-block bg-white text-dmk-black px-8 py-3 rounded-full font-bold hover:bg-dmk-gold hover:text-white transition-colors">Join WhatsApp</a>
                 </div>
              </div>

              {/* Form Column */}
              <div className="bg-brand-cream p-8 md:p-12 rounded-[50px] border border-gray-100 shadow-xl overflow-hidden relative">
                 <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Sun size={200} />
                 </div>
                 
                 <div className="relative z-10">
                    <div className="flex gap-4 mb-10">
                       {[1, 2, 3].map((s) => (
                         <div key={s} className={`h-2 flex-grow rounded-full ${step >= s ? 'bg-dmk-red' : 'bg-gray-200'}`} />
                       ))}
                    </div>

                    <h3 className="text-2xl font-display font-black mb-8">Volunteer Registration</h3>

                    <div className="space-y-6">
                       {step === 1 && (
                         <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                            <div className="group">
                               <label className="block text-xs font-black uppercase text-gray-400 mb-2">Full Name</label>
                               <input type="text" className="w-full bg-white border border-gray-200 rounded-2xl p-4 focus:ring-2 focus:ring-dmk-red outline-none transition-all" placeholder="Enter your full name" />
                            </div>
                            <div className="group">
                               <label className="block text-xs font-black uppercase text-gray-400 mb-2">Mobile Number</label>
                               <div className="flex">
                                  <span className="flex items-center px-4 bg-gray-50 border border-r-0 border-gray-200 rounded-l-2xl text-gray-500">+91</span>
                                  <input type="tel" className="w-full bg-white border border-gray-200 rounded-r-2xl p-4 focus:ring-2 focus:ring-dmk-red outline-none transition-all" placeholder="10-digit number" />
                                </div>
                            </div>
                         </motion.div>
                       )}

                       {step === 2 && (
                         <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                            <div>
                               <label className="block text-xs font-black uppercase text-gray-400 mb-2">Constituency</label>
                               <select className="w-full bg-white border border-gray-200 rounded-2xl p-4 outline-none">
                                  <option>Thiruverumbur</option>
                                  <option>Trichy (Other)</option>
                                  <option>Outside Trichy</option>
                               </select>
                            </div>
                            <div>
                               <label className="block text-xs font-black uppercase text-gray-400 mb-2">Area / Ward</label>
                               <input type="text" className="w-full bg-white border border-gray-200 rounded-2xl p-4 placeholder-gray-300" placeholder="e.g., Thuvakudi, Ward 15" />
                            </div>
                         </motion.div>
                       )}

                       {step === 3 && (
                         <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                            <label className="block text-xs font-black uppercase text-gray-400 mb-2">Areas of Interest</label>
                            <div className="grid grid-cols-1 gap-3 text-sm">
                               {['Youth Outreach', 'Education Support', 'Digital Media', 'Social Work', 'Local Campaigning'].map((opt) => (
                                 <label key={opt} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 cursor-pointer hover:border-dmk-red transition-all">
                                    <input type="checkbox" className="accent-dmk-red" />
                                    <span className="font-bold text-dmk-black">{opt}</span>
                                 </label>
                               ))}
                            </div>
                         </motion.div>
                       )}

                       <div className="pt-6 flex gap-4">
                          {step > 1 && (
                            <button 
                              onClick={() => setStep(step - 1)}
                              className="px-8 py-4 bg-white border border-gray-200 text-dmk-black font-bold rounded-2xl hover:bg-gray-50 flex-1"
                            >
                              Back
                            </button>
                          )}
                          <button 
                            onClick={() => step < 3 ? setStep(step + 1) : alert("Thank you for joining!")}
                            className="bg-dmk-red text-white py-4 px-12 rounded-2xl font-bold shadow-xl shadow-dmk-red/20 active:scale-95 transition-all flex-1"
                          >
                            {step === 3 ? 'Submit Request' : 'Next Step'}
                          </button>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}

function Sun({ size }: { size: number }) {
   return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
         <circle cx="12" cy="12" r="5" />
         <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" />
         <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" />
         <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" />
         <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" />
         <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" />
         <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" />
         <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" />
         <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" />
      </svg>
   )
}
