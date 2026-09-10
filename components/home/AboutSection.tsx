import Link from "next/link";
import { Target, Eye, ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "Professional and fully trained staff",
  "Eco-friendly, safe cleaning products",
  "On-time, reliable service every visit",
  "Satisfaction guaranteed",
];

export default function AboutSection() {
  return (
    <div id="about" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-primary-lighter px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              About Us
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A Cleaning Company That Puts You First
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Loop Cleaning Services is a proudly Ugandan cleaning company based
              in Kampala. We deliver exceptional cleaning services for homes,
              offices, shopping malls, restaurants, and supermarkets — combining
              professional expertise with genuine care for every space we clean.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              More About Us <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-primary text-white p-8 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="mt-5 text-lg leading-relaxed text-white/85">
                To provide exceptional cleaning services that exceed customer
                expectations through professionalism, innovation, and attention
                to detail.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-primary bg-primary-lighter p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary">
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
              </div>
              <p className="mt-5 text-lg leading-relaxed text-slate-700">
                To become a leading cleaning services provider in Uganda
                known for quality, trust, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}