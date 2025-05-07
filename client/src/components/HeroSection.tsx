import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 px-6 relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 opacity-20" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Turning numbers into <span className="text-accent">knowledge</span>
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 text-secondary">
              Data Scientist | Storyteller | AI Researcher
            </p>
            <p className="text-lg mb-10 max-w-lg">
              I generate business value using data science for Industry 4.0, specializing in machine health monitoring, OEE analytics, and IoT-based predictive maintenance.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/20">
                Get in Touch
              </a>
              <a href="#research" className="px-8 py-3 border border-accent text-accent rounded-md hover:bg-accent/5 transition-all">
                View My Research
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img 
              src="/images/profile-photo.png" 
              alt="Srikanth Murali - Data Scientist" 
              className="w-full h-auto rounded-xl shadow-xl object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs hidden lg:block">
              <p className="text-lg font-semibold mb-2">7+ years of experience</p>
              <p className="text-secondary">Building data-driven solutions across HVAC, Defense, Renewable Energy, and Manufacturing sectors</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
