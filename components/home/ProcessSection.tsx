import SectionHeader from "@/components/ui/SectionHeader";
import { CalendarCheck, Broom, ClipboardCheck, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Book Your Session",
    description:
      "Call us, WhatsApp, or fill out our booking form. Choose the service you need and a time that works for you.",
  },
  {
    icon: Broom,
    step: "02",
    title: "We Clean",
    description:
      "Our trained team arrives on time with professional equipment and eco-friendly products to get to work.",
  },
  {
    icon: ClipboardCheck,
    step: "03",
    title: "Quality Inspection",
    description:
      "We walk through every room with you to make sure every detail meets our high standards.",
  },
  {
    icon: PartyPopper,
    step: "04",
    title: "Relax & Enjoy",
    description:
      "Your space is spotless! Enjoy a fresh, clean environment — we'll even remind you when it's time for the next clean.",
  },
];

export default function ProcessSection() {
  return (
    <div className="bg-primary-lighter py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How It Works"
          title="Our Simple Process"
          description="Getting a professionally cleaned space is easy. Follow these four simple steps and let us handle the rest."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.step}
              className="relative rounded-2xl bg-white p-8 shadow-sm"
            >
              <span className="absolute right-6 top-6 text-5xl font-bold text-primary-lighter">
                {step.step}
              </span>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                <step.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}