"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is Petal & Promise?",
    answer:
      "Petal & Promise is a premium matchmaking service that blends traditional values with modern compatibility insights. We help individuals and families find meaningful, lasting connections by focusing on alignment in values, lifestyle, and future goals — not just superficial criteria.",
  },
  {
    question: "Who do you cater to?",
    answer:
      "We work with discerning singles and families who are seeking serious, long-term relationships or marriage. Our members typically value privacy, emotional intelligence, lifestyle compatibility, and thoughtful introductions over casual swiping or mass-market platforms.",
  },
  {
    question: "Is Petal & Promise an online dating app?",
    answer:
      "No. We are not a dating app. Petal & Promise is a curated matchmaking platform. While our process uses technology to make matching efficient, every profile and introduction is personalized and reviewed by our team to ensure genuine compatibility.",
  },
  {
    question: "How does the matchmaking process work?",
    answer:
      "The journey begins with an application where you share details about your lifestyle, values, and aspirations. Our team reviews the application and, if shortlisted, schedules a consultation. Matches are then curated based on compatibility across multiple dimensions — from personal values and lifestyle choices to long-term goals.",
  },
  {
    question: "What makes you different from other matchmaking platforms?",
    answer:
      "Unlike traditional matrimony portals or casual dating apps, we prioritize quality over quantity. Every profile is curated, and every match is considered thoughtfully. We combine timeless matchmaking wisdom with modern relationship psychology to ensure introductions that truly matter.",
  },
  {
    question: "Is my information kept private?",
    answer:
      "Yes, absolutely. Confidentiality is one of our core principles. Your personal details are never shared publicly. Profiles are handled discreetly, and matches are introduced only with your consent.",
  },
  {
    question: "Do you only cater to arranged marriages?",
    answer:
      "Not at all. While we deeply respect Indian traditions, Petal & Promise is about meaningful compatibility. Whether you prefer arranged introductions guided by family or modern, independent choices, our process is tailored to your needs.",
  },
  {
    question: "Do you serve clients outside India?",
    answer:
      "Yes. We cater to both Indian residents and the global Indian diaspora. Many of our clients are professionals and families based abroad who value a thoughtful, culturally-aware matchmaking process.",
  },
  {
    question: "Is there an eligibility or screening process?",
    answer:
      "Yes. To maintain the quality and integrity of our network, every application goes through a screening process. This ensures we work with members who are genuinely seeking serious, long-term relationships.",
  },
  {
    question: "What is the cost of your services?",
    answer:
      "As a premium matchmaking service, we work on a selective, membership-based model. Fees depend on the package and level of personalization involved. Once your application is shortlisted, our team will share details of the membership options.",
  },
  {
    question: "How long does it take to find a match?",
    answer:
      "Matchmaking is a thoughtful process. While some members find alignment quickly, others may take longer. Our goal is not speed but the right fit — introductions that are meaningful and lasting.",
  },
  {
    question: "Do you guarantee marriage?",
    answer:
      "No. We cannot guarantee marriage, as relationships depend on mutual choice and timing. What we do guarantee is a curated process, high-quality introductions, and complete privacy throughout your journey.",
  },
  {
    question: "What kind of support can I expect during the process?",
    answer:
      "Our team is with you at every step — from application to consultation, introductions, and feedback. We ensure the process is smooth, supportive, and respectful of your preferences.",
  },
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Banner */}
      <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] overflow-hidden">
        <img
          src="/faq-banner.jpg"
          alt="FAQs"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            FAQs
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl">
            Find answers to the most common questions about Petal & Promise.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 py-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-900 focus:outline-none"
            >
              {faq.question}
              <span className="ml-4 text-gray-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-600 leading-relaxed">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
