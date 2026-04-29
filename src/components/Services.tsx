import { motion } from 'motion/react';
import { LineChart, Shield, Target, Compass } from 'lucide-react';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay: number;
}

function ServiceCard({ icon, title, description, delay }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group glass-card rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-slate-900/5 hover:-translate-y-1 transition-all duration-300 border border-slate-200/60"
    >
      <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 text-slate-800 group-hover:scale-110 group-hover:border-slate-300 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 font-light leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export default function Services() {
  const services = [
    {
      icon: <LineChart className="w-7 h-7" />,
      title: "Investment Strategies",
      description: "Tailored portfolio building focused on long-term growth and tax-efficiency to maximize your financial potential.",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Wealth Protection",
      description: "Comprehensive risk management including life, disability, and critical illness insurance to safeguard your family.",
    },
    {
      icon: <Target className="w-7 h-7" />,
      title: "Retirement Planning",
      description: "Clear roadmaps to ensure your money outlives you, with strategies to maximize income and minimize taxes.",
    },
    {
      icon: <Compass className="w-7 h-7" />,
      title: "Financial Guidance",
      description: "Ongoing mentorship and education to help you make informed decisions and stay on track with your life goals.",
    }
  ];

  return (
    <section id="services" className="py-24 relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:flex md:items-end justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Comprehensive Solutions for Your Financial Journey
            </h2>
            <p className="text-lg text-slate-600 font-light">
              We provide a holistic approach to wealth management, ensuring every aspect of your financial life works in harmony.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a href="#booking" className="inline-flex items-center text-slate-800 font-bold hover:text-slate-900 transition-colors">
              Discover How We Can Help <span className="ml-2">&rarr;</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
