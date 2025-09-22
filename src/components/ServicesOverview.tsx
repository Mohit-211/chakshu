import Image from "next/image";
import { Heart, Users, MessageCircle, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import connectionImage from "@/../public/connection-image.jpg";

const services = [
  {
    icon: Heart,
    title: "Curated Matchmaking",
    description:
      "Hand-selected matches based on deep compatibility, values, and life goals. No algorithms, just human intuition and expertise.",
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
    <section id="learn-more" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            A Different Approach to Love
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe meaningful relationships are built on genuine connection,
            shared values, and human understanding—not swipes and algorithms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="shadow-soft hover:shadow-elegant transition-luxury border-border"
              >
                <CardContent className="p-6">
                  <service.icon className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative">
            <Image
              src={connectionImage}
              alt="Meaningful connection over coffee"
              className="w-full h-96 object-cover rounded-lg shadow-luxury"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg" />
          </div>
        </div>

        <div className="text-center">
          <blockquote className="font-heading text-2xl md:text-3xl italic text-foreground mb-6 max-w-3xl mx-auto">
            "Love isn't found in endless options—it's discovered in meaningful
            moments with the right person."
          </blockquote>
          <cite className="font-body text-muted-foreground">
            — The Mocha Date Philosophy
          </cite>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
