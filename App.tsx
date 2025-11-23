import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { OriginStory } from './components/OriginStory';
import { Superpowers } from './components/Superpowers';
import { MissionLog } from './components/MissionLog';
import { FreelanceMissions } from './components/FreelanceMissions';
import { JarvisChat } from './components/JarvisChat';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = ['Origin', 'Missions', 'Freelance', 'Powers'];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-marvel-dark text-white z-50 border-b-4 border-marvel-blue h-16 flex items-center justify-between px-6 shadow-lg">
        {/* Updated Logo to Blue Theme */}
        <div className="text-2xl font-comic tracking-wider bg-marvel-blue text-white px-3 py-1 transform -skew-x-12 border-2 border-white shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)]">
          <span className="block transform skew-x-12">BHARGAVA.DEV</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-bold uppercase tracking-widest text-sm">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="hover:text-marvel-blue transition-colors duration-200"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-marvel-dark z-40 flex flex-col items-center justify-center space-y-8 text-2xl font-comic tracking-widest text-white">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="hover:text-marvel-blue"
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {/* Main Content */}
      <main className="pt-16">
        <Hero />
        
        <div id="origin">
          <OriginStory />
        </div>
        
        <div id="missions">
          <MissionLog />
        </div>

        <div id="freelance">
          <FreelanceMissions />
        </div>

        <div id="powers">
          <Superpowers />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-marvel-dark text-white py-12 border-t-8 border-marvel-blue">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-comic mb-4 text-white">ASSEMBLE YOUR TEAM</h2>
          <p className="mb-8 max-w-md mx-auto text-gray-400">
            Need a distributed systems architect or a freelance developer? Contact me for high-scale opportunities.
          </p>
          <div className="inline-block bg-marvel-blue text-white font-comic text-xl px-8 py-3 border-4 border-black shadow-comic hover:translate-y-1 hover:shadow-none transition-all cursor-pointer">
            <a href="mailto:kattavenkatabhargavaram@gmail.com">SEND SIGNAL</a>
          </div>
          <p className="mt-8 text-xs text-gray-500 uppercase tracking-widest">
            © {new Date().getFullYear()} Bhargava Ram K V.
          </p>
        </div>
      </footer>

      {/* J.A.R.V.I.S. Floating Button */}
      <JarvisChat />
    </div>
  );
};

export default App;
