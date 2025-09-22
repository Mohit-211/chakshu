"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import heroImage from "@/../public/hero-image.jpg"; // ✅ move image into /public

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Romantic couple enjoying coffee together"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="fade-in-up">
          <div className="flex justify-center mb-6">
            <Heart className="h-8 w-8 text-accent animate-pulse" />
          </div>

          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Because Love Deserves More Than an Algorithm
          </h1>

          <p className="font-body text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Curated matches, meaningful connections, and relationship guidance
            for lasting love.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="luxury"
              asChild
              className="text-lg px-8 py-4 h-auto"
            >
              <a
                href="https://forms.google.com/your-form-link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Apply Now
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-4 h-auto border-white text-white hover:bg-white hover:text-primary"
            >
              <a href="#learn-more">Learn More</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
