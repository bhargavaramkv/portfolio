import React from 'react';
import { Monitor, Smartphone, Zap } from 'lucide-react';

export const FreelanceMissions: React.FC = () => {
  const sideQuests = [
    {
      id: 1,
      title: "E-Commerce Analytics Dashboard",
      icon: <Monitor size={32} />,
      status: "COMPLETED",
      desc: "A React-based dashboard for tracking real-time sales data and inventory management for a local retail startup."
    },
    {
      id: 2,
      title: "Fitness Tracking Mobile App API",
      icon: <Smartphone size={32} />,
      status: "IN PROGRESS",
      desc: "Designing the backend architecture for a cross-platform fitness app using .NET Core and scalable microservices."
    },
    {
      id: 3,
      title: "SaaS MVP Development",
      icon: <Zap size={32} />,
      status: "CLASSIFIED",
      desc: "Full-stack development for an emerging SaaS product. Details restricted under NDA."
    }
  ];

  return (
    <section className="py-24 bg-marvel-dark text-white relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-12">
           <div className="bg-marvel-yellow text-black px-6 py-2 border-2 border-white transform skew-x-12 mb-6">
              <span className="font-comic tracking-widest text-xl transform -skew-x-12 block">SIDE QUESTS</span>
           </div>
           <h2 className="text-5xl font-comic text-white mb-2">FREELANCE OPERATIONS</h2>
           <p className="text-gray-400 font-body max-w-xl text-center">
             Independent contracts and specialized deployments outside of main directives.
           </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
           {sideQuests.map((quest) => (
             <div key={quest.id} className="bg-white/5 border border-white/20 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors group">
                <div className="flex justify-between items-start mb-4">
                   <div className="p-3 bg-marvel-blue rounded-lg text-white group-hover:scale-110 transition-transform shadow-[0px_0px_10px_#0064FF]">
                      {quest.icon}
                   </div>
                   <span className="text-[10px] font-bold border border-white/30 px-2 py-1 rounded text-white/70 uppercase tracking-widest">
                     {quest.status}
                   </span>
                </div>
                <h3 className="text-2xl font-comic text-marvel-yellow mb-3">{quest.title}</h3>
                <p className="text-gray-300 font-body text-sm leading-relaxed border-t border-white/10 pt-3">
                  {quest.desc}
                </p>
             </div>
           ))}
        </div>
        
        <div className="mt-12 text-center">
           <p className="text-white/50 text-sm font-mono animate-pulse">
             > INCOMING TRANSMISSION: NEW PROJECTS ACCEPTED
           </p>
        </div>
      </div>
    </section>
  );
};