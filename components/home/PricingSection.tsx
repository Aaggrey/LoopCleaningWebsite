import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { pricingPlans } from "@/lib/data";
import { Check, Sparkles, ArrowRight } from "lucide-react";

export default function PricingSection() {
  return (
    <div id="pricing" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Pricing"
          title="Simple, Transparent Pricing"
          description="Choose the plan that suits your needs. No hidden fees — just professional cleaning at fair, honest prices."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
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
              <h3
                className={`text-xl font-bold ${
                  plan.popular ? "text-white" : "text-slate-900"
                }`}
              >
                {plan.name}
              </h3>
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
              <ul className="mt-8 space-y-3">
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

        <div className="mt-14 text-center">
          <Button
            href="/pricing"
            variant="ghost"
            className="text-base underline-offset-4 hover:underline"
          >
            View Full Pricing Details <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}