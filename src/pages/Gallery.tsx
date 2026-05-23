
import { motion } from 'motion/react';
import { useState } from 'react';
import { Image as ImageIcon, Video, Filter } from 'lucide-react';

const images = [
  { id: 1, cat: 'Education', title: 'Ennum Ezhuthum Launch', url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600' },
  { id: 2, cat: 'Constituency', title: 'Jallikattu Arena Sooriyur', url: 'https://images.unsplash.com/photo-1596422846543-75c6fc18a594?auto=format&fit=crop&q=80&w=600' },
  { id: 3, cat: 'Welfare', title: 'Breakfast Scheme Review', url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600' },
  { id: 4, cat: 'Technology', title: 'AI Classroom in Trichy', url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600' },
  { id: 5, cat: 'Party', title: 'Youth Wing Conference', url: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=600' },
  { id: 6, cat: 'Education', title: 'OrumaiKan Report Submission', url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600' },
];

const categories = ['All', 'Education', 'Constituency', 'Welfare', 'Party', 'Technology'];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = activeTab === 'All' ? images : images.filter(img => img.cat === activeTab);

  return (
    <div className="pb-24">
      <section className="bg-dmk-black py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-5xl font-display font-black mb-4">Stories of Change</motion.h1>
           <p className="text-dmk-gold font-bold uppercase tracking-widest text-sm">Visual Journey through Service</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
           {/* Filters */}
           <div className="flex overflow-x-auto gap-4 mb-16 pb-4 no-scrollbar justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-8 py-3 rounded-full font-bold transition-all whitespace-nowrap ${
                    activeTab === cat ? 'bg-dmk-red text-white shadow-lg' : 'bg-brand-cream text-gray-500 hover:text-dmk-red'
                  }`}
                >
                  {cat}
                </button>
              ))}
           </div>

           {/* Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((img) => (
                <motion.div 
                  key={img.id} 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-[40px] overflow-hidden shadow-xl aspect-square cursor-pointer"
                >
                   <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                   <div className="absolute inset-0 bg-linear-to-t from-dmk-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                      <span className="text-dmk-gold text-[10px] font-black uppercase tracking-widest mb-1">{img.cat}</span>
                      <h3 className="text-white font-bold">{img.title}</h3>
                   </div>
                   <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <ImageIcon size={20} />
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
