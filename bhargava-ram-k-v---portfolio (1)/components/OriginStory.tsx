import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

export const OriginStory: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
       {/* Background Pattern - Blueprint/Grid style */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
       
       {/* Decorative Comic Elements */}
       <div className="absolute top-20 right-0 w-72 h-72 bg-marvel-yellow/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
       <div className="absolute bottom-20 -left-10 w-80 h-80 bg-marvel-blue/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="bg-marvel-blue text-white px-4 py-1 transform -rotate-2 border-2 border-black mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="font-comic tracking-widest text-lg">SECRET FILES: VOL 1</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-comic text-marvel-dark mb-4 text-center drop-shadow-sm">
            THE ORIGIN STORY
          </h2>
          {/* Half-tone separator */}
          <div className="w-full max-w-md h-4 bg-[radial-gradient(circle,#0064FF_2px,transparent_2px)] bg-[size:8px_8px]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch mb-12">
          
          {/* Panel 1: The Beginning */}
          <div className="comic-panel bg-white p-6 relative transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="absolute -top-5 -left-5 bg-marvel-yellow border-2 border-black px-4 py-2 font-comic text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10">
              PART 1
            </div>
            
            {/* Image Frame */}
            <div className="h-64 mb-6 overflow-hidden border-4 border-black relative group">
              <div className="absolute inset-0 bg-marvel-blue/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop" alt="Coding Labs" className="w-full h-full object-cover filter contrast-125" />
              {/* Comic caption box in image */}
              <div className="absolute bottom-2 right-2 bg-white border-2 border-black px-2 py-1 text-xs font-bold uppercase tracking-wider">
                RV INSTITUTE LABS
              </div>
            </div>

            <h3 className="text-3xl font-comic mb-3 text-marvel-dark">THE TECH OBSESSION</h3>
            <p className="font-body text-lg text-gray-800 leading-relaxed">
              Long before professional contracts, I was deep in the college labs, obsessing over <span className="font-bold text-marvel-blue">AI and automation</span>. While others studied for grades, I was a total nerd for technology, constantly striving to engineer efficient solutions. My goal was simple but ambitious: write code that makes human life just a little bit easier.
            </p>
          </div>

          {/* Panel 2: The Evolution */}
          <div className="comic-panel bg-marvel-dark text-white p-6 relative mt-12 md:mt-0 transform -rotate-1 hover:rotate-0 transition-transform duration-300 border-white/20">
             <div className="absolute -top-5 -right-5 bg-marvel-blue text-white border-2 border-white px-4 py-2 font-comic text-xl shadow-[4px_4px_0px_0px_#fff] z-10">
              PART 2
            </div>
            
            <div className="h-64 mb-6 overflow-hidden border-4 border-white relative group">
               <div className="absolute inset-0 bg-jarvis-blue/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" alt="Cloud Architecture" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-500" />
            </div>

            <h3 className="text-3xl font-comic mb-3 text-marvel-yellow">PLANET-SCALE ARCHITECTURE</h3>
            <p className="font-body text-lg text-gray-300 leading-relaxed">
              Recruited by <span className="font-bold text-jarvis-blue">ABB</span>, I evolved to tackle distributed systems. I harnessed the power of <span className="font-bold text-white">.NET Core</span> and <span className="font-bold text-white">MongoDB</span> to build planet-scale APIs handling 10,000+ requests per second. Reliability became my creed, and scalability my weapon.
            </p>
          </div>

        </div>

        {/* Education Section */}
        <div className="relative max-w-4xl mx-auto mt-16">
          <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_#0064FF] relative overflow-hidden group">
            
            {/* Folder Tab */}
            <div className="absolute -top-1 left-0 bg-marvel-blue text-white font-comic text-sm px-6 py-1 tracking-widest border-r-4 border-b-4 border-black">
              CLASSIFIED: ACADEMY RECORDS
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
               {/* Icon / Seal */}
               <div className="w-24 h-24 bg-marvel-yellow rounded-full flex items-center justify-center border-4 border-black shadow-md shrink-0">
                  <GraduationCap size={48} className="text-black" />
               </div>

               {/* Text Content */}
               <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-body uppercase tracking-widest text-gray-500 mb-1">Bachelor of Engineering</h3>
                  <h2 className="text-4xl font-comic text-marvel-dark mb-2">INFORMATION SCIENCE</h2>
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-2">
                    <p className="text-xl font-bold text-marvel-blue">RV INSTITUTE OF TECHNOLOGY AND MANAGEMENT</p>
                    <span className="hidden md:inline text-gray-400">|</span>
                    <p className="text-gray-600 font-medium flex items-center gap-1">
                      <Award size={16} /> Graduated with Honors
                    </p>
                  </div>
               </div>

               {/* Decorative Barcode or Stamp */}
               <div className="hidden md:block opacity-20 transform rotate-12">
                  <div className="font-mono text-[10px] tracking-tighter leading-3">
                    █║▌│█│║▌║││█║▌│║▌║<br/>
                    APPROVED FOR DEPLOYMENT<br/>
                    ID: EDU-2023-RV
                  </div>
               </div>
            </div>

            {/* Background watermarks */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gray-100 rounded-full mix-blend-multiply opacity-50 z-0"></div>
          </div>
        </div>

        {/* Narrative Box */}
        <div className="mt-16 max-w-3xl mx-auto bg-transparent p-8 relative">
          <p className="font-comic text-2xl text-center leading-relaxed text-gray-900">
            "WITH GREAT DATA COMES GREAT LATENCY REQUIREMENTS."
          </p>
          <p className="text-center text-gray-500 font-body uppercase tracking-widest mt-4 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-gray-400"></span> 
            A Distributed Systems Proverb
            <span className="w-8 h-px bg-gray-400"></span>
          </p>
        </div>
      </div>
    </section>
  );
};