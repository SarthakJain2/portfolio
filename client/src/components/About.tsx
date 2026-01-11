import { useReveal } from '@/hooks/useReveal';

export function About() {
  const { ref: sectionRef, isRevealed } = useReveal({ threshold: 0.2 });
  const { ref: techRef, isRevealed: techRevealed } = useReveal({ threshold: 0.3 });

  const technologies = ['TypeScript', 'React', 'Node.js', 'Python', 'PostgreSQL', 'Redis', 'AWS', 'Docker'];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div 
          ref={sectionRef}
          className="grid md:grid-cols-3 gap-12 md:gap-16"
        >
          <div className={`reveal-left ${isRevealed ? 'revealed' : ''}`}>
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-4">
              About
            </h2>
            <div className="w-12 h-px bg-border" />
          </div>

          <div className="md:col-span-2 space-y-6">
            <p 
              className={`text-lg text-muted-foreground leading-relaxed reveal ${isRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: '100ms' }}
              data-testid="text-about-intro"
            >
              I'm a software engineer with 8+ years of experience building products 
              that people love to use. I care deeply about craft, performance, and 
              the small details that make software feel truly polished.
            </p>
            
            <p 
              className={`text-lg text-muted-foreground leading-relaxed reveal ${isRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: '200ms' }}
            >
              Currently, I focus on building scalable systems and improving developer 
              experience. I believe great software comes from understanding both the 
              technical challenges and the human needs behind them.
            </p>

            <p 
              className={`text-lg text-muted-foreground leading-relaxed reveal ${isRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: '300ms' }}
            >
              When I'm not coding, you'll find me exploring new places, reading 
              about design systems, or tinkering with side projects that may never 
              see the light of day.
            </p>

            <div 
              ref={techRef}
              className={`pt-6 reveal ${techRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: '400ms' }}
            >
              <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wide mb-4">
                Technologies I work with
              </h3>
              <div className="flex flex-wrap gap-2" data-testid="list-technologies">
                {technologies.map((tech, index) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 text-sm bg-accent rounded-full text-muted-foreground transition-all duration-300 hover:bg-muted-foreground/20 ${
                      techRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}
                    style={{ transitionDelay: techRevealed ? `${index * 50}ms` : '0ms' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
