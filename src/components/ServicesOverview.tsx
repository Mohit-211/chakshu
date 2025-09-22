"use client";

import Image from "next/image";
import { Heart, Users, MessageCircle, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import connectionImage from "@/../public/connection-image.jpg";

const services = [
  {
    icon: Heart,
    title: "Curated Matchmaking",
    description:
      "Hand-selected matches based on deep compatibility, values, and life goals. No algorithms — just human intuition and expertise.",
  },
  {
    icon: Users,
    title: "Relationship Coaching",
    description:
      "Expert guidance to navigate dating, deepen connections, and build the foundation for lasting love.",
  },
  {
    icon: MessageCircle,
    title: "Ongoing Support",
    description:
      "Personalized coaching throughout your journey, from first introductions to long-term relationship success.",
  },
  {
    icon: Shield,
    title: "Complete Discretion",
    description:
      "Your privacy is paramount. All interactions are confidential and handled with the utmost professionalism.",
  },
];

const ServicesOverview = () => {
  return (
    <section
      id="learn-more"
      className="relative py-28 bg-gradient-to-b from-background via-muted/25 to-background"
    >
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--accent)/0.06),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            More Than Matches —{" "}
            <span className="text-primary">Meaningful Connections</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Mocha Date, love is not about chance — it’s about{" "}
            <span className="text-accent font-medium">curation, trust,</span>{" "}
            and the art of bringing two lives together with intention.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative shadow-soft hover:shadow-luxury transition-all duration-500 border border-border/40 rounded-2xl bg-card/80 backdrop-blur-sm hover:-translate-y-1 animate-fadeInUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="relative p-8">
                  <service.icon className="h-10 w-10 text-accent mb-5 transition-transform group-hover:scale-110" />
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Feature Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-luxury group">
            <Image
              src={connectionImage}
              alt="Meaningful connection over coffee"
              className="w-full h-[26rem] object-cover transform transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>

        {/* Philosophy Quote */}
        <div className="text-center">
          <Heart className="h-8 w-8 text-accent mx-auto mb-5 opacity-90 animate-pulse" />
          <blockquote className="font-heading text-2xl md:text-3xl italic text-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            “Love isn’t found in endless options — it’s discovered in meaningful
            moments with the right person.”
          </blockquote>
          <cite className="font-body text-muted-foreground text-base">
            — The Mocha Date Philosophy
          </cite>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
