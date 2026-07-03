import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PatronsMessage from './components/PatronsMessage';
import ValueProposition from './components/ValueProposition';
import Departments from './components/Departments';
import TeamRoster from './components/TeamRoster';
import Events from './components/Events';
import Sponsorship from './components/Sponsorship';
import MediaKit from './components/MediaKit';
import WhyPartner from './components/WhyPartner';
import Join from './components/Join';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ImpactMetrics from './components/ImpactMetrics';
import PremiumHero from './components/PremiumHero';
import IntroScreen from './components/IntroScreen';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const introTimer = window.setTimeout(() => {
      setIsExiting(true);
      window.setTimeout(() => setShowIntro(false), 700);
    }, 3800);

    return () => window.clearTimeout(introTimer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-brand-navy">
      <IntroScreen isVisible={showIntro} isExiting={isExiting} />
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <PatronsMessage />
        <About />
        <ValueProposition />
        <Departments />
        <TeamRoster />
        <Events />
        <Sponsorship />
        <MediaKit />
        <WhyPartner />
        <Join />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
