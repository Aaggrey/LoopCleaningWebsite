"use client";

import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import { company, services } from "@/lib/data";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";

const businessHours = [
  { day: "Monday - Friday", hours: "8:00 AM - 7:00 PM" },
  { day: "Saturday", hours: "8:00 AM - 6:00 PM" },
  { day: "Sunday", hours: "By appointment" },
];

const inputClasses =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("_subject", "Loop Cleaning Website - New Message");
    data.append("_captcha", "false");

    setSending(true);
    setError(false);

    try {
      const response = await fetch("https://formsubmit.co/ajax/aaggrey7@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });

      if (!response.ok) throw new Error("Failed to send");
      form.reset();
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Get In Touch With Us"
        description="Have a question, need a quote, or ready to book? Reach out — we'd love to hear from you and respond quickly."
      />

      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900">Contact Information</h2>
              <p className="mt-3 text-slate-600">
                Reach us through any of the channels below. We&apos;re always happy
                to help.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4 rounded-2xl border border-gray-100 p-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Address</h3>
                    <p className="mt-1 text-sm text-slate-600">{company.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-gray-100 p-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Phone</h3>
                    <a
                      href={`tel:${company.phoneRaw}`}
                      className="mt-1 block text-sm text-slate-600 hover:text-primary"
                    >
                      {company.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-gray-100 p-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <a
                      href={`mailto:${company.email}`}
                      className="mt-1 block text-sm text-slate-600 hover:text-primary"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-gray-100 p-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">Business Hours</h3>
                    <div className="mt-2 space-y-1.5">
                      {businessHours.map((item) => (
                        <div
                          key={item.day}
                          className="flex justify-between gap-6 text-sm text-slate-600"
                        >
                          <span>{item.day}</span>
                          <span className="font-medium">{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href={company.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl bg-[#25D366] p-5 text-white transition-colors hover:bg-[#1fb457]"
                >
                  <MessageCircle className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">Chat on WhatsApp</p>
                    <p className="text-sm text-white/85">Fastest response — usually within minutes</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10">
                <h2 className="text-2xl font-bold text-slate-900">Send Us a Message</h2>
                <p className="mt-2 text-slate-600">
                  Fill out the form and we&apos;ll get back to you as soon as possible.
                </p>

                {submitted ? (
                  <div className="mt-10 flex flex-col items-center rounded-2xl bg-primary-lighter p-10 text-center">
                    <CheckCircle2 className="h-14 w-14 text-primary" />
                    <h3 className="mt-5 text-xl font-bold text-slate-900">
                      Message Sent Successfully!
                    </h3>
                    <p className="mt-2 max-w-sm text-slate-600">
                      Thank you for reaching out. Our team will contact you
                      shortly. For urgent bookings, call or WhatsApp us.
                    </p>
                    <a
                      href={`tel:${company.phoneRaw}`}
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white"
                    >
                      <Phone className="h-4 w-4" /> {company.phone}
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          required
                          placeholder="Your full name"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">
                          Phone Number *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="+256 7XX XXX XXX"
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@example.com"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="mb-2 block text-sm font-semibold text-slate-700">
                          Service Needed *
                        </label>
                        <select id="service" name="service" required className={inputClasses} defaultValue="">
                          <option value="" disabled>
                            Select a service
                          </option>
                          {services.map((service) => (
                            <option key={service.title} value={service.title}>
                              {service.title}
                            </option>
                          ))}
                          <option value="other">Other / Not Sure</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us about your space, property size, and any special requirements..."
                        className={`${inputClasses} resize-none`}
                      ></textarea>
                    </div>

                    {error && (
                      <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                        Something went wrong sending your message. Please try
                        again or contact us by phone / WhatsApp.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={sending}
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-white transition-colors hover:bg-primary-dark disabled:opacity-60 sm:w-auto ${
                        sending ? "cursor-not-allowed" : ""
                      }`}
                    >
                      <Send className="h-5 w-5" />
                      {sending ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}