"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Mocha Date"
              width={160}
              height={80}
              className="h-auto w-24"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-body font-medium transition-smooth ${
                isActive("/")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-body font-medium transition-smooth ${
                isActive("/about")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`font-body font-medium transition-smooth ${
                isActive("/contact")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Contact
            </Link>
            <Button variant="luxury" asChild>
              <a
                href="https://forms.google.com/your-form-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary transition-smooth"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={toggleMenu}
                className={`font-body font-medium transition-smooth ${
                  isActive("/")
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={toggleMenu}
                className={`font-body font-medium transition-smooth ${
                  isActive("/about")
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                onClick={toggleMenu}
                className={`font-body font-medium transition-smooth ${
                  isActive("/contact")
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                Contact
              </Link>
              <Button variant="luxury" className="w-fit" asChild>
                <a
                  href="https://forms.google.com/your-form-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
