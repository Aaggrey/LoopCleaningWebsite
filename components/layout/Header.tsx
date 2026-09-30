"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone, Sparkles } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-primary text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm sm:px-6 lg:px-8">
          <p className="flex items-center gap-2 font-medium">
            <Sparkles className="h-4 w-4" />
            <span className="hidden sm:inline">
              #Don&apos;t Stress the mess
            </span>
            <span className="sm:hidden">#Don&apos;t Stress the mess</span>
          </p>
          <a
            href="tel:+256703652751"
            className="flex items-center gap-1.5 font-semibold hover:underline"
          >
            <Phone className="h-4 w-4" />
            +256 703 652 751
          </a>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Loop Cleaning Services Logo"
            width={150}
            height={60}
            className="h-[60px] w-[150px] object-contain"
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-gray-700 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="rounded-full border-2 border-primary px-5 py-2.5 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Get a Quote
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-primary px-5 py-2.5 font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Book Now
          </Link>
        </div>

        <button
          className="rounded-md p-2 text-slate-700 hover:bg-gray-100 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-primary-lighter hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-3">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex-1 rounded-full border-2 border-primary px-5 py-2.5 text-center font-semibold text-primary"
              >
                Get a Quote
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex-1 rounded-full bg-primary px-5 py-2.5 text-center font-semibold text-white"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}