import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { 
  Bolt, 
  Brain, 
  Factory, 
  Check, 
  Award, 
  IdCard 
} from 'lucide-react';
import { certifications, skills } from '@/lib/data';

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section id="skills" className="py-20">
      <div 
        ref={sectionRef}
        className={`container mx-auto px-6 max-w-6xl section-fade ${isVisible ? 'visible' : ''}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Technical Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bolt & Libraries */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                <Bolt className="text-accent h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Libraries & Packages</h3>
            </div>
            <ul className="space-y-3">
              {skills.tools.map((tool, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-accent h-4 w-4 mr-2" />
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Techniques */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                <Brain className="text-accent h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Algorithms & Techniques </h3>
            </div>
            <ul className="space-y-3">
              {skills.techniques.map((technique, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-accent h-4 w-4 mr-2" />
                  <span>{technique}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Domain Expertise */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                <Factory className="text-accent h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Domain Expertise</h3>
            </div>
            <ul className="space-y-3">
              {skills.domains.map((domain, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-accent h-4 w-4 mr-2" />
                  <span>{domain}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {certifications.filter(cert => !cert.isAward).map((cert, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow flex items-center">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                  <IdCard className="text-accent h-5 w-5" />
                </div>
                <span>{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;