"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { src: "/gallery/sofa-cleaning.png", alt: "Professional sofa cleaning", category: "Deep Cleaning" },
  { src: "/gallery/sofa-cleaning-2.png", alt: "Sofa upholstery cleaning in progress", category: "Deep Cleaning" },
  { src: "/gallery/sofa-cleaning-3.png", alt: "Upholstery cleaning service", category: "Deep Cleaning" },
  { src: "/gallery/sofa-cleaning-4.png", alt: "Sofa cleaning with professional equipment", category: "Deep Cleaning" },
  { src: "/gallery/sofa-cleaning-5.png", alt: "Upholstery deep cleaning result", category: "Deep Cleaning" },
  { src: "/gallery/carpet-cleaning.png", alt: "Carpet cleaning service", category: "Deep Cleaning" },
  { src: "/gallery/floor-care.png", alt: "Professional floor care", category: "Residential" },
  { src: "/gallery/floor-care-2.png", alt: "Floor cleaning in progress", category: "Residential" },
  { src: "/gallery/home-cleaning.png", alt: "Home cleaning service", category: "Residential" },
  { src: "/gallery/home-cleaning-2.png", alt: "Home cleaning in progress", category: "Residential" },
  { src: "/gallery/loop-cleaning-staff.png", alt: "Loop Cleaning Services team", category: "Our Team" },
];

export default function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);

  const close = useCallback(() => setSelected(null), []);
  const navigate = useCallback(
    (dir: 1 | -1) => {
      setSelected((prev) =>
        prev === null
          ? prev
          : (prev + dir + galleryImages.length) % galleryImages.length
      );
    },
    []
  );

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, close, navigate]);

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Our Work in Action"
        description="A glimpse of the professional cleaning results we deliver for homes and businesses across Kampala."
      />

      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                onClick={() => setSelected(index)}
                className="group mb-6 block w-full overflow-hidden rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label={`View ${image.alt}`}
              >
                <div className="relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/80 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-left text-sm font-semibold text-white">
                      {image.alt}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(-1);
            }}
            aria-label="Previous image"
            className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div
            className="max-h-[85vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selected].src}
              alt={galleryImages[selected].alt}
              width={1200}
              height={900}
              className="max-h-[85vh] w-auto rounded-xl object-contain"
            />
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-white">
                {galleryImages[selected].alt}
              </p>
              <p className="text-sm text-white/70">
                {selected + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(1);
            }}
            aria-label="Next image"
            className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}