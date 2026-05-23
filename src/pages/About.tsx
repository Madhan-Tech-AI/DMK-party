
import { motion } from 'motion/react';
import { Calendar, Award, GraduationCap, Users } from 'lucide-react';

const timeline = [
  { year: '2000', title: 'Joined DMK', desc: 'Started at the grassroots level, attending every booth and rally in Trichy.' },
  { year: '2014', title: 'Youth Wing Secretary', desc: 'Appointed State Secretary of the DMK Youth Wing.' },
  { year: '2016', title: 'First Electoral Victory', desc: 'Elected MLA of Thiruverumbur with 46.98% votes.' },
  { year: '2021', title: 'Ministerial Appointment', desc: 'Re-elected with 53.48% and sworn in as Minister for School Education.' },
  { year: '2024', title: 'Doctorate of Philosophy', desc: 'Completed PhD from National College, Tiruchirappalli.' },
  { year: '2025', title: 'Author & Visionary', desc: 'Published critique of NEP 2020 and led State Education Policy 2025.' },
];

const info = [
  { label: 'Date of Birth', value: '2nd December 1977' },
  { label: 'Place of Birth', value: 'Anbil, Tiruchirappalli' },
  { label: 'Education', value: 'MCA (2001), PhD (2024)' },
  { label: 'Party', value: 'DMK' },
  { label: 'Constituency', value: 'Thiruverumbur, Trichy' },
];

