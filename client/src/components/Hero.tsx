import { useState, useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { trackCTAClick, trackNavClick } from '@/lib/analytics';

function useTypewriter(text: string, speed: number, shouldStart: boolean, onComplete?: () => void) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!shouldStart || hasStarted.current) return;
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
    
    // Skip animation on reduced motion preference or mobile devices
    if (prefersReducedMotion || isMobile) {
      setDisplayText(text);
      setIsComplete(true);
      onComplete?.();
      return;
    }

    hasStarted.current = true;
    let currentIndex = 0;
    let animationId: number;

    const typeChar = () => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
        if (currentIndex <= text.length) {
          // Use requestAnimationFrame with setTimeout for smoother animation
          animationId = requestAnimationFrame(() => {
            setTimeout(() => typeChar(), speed);
          });
        } else {
          setIsComplete(true);
          onComplete?.();
        }
      }
    };
    
    typeChar();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [shouldStart]);

  return { displayText, isComplete };
}

export function Hero() {
  const [startName, setStartName] = useState(false);
  const [startBio, setStartBio] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStartName(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const { displayText: nameText, isComplete: nameComplete } = useTypewriter(
    'Sarthak Jain',
    100,
    startName,
    () => setTimeout(() => setStartBio(true), 400)
  );

  const { displayText: bioText, isComplete: bioComplete } = useTypewriter(
    'Crafting elegant solutions to complex problems. Specializing in backend and full-stack development, AI/ML engineering, system design, and developer experience.',
    28,
    startBio,
    () => setTimeout(() => setShowButtons(true), 300)
  );

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Static gradient background - optimized for mobile/Safari */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
        <div 
          className="absolute w-[600px] h-[600px] -top-[300px] -right-[150px] rounded-full opacity-20 dark:opacity-10"
          style={{
            background: 'radial-gradient(circle, hsl(240 5% 25%) 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] -bottom-[150px] -left-[150px] rounded-full opacity-15 dark:opacity-8"
          style={{
            background: 'radial-gradient(circle, hsl(220 8% 28%) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-32 relative z-10">
        <div className="space-y-6">
          <p className="text-sm font-mono text-muted-foreground tracking-wide uppercase animate-fade-in-up">
            Software Engineer
          </p>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-balance min-h-[1.2em]">
            <span>{nameText}</span>
            {startName && !nameComplete && (
              <span className="inline-block w-[4px] h-[0.85em] bg-foreground ml-2 animate-pulse align-baseline" />
            )}
          </h1>
          
          <div className="max-w-xl min-h-[5em] md:min-h-[4em]">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {startBio && (
                <>
                  <span>{bioText}</span>
                  <span className="inline-block w-[2px] h-[1em] bg-muted-foreground ml-0.5 animate-pulse align-baseline" />
                </>
              )}
            </p>
          </div>

          <div 
            className={`flex flex-wrap gap-4 pt-4 transition-all duration-700 ${
              showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
          >
            <a
              href="#projects"
              onClick={() => trackCTAClick('view_work', 'hero')}
              className="btn-animate inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium"
              data-testid="button-view-work"
            >
              View my work
            </a>
            <a
              href="#contact"
              onClick={() => trackCTAClick('get_in_touch', 'hero')}
              className="btn-animate inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm font-medium hover:bg-accent hover:border-muted-foreground/30"
              data-testid="button-get-in-touch"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        onClick={() => trackNavClick('about', 'hero')}
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 p-2 text-muted-foreground hover:text-foreground transition-all duration-500 ${
          showButtons ? 'opacity-100 animate-float' : 'opacity-0'
        }`}
        data-testid="link-scroll-down"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
}
