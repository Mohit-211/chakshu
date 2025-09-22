"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Message Sent Successfully",
      description:
        "Thank you for your interest. We'll be in touch within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Heart className="h-8 w-8 text-accent" />
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
            Let's Begin Your Journey
          </h1>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Share your details and we'll connect with you personally to discuss
            how we can help you find lasting love.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="shadow-luxury">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label
                        htmlFor="name"
                        className="font-body text-foreground"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="email"
                        className="font-body text-foreground"
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="phone"
                        className="font-body text-foreground"
                      >
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="message"
                        className="font-body text-foreground"
                      >
                        Tell Us About Yourself *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="mt-2"
                        placeholder="Share what you're looking for in a partner and what makes a meaningful relationship for you..."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="luxury"
                      size="lg"
                      className="w-full"
                    >
                      Send Message
                    </Button>

                    <p className="font-body text-sm text-muted-foreground text-center">
                      Your details remain private and confidential. We never
                      share your information with third parties.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                  We'd love to hear from you. Whether you're ready to begin your
                  journey or have questions about our approach, we're here to
                  help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-foreground">
                      Email
                    </h3>
                    <p className="font-body text-muted-foreground">
                      hello@mochadate.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-foreground">
                      Phone
                    </h3>
                    <p className="font-body text-muted-foreground">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-foreground">
                      Location
                    </h3>
                    <p className="font-body text-muted-foreground">
                      Beverly Hills, CA
                      <br />
                      Manhattan, NY
                      <br />
                      <em>Serving clients nationwide</em>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-foreground">
                      Hours
                    </h3>
                    <p className="font-body text-muted-foreground">
                      Monday - Friday: 9:00 AM - 7:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: By appointment
                    </p>
                  </div>
                </div>
              </div>

              <Card className="bg-muted/30 border-accent/20">
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                    Ready to Apply?
                  </h3>
                  <p className="font-body text-muted-foreground mb-4">
                    Complete our detailed application to begin your personalized
                    matchmaking journey.
                  </p>
                  <Button variant="luxury" asChild>
                    <a
                      href="https://forms.google.com/your-form-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Complete Application
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
