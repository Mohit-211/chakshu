import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Shield, Target, ArrowRight } from "lucide-react";
import Image from "next/image";
import counselorImage from "@/../public/counselor-image.jpg";

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
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Story
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Founded on the belief that meaningful relationships require more
              than algorithms, <strong>Mocha Date</strong> combines traditional
              matchmaking wisdom with modern relationship science.
            </p>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Philosophy
              </h2>
              <div className="space-y-6">
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  In a world dominated by swipes and algorithms, we've chosen a
                  different path. We believe that lasting love is built on
                  genuine compatibility, shared values, and deep
                  understanding—elements that can only be assessed through human
                  insight and intuition.
                </p>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  Our approach combines the timeless art of matchmaking with
                  modern relationship psychology, creating connections that
                  stand the test of time. We don't just introduce people; we
                  guide them toward meaningful, lasting partnerships.
                </p>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  Every client receives our complete attention and expertise,
                  because we understand that finding your person isn't just
                  about meeting someone—it's about meeting the right someone at
                  the right time in the right way.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src={counselorImage}
                alt="Professional relationship counselor"
                className="w-full h-96 object-cover rounded-lg shadow-luxury"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-lg" />
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Values
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do and every connection we
                facilitate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="shadow-soft hover:shadow-elegant transition-luxury"
                >
                  <CardContent className="p-8">
                    <value.icon className="h-10 w-10 text-accent mb-6" />
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              How We Work
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Our proven process combines personal attention with professional
              expertise to create meaningful connections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full font-heading text-2xl font-bold mb-6">
                  {step.step}
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relationship Counseling Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Relationship Counseling Approach
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our relationship guidance goes beyond introductions. We provide
              ongoing support to help you build the skills for lasting love.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="shadow-soft">
              <CardContent className="p-8 text-center">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  Pre-Date Coaching
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Preparation and confidence-building to ensure you present your
                  authentic best self.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-8 text-center">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  Relationship Development
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Guidance on deepening connections and navigating the early
                  stages of romance.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-8 text-center">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  Long-term Support
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Ongoing coaching for relationship challenges and milestone
                  moments.
                </p>
              </CardContent>
            </Card>
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
