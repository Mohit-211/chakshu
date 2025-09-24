"use client";

import Image from "next/image";
import { Heart, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-muted/30 to-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Logo + Tagline */}
          <div className="flex flex-col items-center md:items-start space-y-5">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Petal & Promise"
                width={180}
                height={80}
                className="h-auto w-24"
                priority
              />
              <Heart className="h-6 w-6 text-accent" />
            </div>
            <p className="font-body text-base text-muted-foreground text-center md:text-left max-w-sm leading-relaxed">
              Crafting meaningful connections with care, privacy, and intention.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center md:justify-center space-x-10">
            <a
              href="/about"
              className="font-body text-sm md:text-base text-muted-foreground hover:text-primary transition-smooth"
            >
              About
            </a>
            <a
              href="/contact"
              className="font-body text-sm md:text-base text-muted-foreground hover:text-primary transition-smooth"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="font-body text-sm md:text-base text-muted-foreground hover:text-primary transition-smooth"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="font-body text-sm md:text-base text-muted-foreground hover:text-primary transition-smooth"
            >
              Terms
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end space-x-6">
            <a
              href="https://linkedin.com/company/Petal&Promise"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://instagram.com/Petal&Promise"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-6 text-center">
          <p className="font-body text-xs md:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Petal & Promise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
