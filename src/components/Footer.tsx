import { Heart, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and tagline */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="font-heading text-2xl font-semibold text-primary">
                Evermore
              </span>
              <Heart className="ml-2 h-5 w-5 text-accent" />
            </div>
            <p className="font-body text-muted-foreground">
              Because love deserves more than an algorithm.
            </p>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Connect With Us
            </h3>
            <div className="space-y-2">
              <p className="font-body text-muted-foreground">
                hello@evermore-matchmaking.com
              </p>
              <p className="font-body text-muted-foreground">
                +1 (555) 123-4567
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/evermore-matchmaking"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com/evermore_matchmaking"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Privacy and legal */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Privacy & Trust
            </h3>
            <div className="space-y-2">
              <a
                href="/privacy"
                className="font-body text-muted-foreground hover:text-primary transition-smooth block"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="font-body text-muted-foreground hover:text-primary transition-smooth block"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="font-body text-muted-foreground">
            © 2024 Evermore Matchmaking. All rights reserved. Your privacy and confidentiality are our highest priority.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;