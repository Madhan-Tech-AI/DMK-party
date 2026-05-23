
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Users, Cpu, ChevronRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Students Trained', val: '48 Lakh+', sub: 'Naan Mudhalvan' },
  { label: 'Development Projects', val: '₹450 Cr', sub: 'Thiruverumbur' },
  { label: 'Dropout Rate', val: '5%', sub: 'Pre-2021: 16%' },
  { label: 'Laptops Distributed', val: '20 Lakh+', sub: 'Statewide' },
];

const highlights = [
  {
    title: 'Illam Thedi Kalvi',
    description: 'Education at Every Doorstep. Learning recovery program reaching 30 lakh children.',
    icon: <Users className="text-dmk-red" />,
    link: '/initiatives'
  },
  {
    title: 'Ennum Ezhuthum',
    description: 'Foundation for Every Child. Guaranteeing core literacy and numeracy by Class 3.',
    icon: <BookOpen className="text-dmk-red" />,
    link: '/initiatives'
  },
  {
    title: 'AI in Schools',
    description: "Tamil Nadu's Future Starts Now. India's first state to integrate AI in curriculum.",
    icon: <Cpu className="text-dmk-red" />,
    link: '/initiatives'
  }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="flex flex-col lg:flex-row min-h-[70vh] overflow-hidden mt-[-1px]">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-gradient-to-br from-white to-brand-cream relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-dmk-gold/10 text-dmk-red px-3 py-1 rounded-full text-xs font-bold uppercase mb-4 tracking-widest border border-dmk-gold/20">
              Minister for School Education
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.9] text-dmk-black mb-4">
              அன்பில் மகேஷ் <br />
              <span className="text-dmk-red">பொய்யாமொழி</span>
            </h1>
            <p className="text-2xl font-light text-dmk-black/80 mb-8 font-display">Anbil Mahesh Poiyamoli</p>
            <p className="max-w-md text-dmk-black/60 leading-relaxed mb-8">
              Serving the People. Transforming Education. Building Tomorrow. A third-generation DMK leader dedicated to modernizing Tamil Nadu's educational landscape.
            </p>
            <div className="flex gap-4">
              <Link to="/vision" className="bg-dmk-black text-white px-8 py-4 rounded-md font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-dmk-red transition-all">
                My Vision
              </Link>
              <Link to="/about" className="border-2 border-dmk-red text-dmk-red px-8 py-4 rounded-md font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-dmk-red hover:text-white transition-all">
                Read My Story
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Portrait Area */}
        <div className="w-full lg:w-1/2 relative bg-dmk-black overflow-hidden min-h-[400px]">
          <div className="skew-bg" />
          <div className="absolute inset-0 flex items-end justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-[80%] h-[90%] bg-zinc-900 rounded-t-3xl border-x-4 border-t-4 border-dmk-gold/30 flex flex-col items-center justify-center p-8 relative overflow-hidden"
            >
               <img 
                src="https://images.unsplash.com/photo-1544391682-19d042212db3?auto=format&fit=crop&q=80&w=800" 
                alt="Portrait" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" 
              />
               <div className="relative z-10 text-center">
                  <p className="text-white font-bold text-2xl font-display mb-1">Official Portrait</p>
                  <p className="text-dmk-gold text-xs italic uppercase tracking-widest font-black">Thiruverumbur MLA</p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENTO STATS BAND */}
      <section className="px-4 md:px-8 py-6 bg-dmk-black flex flex-col md:flex-row gap-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex-1 bento-card-accent"
        >
          <span className="label-caps opacity-70">Naan Mudhalvan</span>
          <div className="text-white font-black text-4xl my-2 font-display">48 Lakh+</div>
          <span className="text-white/80 text-[11px] leading-tight block">Students Trained & Empowered</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="flex-1 bento-card-dark bg-white/5 border-dmk-red"
        >
          <span className="text-dmk-gold label-caps">Development</span>
          <div className="text-white font-black text-4xl my-2 font-display">₹450 Cr</div>
          <span className="text-white/60 text-[11px] leading-tight block">Constituency Projects Completed</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex-1 bento-card-dark bg-white/5 border-dmk-red"
        >
          <span className="text-dmk-gold label-caps">Welfare</span>
          <div className="text-white font-black text-4xl my-2 font-display">18,000</div>
          <span className="text-white/60 text-[11px] leading-tight block">House Site Pattas Distributed</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex-1 bento-card-dark bg-white/5 border-dmk-red"
        >
          <span className="text-dmk-gold label-caps">Dropout Rate</span>
          <div className="text-white font-black text-4xl my-2 font-display">5%</div>
          <span className="text-white/60 text-[11px] leading-tight block">Reduced from 16% in 2021</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex-[1.5] bg-white rounded-2xl p-6 border border-dmk-red/20 flex flex-col justify-center"
        >
          <p className="text-dmk-black font-serif italic text-sm mb-2 leading-relaxed">
            "ஒழுக்கம் விழுப்பம் தரலான் ஒழுக்கம் உயிரினும் ஓம்பப் படும்."
          </p>
          <div className="text-[10px] text-dmk-red font-bold uppercase tracking-widest">
            — Thiruvalluvar, Kural 131
          </div>
        </motion.div>
      </section>

      {/* MINI BANNER */}
      <div className="bg-dmk-gold text-dmk-black py-4 px-8 text-[10px] font-bold uppercase tracking-[0.2em] hidden lg:flex items-center justify-between">
        <span>Building Tomorrow's Tamil Nadu</span>
        <div className="flex gap-8">
          <span>Tiruchirappalli South District Secretary</span>
          <span className="text-dmk-red">●</span>
          <span>MLA Thiruverumbur</span>
          <span className="text-dmk-red">●</span>
          <span>DMK Family</span>
        </div>
      </div>

      {/* About Section Teaser */}
      <section className="py-24 bg-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-dmk-gold/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-dmk-red/10 rounded-full blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1544391682-19d042212db3?auto=format&fit=crop&q=80&w=800" 
                  alt="Commitment to service" 
                  className="w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-1/2 -right-12 translate-y-[-50%] bg-dmk-red text-white p-8 rounded-2xl shadow-xl hidden lg:block max-w-[240px]">
                <p className="text-xl font-display font-bold mb-2">3rd Generation</p>
                <p className="text-sm opacity-80 leading-relaxed">Carrying forward a legacy of Dravidian service since 1967.</p>
              </div>
            </motion.div>
            
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-dmk-red font-display font-black text-4xl leading-tight mb-6">
                  Legacy of Service. <br />
                  <span className="text-dmk-black">Driven by Reform.</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Anbil Mahesh Poiyamoli is a third-generation DMK leader, a visionary Minister for School Education, and the elected MLA of Thiruverumbur — a constituency he has served with unmatched dedication since 2016. Born into a family that helped found the Dravida Munnetra Kazhagam, he carries the legacy of his grandfather Anbil P. Dharmalingam and his father Anbil Poyyamozhi with pride.
                </p>
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 text-dmk-red font-bold hover:gap-4 transition-all">
                Read My Full Story <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Feed */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-display font-black">Featured Initiatives</h2>
            <Link to="/initiatives" className="text-dmk-red hover:underline font-bold mb-2">View All Schemes</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bento-card"
              >
                <div className="w-16 h-16 bg-brand-cream rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-dmk-red group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display">{item.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">{item.description}</p>
                <Link to={item.link} className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-dmk-red">
                  Learn More <ChevronRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-dmk-red relative overflow-hidden text-white text-center">
         <Quote className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-96 h-96 opacity-10" />
         <div className="max-w-4xl mx-auto px-4 relative z-10">
            <p className="text-3xl md:text-5xl font-display font-bold leading-tight mb-8">
              "Every child who walks into a government school must walk out with the knowledge and confidence to lead."
            </p>
            <div className="h-[2px] w-20 bg-dmk-gold mx-auto mb-6" />
            <p className="text-xl uppercase tracking-widest font-display font-bold text-dmk-gold">Mission 2026</p>
         </div>
      </section>

      {/* Kural Section */}
      <section className="py-20 bg-dmk-black text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block p-2 border-2 border-dmk-gold mb-8">
             <p className="text-dmk-gold font-display font-bold tracking-widest text-xs">மறக்க முடியாத வரிகள்</p>
          </div>
          <p className="text-2xl md:text-3xl font-display mb-6 leading-relaxed text-dmk-gold italic">
            ஒழுக்கம் விழுப்பம் தரலான் ஒழுக்கம் <br />
            உயிரினும் ஓம்பப் படும்.
          </p>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            "Virtuous conduct brings honour; it is to be guarded more than life itself."
          </p>
          <p className="text-sm font-bold tracking-tighter uppercase text-white/50">— Thirukural 131 —</p>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-dmk-black rounded-[40px] p-8 md:p-16 relative overflow-hidden text-white flex flex-col md:flex-row items-center justify-between gap-12">
               <div className="absolute top-0 right-0 w-64 h-64 bg-dmk-red/20 blur-3xl -mr-32 -mt-32" />
               <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-display font-black mb-6">Be Part of the <span className="text-dmk-red italic">Change.</span></h2>
                  <p className="text-lg text-gray-400 max-w-md leading-relaxed">
                    Thousands of DMK volunteers across Thiruverumbur and Tamil Nadu are working every day to build a better future. Join us.
                  </p>
               </div>
               <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <Link to="/join" className="bg-dmk-red text-white px-10 py-5 rounded-full font-bold text-center card-hover">
                    Volunteer Now
                  </Link>
                  <a href="#" className="bg-white text-dmk-black px-10 py-5 rounded-full font-bold text-center hover:bg-dmk-gold hover:text-white transition-colors">
                    Join WhatsApp
                  </a>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
