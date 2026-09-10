"use client";

import { useCallback, useEffect, useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/data";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const maxIndex = Math.max(0, testimonials.length - 2);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const visible = testimonials.slice(current, current + 2);

  return (
    <div className="bg-primary-lighter py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="What Our Clients Say"
          description="Don't just take our word for it — hear from the homes and businesses we've had the pleasure of serving."
        />

        <div className="relative mt-16">
          <div className="grid gap-8 md:grid-cols-2">
            {visible.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="rounded-2xl bg-white p-8 shadow-sm"
              >
                <Quote className="h-10 w-10 text-primary-lighter" />
                <p className="mt-4 text-base leading-relaxed text-slate-700">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                {testimonial.detail && (
                  <p className="mt-3 inline-block rounded-full bg-primary-lighter px-3 py-1 text-xs font-semibold text-primary">
                    {testimonial.detail}
                  </p>
                )}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-bold text-white">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-slate-500">Verified Client</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-dark"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-dark"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}