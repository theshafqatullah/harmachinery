import Image from "next/image";

const values = [
  "Client satisfaction — always",
  "Reliable, well-maintained equipment",
  "Integrity in every transaction",
  "Safety-first operations",
  "Same-day delivery across the UAE",
  "24/7 technical support & breakdown cover",
];

const certs = [
  { label: "ISO 9001:2015", sub: "Quality Management" },
  { label: "ISO 45001", sub: "Occupational Safety" },
  { label: "Dubai Trade License", sub: "DED Registered" },
  { label: "UAE Customs", sub: "Approved Importer" },
];

export default function WelcomeValues() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative h-80 overflow-hidden rounded-2xl lg:h-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop"
              alt="Husnain Abdul Rasheed Machinery Rentals equipment yard in Al Lisaili, Dubai"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-900/80 to-transparent p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                Established in the UAE
              </p>
              <p className="mt-1 text-sm text-white">
                Al Lisaili · Dubai–Al Ain Road · Serving all 7 Emirates
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
              Welcome to Husnain Abdul Rasheed Machinery Rentals
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              A professional, certified equipment rental company.
            </h2>
            <p className="mt-6 text-base leading-7 text-zinc-600">
              Welcome to{" "}
              <strong className="font-semibold text-zinc-900">
                Husnain Abdul Rasheed Machinery Rentals L.L.C
              </strong>{" "}
              — a trusted provider of construction equipment and generator
              rental across the UAE. From our yard in Al Lisaili we supply
              high-quality machinery for construction sites, events, film
              shoots, farms and industrial projects. With flexible rental
              terms, competitive pricing and round-the-clock support, we&apos;re
              the rental partner contractors keep coming back to.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-2.5">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-amber-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span className="text-sm text-zinc-700">{v}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 grid grid-cols-2 gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-5 sm:grid-cols-4">
              {certs.map((c) => (
                <div key={c.label} className="text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border-2 border-amber-400 text-amber-500">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75"
                      />
                    </svg>
                  </div>
                  <p className="mt-2 text-xs font-semibold text-zinc-900">
                    {c.label}
                  </p>
                  <p className="text-[10px] text-zinc-500">{c.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
