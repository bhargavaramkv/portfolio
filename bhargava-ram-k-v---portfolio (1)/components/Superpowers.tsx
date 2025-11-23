import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { Skill } from '../types';

const skillsData: Skill[] = [
  { subject: 'C# / .NET', A: 95, fullMark: 100 },
  { subject: 'Azure', A: 90, fullMark: 100 },
  { subject: 'MongoDB', A: 90, fullMark: 100 },
  { subject: 'System Design', A: 85, fullMark: 100 },
  { subject: 'DevOps', A: 80, fullMark: 100 },
  { subject: 'Python', A: 75, fullMark: 100 },
];

export const Superpowers: React.FC = () => {
  return (
    <section className="py-24 bg-marvel-blue text-white clip-slant relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Info */}
          <div className="md:w-1/2">
             <div className="inline-block bg-black text-white px-4 py-2 font-comic text-xl transform -skew-x-12 mb-6">
                CLASSIFIED S.H.I.E.L.D. FILE
             </div>
             <h2 className="text-5xl md:text-7xl font-comic mb-8 text-white drop-shadow-lg">
                SUPERPOWERS
             </h2>
             <p className="text-xl font-body mb-8 text-white/90">
                Subject demonstrates Omega-level proficiency in backend architecture and distributed database systems.
             </p>

             <ul className="space-y-4">
                {skillsData.map((skill) => (
                    <li key={skill.subject} className="flex items-center space-x-4">
                        <div className="w-full bg-black/30 h-6 rounded-full overflow-hidden border-2 border-black/50 relative">
                            <div 
                                className="h-full bg-marvel-yellow" 
                                style={{ width: `${skill.A}%` }}
                            ></div>
                        </div>
                        <span className="font-comic text-xl min-w-[120px]">{skill.subject}</span>
                    </li>
                ))}
             </ul>
          </div>

          {/* Chart */}
          <div className="md:w-1/2 h-[400px] w-full bg-white/10 rounded-3xl backdrop-blur-sm border-4 border-white/20 p-4 shadow-2xl">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
                <PolarGrid stroke="#ffffff" strokeOpacity={0.5} />
                <PolarAngleAxis dataKey="subject" tick={{ fill: 'white', fontFamily: 'Bangers', fontSize: 16 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke="#F0DE36"
                  strokeWidth={3}
                  fill="#F0DE36"
                  fillOpacity={0.6}
                />
                <Legend iconType="star" wrapperStyle={{ fontFamily: 'Roboto Condensed', color: 'white' }}/>
              </RadarChart>
            </ResponsiveContainer>
            <div className="text-center mt-2 font-comic text-white/50 text-sm">
                POWER GRID ANALYSIS
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};