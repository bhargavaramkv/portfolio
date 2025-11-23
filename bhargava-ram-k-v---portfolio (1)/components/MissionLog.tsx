import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github } from 'lucide-react';

const projects: Project[] = [
  {
    id: '1',
    title: 'THE DISTRIBUTED BACKBONE',
    description: 'Designed 15+ production-grade APIs handling 10K+ req/sec. Integrated MongoDB and Azure Service Bus for planet-scale event pipelines.',
    technologies: ['.NET Core', 'Azure', 'MongoDB', 'Docker'],
    imageUrl: 'https://picsum.photos/400/300?random=10',
    issueNumber: 1
  },
  {
    id: '2',
    title: 'PROJECT: INTELLIGENT PARSER',
    description: 'A Python-based NLP system utilizing spaCy to parse resumes with 92% accuracy, featuring structured logging and error tracking.',
    technologies: ['Python', 'NLP', 'spaCy', 'Data Processing'],
    imageUrl: 'https://picsum.photos/400/300?random=11',
    repoUrl: '#',
    issueNumber: 42
  },
  {
    id: '3',
    title: 'VISION TRACKER X',
    description: 'Developed a high-performance C++ tracking system using OpenCV, achieving 95% detection accuracy at 30 FPS for real-time analysis.',
    technologies: ['C++', 'OpenCV', 'Computer Vision'],
    imageUrl: 'https://picsum.photos/400/300?random=12',
    issueNumber: 99
  }
];

export const MissionLog: React.FC = () => {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="bg-marvel-blue text-white px-4 py-1 text-lg font-bold uppercase tracking-wider mb-4 inline-block transform rotate-2">
            Archive X-99
          </span>
          <h2 className="text-6xl font-comic text-gray-900">MISSION LOG</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative bg-white border-4 border-black shadow-comic transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#0064FF] flex flex-col h-full">
              
              {/* Issue Number Badge */}
              <div className="absolute -top-4 -left-4 bg-marvel-yellow text-black border-2 border-black rounded-full w-16 h-16 flex items-center justify-center font-comic text-2xl z-10 transform -rotate-12 group-hover:rotate-0 transition-transform">
                #{project.issueNumber}
              </div>

              {/* Image */}
              <div className="h-48 overflow-hidden border-b-4 border-black relative">
                 <div className="absolute inset-0 bg-marvel-blue mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                 <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                 />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-3xl font-comic mb-2 leading-none uppercase group-hover:text-marvel-blue transition-colors">
                    {project.title}
                </h3>
                
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-xs font-bold bg-gray-200 px-2 py-1 uppercase tracking-wide">
                        {tech}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 font-body mb-6 flex-grow border-l-2 border-gray-300 pl-3">
                    {project.description}
                </p>

                {/* Actions */}
                <div className="flex space-x-4 pt-4 border-t-2 border-dashed border-gray-300 mt-auto">
                    {project.repoUrl && (
                        <a href={project.repoUrl} className="flex items-center text-sm font-bold uppercase hover:text-marvel-blue">
                            <Github size={18} className="mr-1" />
                            Source Code
                        </a>
                    )}
                    {project.demoUrl && (
                        <a href={project.demoUrl} className="flex items-center text-sm font-bold uppercase hover:text-marvel-blue">
                            <ExternalLink size={18} className="mr-1" />
                            Live Demo
                        </a>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};