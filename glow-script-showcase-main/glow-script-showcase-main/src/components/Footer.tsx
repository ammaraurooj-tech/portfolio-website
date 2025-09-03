import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GithubLogo, LinkedinLogo, Heart } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    // Footer animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.footer-section',
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    });

    // Initial setup
    gsap.set('.footer-content', { opacity: 0, y: 60 });
    gsap.set('.footer-particle', { opacity: 0, scale: 0 });

    // Animate elements
    tl.to('.footer-content', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out'
    })
    .to('.footer-particle', {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: 'back.out(1.7)'
    }, '-=0.5');

    // Floating particles animation
    gsap.to('.footer-particle', {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: {
        each: 0.3,
        from: 'random'
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = ['Home', 'About', 'Projects', 'Contact'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-section relative py-16 border-t border-border/50">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="footer-particle glow-orb w-16 h-16 top-1/4 left-1/4" />
        <div className="footer-particle glow-orb w-12 h-12 top-1/2 right-1/3" />
        <div className="footer-particle glow-orb w-20 h-20 bottom-1/4 left-1/2" />
        <div className="footer-particle glow-orb w-8 h-8 top-3/4 right-1/4" />
      </div>
      
      <div className="footer-content max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-light gradient-text">
              Ammara Urooj
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Crafting digital experiences with cutting-edge technology and creative innovation.
            </p>
          </div>
          
          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-foreground">
              Navigation
            </h4>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
          
          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-foreground">
              Connect
            </h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors group"
              >
                <GithubLogo size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors group"
              >
                <LinkedinLogo size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Made with <Heart size={16} className="text-primary" /> by Ammara Urooj
          </p>
          
          <button
            onClick={scrollToTop}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;