export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/60 backdrop-blur-md border-t border-slate-200 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <a href="#home" className="inline-block text-2xl font-display font-bold text-slate-900 tracking-tight mb-4">
          Harmann Gill
        </a>
        <p className="text-xl font-display font-bold text-slate-600 mb-8 max-w-sm mx-auto">
          "Plan smarter. Live better."
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          {[
            { name: 'Facebook', url: 'https://www.facebook.com' },
            { name: 'Instagram', url: 'https://www.instagram.com/harmann_gill__/' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/harmanngill/' },
          ].map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-600 font-bold transition-colors"
            >
              {social.name}
            </a>
          ))}
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-400">
          <p>&copy; {currentYear} Harmann Gill Financial. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
