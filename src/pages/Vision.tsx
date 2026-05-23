
import { motion } from 'motion/react';
import { Target, Zap, Heart, Building, TrendingUp, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    icon: <Target className="text-dmk-red" />,
    title: 'Universal Quality Education',
    desc: 'Ensuring every government school is a centre of excellence. Target: Zero dropout rate by 2027.',
  },
  {
    icon: <Zap className="text-dmk-red" />,
    title: 'Digital & AI Literacy',
    desc: 'Microsoft partnership to ensure digital competence for every child in Tamil Nadu.',
  },
  {
    icon: <Heart className="text-dmk-red" />,
    title: 'Nutrition & Welfare',
    desc: 'Expanding the Breakfast Scheme to cover global health and wellness standards.',
  },
  {
    icon: <Building className="text-dmk-red" />,
    title: 'Infrastructure Development',
    desc: 'Olympic Academy, SIPCOT expansion, and world-class road/water upgrades in Trichy South.',
  },
  {
    icon: <TrendingUp className="text-dmk-red" />,
    title: 'Employment & Growth',
    desc: 'Transforming Trichy South into an industrial hub through the Naan Mudhalvan programme.',
  },
  {
    icon: <ShieldCheck className="text-dmk-red" />,
    title: 'Protecting Language Rights',
    desc: 'Defending the two-language policy and Tamil identity against external imposition.',
  },
];

const roadmap = [
  { era: '2021–2022', label: 'Foundation', desc: 'Launched Illam Thedi Kalvi & Ennum Ezhuthum.' },
  { era: '2022–2023', label: 'Assessment', desc: 'OrumaiKan school audit across 234 constituencies.' },
  { era: '2023–2024', label: 'Tech Leap', desc: 'AI Curriculum launch with Microsoft.' },
  { era: '2024–2025', label: 'Architecture', desc: 'State Education Policy 2025 released.' },
  { era: '2025–2026', label: 'Consolidation', desc: 'Phase 2 vision and model constituency completion.' },
];

export default function Vision() {
  return (
    <div className="pb-24">
      {/* Hero Headline */}
      <section className="bg-brand-cream border-b border-gray-100 py-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-dmk-red/5 rounded-l-full" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h2 className="text-dmk-red font-display font-black tracking-widest text-sm uppercase mb-4">திருவெறும்பூரின் நாளைக்கான தொலைநோக்கு</h2>
            <h1 className="text-5xl md:text-7xl font-display font-black text-dmk-black mb-8 leading-tight">
              My Vision for Thiruverumbur & <br />
              <span className="text-dmk-red italic">Tamil Nadu</span>
            </h1>
            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-gray-100 text-center max-w-3xl mt-12">
               <p className="text-2xl md:text-3xl font-display font-bold leading-relaxed text-dmk-black">
                "Every child who walks into a government school in Tamil Nadu must walk out with the knowledge, skills, and confidence to lead."
               </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars of Vision */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-display font-black mb-4">Six Pillars of Progress</h2>
             <p className="text-gray-500 max-w-2xl mx-auto">Building an equitable, modern, and culturally rooted Tamil Nadu through these core focus areas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-3xl bg-brand-cream border border-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-8 group-hover:bg-dmk-red group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-dmk-red transition-colors">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 bg-dmk-black text-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/3">
                 <h2 className="text-4xl font-display font-black mb-6">Execution Roadmap</h2>
                 <p className="text-gray-400 mb-8">From setting foundations to achieving global excellence, our journey is guided by milestones.</p>
                 <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                    <p className="text-dmk-gold font-bold mb-2">Hon. M.K. Stalin</p>
                    <p className="text-sm italic text-gray-400">"Anbil Mahesh has shown that education is the true equaliser. His work in Tamil Nadu's government schools will be remembered as one of the defining achievements of our government."</p>
                 </div>
              </div>
              
              <div className="lg:w-2/3 w-full">
                 <div className="grid grid-cols-1 gap-4">
                    {roadmap.map((step, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-6 group"
                      >
                         <div className="text-dmk-gold font-display font-black text-xs uppercase tracking-widest w-24 shrink-0">{step.era}</div>
                         <div className="h-[1px] flex-grow bg-white/10 group-hover:bg-dmk-red transition-colors" />
                         <div className="bg-white/5 p-6 rounded-2xl border border-white/10 group-hover:bg-white group-hover:text-dmk-black transition-all flex-grow max-w-lg">
                            <h4 className="font-bold mb-1">{step.label}</h4>
                            <p className="text-sm opacity-60 group-hover:opacity-100">{step.desc}</p>
                         </div>
                      </motion.div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
