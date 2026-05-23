
import { motion } from 'motion/react';
import { MapPin, Building2, Trophy, Hammer, Home, Droplets, Users } from 'lucide-react';

const projects = [
  { icon: <Trophy />, title: 'Jallikattu Arena', area: 'Sooriyur', desc: 'World-class facility preserving Tamil tradition.' },
  { icon: <Building2 />, title: 'Model School', area: 'Thuvakudi', desc: 'Holistic infrastructure upgrade template.' },
  { icon: <Hammer />, title: 'SIPCOT Park', area: '125 Acres', desc: 'Industrial growth & local job creation.' },
  { icon: <Home />, title: 'House Site Pattas', area: '18,000 Families', desc: 'Land security for generational residents.' },
  { icon: <Droplets />, title: 'Water Infrastructure', area: 'Constituency Wide', desc: 'Clean drinking water & drainage systems.' },
  { icon: <Users />, title: 'Naan Mudhalvan Center', area: 'Thiruverumbur', desc: 'Localized skill development hub.' },
];

const testimonials = [
  { text: "My children go to a model school and the roads are smooth. Mahesh sir personally came to visit.", author: "Resident, Thuvakudi" },
  { text: "The Breakfast Scheme has been a blessing. My daughter goes to school happily.", author: "Parent, Thiruverumbur" },
  { text: "I received my house site patta after 12 years. Mahesh sir made it happen.", author: "Beneficiary, Thiruverumbur" },
];

export default function Constituency() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="bg-brand-cream py-32 border-b border-gray-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-linear-to-b from-dmk-red/5 to-transparent blur-3xl opacity-50" />
        <div className="max-w-7xl mx-auto px-4">
           <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col lg:flex-row gap-16 items-center"
           >
              <div className="lg:w-1/2">
                <h2 className="text-dmk-red font-display font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                  <MapPin size={20} /> திருவெறும்பூர் தொகுதி
                </h2>
                <h1 className="text-5xl md:text-7xl font-display font-black text-dmk-black mb-8 leading-tight italic">
                  Thiruverumbur <br />
                  <span className="text-dmk-red not-italic">Constituency</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  A story of transformation. From industrial zone to modern residential hub, Thiruverumbur is being built for the future.
                </p>
                <div className="flex gap-4 mt-10">
                   <div className="p-1 px-2 border-l-4 border-dmk-red bg-white">
                      <p className="text-[10px] uppercase font-bold text-gray-400">District</p>
                      <p className="font-bold">Tiruchirappalli</p>
                   </div>
                   <div className="p-1 px-2 border-l-4 border-dmk-red bg-white">
                      <p className="text-[10px] uppercase font-bold text-gray-400">MLA Term</p>
                      <p className="font-bold">2021–Present</p>
                   </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full aspect-video rounded-3xl bg-gray-200 shadow-2xl overflow-hidden border-8 border-white border-dmk-red/10">
                 <img src="https://images.unsplash.com/photo-1596422846543-75c6fc18a594?auto=format&fit=crop&q=80&w=1200" alt="Constituency Map Area" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
           </motion.div>
        </div>
      </section>

      {/* Development Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-black mb-4">Development Projects</h2>
              <p className="text-gray-500 uppercase tracking-widest font-bold text-xs">Transforming Infrastructure</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((p, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-8 rounded-[32px] bg-brand-cream border border-gray-100 card-hover"
                >
                   <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-dmk-red shadow-lg mb-6 group">
                      {p.icon}
                   </div>
                   <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold">{p.title}</h3>
                      <span className="text-[10px] bg-dmk-red/5 text-dmk-red px-2 py-1 rounded font-black uppercase">{p.area}</span>
                   </div>
                   <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-dmk-black text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
           <h2 className="text-center text-4xl font-display font-black mb-16 text-dmk-gold">Resident Voices</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                   <p className="text-lg italic mb-6 text-gray-300">"{t.text}"</p>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-dmk-red/20 flex items-center justify-center text-dmk-red font-bold">
                         {t.author[0]}
                      </div>
                      <p className="text-sm font-bold text-dmk-gold">{t.author}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-display font-black mb-6">Constituency Support</h2>
           <p className="text-gray-600 mb-10 leading-relaxed">Residents of every ward in Thiruverumbur constituency can contact the office directly to raise infrastructure or welfare concerns.</p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#" className="bg-dmk-red text-white px-10 py-5 rounded-full font-bold shadow-xl shadow-dmk-red/20 card-hover">Raise a Concern (WhatsApp)</a>
              <a href="#" className="bg-dmk-black text-white px-10 py-5 rounded-full font-bold card-hover">Contact Office</a>
           </div>
        </div>
      </section>
    </div>
  );
}
