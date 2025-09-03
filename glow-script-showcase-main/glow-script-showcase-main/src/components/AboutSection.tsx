import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FileHtml, 
  FileCss, 
  FileJs, 
  Globe, 
  Lightning, 
  Code 
} from 'phosphor-react';
const profileImageUrl = '/lovable-uploads/bc4fb67c-38cf-4ca5-813c-f91a140e3765.png';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  useEffect(() => {
    // About section scroll animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    // Initial setup
    gsap.set('.about-image', { opacity: 0, x: -100, scale: 0.8 });
    gsap.set('.about-content', { opacity: 0, x: 100 });
    gsap.set('.skill-icon', { opacity: 0, y: 30, scale: 0.5 });

    // Animate elements
    tl.to('.about-image', {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 1,
      ease: 'power2.out'
    })
    .to('.about-content', {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.5')
    .to('.skill-icon', {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: 'back.out(1.7)'
    }, '-=0.3');

    // Profile image hover effect
    const profileImg = document.querySelector('.profile-image');
    if (profileImg) {
      profileImg.addEventListener('mouseenter', () => {
        gsap.to(profileImg, {
          scale: 1.05,
          rotation: 5,
          duration: 0.5,
          ease: 'power2.out'
        });
      });
      
      profileImg.addEventListener('mouseleave', () => {
        gsap.to(profileImg, {
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: 'power2.out'
        });
      });
    }
  }, []);

  const skills = [
    { icon: FileHtml, name: 'HTML5', color: '#E34F26' },
    { icon: FileCss, name: 'CSS3', color: '#1572B6' },
    { icon: FileJs, name: 'JavaScript', color: '#F7DF1E' },
    { icon: Globe, name: 'React', color: '#61DAFB' },
    { icon: Lightning, name: 'GSAP', color: '#88CE02' },
    { icon: Code, name: 'TypeScript', color: '#3178C6' }
  ];

  return (
    <section id="about" className="about-section min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Profile Image */}
        <div className="about-image flex justify-center lg:justify-start">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-30 animate-pulse-slow" />
            <img
              src={profileImageUrl}
              alt="Ammara Urooj"
              className="profile-image relative z-10 w-80 h-80 object-cover rounded-full border-4 border-glow shadow-2xl"
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="about-content space-y-8">
          <div>
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate web developer with expertise in modern technologies. 
              I love creating immersive digital experiences that combine functionality 
              with stunning visual design. My focus is on building responsive, 
              user-friendly applications that make a lasting impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or designing the next big thing 
              in digital innovation.
            </p>
          </div>
          
          {/* Skills Grid */}
          <div>
            <h3 className="text-2xl font-light mb-6 text-primary">Skills & Technologies</h3>
            <div className="grid grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="skill-icon group cursor-pointer"
                >
                  <div className="glass-card p-6 text-center hover:border-glow transition-all duration-300 group-hover:transform group-hover:scale-105">
                    <skill.icon 
                      size={40} 
                      className="mx-auto mb-3 text-primary group-hover:text-accent transition-colors" 
                    />
                    <p className="text-sm font-medium">{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;