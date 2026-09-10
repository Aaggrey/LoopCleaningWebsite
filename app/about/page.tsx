import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import { Target, Eye, CheckCircle2, ShieldCheck } from "lucide-react";

const values = [
  "Integrity — we do what we say, every time.",
  "Excellence — attention to detail in every corner.",
  "Reliability — we show up on time, prepared and ready.",
  "Care — we treat every client's space as our own.",
  "Innovation — modern equipment and eco-friendly products.",
  "Community — proudly serving Uganda, our home.",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Learn More About Loop Cleaning Services"
        description="A Ugandan cleaning company built on trust, professionalism, and a genuine passion for spotless spaces."
      />

      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Our Story
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Loop Cleaning Services was founded in Kampala with a simple
                belief: everyone deserves a clean, healthy, and comfortable
                space. What started as a small team with big ambitions has grown
                into one of Kampala&apos;s most trusted cleaning companies,
                serving hundreds of homes, offices, shopping malls, restaurants,
                and supermarkets.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Our name represents our commitment to going the extra mile and
                coming full circle with every client — from the first booking to
                the final inspection, we stay connected to ensure total
                satisfaction.
              </p>
              <ul className="mt-8 space-y-3">
                {values.map((value) => (
                  <li key={value} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-slate-700">{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-primary p-8 text-white shadow-xl">
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

          <div className="mt-24 rounded-2xl bg-primary-lighter p-10 sm:p-14">
            <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary">
                <ShieldCheck className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900">
                  Our Promise to You
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  Every cleaning session is backed by our 100% satisfaction
                  guarantee. If you&apos;re not delighted with the results, we&apos;ll
                  make it right — at no extra cost.
                </p>
              </div>
              <Button href="/contact" className="shrink-0">
                Book a Cleaning Session
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}