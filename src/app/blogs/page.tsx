"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { format } from "date-fns";

interface Blog {
  id: string;
  title: string;
  image: string;
  slug?: string;
  intro?: string;
  content?: string;
  createdAt?: { seconds: number; nanoseconds: number };
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Blog[];
        setBlogs(data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return <p className="text-center p-6">Loading blogs...</p>;
  }

  if (!blogs.length) {
    return <p className="text-center p-6">No blogs available yet.</p>;
  }

  return (
    <div>
      {/* Banner */}
      <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] overflow-hidden">
        <img
          src="/blog-banner2.png"
          alt="Our Blogs"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Blogs
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl">
            Insights, stories, and guidance on love, compatibility, and modern
            matchmaking.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto p-6 mt-16 mb-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => {
            const date = blog.createdAt
              ? format(new Date(blog.createdAt.seconds * 1000), "MMM d, yyyy")
              : null;

            const excerpt =
              blog.intro ||
              (blog.content
                ? blog.content.replace(/[#_*>\n]/g, "").slice(0, 120) + "..."
                : "");

            return (
              <a
                key={blog.id}
                href={`/blogs/${blog.id}`}
                className="block group rounded-xl overflow-hidden border bg-white shadow-sm hover:shadow-lg transition"
              >
                {/* 16:9 aspect ratio */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5">
                  {date && <p className="text-sm text-gray-500 mb-2">{date}</p>}
                  <h2 className="text-lg font-semibold text-gray-900 group-hover:text-red-700 mb-3 line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-snug line-clamp-3">
                    {excerpt}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
