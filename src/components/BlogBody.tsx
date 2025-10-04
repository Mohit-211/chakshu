"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

type Props = { content: string };

function looksLikeHtml(s: string) {
  return /<\/?[a-z][\s\S]*>/i.test(s);
}

export default function BlogBody({ content }: Props) {
  if (!content) return null;

  // Fallback for HTML content
  if (looksLikeHtml(content)) {
    return (
      <div
        className="prose prose-lg max-w-none
        prose-p:mb-6 prose-p:leading-relaxed
        prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-xl prose-h2:font-bold
        prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-lg prose-h3:font-semibold
        prose-li:mb-2
        prose-blockquote:mt-8 prose-blockquote:mb-8 prose-blockquote:border-l-4 prose-blockquote:border-red-400 prose-blockquote:pl-4"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  // Markdown renderer
  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm] as any}
        rehypePlugins={[rehypeRaw] as any}
        components={{
          h1: (props) => (
            <h2 className="text-2xl font-semibold mt-10 mb-4" {...props} />
          ),
          h2: (props) => (
            <h3 className="text-xl font-semibold mt-10 mb-3" {...props} />
          ),
          h3: (props) => (
            <h4 className="text-lg font-semibold mt-8 mb-2" {...props} />
          ),
          p: (props) => (
            <p className="mb-6 leading-relaxed text-gray-800" {...props} />
          ),
          blockquote: (props) => (
            <blockquote
              className="mt-8 mb-8 border-l-4 border-red-400 pl-4 italic text-gray-700"
              {...props}
            />
          ),
          img: (props) => (
            <img
              {...props}
              className="my-6 rounded-lg w-full h-auto"
              alt={props.alt ?? ""}
            />
          ),
          ul: (props) => (
            <ul className="list-disc pl-6 space-y-2 mb-6" {...props} />
          ),
          ol: (props) => (
            <ol className="list-decimal pl-6 space-y-2 mb-6" {...props} />
          ),
          a: (props) => (
            <a
              {...props}
              className="underline decoration-red-400 underline-offset-4 hover:opacity-80"
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
