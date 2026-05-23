
import { motion } from 'motion/react';
import { CheckCircle2, TrendingDown, Users, BookMarked, Laptop, Award } from 'lucide-react';

const stats = [
  { label: 'Constituency Dev', value: '₹450 Cr', icon: <TrendingDown className="rotate-180" /> },
  { label: 'Dropout Rate', value: '< 5%', icon: <TrendingDown /> },
  { label: 'Students Trained', value: '48 Lakh', icon: <Users /> },
  { label: 'House Site Pattas', value: '18,000', icon: <Award /> },
];

const achievements = [
  {
    title: 'Illam Thedi Kalvi',
    desc: 'Education at the Doorstep. Mobilised 2 lakh volunteers to reach 30 lakh children post-pandemic.',
    tags: ['Education', 'Recovery']
  },
  {
    title: 'Free Breakfast Scheme',
    desc: 'India’s first government-run breakfast program, improving attendance and child nutrition statewide.',
    tags: ['Welfare', 'Nutrition']
  },
  {
    title: 'AI in Schools',
    desc: 'First state in India to integrate Artificial Intelligence in government school curriculum with Microsoft.',
    tags: ['Technology', 'Future']
  },
  {
    title: 'OrumaiKan Audit',
    desc: 'Personally audited schools across all 234 constituencies on 77 parameters. A national first.',
    tags: ['Governance', 'Data']
  },
  {
    title: 'State Education Policy 2025',
    desc: 'Spearheaded TN’s own 520-page education policy report protecting the two-language formula.',
    tags: ['Policy', 'Identity']
  },
  {
    title: 'PhD in Skill Development',
    desc: 'Completed Doctorate research on "Physical Activity for Skill Development Through Machine Learning".',
    tags: ['Academic', 'Personal']
  }
];

export default function Achievements() {
  return (
    <div className="pb-24">
      {/* Intro */}
      <section className="bg-dmk-black py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h2 className="text-dmk-gold font-display font-bold uppercase tracking-widest text-sm mb-4">Record of Delivery</h2>
            <h1 className="text-4xl md:text-6xl font-display font-black mb-8 leading-tight">
              From Thiruverumbur to <br />
              <span className="text-dmk-red italic">Tamil Nadu</span>
            </h1>
            <p className="text-xl text-gray-400">Every number here is a real life changed. Every project is a promise kept.</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="relative z-10 mt-[-50px]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:bg-dmk-red hover:text-white transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center text-dmk-red mb-4 group-hover:bg-white/20 group-hover:text-white">
                   {s.icon}
                </div>
                <p className="text-3xl font-display font-black mb-1">{s.value}</p>
                <p className="text-xs uppercase font-bold tracking-widest opacity-60">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Achievements Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-brand-cream border border-gray-100 rounded-[32px] p-8 card-hover flex flex-col h-full"
              >
                <div className="flex gap-2 mb-6 flex-wrap">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white rounded-full text-[10px] font-bold uppercase tracking-wider text-dmk-red border border-gray-100">{tag}</span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-4 flex-grow">{item.title}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed text-sm">{item.desc}</p>
                <div className="pt-6 border-t border-gray-200">
                   <div className="flex items-center gap-2 text-dmk-black font-bold text-sm">
                      <CheckCircle2 size={18} className="text-dmk-red" />
                      Project Delivered
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Constituency Wins */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4">
           <h2 className="text-4xl font-display font-black mb-16 text-center">Constituency Victories</h2>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="relative group">
                <div className="absolute inset-0 bg-dmk-red rounded-[40px] translate-x-4 translate-y-4 opacity-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform" />
                <div className="relative bg-white p-10 rounded-[40px] shadow-lg border border-gray-100 overflow-hidden">
                   <div className="absolute top-0 right-0 p-8">
                      <Laptop size={120} className="text-dmk-red/5" />
                   </div>
                   <h3 className="text-3xl font-display font-bold mb-6">Employment & Infrastructure</h3>
                   <ul className="space-y-4 text-gray-600">
                      <li className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-dmk-red shrink-0" />
                        <span>125-Acre SIPCOT Industrial Park development for local jobs.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-dmk-red shrink-0" />
                        <span>World-class Jallikattu Arena in Sooriyur.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-dmk-red shrink-0" />
                        <span>Olympic-standard Academy under construction.</span>
                      </li>
                   </ul>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-dmk-gold rounded-[40px] translate-x-4 translate-y-4 opacity-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform" />
                <div className="relative bg-white p-10 rounded-[40px] shadow-lg border border-gray-100 overflow-hidden">
                   <div className="absolute top-0 right-0 p-8">
                      <BookMarked size={120} className="text-dmk-gold/10" />
                   </div>
                   <h3 className="text-3xl font-display font-bold mb-6">Welfare & Housing</h3>
                   <ul className="space-y-4 text-gray-600">
                      <li className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-dmk-gold shrink-0" />
                        <span>18,000 House Site Pattas distributed to landless families.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-dmk-gold shrink-0" />
                        <span>Fully upgraded Model School in Thuvakudi.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-dmk-gold shrink-0" />
                        <span>₹450 Crore total constituency development investment.</span>
                      </li>
                   </ul>
                </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
