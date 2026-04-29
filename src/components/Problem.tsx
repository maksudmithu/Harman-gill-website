import { motion } from 'motion/react';
import { AlertCircle, ShieldAlert, TrendingDown } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: <AlertCircle className="w-8 h-8 text-slate-700" />,
      title: "Unexpected Expenses",
      stat: "44%",
      description: "of individuals can't cover a $500 emergency without going into debt.",
      color: "border-slate-200 bg-slate-50",
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-slate-700" />,
      title: "Lack of Protection",
      stat: "Underinsured",
      description: "Families are left vulnerable to financial ruin from unexpected life events.",
      color: "border-slate-200 bg-slate-50",
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-slate-700" />,
      title: "No Retirement Plan",
      stat: "Unprepared",
      description: "Working hard today without a clear roadmap for financial independence tomorrow.",
      color: "border-slate-200 bg-slate-50",
    }
  ];

  return (
    <section className="py-24 relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            The Financial Planning Gap
          </h2>
          <p className="text-lg text-slate-600 font-light">
            Millions are working hard but falling behind. Without a plan, the default outcome is uncertainty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-3xl p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow border border-slate-200/60"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border ${item.color}`}>
                {item.icon}
              </div>
              <div className="mb-4">
                <span className="block text-3xl font-display font-black text-slate-900 mb-1">{item.stat}</span>
                <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
