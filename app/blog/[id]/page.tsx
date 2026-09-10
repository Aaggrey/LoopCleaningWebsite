import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import { Calendar, Clock, ChevronLeft, ArrowRight } from "lucide-react";
import { company } from "@/lib/data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ id: post.id }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      <div className="relative overflow-hidden bg-primary py-16 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white blur-3xl"></div>
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/85 hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <span className="mt-6 inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold backdrop-blur">
            {post.category}
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-white/85">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {post.readTime}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-80 overflow-hidden rounded-2xl shadow-sm sm:h-[420px]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="mt-12">
            {post.content.map((section, index) => (
              <div key={index}>
                {section.heading && (
                  <h2 className="mt-10 text-2xl font-bold text-slate-900">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className={`text-lg leading-relaxed text-slate-600 ${
                      index === 0 && pIndex === 0 ? "" : "mt-5"
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-5 space-y-3">
                    {section.list.map((item, lIndex) => (
                      <li
                        key={lIndex}
                        className="flex items-start gap-3 rounded-lg bg-primary-lighter px-4 py-3 text-base text-slate-700"
                      >
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.tail && (
                  <p className="mt-5 text-lg font-semibold text-primary">
                    {section.tail}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-primary p-10 text-center text-white">
            <h3 className="text-2xl font-bold">Ready for a Spotless Home?</h3>
            <p className="mx-auto mt-3 max-w-xl text-white/85">
              Let Loop Cleaning Services handle the hard work. Book your
              cleaning session today.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-primary transition-colors hover:bg-primary-lighter"
              >
                Book Now
              </a>
              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 font-semibold text-white transition-colors hover:bg-[#1fb457]"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="bg-primary-lighter py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader eyebrow="Keep Reading" title="More Articles" />
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {related.map((item) => (
                <article
                  key={item.id}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <Link href={`/blog/${item.id}`} className="block">
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="rounded-full bg-primary-lighter px-3 py-1 text-xs font-semibold text-primary">
                        {item.category}
                      </span>
                      <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-900 group-hover:text-primary">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}