"use client";

import { useEffect, useMemo, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useParams } from "next/navigation";
import BlogBody from "@/components/BlogBody";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function BlogPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    const run = async () => {
      const snap = await getDoc(doc(db, "blogs", String(slug)));
      if (snap.exists()) setBlog({ id: snap.id, ...snap.data() });
    };
    run();
  }, [slug]);

  // Auto-lead = first paragraph (remove from body if no explicit intro)
  const { lead, contentWithoutLead } = useMemo(() => {
    if (!blog?.content) return { lead: null, contentWithoutLead: null };

    const parts = blog.content.split(/\n\s*\n/).map((s: string) => s.trim());
    const first = parts.find(Boolean);
    const rest = parts.slice(1).join("\n\n");

    return {
      lead: blog.intro ?? first,
      contentWithoutLead: blog.intro ? blog.content : rest,
    };
  }, [blog]);

  if (!blog) return <p className="text-center p-6">Loading...</p>;

  // Format date (Firestore Timestamp -> JS Date -> readable)
  const createdAt = blog.createdAt?.toDate
    ? blog.createdAt.toDate()
    : new Date(blog.createdAt);
  const formattedDate = createdAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="w-full aspect-video overflow-hidden rounded-2xl mb-4 shadow-lg">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Created At */}
      <p className="text-right text-sm text-gray-500 mb-6">
        Published on {formattedDate}
      </p>

      {/* Title */}
      <h1 className="text-xl sm:text-2xl font-semibold leading-snug mb-8 text-gray-900">
        {blog.title}
      </h1>

      {/* Lead (Markdown enabled) */}
      {lead && (
        <div className="text-gray-700 text-base sm:text-base leading-relaxed mb-6 italic">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              strong: ({ children }) => (
                <strong className="font-semibold text-gray-900">
                  {children}
                </strong>
              ),
              em: ({ children }) => (
                <em className="italic text-gray-700">{children}</em>
              ),
            }}
          >
            {lead}
          </ReactMarkdown>
        </div>
      )}

      {/* Body (keep BlogBody for proper styling) */}
      <div
        className="
          prose prose-lg max-w-none
          prose-p:mb-6 prose-p:leading-relaxed
          prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-gray-900 prose-h2:text-xl
          prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-gray-800 prose-h3:text-lg
          prose-li:mb-2
          prose-blockquote:mt-8 prose-blockquote:mb-8 prose-blockquote:border-l-4
          prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:text-gray-600 prose-blockquote:bg-gray-50 prose-blockquote:py-2
        "
      >
        <BlogBody content={contentWithoutLead} />
      </div>

      {/* CTA (Markdown enabled, styled with site theme) */}
      {blog.cta && (
        <div className="mt-16 p-6 bg-[#F9F6EF] border border-[#E5E0D8] rounded-xl shadow-sm">
          <div className="text-[#3B2E2E] leading-relaxed text-lg">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                strong: ({ children }) => (
                  <strong className="font-semibold text-[#3B2E2E]">
                    {children}
                  </strong>
                ),
                em: ({ children }) => (
                  <em className="italic text-[#3B2E2E]">{children}</em>
                ),
              }}
            >
              {`👉 ${blog.cta}`}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </article>
  );
}
