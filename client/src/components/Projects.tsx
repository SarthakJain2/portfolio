import { ExternalLink, Github } from 'lucide-react';
import { trackProjectClick } from '@/lib/analytics';
import { useReveal } from '@/hooks/useReveal';

const projects = [
  {
    id: 1,
    title: 'Monitord',
    description: 'System monitoring solution built with a high-performance HTTP server in modern C++17. This project provides real-time monitoring of system resources (CPU, memory, disk, network) with a beautiful web dashboard, WebSocket support for live updates, and intelligent alerting.',
    tech: ['C++', 'CMake', 'JavaScript', 'WebSocket', 'RestAPI'],
    sourceUrl: 'https://github.com/SarthakJain2/monitord',
    featured: true,
  },
  {
    id: 2,
    title: 'CloudSync',
    description: 'Real-time file synchronization service with end-to-end encryption and cross-platform support.',
    tech: ['Go', 'React Native', 'AWS', 'Redis'],
    sourceUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 3,
    title: 'MetricsDash',
    description: 'Analytics dashboard for monitoring application performance with customizable widgets and alerting.',
    tech: ['Python', 'React', 'InfluxDB', 'Grafana'],
    sourceUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 4,
    title: 'TaskMaster',
    description: 'Minimalist task management app with keyboard-first navigation and smart prioritization.',
    tech: ['TypeScript', 'Svelte', 'SQLite'],
    sourceUrl: 'https://github.com',
    featured: false,
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, isRevealed } = useReveal({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`card-animate group p-6 bg-card border border-border rounded-lg hover-glow reveal-scale ${
        isRevealed ? 'revealed' : ''
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      data-testid={`card-project-${project.id}`}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-medium group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <div className="flex items-center gap-2">
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackProjectClick(project.title, 'source')}
              className="icon-animate p-1.5 text-muted-foreground hover:text-foreground"
              data-testid={`link-project-source-${project.id}`}
            >
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t, techIndex) => (
          <span
            key={t}
            className={`px-2 py-0.5 text-xs font-mono bg-accent rounded text-muted-foreground transition-all duration-300 ${
              isRevealed ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: `${index * 100 + techIndex * 50 + 200}ms` }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  const { ref: headerRef, isRevealed: headerRevealed } = useReveal({ threshold: 0.3 });

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div 
          ref={headerRef}
          className="grid md:grid-cols-3 gap-12 md:gap-16 mb-16"
        >
          <div className={`reveal-left ${headerRevealed ? 'revealed' : ''}`}>
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-4">
              Projects
            </h2>
            <div className="w-12 h-px bg-border" />
          </div>

          <div 
            className={`md:col-span-2 reveal ${headerRevealed ? 'revealed' : ''}`}
            style={{ transitionDelay: '150ms' }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              A selection of projects I've worked on. Some are professional work, 
              others are side projects and experiments.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
