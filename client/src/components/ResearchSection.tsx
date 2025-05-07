import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { ExternalLink } from 'lucide-react';
import { publications } from '@/lib/data';

const ResearchSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section id="research" className="py-20 bg-gray-50">
      <div 
        ref={sectionRef}
        className={`container mx-auto px-6 max-w-6xl section-fade ${isVisible ? 'visible' : ''}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Research Publications</h2>
        <p className="text-center text-lg text-secondary mb-12 max-w-3xl mx-auto">
          My published work spans multiple domains including speech, image processing, text analytics, and energy efficiency
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {publications.map((publication, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{publication.title}</h3>
                <p className="text-secondary mb-4">
                  {publication.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="bg-gray-100 text-secondary px-3 py-1 rounded-full text-sm">{publication.category}</span>
                  <a href={publication.link} className="text-accent hover:underline flex items-center">
                    View paper <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
