import { CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div 
        ref={sectionRef}
        className={`container mx-auto px-6 max-w-6xl section-fade ${isVisible ? 'visible' : ''}`}
      >
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/5">
            <img 
              src="/images/profile-photo.png" 
              alt="Srikanth Murali - Professional Portrait" 
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="lg:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-6">
              <p className="text-lg">
                I'm a Data Scientist with 7+ years of experience building data-driven solutions across industry verticals like HVAC, Defense, Renewable Energy, and currently into process and discrete Manufacturing. I specialize in machine health monitoring, OEE analytics, and IoT-based predictive maintenance.
              </p>
              <p className="text-lg">
                I've authored research papers in Speech, Image, Text, and Energy Analytics and enjoy translating complex data into real-world impact.
              </p>
              <h3 className="text-xl font-semibold mt-8 mb-4">What I bring to the table:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-accent mt-1 mr-3 h-5 w-5" />
                  <span>Expertise in Python, Power BI, SQL</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent mt-1 mr-3 h-5 w-5" />
                  <span>Strong foundation in machine learning, pattern recognition, anomaly detection, and time-series forecasting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent mt-1 mr-3 h-5 w-5" />
                  <span>Practical knowledge of Classification & Regression algorithms, LSTM models, and statistical tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent mt-1 mr-3 h-5 w-5" />
                  <span>Passion for self-help and spiritual learning, which keeps me grounded and purpose-driven</span>
                </li>
              </ul>
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Languages:</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-secondary">English (Full Professional)</span>
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-secondary">Tamil (Native)</span>
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-secondary">Kannada (Native)</span>
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-secondary">Hindi (Elementary)</span>
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-secondary">Sanskrit (Elementary)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
