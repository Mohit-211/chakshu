"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { format } from "date-fns";
import Link from "next/link";

interface Blog {
  id: string;
  title: string;
  image: string;
  slug?: string;
  intro?: string;
  content?: string;
  createdAt?: { seconds: number; nanoseconds: number };
}

export default function LatestBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const q = query(
          collection(db, "blogs"),
          orderBy("createdAt", "desc"),
          limit(3)
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Blog[];
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching latest blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return <p className="text-center py-6">Loading blogs...</p>;
  }

  if (!blogs.length) {
    return null; // Don't show section if no blogs
  }

  return (
    <section className="relative mb-24">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.05),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Latest from <span className="text-primary">Our Blog</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore stories, insights, and perspectives on{" "}
            <span className="text-accent font-medium">
              modern relationships
            </span>
            , compatibility, and love — curated by Petal & Promise.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => {
            const date = blog.createdAt
              ? format(new Date(blog.createdAt.seconds * 1000), "MMM d, yyyy")
              : null;

            const excerpt =
              blog.intro ||
              (blog.content
                ? blog.content.replace(/[#_*>\n]/g, "").slice(0, 100) + "..."
                : "");

            return (
              <Link
                key={blog.id}
                href={`/blogs/${blog.id}`}
                className="group rounded-xl overflow-hidden border bg-white shadow-sm hover:shadow-lg transition"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  {date && <p className="text-xs text-gray-500 mb-1">{date}</p>}
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-700 mb-2 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-snug line-clamp-3">
                    {excerpt}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Read More button */}
        <div className="text-center mt-12">
          <Link
            href="/blogs"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-primary/90 transition"
          >
            Read More Blogs →
          </Link>
        </div>
      </div>
    </section>
  );
}
