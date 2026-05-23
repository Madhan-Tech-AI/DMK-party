
import { motion } from 'motion/react';
import { Calendar, ChevronRight, Share2, Search } from 'lucide-react';

const news = [
  {
    date: 'Aug 8, 2025',
    cat: 'Policy',
    title: 'TN State Education Policy 2025 Released by CM Stalin',
    excerpt: 'Presented a comprehensive 520-page education policy reaffirming the two-language formula.'
  },
  {
    date: 'May 17, 2025',
    cat: 'Literature',
    title: '"NEP 2020 — Madhayaanai" Book Released',
    excerpt: 'Detailed critique of National Education Policy launched at Anna Centenary Library.'
  },
  {
    date: 'Nov 27, 2024',
    cat: 'Audit',
    title: 'OrumaiKan Report Submitted to Chief Minister',
    excerpt: 'Landmark school assessment report covering all 234 assembly constituencies.'
  },
  {
    date: 'Oct 15, 2024',
    cat: 'Constituency',
    title: '₹450 Crore Development Milestone in Thiruverumbur',
    excerpt: 'Completed major infrastructure projects including SIPCOT expansion and model schools.'
  }
];

export default function News() {
  return (
    <div className="pb-24">
      <section className="bg-brand-cream border-b border-gray-100 py-32">
        <div className="max-w-7xl mx-auto px-4">
           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col md:flex-row justify-between items-end gap-8">
              <div className="max-w-2xl">
                 <h2 className="text-dmk-red font-display font-bold uppercase tracking-widest text-sm mb-4">Official Updates</h2>
                 <h1 className="text-5xl md:text-7xl font-display font-black text-dmk-black leading-tight italic">News & <br /><span className="text-dmk-red not-italic">Press Releases</span></h1>
              </div>
              <div className="w-full md:w-96 flex bg-white border border-gray-200 rounded-full p-2">
                 <input type="text" className="bg-transparent flex-grow px-6 outline-none font-bold text-sm" placeholder="Search news..." />
                 <button className="bg-dmk-red text-white p-4 rounded-full shadow-lg shadow-dmk-red/20"><Search size={20} /></button>
              </div>
           </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="space-y-12">
              {news.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex flex-col md:flex-row gap-8 items-start md:items-center p-8 md:p-12 bg-brand-cream rounded-[40px] border border-gray-50 card-hover"
                >
                   <div className="w-24 shrink-0 text-center flex flex-col items-center">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-dmk-red shadow-lg mb-4 group-hover:scale-110 transition-transform">
                         <Calendar size={24} />
                      </div>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.date}</span>
                   </div>

                   <div className="flex-grow">
                      <div className="flex gap-3 mb-4">
                         <span className="px-3 py-1 bg-white rounded-full text-[10px] font-bold uppercase tracking-widest text-dmk-red border border-gray-100">{item.cat}</span>
                      </div>
                      <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-dmk-red transition-all cursor-pointer">{item.title}</h3>
                      <p className="text-gray-500 leading-relaxed max-w-2xl">{item.excerpt}</p>
                   </div>

                   <div className="flex gap-4">
                      <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-dmk-red hover:shadow-lg transition-all"><Share2 size={20} /></button>
                      <button className="w-12 h-12 bg-dmk-black text-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-dmk-red transition-colors"><ChevronRight size={24} /></button>
                   </div>
                </motion.div>
              ))}
           </div>
           
           <div className="mt-20 text-center">
              <button className="px-10 py-5 bg-dmk-black text-white rounded-full font-bold hover:bg-dmk-red transition-all shadow-xl">Load Older News</button>
           </div>
        </div>
      </section>
    </div>
  );
}
