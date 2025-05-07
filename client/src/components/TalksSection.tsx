import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { ArrowRight } from 'lucide-react';

// Define the talks data
const talks = [
  {
    url: "/images/talk1.jpg",
    title: "Leadership building",
    description: "Personal journey inspiration talks"
  },
  {
    url: "/images/talk2.jpg",
    title: "Career guidance",
    description: "Panel discussion on soft skills"
  },
  {
    url: "/images/talk4.jpg",
    title: "AI Innovation Workshop",
    description: "Leading session on machine learning applications"
  },
  {
    url: "/images/talk5.jpg",
    title: "Global Tech Summit",
    description: "Speaking on digital transformation"
  }
];

const TalksSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div 
        ref={sectionRef}
        className={`container mx-auto px-6 max-w-6xl section-fade ${isVisible ? 'visible' : ''}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Talks & Engagements</h2>
        <p className="text-center text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          Sharing knowledge and insights at industry conferences and events
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {talks.map((talk, index) => (
            <div key={index} className="overflow-hidden rounded-lg group relative">
              <div className="aspect-[4/3]">
                <img 
                  src={talk.url} 
                  alt={talk.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{talk.title}</h3>
                  <p className="text-sm text-gray-300">{talk.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center text-accent hover:text-accent/90 transition-colors">
            View more speaking engagements <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TalksSection;