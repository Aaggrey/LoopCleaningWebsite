import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/lib/data";
import Button from "@/components/ui/Button";
import { Check, HelpCircle, ShieldCheck, ThumbsUp, Handshake, Phone } from "lucide-react";
import { company } from "@/lib/data";

const inclusions = [
  "Free quote & consultation",
  "Insurance-backed service",
  "Trained & vetted cleaners",
  "Quality guarantee",
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Cleaning Services We Offer"
        description="From homes and apartments to offices, malls and restaurants — we have a cleaning solution for every space in Kampala."
      />

      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="flex flex-col rounded-2xl border border-gray-100 p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-xl sm:flex-row sm:items-start sm:gap-6"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <div className="mt-4 sm:mt-0">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-bold text-slate-900">
                      {service.title}
                    </h2>
                    <span className="rounded-full bg-primary-lighter px-2.5 py-0.5 text-xs font-bold text-primary">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Qualified Staff", "Eco Products", "On Time"].map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-full bg-primary-lighter px-3 py-1 text-xs font-semibold text-primary"
                      >
                        <Check className="h-3 w-3" /> {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    href="/contact"
                    variant="outline"
                    className="mt-6 px-5 py-2.5 text-sm"
                  >
                    Get This Service
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-primary py-12">
            <div className="mx-auto flex flex-col items-center px-4 text-center sm:px-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
                <HelpCircle className="h-8 w-8 text-white" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
                Not Sure Which Service You Need?
              </h2>
              <p className="mt-4 max-w-2xl text-white/85">
                Every space is unique. Tell us about yours and we&apos;ll help you
                choose the perfect cleaning plan — at no extra cost.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-primary transition-colors hover:bg-primary-lighter"
                >
                  Request a Free Consultation
                </a>
                <a
                  href={`tel:${company.phoneRaw}`}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white hover:text-primary"
                >
                  <Phone className="h-5 w-5" />
                  {company.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-lighter py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Work With Us"
            title="Service Excellence, Every Time"
            description="Here's what you can expect when you choose Loop Cleaning Services."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                <ShieldCheck className="h-7 w-7 text-white" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Safety First
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Vetted, insured, and trained professionals you can trust inside
                your home or business.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                <ThumbsUp className="h-7 w-7 text-white" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Satisfaction Guaranteed
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                We&apos;re not done until you&apos;re happy. Any issue, and
                we&apos;ll re-clean for free.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                <Handshake className="h-7 w-7 text-white" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Transparent Pricing
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Clear, honest quotes with no hidden fees. The price we agree on
                is the price you pay.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 py-16 px-4">
        {inclusions.map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-lighter px-5 py-2.5 text-sm font-semibold text-primary"
          >
            <Check className="h-4 w-4" /> {item}
          </span>
        ))}
      </div>
    </>
  );
}