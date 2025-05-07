import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 transition-all duration-300 ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-primary flex items-center gap-2">
          <span className="text-accent">S</span>rikanth Murali
        </a>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-secondary hover:text-accent transition-colors duration-300">About</a>
          <a href="#experience" className="text-secondary hover:text-accent transition-colors duration-300">Experience</a>
          <a href="#research" className="text-secondary hover:text-accent transition-colors duration-300">Research</a>
          <a href="#skills" className="text-secondary hover:text-accent transition-colors duration-300">Skills</a>
          <a href="#contact" className="text-secondary hover:text-accent transition-colors duration-300">Contact</a>
        </nav>
        
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-primary focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white w-full border-b border-gray-100 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <a 
            href="#about" 
            className="text-secondary hover:text-accent transition-colors duration-300"
            onClick={closeMenu}
          >
            About
          </a>
          <a 
            href="#experience" 
            className="text-secondary hover:text-accent transition-colors duration-300"
            onClick={closeMenu}
          >
            Experience
          </a>
          <a 
            href="#research" 
            className="text-secondary hover:text-accent transition-colors duration-300"
            onClick={closeMenu}
          >
            Research
          </a>
          <a 
            href="#skills" 
            className="text-secondary hover:text-accent transition-colors duration-300"
            onClick={closeMenu}
          >
            Skills
          </a>
          <a 
            href="#contact" 
            className="text-secondary hover:text-accent transition-colors duration-300"
            onClick={closeMenu}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
