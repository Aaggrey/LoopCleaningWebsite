"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles, Home, Building2, Star } from "lucide-react";
import Button from "@/components/ui/Button";

type Slide = {
  eyebrow: string;
  title: string;
  description: string;
  icon: typeof Home;
  gradient: string;
  image?: string;
};

const slides: Slide[] = [
  {
    eyebrow: "Professional Cleaning Services in Kampala",
    title: "We Make Your Space Sparkle",
    description:
      "From homes to offices, Loop Cleaning Services delivers spotless results with trained professionals and eco-friendly products.",
    icon: Sparkles,
    gradient: "from-[#01278a] via-[#0146cf] to-[#1360f7]",
    image: "/slider-1.jpg",
  },
  {
    eyebrow: "Residential & Commercial Cleaning",
    title: "Trusted by 500+ Happy Clients",
    description:
      "Homes, offices, shopping malls, restaurants and supermarkets — we keep Kampala's spaces clean and healthy.",
    icon: Building2,
    gradient: "from-[#01349e] via-[#0146cf] to-[#3f77f6]",
    image: "/slider-2.jpg",
  },
  {
    eyebrow: "Deep Cleaning Experts",
    title: "Book Your Cleaning Session Today",
    description:
      "Experience the Loop difference — reliable, efficient, and affordable cleaning services you can trust.",
    icon: Home,
    gradient: "from-[#011f6e] via-[#0146cf] to-[#527ff5]",
    image: "/slider-3.jpg",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 transition-all duration-700"></div>
      <div
        key={current}
        className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-90`}
      ></div>

      {slide.image && (
        <div className="absolute inset-0">
          <Image
            src={slide.image}
            alt=""
            fill
            priority={current === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/55 to-primary/20"></div>
        </div>
      )}

      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute right-1/3 top-1/4 h-48 w-48 rounded-full bg-white/40 blur-2xl"></div>
      </div>

      <div className="relative mx-auto flex max-w-7xl items-center px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div key={current} className="max-w-3xl animate-[fadeInUp_0.7s_ease-out]">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold backdrop-blur">
            <slide.icon className="h-4 w-4" />
            {slide.eyebrow}
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {slide.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
            {slide.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" variant="white" className="text-base">
              Book Now
            </Button>
            <Button href="/services" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Explore Services
            </Button>
          </div>
          <div className="mt-12 flex items-center gap-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="font-medium text-white/90">
              Rated 5.0 by 500+ happy clients
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3">
        <button
          onClick={() => goToSlide(current - 1)}
          aria-label="Previous slide"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/30"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                index === current ? "w-8 bg-white" : "w-2.5 bg-white/40"
              }`}
            ></button>
          ))}
        </div>
        <button
          onClick={() => goToSlide(current + 1)}
          aria-label="Next slide"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/30"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}