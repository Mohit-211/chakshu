"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import heroImage from "@/../public/hero-image.jpg";

const Hero = () => {
  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage}
          alt="Romantic couple enjoying coffee together"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-6 sm:px-8 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="flex justify-center mb-6">
            <Heart className="h-9 w-9 text-accent animate-pulse drop-shadow-md" />
          </div>

          <h1 className="font-heading text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight text-white drop-shadow-lg">
            Because Love Deserves More Than an Algorithm
          </h1>

          <p className="font-body text-lg sm:text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Curated matches, meaningful connections, and relationship guidance
            for lasting&nbsp;love.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary CTA */}
            <Button
              size="lg"
              variant="luxury"
              asChild
              className="text-lg px-8 py-4 h-auto shadow-md hover:shadow-lg transition-all"
              aria-label="Apply Now"
            >
              <a
                href="https://apply.petalandpromise.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Apply Now
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>

            {/* Learn More CTA */}
            <a
              href="#learn-more"
              className="inline-flex items-center gap-2 text-lg px-8 py-4 rounded-md border border-white/40 bg-white/10 text-white hover:bg-white hover:text-primary transition-all duration-200"
              aria-label="Learn more about our services"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-80">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
