import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, TrendingUp, ShieldCheck, DollarSign } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -50]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-transparent">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-blue-700 border border-blue-200/50 text-xs font-bold mb-6 w-fit uppercase tracking-widest mx-auto lg:mx-0">
                Personal Brand &bull; Financial Expert
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-[64px] font-display font-extrabold hero-text text-slate-900 mb-6 max-w-4xl mx-auto lg:mx-0 leading-tight"
            >
              Empowering Families to Achieve <span className="text-blue-600">Financial Freedom.</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="mt-6 text-xl text-slate-600 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed font-light"
            >
              Expert guidance in <span className="font-semibold text-slate-800">Investments</span>, <span className="font-semibold text-slate-800">Protection</span>, and <span className="font-semibold text-slate-800">Retirement Planning</span> tailored for your future.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4"
            >
              <a
                href="#booking"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-slate-900 hover:scale-105 shadow-lg shadow-slate-900/20 transition-all duration-300 group"
              >
                Book Complimentary Session
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image & Interactive Elements */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50 bg-slate-100 z-10 max-h-[600px] lg:ml-auto lg:mr-8"
            >
              <div className="absolute inset-0 animate-pulse bg-slate-200"></div>
              <img 
                src="/profile.jpg" 
                alt="Harmann Gill - Financial Professional" 
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
              
              {/* Primary Badge within Image */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute bottom-6 left-6 right-6 glass-card rounded-2xl p-4 flex items-center gap-4 border border-white/20 shadow-xl"
              >
                <div className="w-12 h-12 rounded-full bg-blue-600 flex flex-shrink-0 items-center justify-center text-white font-bold text-xl shadow-inner">
                  HG
                </div>
                <div>
                  <p className="text-base font-bold text-slate-900">Harmann Gill</p>
                  <p className="text-sm font-medium text-slate-600">Licensed Professional</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Visual Element 1: Growth */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute top-12 -left-6 lg:-left-12 glass-card rounded-2xl p-4 shadow-xl border border-white/40 z-20 hidden sm:flex items-center gap-3 backdrop-blur-xl bg-white/80"
              style={{ y: y1 }}
            >
              <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Portfolio</p>
                <p className="text-sm font-bold text-slate-900">+12% Growth</p>
              </div>
            </motion.div>

            {/* Floating Visual Element 2: Protection */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute bottom-32 -right-6 lg:-right-8 glass-card rounded-2xl p-4 shadow-xl border border-white/40 z-20 hidden sm:flex items-center gap-3 backdrop-blur-xl bg-white/80"
              style={{ y: y2 }}
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Family</p>
                <p className="text-sm font-bold text-slate-900">Fully Protected</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