export default function About() {
  return (
    <div className="pb-24">
      {/* Banner */}
      <section className="bg-dmk-black py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1540910419892-f39aefe0530d?auto=format&fit=crop&q=80&w=1600" 
            alt="DMK Heritage" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-6xl font-display font-black mb-4"
          >
            About Anbil Mahesh <span className="text-dmk-red italic">Poiyamoli</span>
          </motion.h1>
          <p className="text-xl text-dmk-gold font-display font-bold">A Legacy of Service. A Life in Public Duty.</p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Sidebar with Image & Details */}
            <div className="lg:col-span-4 space-y-8">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-dmk-red sticky top-28">
                <img 
                  src="https://images.unsplash.com/photo-1544391682-19d042212db3?auto=format&fit=crop&q=80&w=600" 
                  alt="Anbil Mahesh Poiyamoli" 
                  className="w-full aspect-[3/4] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6 bg-dmk-black text-white">
                  <h3 className="text-lg font-bold mb-4 font-display text-dmk-gold">Quick Facts</h3>
                  <div className="space-y-3">
                    {info.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
                        <span className="text-gray-400">{item.label}</span>
                        <span className="font-bold text-right ml-4">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8">
               <div className="prose prose-lg prose-red max-w-none text-gray-600">
                  <h2 className="text-3xl font-display font-extrabold text-dmk-black mb-8 border-l-8 border-dmk-red pl-6">The Journey of a Reformer</h2>
                  <p className="mb-6 leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-dmk-red first-letter:mr-3 first-letter:float-left">
                    Anbil Mahesh Poiyamoli was born on 2nd December 1977 in Anbil village, Tiruchirappalli — the very village from which his family draws its name and its roots. From his earliest years, politics was not an ambition but an inheritance — shaped by the Dravidian philosophy that his grandfather and father had devoted their lives to.
                  </p>
                  <p className="mb-6 leading-relaxed">
                    His grandfather, Anbil P. Dharmalingam (1919–1993), was one of the founding members of the Dravida Munnetra Kazhagam. When the DMK first swept to power in 1967, Dharmalingam served as the Minister for Local Administration. His father, Anbil Poyyamozhi, carried the torch forward as a close confidant of Chief Minister M.K. Stalin and MLA for Thiruverumbur.
                  </p>
                  <p className="mb-6 leading-relaxed">
                    Before entering politics, Mahesh earned a Master of Computer Applications (MCA) and later a Doctorate (PhD) with research on Skill Development through Machine Learning — reflecting his commitment to combining traditional governance with modern technology.
                  </p>
                  <p className="mb-8 leading-relaxed italic border-l-4 border-dmk-gold pl-6 py-2 bg-dmk-gold/5">
                    "I took my first formal step into politics in 2000 as a party worker. For 14 years, I worked at the ground level — building relationships across every ward of Trichy. It wasn't about privilege; it was about purpose."
                  </p>
                  <p className="mb-12 leading-relaxed">
                    As Minister for School Education since 2021, he has personally visited schools across all 234 constituencies. His reforms have touched millions of lives, reduced dropout rates to below 5%, and positioned Tamil Nadu as a national leader in AI-integrated education.
                  </p>
               </div>

               {/* Vision Pills */}
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                  {[
                    { title: 'Social Justice', icon: <Users size={24} />, desc: 'Equality in access to education.' },
                    { title: 'Tamil Identity', icon: <Award size={24} />, desc: 'Protecting our language & heritage.' },
                    { title: 'Technology', icon: <GraduationCap size={24} />, desc: 'Preparing youth for a digital world.' },
                    { title: 'Commitment', icon: <Calendar size={24} />, desc: 'Available to the people 24/7.' }
                  ].map((pill, i) => (
                    <div key={i} className="flex gap-4 p-6 bg-brand-cream rounded-2xl border border-gray-100">
                      <div className="text-dmk-red shrink-0">{pill.icon}</div>
                      <div>
                        <h4 className="font-bold text-dmk-black">{pill.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">{pill.desc}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-black text-dmk-black mb-4">Political Journey</h2>
            <p className="text-gray-500 uppercase tracking-widest text-sm font-bold">25 Years of Grassroots Service</p>
          </div>

          <div className="relative">
            {/* Connector Line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 hidden md:block" />

            <div className="space-y-12 relative">
               {timeline.map((item, idx) => (
                 <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row gap-8 items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                 >
                   <div className="flex-1 md:text-right hidden md:block p-4">
                     {idx % 2 === 0 ? <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p> : <span className="text-6xl font-display font-black text-dmk-red/10">{item.year}</span>}
                   </div>
                   
                   <div className="z-10 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-white border-4 border-dmk-red flex items-center justify-center text-dmk-red font-bold text-lg shadow-lg">
                        {item.year.slice(2)}'
                      </div>
                   </div>

                   <div className="flex-1 p-6 bg-white rounded-3xl shadow-xl border border-gray-100">
                     <span className="text-dmk-red font-black block mb-1 font-display">{item.year}</span>
                     <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                     <p className="text-sm text-gray-500 md:hidden">{item.desc}</p>
                     <p className="text-gray-500 text-sm hidden md:block">{idx % 2 !== 0 ? item.desc : null}</p>
                     {idx % 2 === 0 && <span className="text-6xl font-display font-black text-dmk-red/10 absolute right-4 bottom-4 pointer-events-none md:hidden">{item.year}</span>}
                   </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
           <Quote size={48} className="mx-auto mb-8 text-dmk-gold opacity-50" />
           <p className="text-3xl font-display font-medium text-dmk-black italic mb-6">
            அன்பிலார் எல்லாம் தமக்குரியர் அன்புடையார் <br />
            என்பும் உரியர் பிறர்க்கு.
           </p>
           <p className="text-gray-500">
              "Those without love own everything for themselves alone; the loving give even their bones to others."
           </p>
           <p className="mt-4 font-bold tracking-widest text-xs">— Thirukural 72 —</p>
        </div>
      </section>
    </div>
  );
}

function Quote({ size, className }: { size: number, className: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9125 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12M15.017 21C12.8079 21 11.017 19.2091 11.017 17V15V7C11.017 4.79086 12.8079 3 15.017 3H20.017C22.2261 3 24.017 4.79086 24.017 7V15C24.017 18.3137 21.3307 21 18.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91251 16 5.017 16H8.017C8.56929 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56929 8 8.017 8H5.017C4.46472 8 4.017 8.44772 4.017 9V12M4.017 21C1.80786 21 0.017 19.2091 0.017 17V15V7C0.017 4.79086 1.80786 3 4.017 3H9.017C11.2261 3 13.017 4.79086 13.017 7V15C13.017 18.3137 10.3307 21 7.017 21H3.017Z" />
    </svg>
  );
}
