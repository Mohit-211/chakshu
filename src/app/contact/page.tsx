"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Heart } from "lucide-react";
import Image from "next/image";
import heroImage from "@/../public/connection-image.jpg";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { app } from "@/lib/firebase";

const db = getFirestore(app);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "contactForms"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      toast({
        title: "✅ Response Submitted",
        description:
          "Thanks for reaching out! We’ll get back to you within 24 hours.",
        duration: 4000,
      });

      setFormData({ name: "", email: "", message: "" });
      setSubmitted(true);
    } catch (error) {
      toast({
        title: "❌ Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setSubmitted(false); // reset success message if user edits form again
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage}
          alt="Romantic connection"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        <div className="relative z-10 text-center text-white px-6">
          <Heart className="h-10 w-10 text-accent mx-auto mb-4 animate-pulse" />
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Let’s Begin Your Journey
          </h1>
          <p className="font-body text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Share your details, and we’ll connect with you personally to begin
            your story.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-subtle relative">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-luxury bg-card/80 backdrop-blur-sm">
            <CardContent className="p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <Label htmlFor="name" className="font-body text-foreground">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="font-body text-foreground">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="mt-2"
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
                    placeholder="Share what you’re looking for in a partner and what makes a meaningful relationship for you..."
                    className="mt-2"
                  />
                </div>

                <Button
                  type="submit"
                  variant="luxury"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>

                {/* Inline success message */}
                {submitted && (
                  <p className="mt-4 text-center font-body text-green-600">
                    ✅ Your response has been submitted. We’ll be in touch soon.
                  </p>
                )}

                <p className="font-body text-sm text-muted-foreground text-center mt-2">
                  We’ll respond within 24 hours. Your details remain private and
                  confidential.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Ready to Apply CTA */}
      <section className="py-16 bg-muted/30 text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
          Ready to Take the Next Step?
        </h2>
        <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-6">
          Complete our detailed application to begin your personalized
          matchmaking journey.
        </p>
        <Button variant="luxury" size="lg" asChild>
          <a
            href="https://forms.google.com/your-form-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Complete Application
          </a>
        </Button>
      </section>
    </div>
  );
}
