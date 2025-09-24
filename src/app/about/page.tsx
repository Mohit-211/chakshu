"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Users, Shield, Target, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import counselorImage from "@/../public/couple.jpg";
import heroImage from "@/../public/connection-image.jpg"; // banner

const values = [
  {
    icon: Heart,
    title: "Authentic Connection",
    description:
      "We believe in the power of genuine human connection over superficial attraction. Every introduction is based on deep compatibility and shared values.",
  },
  {
    icon: Shield,
    title: "Privacy & Discretion",
    description:
      "Your journey to love should be personal and protected. We maintain the highest standards of confidentiality and professional discretion.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description:
      "No two love stories are the same. We tailor our approach to your unique personality, goals, and relationship preferences.",
  },
  {
    icon: Target,
    title: "Quality Over Quantity",
    description:
      "We focus on meaningful matches rather than endless options. Each introduction is carefully considered and purposeful.",
  },
];

const process = [
  {
    step: "01",
    title: "Understand You",
    description:
      "We begin with an in-depth consultation to understand your values, goals, and what you're truly seeking in a partner.",
  },
  {
    step: "02",
    title: "Curate Matches",
    description:
      "Our team personally reviews and selects potential matches from our exclusive network based on deep compatibility.",
  },
  {
    step: "03",
    title: "Facilitate Introductions",
    description:
      "We arrange thoughtful, comfortable meetings that allow authentic connection to flourish naturally.",
  },
  {
    step: "04",
    title: "Provide Ongoing Support",
    description:
      "We're with you every step of the way, offering relationship coaching and guidance as your connection develops.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage}
          alt="Couple walking at sunset"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
            Our Story
          </h1>
          <p className="font-body text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-white/90 animate-fadeInUp [animation-delay:200ms]">
            At <strong>Petal & Promise</strong>, we believe love is a craft —
            blending timeless matchmaking wisdom with modern relationship
            psychology.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeInUp">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Our Philosophy
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              In a world dominated by swipes and algorithms, we've chosen a
              different path. We believe that lasting love is built on genuine
              compatibility, shared values, and deep understanding — elements
              that only human insight can assess.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Our approach combines the timeless art of matchmaking with modern
              psychology, guiding people toward meaningful, lasting
              partnerships.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Every client receives our full attention and expertise, because
              finding love isn’t about meeting anyone — it’s about meeting the
              right one at the right time.
            </p>
          </div>
          <div className="relative animate-fadeInUp [animation-delay:300ms]">
            <Image
              src={counselorImage}
              alt="Couple holding hands"
              className="rounded-2xl shadow-luxury object-cover h-[26rem] w-full"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Our Core Values
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every introduction and every love story
              we help create.
            </p>
          </div>

          {/* TIMELINE WRAPPER: holds the vertical line and the items */}
          <div className="relative pl-10">
            {/* vertical line — positioned once for the whole list */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-accent/30" />

            {/* items list */}
            <div className="space-y-16">
              {values.map((value, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[40px_1fr] gap-6 items-start animate-fadeInUp"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  {/* ICON COLUMN (fixed width) */}
                  <div className="flex items-start justify-center">
                    <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center shadow-elegant">
                      <value.icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* CONTENT COLUMN */}
                  <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft hover:shadow-luxury transition-all">
                    <h3 className="font-heading text-xl font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              How We Work
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              A thoughtful journey blending expertise and intuition to create
              genuine matches.
            </p>
          </div>

          {/* Desktop process line */}
          <div className="hidden lg:flex justify-between items-start relative">
            {/* Animated connecting line */}
            <div className="absolute top-[28px] left-0 w-full h-[3px] bg-border overflow-hidden">
              <div className="h-full bg-accent animate-growLine origin-left" />
            </div>

            {process.map((step, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center w-1/4 px-4 animate-fadeInUp"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg mb-4 shadow-soft animate-pulse-slow">
                  {step.step}
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile vertical stepper */}
          <div className="space-y-12 lg:hidden">
            {process.map((step, i) => (
              <div
                key={i}
                className="flex items-start space-x-4 animate-fadeInUp"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg shadow-soft animate-pulse-slow">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counseling */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Relationship Counseling Approach
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
              Our guidance goes beyond introductions. We help you nurture the
              skills and mindset needed for lifelong love.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
              "Pre-Date Coaching",
              "Relationship Development",
              "Long-term Support",
            ].map((title, i) => (
              <Card
                key={i}
                className="bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-luxury transition-all animate-fadeInUp"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <h3 className="font-heading text-xl font-semibold mb-4">
                    {title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {i === 0 &&
                      "Preparation and confidence-building to ensure you present your authentic best self."}
                    {i === 1 &&
                      "Guidance on deepening connections and navigating the early stages of romance."}
                    {i === 2 &&
                      "Ongoing coaching for relationship challenges and milestone moments."}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="luxury" size="lg" asChild>
              <a href="/contact" className="flex items-center gap-2">
                Start Your Journey
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
