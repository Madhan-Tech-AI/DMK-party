
import { motion } from 'motion/react';
import { Sun, Shield, Heart, Scale, Globe, BookOpen } from 'lucide-react';

const principles = [
  { icon: <Scale />, title: 'Social Justice', desc: 'Equal rights, dignity, and opportunity for all.' },
  { icon: <BookOpen />, title: 'Tamil Identity', desc: 'Protection and celebration of Tamil culture.' },
  { icon: <Shield />, title: 'Secular Democracy', desc: 'Equal respect for all religions.' },
  { icon: <Heart />, title: 'Welfare Governance', desc: 'Using resources to help the marginalized.' },
  { icon: <Globe />, title: 'Federalism', desc: 'Strong state autonomy and linguistic rights.' },
  { icon: <Sun />, title: 'Rationalism', desc: 'Scientific approach to governance.' },
];

export default function DMKInfo() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="bg-dmk-red py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-10">
           <Sun size={400} strokeWidth={1} />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
           <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
              <div className="inline-block p-2 px-6 border-2 border-white rounded-full mb-6 font-display font-bold text-sm uppercase tracking-widest">திராவிட முன்னேற்றக் கழகம்</div>
              <h1 className="text-6xl md:text-8xl font-display font-black mb-4">DMK Family</h1>
              <p className="text-xl max-w-2xl mx-auto opacity-80 uppercase tracking-widest font-bold">Duty · Dignity · Discipline</p>
           </motion.div>
        </div>
      </section>

      {/* History */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-4xl font-display font-black text-dmk-black mb-8">A Legacy of Progress</h2>
                 <div className="prose prose-lg text-gray-600">
                    <p className="mb-6">
                       Founded on 17th September 1949 by the legendary Kalaignar C.N. Annadurai (Anna), the DMK emerged from the Dravidian movement as a political force that championed social equality, Tamil identity, and secular democracy.
                    </p>
                    <p className="mb-6">
                       Anbil P. Dharmalingam, the grandfather of Anbil Mahesh Poiyamoli, was one of the founding members — helping establish the foundations of Dravidian governance that would transform Tamil Nadu.
                    </p>
                    <p>
                       From the Dravidian revolution of 1967 to the welfare governance of Chief Minister M.K. Stalin today, the party has consistently stood for the rights of the common man.
                    </p>
                 </div>
              </div>
              <div className="bg-dmk-black p-12 rounded-[60px] text-white">
                 <h3 className="text-2xl font-display font-bold mb-8 text-dmk-gold">Current Leadership</h3>
                 <div className="space-y-8">
                    {[
                      { role: 'President', name: 'Thiru M.K. Stalin', sub: 'Hon. Chief Minister of TN' },
                      { role: 'General Secretary', name: 'Thiru Duraimurugan', sub: 'Senior Leader' },
                      { role: 'Youth Wing Secretary', name: 'Thiru Udhayanidhi Stalin', sub: 'Hon. Deputy CM of TN' },
                      { role: 'District Secretary (South)', name: 'Thiru Anbil Mahesh Poiyamoli', sub: 'Trichy District' }
                    ].map((lead, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-dmk-red font-black mb-1">{lead.role}</span>
                        <span className="text-xl font-bold">{lead.name}</span>
                        <span className="text-xs opacity-50">{lead.sub}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 bg-brand-cream overflow-hidden">
         <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-display font-black text-center mb-16">The Six Core Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {principles.map((p, i) => (
                 <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-10 rounded-[40px] shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform group"
                 >
                    <div className="w-16 h-16 rounded-2xl bg-brand-cream text-dmk-red flex items-center justify-center mb-6 group-hover:bg-dmk-red group-hover:text-white transition-colors">
                       {p.icon}
                    </div>
                    <h4 className="text-2xl font-bold mb-4">{p.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Join Link */}
      <section className="py-24 text-center">
         <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-display font-black mb-8">Join the Movement</h2>
            <a href="https://dmk.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-dmk-red text-white px-12 py-6 rounded-full font-bold shadow-2xl shadow-dmk-red/20 card-hover">
               Become a Member via dmk.in
            </a>
         </div>
      </section>
    </div>
  );
}
