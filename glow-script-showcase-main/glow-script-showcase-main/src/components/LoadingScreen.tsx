import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Initial setup
    gsap.set('.loading-text', { opacity: 0, y: 30, filter: 'blur(10px)' });
    gsap.set('.progress-bar-fill', { width: '0%' });
    gsap.set('.progress-percentage', { opacity: 0 });

    // Animate text in
    tl.to('.loading-text', {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.8,
      ease: 'power2.out'
    });

    // Progress bar animation
    tl.to('.progress-percentage', {
      opacity: 1,
      duration: 0.3
    }, '-=0.5');

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = Math.min(prev + Math.random() * 15, 100);
        
        gsap.to('.progress-bar-fill', {
          width: `${newProgress}%`,
          duration: 0.3,
          ease: 'power2.out'
        });
        
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          
          // Complete animation
          setTimeout(() => {
            gsap.to('.preloader', {
              opacity: 0,
              scale: 0.9,
              duration: 1,
              ease: 'power2.inOut',
              onComplete: () => {
                onComplete();
              }
            });
          }, 500);
        }
        
        return newProgress;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <div className="preloader fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Background glow orbs */}
      <div className="glow-orb w-96 h-96 top-1/4 left-1/4 animate-float" />
      <div className="glow-orb w-64 h-64 bottom-1/4 right-1/4 animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="text-center space-y-8">
        {/* Loading text */}
        <div className="loading-text">
          <h1 className="text-6xl md:text-8xl font-light gradient-text">
            Ammara Urooj
          </h1>
          <p className="text-muted-foreground text-lg mt-4">Loading Experience...</p>
        </div>
        
        {/* Progress bar */}
        <div className="w-80 mx-auto space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Progress</span>
            <span className="progress-percentage text-sm text-primary font-mono">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="relative h-1 bg-muted rounded-full overflow-hidden">
            <div className="progress-bar-fill absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-accent rounded-full shadow-glow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;