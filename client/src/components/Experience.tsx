import { useReveal } from '@/hooks/useReveal';

const experiences = [
  {
    id: 1,
    role: 'Incoming Fall Software Engineer Intern',
    company: 'Robinhood',
    companyUrl: 'https://robinhood.com/',
    period: 'September 2026 - December 2026',
    description: 'Leading the development of the core platform infrastructure, improving system reliability and reducing latency by 40%. Mentoring junior engineers and driving adoption of best practices.',
    highlights: ['System Design', 'Team Leadership', 'Performance'],
  },
  {
    id: 2,
    role: 'Software Development Engineer Intern',
    company: 'Amazon Web Services (AWS)',
    companyUrl: 'https://aws.amazon.com/',
    period: 'May 2025 — August 2025',
    description: 'Built and scaled the main product from 0 to 100k users. Designed and implemented real-time collaboration features and payment infrastructure.',
    highlights: ['Full-Stack', 'Product Development', 'Scaling'],
  },
  {
    id: 3,
    role: 'Undergraduate Researcher ',
    company: 'Machine Learning Lab',
    companyUrl: 'http://www.wanghao.in/',
    period: 'December 2023 — May 2025',
    description: 'Developed responsive web applications for clients across various industries. Focused on accessibility, performance optimization, and modern UI patterns.',
    highlights: ['React', 'Accessibility', 'UI/UX'],
  },
  {
    id: 4,
    role: 'Undergraduate Researcher',
    company: 'Rutgers Rail and Transit Lab',
    companyUrl: 'https://rail.rutgers.edu/#/home',
    period: 'September 2023 — May 2025',
    description: 'Developed responsive web applications for clients across various industries. Focused on accessibility, performance optimization, and modern UI patterns.',
    highlights: ['React', 'Accessibility', 'UI/UX'],
  },
  {
    id: 5,
    role: 'Software Engineer Intern',
    company: 'Gateway (Acquired by Circle)',
    companyUrl: 'https://www.circle.com/',
    period: 'June 2024 - August 2024',
    description: 'Developed responsive web applications for clients across various industries. Focused on accessibility, performance optimization, and modern UI patterns.',
    highlights: ['React', 'Accessibility', 'UI/UX'],
  },
];

function ExperienceItem({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const { ref, isRevealed } = useReveal({ threshold: 0.2 });

  return (
    <div 
      ref={ref}
      className={`group relative reveal ${isRevealed ? 'revealed' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
      data-testid={`experience-item-${exp.id}`}
    >
      {index !== experiences.length - 1 && (
        <div className="absolute left-0 top-8 bottom-0 w-px bg-border -mb-12 hidden md:block" />
      )}
      
      <div className="relative pl-0 md:pl-6">
        <div 
          className={`absolute left-0 top-2 w-2 h-2 rounded-full bg-muted-foreground hidden md:block transition-all duration-500 ${
            isRevealed ? 'scale-100' : 'scale-0'
          }`}
          style={{ transitionDelay: `${index * 150 + 200}ms` }}
        />
        
        <div className="mb-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-medium">
              {exp.role}{' '}
              <span className="text-muted-foreground">@</span>{' '}
              <a 
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-transparent hover:decoration-current transition-all duration-300 decoration-1 underline-offset-2"
                data-testid={`link-company-${exp.id}`}
              >
                {exp.company}
              </a>
            </h3>
            <span className="text-sm font-mono text-muted-foreground">
              {exp.period}
            </span>
          </div>
        </div>
        
        <p className="text-muted-foreground leading-relaxed mb-4">
          {exp.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {exp.highlights.map((highlight, hIndex) => (
            <span
              key={highlight}
              className={`px-2 py-0.5 text-xs font-mono bg-accent rounded text-muted-foreground transition-all duration-300 ${
                isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
              style={{ transitionDelay: `${index * 150 + 300 + hIndex * 50}ms` }}
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  const { ref: headerRef, isRevealed: headerRevealed } = useReveal({ threshold: 0.3 });

  return (
    <section id="experience" className="py-24 md:py-32 bg-card/50 relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          <div 
            ref={headerRef}
            className={`reveal-left ${headerRevealed ? 'revealed' : ''}`}
          >
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-4">
              Experience
            </h2>
            <div className="w-12 h-px bg-border" />
          </div>

          <div className="md:col-span-2 space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceItem key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
