import { ArrowDown } from 'lucide-react';
import { trackCTAClick, trackNavClick } from '@/lib/analytics';
import { useTypewriterSequence } from '@/hooks/useTypewriter';

export function Hero() {
  const { displayTexts, isComplete, currentIndex } = useTypewriterSequence({
    items: [
      { text: 'Alex Chen', speed: 80 },
      { text: 'Crafting elegant solutions to complex problems. Specializing in full-stack development, system design, and developer experience.', speed: 20 },
    ],
    initialDelay: 600,
    delayBetween: 400,
  });

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
        <div 
          className="absolute w-[800px] h-[800px] -top-[400px] -right-[200px] rounded-full opacity-30 dark:opacity-15 blur-3xl animate-gradient"
          style={{
            background: 'linear-gradient(135deg, hsl(240 5% 25%) 0%, hsl(280 10% 20%) 50%, hsl(220 15% 25%) 100%)',
            backgroundSize: '200% 200%',
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] -bottom-[200px] -left-[200px] rounded-full opacity-25 dark:opacity-10 blur-3xl animate-gradient"
          style={{
            background: 'linear-gradient(225deg, hsl(200 10% 30%) 0%, hsl(240 8% 22%) 50%, hsl(260 12% 25%) 100%)',
            backgroundSize: '200% 200%',
            animationDelay: '-7s',
          }}
        />
      </div>
      
      {/* Grain overlay */}
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 py-32 relative z-10">
        <div className="space-y-6">
          <p className="text-sm font-mono text-muted-foreground tracking-wide uppercase animate-fade-in-up">
            Software Engineer
          </p>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-balance min-h-[1.2em]">
            {displayTexts[0]}
            {currentIndex === 0 && !isComplete && (
              <span className="inline-block w-[3px] h-[0.9em] bg-foreground ml-1 animate-pulse" />
            )}
          </h1>
          
          <p className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed min-h-[4em] md:min-h-[3em]">
            {displayTexts[1]}
            {currentIndex === 1 && !isComplete && (
              <span className="inline-block w-[2px] h-[1em] bg-muted-foreground ml-0.5 animate-pulse" />
            )}
            {isComplete && (
              <span className="inline-block w-[2px] h-[1em] bg-muted-foreground ml-0.5 animate-pulse" />
            )}
          </p>

          <div 
            className={`flex flex-wrap gap-4 pt-4 transition-all duration-700 ${
              isComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
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
          isComplete ? 'opacity-100 animate-float' : 'opacity-0'
        }`}
        data-testid="link-scroll-down"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
}
