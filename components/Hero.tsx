import React from 'react';
import { ArrowDown, FileText, Send } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-white pt-20 md:pt-0">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
      <div className="absolute right-0 top-0 w-1/3 h-full bg-marvel-blue/10 skew-x-12 transform origin-top-right z-0 hidden md:block"></div>
      
      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Professional Intro */}
        <div className="space-y-6 text-center md:text-left order-2 md:order-1">
          <div className="inline-block bg-marvel-blue text-white px-3 py-1 font-bold tracking-widest text-sm mb-2 transform -skew-x-12 uppercase border border-black shadow-[2px_2px_0px_0px_#000]">
            System Online: Bhargava.exe
          </div>
          
          <h1 className="text-5xl md:text-7xl font-comic leading-none text-marvel-dark">
            HELLO, I'M <br />
            <span className="text-marvel-blue drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">
              BHARGAVA RAM
            </span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-comic text-gray-800 tracking-wide mt-2">
            SOFTWARE ENGINEER & <span className="text-marvel-blue">FREELANCER</span>
          </h2>
          
          <p className="text-lg md:text-xl font-body text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed border-l-4 border-marvel-blue pl-4 text-left">
            I build scalable, production-grade backend systems using <strong>C# .NET Core</strong> and <strong>Azure</strong>. Available for complex distributed systems work and freelance projects.
          </p>

          <div className="flex flex-col md:flex-row gap-4 pt-4 justify-center md:justify-start">
            <button 
              onClick={() => document.getElementById('missions')?.scrollIntoView({ behavior: 'smooth'})}
              className="px-6 py-3 bg-marvel-blue text-white font-comic text-xl tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2"
            >
              <FileText size={20} />
              View Projects
            </button>
            
            <a 
              href="mailto:kattavenkatabhargavaram@gmail.com"
              className="px-6 py-3 bg-white text-black font-comic text-xl tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Contact Me
            </a>
          </div>

          {/* Tech Stack Badges */}
          <div className="pt-6 flex flex-wrap gap-3 justify-center md:justify-start opacity-80">
            {['.NET Core', 'MongoDB', 'Microservices', 'C#', 'Docker'].map(tech => (
              <span key={tech} className="bg-gray-200 px-2 py-1 text-xs font-bold uppercase tracking-wide text-gray-600 border border-gray-300 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Profile Image / Hero Card */}
        <div className="relative order-1 md:order-2 flex justify-center">
           {/* Card Container */}
           <div className="relative w-72 h-96 md:w-80 md:h-[450px] bg-white border-4 border-black shadow-[12px_12px_0px_0px_#0064FF] transform rotate-3 hover:rotate-0 transition-transform duration-500 group">
             
             {/* Header of Card */}
             <div className="absolute top-0 left-0 right-0 bg-black p-2 z-20 flex justify-between items-center">
                <span className="text-marvel-yellow font-bold text-xs tracking-widest">ID: B-RAM-001</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
             </div>

             {/* Image Area */}
             <div className="absolute inset-0 mt-8 mx-2 mb-14 border-2 border-gray-200 bg-gray-100 overflow-hidden">
                <img 
                  src="https://ui-avatars.com/api/?name=Bhargava+Ram&background=0D8ABC&color=fff&size=512&font-size=0.3" 
                  alt="Bhargava Ram K V" 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Halftone overlay effect */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-10 pointer-events-none"></div>
             </div>

             {/* Footer Stats */}
             <div className="absolute bottom-0 left-0 right-0 h-14 bg-marvel-yellow border-t-4 border-black flex items-center justify-around px-2">
                <div className="text-center">
                  <div className="text-[10px] font-bold uppercase">EXP</div>
                  <div className="font-comic text-xl leading-none">2+ YRS</div>
                </div>
                <div className="w-px h-8 bg-black/20"></div>
                <div className="text-center">
                  <div className="text-[10px] font-bold uppercase">LOC</div>
                  <div className="font-comic text-xl leading-none">BLR, IN</div>
                </div>
                <div className="w-px h-8 bg-black/20"></div>
                <div className="text-center">
                  <div className="text-[10px] font-bold uppercase">STATUS</div>
                  <div className="font-comic text-xl leading-none text-marvel-blue">ONLINE</div>
                </div>
             </div>
             
             {/* Decorative Badge */}
             <div className="absolute -right-6 top-20 bg-marvel-blue text-white font-comic px-3 py-1 border-2 border-black transform rotate-90 origin-bottom-right shadow-md">
               LEVEL 8 ACCESS
             </div>

           </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-marvel-dark hidden md:block">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};
