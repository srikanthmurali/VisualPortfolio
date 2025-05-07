
import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { ArrowRight } from 'lucide-react';

const TalksSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div 
        ref={sectionRef}
        className={`container mx-auto px-6 max-w-6xl section-fade ${isVisible ? 'visible' : ''}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Talks & Speech</h2>
        <p className="text-center text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          Speaking engagements and presentations on AI, Data Science, and Industry 4.0
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-[4/3] overflow-hidden rounded-lg group relative">
            <img 
              src="/images/talk1.jpg" 
              alt="Conference Talk" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
              <div className="p-4">
                <h3 className="text-lg font-semibold">Industry Conference</h3>
                <p className="text-sm text-gray-300">Discussing AI applications in manufacturing</p>
              </div>
            </div>
          </div>

          <div className="aspect-[4/3] overflow-hidden rounded-lg group relative">
            <img 
              src="/images/talk2.jpg" 
              alt="Workshop Session" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
              <div className="p-4">
                <h3 className="text-lg font-semibold">Technical Workshop</h3>
                <p className="text-sm text-gray-300">Leading a session on predictive maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalksSection;
