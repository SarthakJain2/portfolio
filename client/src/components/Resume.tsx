import { Download, Eye } from 'lucide-react';
import { trackResumeAction } from '@/lib/analytics';

export function Resume() {
  const resumeUrl = '/resume.pdf';

  return (
    <section className="py-24 md:py-32 bg-card/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-4">
              Resume
            </h2>
            <div className="w-12 h-px bg-border" />
          </div>

          <div className="md:col-span-2">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Want a quick overview of my experience and skills? Download my resume 
              or view it directly in your browser.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackResumeAction('view')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                data-testid="button-view-resume"
              >
                <Eye className="h-4 w-4" />
                View Resume
              </a>
              <a
                href={resumeUrl}
                download="Alex_Chen_Resume.pdf"
                onClick={() => trackResumeAction('download')}
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm font-medium hover:bg-accent transition-colors"
                data-testid="button-download-resume"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
            </div>

            <p className="text-xs text-muted-foreground mt-6">
              Note: This is a placeholder. Replace with your actual resume file.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
