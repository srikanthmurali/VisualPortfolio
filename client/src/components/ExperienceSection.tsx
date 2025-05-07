import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceItem = ({ title, company, period, description }: ExperienceItemProps) => {
  return (
    <div className="mb-12 ml-8 md:ml-12">
      <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] mt-2"></div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="flex items-center gap-2 text-secondary">
            <span>{company}</span>
            <span className="text-xs">|</span>
            <span>{period}</span>
          </div>
        </div>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const experiences = [
    {
      title: "Data Scientist",
      company: "Petrus Technologies",
      period: "May 2022 - Present",
      description: "R&D professional responsible for creating PoCs and coordinating teams to build MVPs in various sectors, including Ring frame & Speed frame optimization for Spinning machines, Customer analytics for Advance Technology center, and Textile manufacturing division of LMW. Built data mining frameworks, created system design documents, and collaborated with customers to define KPIs for modules such as Production analytics and Cost analytics."
    },
    {
      title: "Data Analyst",
      company: "Maxbyte Technologies",
      period: "April 2020 - May 2022",
      description: "Worked on different industry verticals namely HVAC, Defense, Energy & Utilities, and Renewable energy for data-driven solutions. Took ownership of projects by conducting stand-up meetings to achieve FTRs and on-time deliveries. Created systematic issue trackers and built client relationships through appropriate reporting of progress and challenges."
    },
    {
      title: "Data Science Technologist",
      company: "Maxbyte Technologies",
      period: "October 2017 - April 2020",
      description: "Researched various data-driven solutions and technologies to understand the potentials of Artificial Intelligence in Manufacturing Industry using IoT data. Published research paper in Energy analytics implemented for a HVAC industry. Wrote data science blogs to promote the organization on social media and conducted data science workshops for college students to find potential candidates for internship."
    },
    {
      title: "M.Tech Researcher",
      company: "Amrita Vishwa Vidyapeetham",
      period: "June 2015 - July 2017",
      description: "Concentrated on areas like Text processing, Image Processing, Natural language processing, and Speech recognition models. Read 10 to 20 research papers weekly and reviewed existing techniques and methodologies. Published three research papers during this period."
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div 
        ref={sectionRef}
        className={`container mx-auto px-6 max-w-6xl section-fade ${isVisible ? 'visible' : ''}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Professional Experience</h2>
        
        <div className="relative border-l-2 border-accent ml-4 md:ml-0 md:mx-auto max-w-3xl">
          {experiences.map((experience, index) => (
            <ExperienceItem 
              key={index}
              title={experience.title}
              company={experience.company}
              period={experience.period}
              description={experience.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
