import { useState, useEffect } from 'react';
import { List, X } from 'phosphor-react';
import { gsap } from 'gsap';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Initial animation
    gsap.fromTo('.nav-container', 
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power2.out' }
    );
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
    if (!isOpen) {
      // Open menu animation
      gsap.to('.mobile-menu', {
        x: 0,
        duration: 0.5,
        ease: 'power2.out'
      });
      gsap.fromTo('.mobile-menu-item',
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.3, stagger: 0.1, delay: 0.2 }
      );
    } else {
      // Close menu animation
      gsap.to('.mobile-menu', {
        x: '100%',
        duration: 0.5,
        ease: 'power2.inOut'
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      gsap.to('.mobile-menu', { x: '100%', duration: 0.5, ease: 'power2.inOut' });
    }
  };

  return (
    <>
      <nav className="nav-container fixed top-0 left-0 right-0 z-40 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-light gradient-text">
            Ammara
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            <List size={24} />
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div className="mobile-menu fixed top-0 right-0 w-full h-screen bg-background/95 backdrop-blur-xl z-50 transform translate-x-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-12">
            <div className="text-2xl font-light gradient-text">Ammara</div>
            <button onClick={toggleMenu} className="text-foreground hover:text-primary">
              <X size={24} />
            </button>
          </div>
          
          <div className="space-y-8">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="mobile-menu-item block text-3xl font-light text-foreground hover:text-primary transition-colors w-full text-left"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;