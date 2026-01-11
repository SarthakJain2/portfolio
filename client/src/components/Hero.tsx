import { ArrowDown } from 'lucide-react';
import { trackCTAClick, trackNavClick } from '@/lib/analytics';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="gradient-orb w-96 h-96 bg-blue-500/30 -top-48 -right-48 animate-gentle-pulse" />
      <div className="gradient-orb w-80 h-80 bg-purple-500/20 bottom-32 -left-40 animate-gentle-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Grain overlay */}
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 py-32 relative z-10">
        <div className="space-y-6">
          <p className="text-sm font-mono text-muted-foreground tracking-wide uppercase animate-fade-in-up">
            Software Engineer
          </p>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-balance animate-fade-in-up stagger-1">
            Alex Chen
          </h1>
          
          <p className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-up stagger-2">
            Crafting elegant solutions to complex problems. Specializing in 
            full-stack development, system design, and developer experience.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up stagger-3">
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
        className="absolute bottom-12 left-1/2 -translate-x-1/2 p-2 text-muted-foreground hover:text-foreground transition-colors animate-float"
        data-testid="link-scroll-down"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
}
