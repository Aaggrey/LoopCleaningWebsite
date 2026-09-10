import SectionHeader from "@/components/ui/SectionHeader";
import {
  BadgeCheck,
  Leaf,
  Wallet,
  ShieldCheck,
  Clock,
  HeartHandshake,
} from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Professional & Trained Staff",
    description:
      "Our team is fully trained, background-checked, and experienced in handling every cleaning challenge with care.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description:
      "We use safe, environmentally friendly cleaning products that protect your family, pets, and the planet.",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    description:
      "Transparent, competitive rates with no hidden costs. Premium cleaning that fits your budget.",
  },
  {
    icon: ShieldCheck,
    title: "100% Satisfaction Guarantee",
    description:
      "Not happy with the result? We'll re-clean it for free. Your satisfaction is our top priority.",
  },
  {
    icon: Clock,
    title: "Always On Time",
    description:
      "We respect your schedule. Our team arrives promptly and finishes within the agreed time frame.",
  },
  {
    icon: HeartHandshake,
    title: "Friendly Service",
    description:
      "We treat every client like family with warm, courteous service from booking to completion.",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="bg-primary py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="The Loop Cleaning Advantage"
          description="Hundreds of homes and businesses across Kampala trust us with their cleaning needs. Here's why."
          light
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary">
                <reason.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}