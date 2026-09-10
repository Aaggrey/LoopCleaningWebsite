import Image from "next/image";

const clientLogos = [
  {
    name: "GGL",
    src: "/clients/ggl.png",
  },
  {
    name: "Guide Mark Opportunity Group",
    src: "/clients/guidemark.png",
  },
  {
    name: "Highflyer Report",
    src: "/clients/highflyerreport.png",
  },
  {
    name: "Rep Uganda",
    src: "/clients/repuganda.jpg",
  },
];

export default function ClientLogos() {
  return (
    <div className="border-y border-gray-100 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500">
          Trusted by leading businesses &amp; homes in Kampala
        </p>

        <div className="mt-10 grid grid-cols-2 gap-10 sm:grid-cols-4">
          {clientLogos.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center px-4 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={client.src}
                alt={`${client.name} logo`}
                width={160}
                height={80}
                className="h-auto w-full max-w-[160px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}