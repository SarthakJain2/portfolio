import { Mail, MapPin, Send } from 'lucide-react';
import { trackContactAction } from '@/lib/analytics';

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-4">
              Contact
            </h2>
            <div className="w-12 h-px bg-border" />
          </div>

          <div className="md:col-span-2 space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and design. Feel free to reach out.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:hello@alexchen.dev"
                onClick={() => trackContactAction('email')}
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-muted-foreground/30 transition-colors group"
                data-testid="link-contact-email"
              >
                <div className="p-3 bg-accent rounded-full">
                  <Mail className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">hello@alexchen.dev</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
                <div className="p-3 bg-accent rounded-full">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium" data-testid="text-location">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="mailto:hello@alexchen.dev?subject=Hello from your portfolio"
                onClick={() => trackContactAction('send_message')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                data-testid="button-send-message"
              >
                <Send className="h-4 w-4" />
                Send a message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
