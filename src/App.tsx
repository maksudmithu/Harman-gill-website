/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Services from './components/Services';
import About from './components/About';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import AnimatedBackground from './components/AnimatedBackground';

export default function App() {
  return (
    <div className="font-sans antialiased text-slate-900 selection:bg-blue-200 selection:text-blue-900 min-h-screen relative flex flex-col">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 flex-1">
        <Hero />
        <Problem />
        <Services />
        <About />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
