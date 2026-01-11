import { ArrowDown } from 'lucide-react';
import { trackCTAClick, trackNavClick } from '@/lib/analytics';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative grain">
      <div className="max-w-5xl mx-auto px-6 py-32">
        <div className="space-y-6 animate-fade-in">
          <p className="text-sm font-mono text-muted-foreground tracking-wide uppercase opacity-0 animate-slide-up stagger-1">
            Software Engineer
          </p>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-balance opacity-0 animate-slide-up stagger-2">
            Alex Chen
          </h1>
          
          <p className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed opacity-0 animate-slide-up stagger-3">
            Crafting elegant solutions to complex problems. Specializing in 
            full-stack development, system design, and developer experience.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-slide-up stagger-4">
            <a
              href="#projects"
              onClick={() => trackCTAClick('view_work', 'hero')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              data-testid="button-view-work"
            >
              View my work
            </a>
            <a
              href="#contact"
              onClick={() => trackCTAClick('get_in_touch', 'hero')}
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm font-medium hover:bg-accent transition-colors"
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
        className="absolute bottom-12 left-1/2 -translate-x-1/2 p-2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        data-testid="link-scroll-down"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
}
