import { useState } from "react";

const highlights = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21a48.25 48.25 0 01-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    label: "Interactive Exhibits",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    label: "Rare Insect Collections",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    label: "Educational Programs",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
    label: "Virtual Learning Experiences",
  },
];

export default function About() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section
      id="about"
      className="relative py-24 bg-[#0d1117] overflow-hidden transition-colors duration-500"
    >
      {/* Decorative background glow — green to match site brand */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-emerald-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 w-[360px] h-[360px] rounded-full bg-emerald-600/8 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">

        {/* Section label — amber rule + green text matching navbar accent */}
        <div className="flex items-center gap-3 mb-10">
          <span className="block h-px w-10 bg-amber-500" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
            Our Story
          </span>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT — Image */}
          <div className="group relative w-full">
            {/* Decorative offset border in green */}
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border-2 border-emerald-500/40 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"
            />

            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/60">
              {/* Skeleton shimmer */}
              {!imgLoaded && (
                <div className="absolute inset-0 bg-[#1a2332] animate-pulse" />
              )}

              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
                alt="Museum insect exhibit with rare pinned specimens under glass"
                onLoad={() => setImgLoaded(true)}
                className={`
                  w-full h-72 sm:h-96 lg:h-[480px] object-cover
                  transition-all duration-700 ease-out
                  group-hover:scale-105 group-hover:brightness-110
                  ${imgLoaded ? "opacity-100" : "opacity-0"}
                `}
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating badge */}
              <div className="absolute bottom-5 left-5 flex items-center gap-2.5 bg-[#0d1117]/90 backdrop-blur-sm border border-emerald-500/30 rounded-xl px-4 py-2.5 shadow-lg">
                <span className="text-2xl">🦋</span>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">
                    Est. 1987
                  </p>
                  <p className="text-[10px] text-emerald-400 leading-tight">
                    Over 12,000 specimens
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="flex flex-col">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-tight text-white mb-6">
              About{" "}
              <span className="relative inline-block">
                The Museum
                <span
                  aria-hidden="true"
                  className="absolute left-0 -bottom-1 h-[3px] w-full bg-amber-500 rounded-full"
                />
              </span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-gray-400 mb-10">
              The museum showcases a wide collection of insect species, interactive exhibits, and
              educational experiences designed for students, researchers, and visitors. Visitors can
              explore rare specimens, learn about insect habitats, and discover the important role
              insects play in maintaining ecological balance.
            </p>

            {/* Highlights list */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map(({ icon, label }) => (
                <li
                  key={label}
                  className="
                    group/item flex items-center gap-3.5
                    bg-[#161d27]
                    border border-[#ffffff12]
                    rounded-xl px-4 py-3.5
                    hover:border-emerald-500/50
                    hover:bg-[#1a2a1e]
                    transition-all duration-300 cursor-default
                  "
                >
                  <span
                    className="
                      flex-shrink-0 flex items-center justify-center
                      w-9 h-9 rounded-lg
                      bg-emerald-500/10
                      text-emerald-400
                      group-hover/item:bg-emerald-500/20
                      transition-colors duration-300
                    "
                  >
                    {icon}
                  </span>
                  <span className="text-sm font-semibold text-gray-200 tracking-wide">
                    {label}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA — mirrors site's green + outlined button style */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="#exhibits"
                className="
                  inline-flex items-center justify-center gap-2
                  px-6 py-3 rounded-full
                  bg-emerald-500 hover:bg-emerald-400
                  text-white font-semibold text-sm tracking-wide
                  shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/40
                  transition-all duration-300
                "
              >
                Explore Exhibits
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="
                  inline-flex items-center justify-center
                  px-6 py-3 rounded-full
                  border border-white/30
                  text-white
                  font-semibold text-sm tracking-wide
                  hover:border-emerald-500 hover:text-emerald-400
                  transition-all duration-300
                "
              >
                Plan Your Visit
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
