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

function App() {
  return (
    <div className="min-h-screen bg-white text-brand-navy">
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
