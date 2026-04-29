import { Mail, Phone, Send, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
)

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Netlify form submission with fetch
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        setIsSuccess(true);
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        alert('There was a problem submitting your form. Please try again.');
        setIsSubmitting(false);
      });
  };

  const closePopup = () => {
    setIsSuccess(false);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-600 font-light">
            Have questions about planning your future? Send us a message or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl shadow-slate-200/50 flex flex-col border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <h3 className="text-2xl font-bold text-slate-900 mb-8 relative z-10">Send a Message</h3>
            
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true"
              className="space-y-6 flex-1 flex flex-col relative z-10" 
              onSubmit={handleSubmit}
            >
              {/* Hidden input for Netlify forms */}
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5 focus-within:text-blue-600 transition-colors">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-400 text-slate-900 outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5 focus-within:text-blue-600 transition-colors">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-400 text-slate-900 outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5 focus-within:text-blue-600 transition-colors">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none placeholder:text-slate-400 text-slate-900 outline-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
              </div>
              <div className="pt-4 mt-auto">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-slate-900 text-white rounded-2xl font-semibold hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" />}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid gap-6">
            <motion.a
              href="tel:+12505036992"
              whileHover={{ y: -5 }}
              className="flex items-center p-8 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group border border-slate-100"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Call Now</p>
                <p className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">250-503-6992</p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:harmankaursrealty@gmail.com"
              whileHover={{ y: -5 }}
              className="flex items-center p-8 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group border border-slate-100"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Mail className="w-7 h-7" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Email Us</p>
                <p className="text-lg font-bold text-slate-900 break-all group-hover:text-blue-600 transition-colors">harmankaursrealty@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="https://wa.me/12505036992"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="flex items-center p-8 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group border border-slate-100"
            >
              <div className="w-16 h-16 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                <WhatsAppIcon className="w-7 h-7" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Chat on WhatsApp</p>
                <p className="text-xl font-bold text-slate-900 group-hover:text-green-600 transition-colors">Instant Response</p>
              </div>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {isSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePopup}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 overflow-hidden"
            >
              {/* Header with decorative background */}
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50 to-white" />
              
              {/* Close button */}
              <button 
                onClick={closePopup}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10 flex flex-col items-center text-center mt-4">
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                
                <h4 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-4">
                  Thank You!
                </h4>
                
                <p className="text-slate-600 leading-relaxed mb-8">
                  Thank you for reaching out, <span className="font-semibold text-slate-900">{name}</span>! Your financial goals are important to us. Harman Gill will personally review your details and get back to you within 24 hours. Let's build your future together.
                </p>

                <button
                  onClick={closePopup}
                  className="w-full py-4 bg-slate-900 text-white rounded-2xl font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-slate-900/20 hover:shadow-blue-500/30"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
