import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { blogPosts } from "@/lib/data";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export default function BlogPreview() {
  return (
    <div id="blog" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Blog"
          title="Cleaning Tips & Insights"
          description="Expert advice on keeping your home and workplace clean, organized, and healthy."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <Link href={`/blog/${post.id}`} className="block">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="rounded-full bg-primary-lighter px-3 py-1 font-semibold text-primary">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-snug text-slate-900 group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Read More <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            View All Blog Posts <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}