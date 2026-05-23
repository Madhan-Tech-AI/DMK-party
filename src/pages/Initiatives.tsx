
import { motion } from 'motion/react';
import { BookOpen, Coffee, Cpu, ClipboardCheck, GraduationCap, Briefcase, Leaf, MapPin } from 'lucide-react';

const initiatives = [
  {
    icon: <BookOpen className="text-dmk-red" />,
    title: 'Illam Thedi Kalvi',
    description: 'Education at the Doorstep. Deploying 2 lakh community volunteers to conduct neighborhood learning sessions post-pandemic.',
    impact: 'Reached 30 lakh children across 38 districts.',
    status: 'Flagship Success'
  },
  {
    icon: <ClipboardCheck className="text-dmk-red" />,
    title: 'Ennum Ezhuthum',
    description: 'Foundational Literacy & Numeracy. Mission to ensure every child up to Class 3 achieves reading, writing, and arithmetic competence.',
    impact: 'Standardised assessment and bi-weekly learning magazines.',
    status: 'Ongoing Mission'
  },
  {
    icon: <Coffee className="text-dmk-red" />,
    title: 'Free Breakfast Scheme',
    description: 'India’s first state-run morning meal program for government schools. "A child who comes hungry cannot learn."',
    impact: 'Significant attendance boost and nutrition security.',
    status: 'Statewide Scale'
  },
  {
    icon: <Cpu className="text-dmk-red" />,
    title: 'AI in Schools',
    description: 'Microsoft Partnership. Integrating Artificial Intelligence, coding, and digital problem-solving from Class 6 onwards.',
    impact: 'First state in India with AI-integrated school curriculum.',
    status: 'Innovative'
  },
  {
    icon: <MapPin className="text-dmk-red" />,
    title: 'OrumaiKan Audit',
    description: 'Comprehensive School Audit. Personal field assessment of schools across 234 constituencies on 77 parameters.',
    impact: 'Definitive digital roadmap for infrastructure upgrades.',
    status: 'Data-Driven'
  },
  {
    icon: <GraduationCap className="text-dmk-red" />,
    title: 'TN State Education Policy',
    description: 'State Education Policy 2025. Protecting the two-language formula and tailoring education to Tamil Nadu’s unique socioeconomic needs.',
    impact: '520-page comprehensive policy report.',
    status: 'Policy Framework'
  },
  {
    icon: <Briefcase className="text-dmk-red" />,
    title: 'Naan Mudhalvan',
    description: 'Skill Development & Placement. Faciliating industry-relevant training and job placement for youth statewide.',
    impact: '48 lakh students trained; 2.5 lakh jobs created.',
    status: 'Empowerment'
  },
  {
    icon: <Leaf className="text-dmk-red" />,
    title: 'Climate Curriculum',
    description: 'Integrating climate science, ecology, and environmental sustainability into regular school syllabus.',
    impact: 'Preparing the next generation for ecological challenges.',
    status: 'Future-Ready'
  }
];

export default function Initiatives() {
  return (
    <div className="pb-24">
      <section className="bg-brand-cream py-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
           >
              <h2 className="text-dmk-red font-display font-bold uppercase tracking-widest text-sm mb-4">Turning Vision into Action</h2>
              <h1 className="text-5xl md:text-6xl font-display font-black text-dmk-black mb-8 leading-tight">
                Public Welfare <br />
                <span className="text-dmk-red italic">Initiatives</span>
              </h1>
              <p className="text-lg text-gray-500">A detailed look at the programs reshaping education and welfare in Tamil Nadu.</p>
           </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {initiatives.map((init, idx) => (
               <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white border border-dmk-red/10 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
               >
                 <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-20 h-20 bg-brand-cream rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-dmk-red group-hover:text-white transition-all duration-300 shrink-0">
                       {init.icon}
                    </div>
                    <div>
                       <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-dmk-red/5 rounded-full text-[9px] font-black uppercase tracking-widest text-dmk-red">{init.status}</span>
                       </div>
                       <h3 className="text-2xl font-display font-black mb-4">{init.title}</h3>
                       <p className="text-gray-600 mb-6 leading-relaxed text-sm">{init.description}</p>
                       
                       <div className="bg-brand-cream p-6 rounded-xl border border-dmk-red/5">
                          <p className="text-[9px] uppercase tracking-[0.2em] font-black text-dmk-red mb-2">Key Impact</p>
                          <p className="text-sm font-bold text-dmk-black">{init.impact}</p>
                       </div>
                    </div>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
