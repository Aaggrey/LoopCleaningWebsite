import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <div id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Do"
          title="Our Cleaning Services"
          description="From everyday tidying to intensive deep cleans, we offer a full range of professional cleaning services for homes and businesses across Kampala."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href="/services"
              className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-lighter transition-colors group-hover:bg-primary">
                <service.icon className="h-7 w-7 text-primary transition-colors group-hover:text-white" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:underline">
                Learn more <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            View All Services <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}