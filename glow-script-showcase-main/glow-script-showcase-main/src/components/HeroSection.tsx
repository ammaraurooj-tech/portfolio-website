import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'phosphor-react';

const HeroSection = () => {
  useEffect(() => {
    // Hero animations
    const tl = gsap.timeline({ delay: 0.5 });
    
    // Initial setup
    gsap.set('.hero-headline', { opacity: 0, y: 50, filter: 'blur(10px)' });
    gsap.set('.hero-subtitle', { opacity: 0, y: 30 });
    gsap.set('.hero-cta', { opacity: 0, scale: 0.8 });
    gsap.set('.spline-container', { opacity: 0, x: 100 });
    
    // Animate elements in sequence
    tl.to('.hero-headline', {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1.2,
      ease: 'power2.out'
    })
    .to('.hero-subtitle', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.6')
    .to('.hero-cta', {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: 'back.out(1.7)'
    }, '-=0.4')
    .to('.spline-container', {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power2.out'
    }, '-=0.8');

    // Floating orbs animation
    gsap.to('.floating-orb', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: {
        each: 0.5,
        from: 'random'
      }
    });

    // CTA button hover effect
    const ctaButton = document.querySelector('.hero-cta');
    if (ctaButton) {
      ctaButton.addEventListener('mouseenter', () => {
        gsap.to(ctaButton, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
      });
      
      ctaButton.addEventListener('mouseleave', () => {
        gsap.to(ctaButton, { scale: 1, duration: 0.3, ease: 'power2.out' });
      });
    }
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Spline 3D */}
      <div className="spline-container absolute inset-0 z-0">
        <iframe 
          src='https://my.spline.design/orb-oR4IqWpCeLZw6X5c1qEnlvJv/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
        />
      </div>
      
      {/* Floating orbs */}
      <div className="floating-orb glow-orb w-32 h-32 top-1/4 left-1/4" />
      <div className="floating-orb glow-orb w-24 h-24 top-3/4 right-1/3" />
      <div className="floating-orb glow-orb w-40 h-40 bottom-1/4 left-1/2" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="hero-headline text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-6">
          Hi, I'm <span className="gradient-text">Ammara</span> –<br />
          <span className="text-glow">Web Developer</span>
        </h1>
        
        <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Crafting digital experiences with cutting-edge technology and creative innovation
        </p>
        
        <button 
          onClick={scrollToContact}
          className="hero-cta glow-button px-8 py-4 text-lg font-medium inline-flex items-center gap-3 group"
        >
          Hire Me
          <ArrowRight 
            size={20} 
            className="transition-transform group-hover:translate-x-1" 
          />
        </button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;