import { Linkedin, Github, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Mohamed Faizeen J. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:faizeenjabbar80@gmail.com"
              className="p-2 rounded-full glass hover:bg-primary/20 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} className="text-muted-foreground hover:text-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-faizeen-j/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass hover:bg-primary/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="text-muted-foreground hover:text-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
