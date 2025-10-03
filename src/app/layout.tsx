import type { Metadata } from "next";
import Script from "next/script";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

// ✅ Global branding metadata
export const metadata: Metadata = {
  title: "Petal & Promise – Curated Matchmaking & Relationship Counseling",
  description:
    "Boutique matchmaking agency helping professionals build meaningful, lasting relationships. Because love deserves more than an algorithm.",
  metadataBase: new URL("https://petalandpromise.in"),
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Petal & Promise – Curated Matchmaking",
    description:
      "Curated introductions, personalized counseling, and lasting connections.",
    url: "https://petalandpromise.in",
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
    creator: "@PetalPromise", // optional if you create a Twitter/X account
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

        {/* ✅ Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=GTM-TSXQF9N7'+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TSXQF9N7');
          `}
        </Script>
      </head>
      <body className="bg-ivory text-charcoal font-sans antialiased">
        {/* ✅ GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TSXQF9N7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
