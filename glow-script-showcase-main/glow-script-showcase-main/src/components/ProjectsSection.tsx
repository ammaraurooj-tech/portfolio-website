import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowSquareOut, GithubLogo } from 'phosphor-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  useEffect(() => {
    // Projects section animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.projects-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    // Initial setup
    gsap.set('.projects-title', { opacity: 0, y: 50 });
    gsap.set('.project-card', { opacity: 0, y: 100, scale: 0.8 });

    // Animate elements
    tl.to('.projects-title', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out'
    })
    .to('.project-card', {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out'
    }, '-=0.5');

    // Card hover effects
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -10,
          scale: 1.02,
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(card.querySelector('.card-glow'), {
          opacity: 1,
          duration: 0.3
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(card.querySelector('.card-glow'), {
          opacity: 0,
          duration: 0.3
        });
      });
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Currency Converter',
      subtitle: 'Convert any currency instantly',
      image: project1,
      description: 'Real-time currency conversion with live exchange rates',
      tech: ['React', 'API', 'CSS3'],
      github: '#',
      live: '#'
    },
    {
      id: 2,
      title: 'Appointment Booking App',
      subtitle: 'Easy scheduling system',
      image: project2,
      description: 'Modern appointment booking system with calendar integration',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: '#',
      live: '#'
    },
    {
      id: 3,
      title: 'Drum Kit',
      subtitle: 'Play beats with your keyboard',
      image: project3,
      description: 'Interactive drum kit with keyboard controls and sound effects',
      tech: ['JavaScript', 'Web Audio API', 'CSS3'],
      github: '#',
      live: '#'
    },
    {
      id: 4,
      title: 'Process Scheduling Simulator',
      subtitle: 'CPU Scheduling Algorithms',
      image: project4,
      description: 'Educational tool for understanding CPU scheduling algorithms',
      tech: ['JavaScript', 'Data Structures', 'Algorithms'],
      github: '#',
      live: '#'
    },
    {
      id: 5,
      title: 'Phonebook (BST)',
      subtitle: 'Tree-based contact manager',
      image: project5,
      description: 'Contact management system using Binary Search Tree',
      tech: ['JavaScript', 'Data Structures', 'Local Storage'],
      github: '#',
      live: '#'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      subtitle: 'Showcasing my web development work',
      image: project6,
      description: 'Modern portfolio website with 3D animations and smooth scrolling',
      tech: ['React', 'GSAP', 'Spline'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="projects-section min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="projects-title text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my best work showcasing modern web technologies and creative solutions
          </p>
        </div>

        {/* Projects Grid - Horizontal scroll on mobile, grid on desktop */}
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 flex md:flex-none overflow-x-auto md:overflow-visible pb-4 md:pb-0 space-x-6 md:space-x-0">
          {projects.map((project) => (
            <div key={project.id} className="project-card relative group min-w-[300px] md:min-w-0">
              {/* Card glow effect */}
              <div className="card-glow absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-0 transition-opacity duration-300" />
              
              <div className="glass-card h-full overflow-hidden relative z-10">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                
                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex gap-4 pt-4">
                    <a 
                      href={project.github}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <GithubLogo size={16} />
                      Code
                    </a>
                    <a 
                      href={project.live}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ArrowSquareOut size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;