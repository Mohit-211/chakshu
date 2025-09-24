import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

// ✅ Global branding metadata
export const metadata: Metadata = {
  title: "Petal & Promise – Curated Matchmaking & Relationship Counseling",
  description:
    "Boutique matchmaking agency helping professionals build meaningful, lasting relationships. Because love deserves more than an algorithm.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Petal & Promise – Curated Matchmaking",
    description:
      "Curated introductions, personalized counseling, and lasting connections.",
    url: "https://Petal&Promise.com",
    siteName: "Petal & Promise",
    images: [
      {
        url: "/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Petal & Promise Hero",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Petal & Promise – Boutique Matchmaking",
    description: "Because love deserves more than an algorithm.",
    images: ["/hero-image.jpg"],
    creator: "@Petal&Promise", // optional if you create a Twitter/X account
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Inter:wght@400;500;600&display=swap"
        />
      </head>
      <body className="bg-ivory text-charcoal font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
