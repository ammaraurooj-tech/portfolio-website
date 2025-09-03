import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GithubLogo, LinkedinLogo, PaperPlaneTilt } from 'phosphor-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    // Contact section animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    // Initial setup
    gsap.set('.contact-title', { opacity: 0, y: 50 });
    gsap.set('.contact-form', { opacity: 0, x: -50 });
    gsap.set('.contact-info', { opacity: 0, x: 50 });
    gsap.set('.form-group', { opacity: 0, x: -30 });
    gsap.set('.social-icon', { opacity: 0, scale: 0 });

    // Animate elements
    tl.to('.contact-title', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out'
    })
    .to('.contact-form', {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.5')
    .to('.contact-info', {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.6')
    .to('.form-group', {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    }, '-=0.4')
    .to('.social-icon', {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: 'back.out(1.7)'
    }, '-=0.3');

    // Input focus animations
    document.querySelectorAll('.glass-input').forEach(input => {
      input.addEventListener('focus', () => {
        gsap.to(input, {
          scale: 1.02,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      
      input.addEventListener('blur', () => {
        gsap.to(input, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

    // Social icon hover effects
    document.querySelectorAll('.social-icon').forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
          scale: 1.1,
          rotation: 5,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      
      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Animate submit button
    const submitBtn = document.querySelector('.submit-btn');
    gsap.to(submitBtn, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut'
    });

    // Here you would handle form submission
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="contact-section min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="contact-title text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="contact-form">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-group">
                <Label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="glass-input w-full"
                  required
                />
              </div>
              
              <div className="form-group">
                <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="glass-input w-full"
                  required
                />
              </div>
              
              <div className="form-group">
                <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="glass-input w-full min-h-[120px] resize-none"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="submit-btn glow-button w-full py-3 text-lg font-medium inline-flex items-center justify-center gap-3 group"
              >
                Send Message
                <PaperPlaneTilt 
                  size={20} 
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" 
                />
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="contact-info space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-light text-primary mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  I'm always excited to work on new projects and collaborate with 
                  amazing people. Whether you have a specific project in mind or 
                  just want to say hello, feel free to reach out!
                </p>
                <p className="leading-relaxed">
                  I typically respond within 24 hours and would love to discuss 
                  how we can bring your vision to life.
                </p>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-medium text-foreground mb-4">
                Connect with me
              </h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon w-12 h-12 glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <GithubLogo size={24} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon w-12 h-12 glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <LinkedinLogo size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;