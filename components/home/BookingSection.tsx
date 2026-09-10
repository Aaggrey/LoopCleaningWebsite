import { CalendarCheck2, MessageCircle, Calendar, Clock } from "lucide-react";
import { company } from "@/lib/data";

export default function BookingSection() {
  return (
    <div className="relative overflow-hidden bg-primary py-24 text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-white blur-3xl"></div>
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-white blur-3xl"></div>
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-semibold backdrop-blur">
          <CalendarCheck2 className="h-4 w-4" />
          Book a Cleaning Session
        </span>

        <h2 className="mt-6 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          Ready to Transform Your Space?
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
          Book your cleaning session today and enjoy a spotless home or office
          in no time. Fast, reliable, and affordable.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-primary transition-colors hover:bg-primary-lighter"
          >
            <Calendar className="h-5 w-5" />
            Book Now
          </a>
          <a
            href={company.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-base font-bold text-white transition-colors hover:bg-[#1fb457]"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Us
          </a>
        </div>

        <div className="mt-14 flex flex-col items-center gap-6 sm:flex-row sm:gap-12">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
              <Clock className="h-6 w-6" />
            </div>
            <div className="text-left">
              <p className="font-semibold">Flexible Hours</p>
              <p className="text-sm text-white/75">Morning to evening</p>
            </div>
          </div>
          <div className="hidden h-10 w-px bg-white/20 sm:block"></div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div className="text-left">
              <p className="font-semibold">Quick Response</p>
              <p className="text-sm text-white/75">We reply within minutes</p>
            </div>
          </div>
          <div className="hidden h-10 w-px bg-white/20 sm:block"></div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
              <CalendarCheck2 className="h-6 w-6" />
            </div>
            <div className="text-left">
              <p className="font-semibold">Pay on Completion</p>
              <p className="text-sm text-white/75">Convenient & flexible</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}