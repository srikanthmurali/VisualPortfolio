import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { photos } from '@/lib/data';

const PhotographySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div 
        ref={sectionRef}
        className={`container mx-auto px-6 max-w-6xl section-fade ${isVisible ? 'visible' : ''}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Photography</h2>
        <p className="text-center text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          Capturing moments and finding patterns in the world around us
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="aspect-[3/4] overflow-hidden rounded-lg group relative">
              <img 
                src={photo.url} 
                alt={photo.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{photo.title}</h3>
                  <p className="text-sm text-gray-300">{photo.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center text-accent hover:text-accent/90 transition-colors">
            View more photography <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PhotographySection;
