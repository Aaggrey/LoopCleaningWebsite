import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import { pricingPlans } from "@/lib/data";
import Button from "@/components/ui/Button";
import { Check, Minus, Sparkles, MessageCircle } from "lucide-react";
import { company } from "@/lib/data";

const comparison = [
  {
    feature: "Dusting of surfaces & furniture",
    basic: true,
    standard: true,
    deep: true,
  },
  {
    feature: "Sweeping & mopping floors",
    basic: true,
    standard: true,
    deep: true,
  },
  {
    feature: "Bathroom & kitchen cleaning",
    basic: true,
    standard: true,
    deep: true,
  },
  {
    feature: "Interior window cleaning",
    basic: false,
    standard: true,
    deep: true,
  },
  {
    feature: "Cabinet & drawer wiping",
    basic: false,
    standard: true,
    deep: true,
  },
  {
    feature: "Carpet & upholstery care",
    basic: false,
    standard: false,
    deep: true,
  },
  {
    feature: "Move furniture & clean behind",
    basic: false,
    standard: false,
    deep: true,
  },
  {
    feature: "Sanitization & disinfection",
    basic: false,
    standard: false,
    deep: true,
  },
];

const faqs = [
  {
    question: "How do I book a cleaning session?",
    answer:
      "Simply visit our contact page, call us on +256 703 652 751, or message us on WhatsApp. We'll confirm your booking within minutes.",
  },
  {
    question: "Are your cleaning products safe?",
    answer:
      "Yes. We use eco-friendly, non-toxic products that are safe for your family, pets, and the environment.",
  },
  {
    question: "Do you provide cleaning supplies and equipment?",
    answer:
      "Yes, we bring everything needed for the job — high-quality equipment and professional products included in every booking.",
  },
  {
    question: "What if I'm not satisfied with the cleaning?",
    answer:
      "Your satisfaction is guaranteed. If anything isn't up to standard, let us know within 24 hours and we'll re-clean for free.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We proudly serve Kampala and surrounding areas across Uganda.",
  },
];

export default function PricingPage() {
  const planOrder = ["basic", "standard", "deep"];

  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Affordable Cleaning Plans"
        description="Transparent pricing, no hidden fees. Choose the level of cleaning your space needs and book in minutes."
      />

      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl p-8 ${
                  plan.popular
                    ? "bg-primary text-white shadow-2xl lg:-translate-y-4"
                    : "border border-gray-100 bg-white shadow-sm"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-md">
                    Most Popular
                  </span>
                )}
                <h2
                  className={`text-xl font-bold ${
                    plan.popular ? "text-white" : "text-slate-900"
                  }`}
                >
                  {plan.name}
                </h2>
                <p
                  className={`mt-2 text-sm ${
                    plan.popular ? "text-white/80" : "text-slate-500"
                  }`}
                >
                  {plan.description}
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span
                    className={`text-3xl font-bold ${
                      plan.popular ? "text-white" : "text-primary"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.popular ? "text-white/70" : "text-slate-500"
                    }`}
                  >
                    / {plan.duration}
                  </span>
                </div>
                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className={`mt-0.5 h-5 w-5 shrink-0 ${
                          plan.popular ? "text-white" : "text-primary"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-white/90" : "text-slate-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={plan.popular ? "white" : "outline"}
                  className="mt-10 w-full"
                >
                  {plan.popular && <Sparkles className="h-4 w-4" />}
                  Book This Plan
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-primary-lighter py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Compare Plans"
            title="What's Included in Each Plan"
          />

          <div className="mt-12 overflow-x-auto rounded-2xl bg-white shadow-sm">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="p-5 text-sm font-bold text-slate-900">
                    Feature
                  </th>
                  <th className="p-5 text-center text-sm font-bold text-slate-900">
                    Basic
                  </th>
                  <th className="bg-primary p-5 text-center text-sm font-bold text-white">
                    Standard
                  </th>
                  <th className="p-5 text-center text-sm font-bold text-slate-900">
                    Deep
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={index % 2 === 0 ? "bg-white" : "bg-primary-lighter/50"}
                  >
                    <td className="p-5 text-sm text-slate-700">{row.feature}</td>
                    {planOrder.map((key) => (
                      <td key={key} className="p-5 text-center">
                        {row[key as keyof typeof row] ? (
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                            <Check className="h-4 w-4 text-primary" />
                          </span>
                        ) : (
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-100">
                            <Minus className="h-4 w-4 text-gray-400" />
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-center text-sm text-slate-500">
            Prices may vary based on property size and specific requirements.
            Contact us for a free, customized quote.
          </p>
        </div>
      </div>

      <div className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-colors open:border-primary"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                  {faq.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-lighter text-primary transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-primary p-10 text-center text-white">
            <h3 className="text-2xl font-bold">Ready to Book?</h3>
            <p className="mx-auto mt-3 max-w-xl text-white/85">
              Get a spotless space today. Book online, call us, or send a
              WhatsApp message.
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
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}