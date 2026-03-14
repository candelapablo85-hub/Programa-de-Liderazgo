import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Diagnostic from './components/Diagnostic';
import LeadershipPillars from './components/Problem';
import Services from './components/Services';
import Benefits from './components/Benefits';
import About from './components/About';
import Methodology from './components/Methodology';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />

      <main>
        <div id="inicio">
          <Hero />
        </div>
        <Diagnostic />
        <LeadershipPillars />
        <Services />
        <Benefits />
        <About />
        <Methodology />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
