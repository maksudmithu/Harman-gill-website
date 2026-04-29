import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-sm border border-slate-200/60">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative aspect-square max-w-sm mx-auto lg:mx-0 rounded-full overflow-hidden border-8 border-white shadow-xl relative z-20">
                <div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
                <img 
                  src="/profile.jpg" 
                  alt="Harmann Gill Profile" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="lg:col-span-7 text-center lg:text-left relative z-20">
              <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-6">About</h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-3xl md:text-4xl lg:text-4xl font-display font-medium text-slate-900 leading-tight mb-8">
                  "Harmann Gill is passionate about helping individuals and families take control of their financial future while mentoring the next generation of financial professionals."
                </h3>
              </motion.div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <div className="h-px bg-slate-300 flex-1 max-w-[50px] lg:max-w-[40px]" />
                <span className="font-display font-bold text-lg text-slate-800">Harmann Gill</span>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-slate-200/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none z-10" />
          
        </div>
      </div>
    </section>
  );
}
