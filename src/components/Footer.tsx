"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  const links = [
    { href: "/about", label: "About" },
    { href: "/blogs", label: "Blogs" },
    { href: "/faqs", label: "FAQs" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy-policy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ];

  return (
    <footer className="bg-[#F9F6EF] border-t border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Grid Layout */}
        <div className="grid gap-10 md:grid-cols-3 md:items-center">
          {/* Logo + Tagline */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Image
              src="/logo.png"
              alt="Petal & Promise"
              width={160}
              height={70}
              className="h-auto w-auto"
            />
            <p className="text-sm text-gray-600 text-center md:text-left max-w-xs leading-relaxed">
              Crafting meaningful connections with care, privacy, and intention.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 rounded transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex justify-center md:justify-end space-x-6">
            <a
              href="https://linkedin.com/company/petalandpromise"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-500 hover:text-gray-900 transition-transform transform hover:scale-110 focus-visible:ring-2 focus-visible:ring-gray-400 rounded"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://instagram.com/petalandpromise"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-500 hover:text-gray-900 transition-transform transform hover:scale-110 focus-visible:ring-2 focus-visible:ring-gray-400 rounded"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-[#E5E0D8] mt-10 pt-6 text-center space-y-2">
          <p className="text-xs text-gray-500">
            © {year} Petal & Promise. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            Made with ❤️ for meaningful connections.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
