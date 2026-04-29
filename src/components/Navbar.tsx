import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/60 backdrop-blur-md z-50 border-b border-slate-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold">HG</div>
            <a href="#home" className="text-xl font-display font-bold text-slate-900 tracking-tight">
              Harmann Gill
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#booking"
              className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-sm font-bold rounded-full text-white bg-slate-900 hover:bg-slate-800 shadow-sm transition-all duration-200 hover:scale-105"
            >
              Book Session
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 shadow-lg"
        >
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setIsOpen(false)}
              className="mt-4 block w-full text-center px-6 py-3 border border-transparent text-base font-bold rounded-full text-white bg-slate-900 hover:bg-slate-800 shadow-sm"
            >
              Book Session
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
