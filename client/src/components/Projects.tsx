import { ExternalLink, Github } from 'lucide-react';
import { trackProjectClick } from '@/lib/analytics';

const projects = [
  {
    id: 1,
    title: 'DevFlow',
    description: 'A developer productivity tool that streamlines code review workflows and integrates with popular version control systems.',
    tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 2,
    title: 'CloudSync',
    description: 'Real-time file synchronization service with end-to-end encryption and cross-platform support.',
    tech: ['Go', 'React Native', 'AWS', 'Redis'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 3,
    title: 'MetricsDash',
    description: 'Analytics dashboard for monitoring application performance with customizable widgets and alerting.',
    tech: ['Python', 'React', 'InfluxDB', 'Grafana'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 4,
    title: 'TaskMaster',
    description: 'Minimalist task management app with keyboard-first navigation and smart prioritization.',
    tech: ['TypeScript', 'Svelte', 'SQLite'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-16">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-4">
              Projects
            </h2>
            <div className="w-12 h-px bg-border" />
          </div>

          <div className="md:col-span-2">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A selection of projects I've worked on. Some are professional work, 
              others are side projects and experiments.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group p-6 bg-card border border-border rounded-lg hover:border-muted-foreground/30 transition-all duration-300"
              data-testid={`card-project-${project.id}`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2">
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackProjectClick(project.title, 'source')}
                      className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-project-source-${project.id}`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackProjectClick(project.title, 'demo')}
                      className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-project-demo-${project.id}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs font-mono bg-accent rounded text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
