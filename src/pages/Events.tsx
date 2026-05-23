
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ArrowUpRight, Users, GraduationCap, Building } from 'lucide-react';

const events = [
  {
    title: 'Constituency Development Review',
    date: 'Upcoming',
    time: '10:00 AM',
    venue: 'Town Hall, Thiruverumbur',
    desc: 'Public review of constituency development works completed and in progress.',
    icon: <Building />
  },
  {
    title: 'Naan Mudhalvan Job Fair',
    date: 'Dec 15, 2025',
    time: '9:00 AM – 5:00 PM',
    venue: 'SIPCOT Area, Thiruverumbur',
    desc: 'Over 50 companies participating. Bring your resumes!',
    icon: <Users />
  },
  {
    title: 'Model School Inauguration',
    date: 'Jan 10, 2026',
    time: '8:00 AM',
    venue: 'Tuuvakudi High School',
    desc: 'Ministerial visit to review Breakfast Scheme & infrastructure.',
    icon: <GraduationCap />
  },
];

export default function Events() {
  return (
    <div className="pb-24">
      <section className="bg-dmk-black py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
           <div>
              <h1 className="text-5xl font-display font-black mb-4">Events & <span className="text-dmk-red italic">Programmes</span></h1>
              <p className="text-lg text-gray-400">Stay updated on our constituency presence and welfare programs.</p>
           </div>
           <div className="p-8 bg-white/5 rounded-[40px] border border-white/10 backdrop-blur-md">
              <p className="text-dmk-gold font-bold mb-1">நிஜ நிகழ்வுகள்</p>
              <p className="text-3xl font-display font-black uppercase text-white">நிகழ்வுகள்</p>
           </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((ev, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-brand-cream border border-gray-100 rounded-[40px] overflow-hidden card-hover"
                >
                   <div className="p-8 pb-4">
                      <div className="flex justify-between items-start mb-10">
                         <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-dmk-red shadow-lg group-hover:bg-dmk-red group-hover:text-white transition-all">
                            {ev.icon}
                         </div>
                         <span className={`px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest ${ev.date === 'Upcoming' ? 'bg-dmk-red text-white animate-pulse' : 'bg-gray-100 text-gray-400 font-bold'}`}>
                            {ev.date}
                         </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{ev.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-8">{ev.desc}</p>
                   </div>
                   
                   <div className="p-8 pt-0 space-y-4">
                      <div className="flex items-center gap-3 text-sm text-dmk-black font-bold">
                         <Clock size={18} className="text-dmk-red" />
                         {ev.time}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-dmk-black font-bold">
                         <MapPin size={18} className="text-dmk-red" />
                         {ev.venue}
                      </div>
                   </div>

                   <div className="p-8 pt-0">
                      <button className="w-full py-4 bg-white rounded-2xl flex items-center justify-center gap-2 font-bold text-dmk-black border border-gray-100 group-hover:border-dmk-red transition-all">
                         Register Now <ArrowUpRight size={18} />
                      </button>
                   </div>
                </motion.div>
              ))}
           </div>

           <div className="mt-24 p-12 bg-dmk-black rounded-[50px] text-white flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                 <h2 className="text-3xl font-display font-bold mb-2">Want to Host an Event?</h2>
                 <p className="text-gray-400">Request the Minister presence at your ward or community initiative.</p>
              </div>
              <button className="bg-dmk-red text-white px-10 py-5 rounded-full font-bold shadow-2xl shadow-dmk-red/30 card-hover">Submit Request</button>
           </div>
        </div>
      </section>
    </div>
  );
}
