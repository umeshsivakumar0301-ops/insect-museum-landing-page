const experiences = [
  {
    id: 1,
    title: "Interactive Exhibits",
    description:
      "Engage with hands-on displays that reveal the fascinating behavior, anatomy, and life cycles of insects from every corner of the globe.",
    image:
      "https://images.unsplash.com/photo-1550159930-40066082a4fc?w=800&q=80",
    alt: "Visitor interacting with an insect exhibit display",
    tag: "Hands-On",
    tagColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Rare Insect Collections",
    description:
      "Explore a curated archive of rare and exotic insect specimens from around the world, preserved and presented with scientific precision.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    alt: "Display case showing rare pinned insect specimens",
    tag: "Featured",
    tagColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Educational Workshops",
    description:
      "Participate in guided learning sessions designed for students, researchers, and nature enthusiasts of all ages and experience levels.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    alt: "Students attending an educational workshop about insects",
    tag: "Workshop",
    tagColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 bg-[#0d1117] overflow-hidden"
    >
      {/* Background glow accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-emerald-500/5 blur-3xl rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-600/5 blur-3xl rounded-full"
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="block h-px w-8 bg-amber-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
              What We Offer
            </span>
            <span className="block h-px w-8 bg-amber-500" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Museum{" "}
            <span className="relative inline-block">
              Experiences
              <span
                aria-hidden="true"
                className="absolute left-0 -bottom-1 h-[3px] w-full bg-amber-500 rounded-full"
              />
            </span>
          </h2>

          <p className="max-w-xl mx-auto text-base sm:text-lg text-gray-400 leading-relaxed">
            Discover the fascinating world of insects through immersive learning
            and interactive exploration.
          </p>
        </header>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className="
                group flex flex-col
                bg-[#161d27]
                border border-white/8
                rounded-2xl overflow-hidden
                hover:border-emerald-500/40
                hover:shadow-2xl hover:shadow-emerald-900/30
                transition-all duration-500
              "
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={exp.image}
                  alt={exp.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#161d27] via-transparent to-transparent opacity-80" />

                {/* Tag badge */}
                <span
                  className={`
                    absolute top-4 left-4
                    text-[10px] font-bold uppercase tracking-widest
                    px-3 py-1 rounded-full border backdrop-blur-sm
                    ${exp.tagColor}
                  `}
                >
                  {exp.tag}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                {/* Icon + Title */}
                <div className="flex items-start gap-3 mb-3">
                  <span className="flex-shrink-0 mt-0.5 flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors duration-300">
                    {exp.icon}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-snug pt-1">
                    {exp.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed flex-1 mb-6">
                  {exp.description}
                </p>

                {/* Divider */}
                <div className="h-px w-full bg-white/6 mb-5" />

                {/* Read More Button */}
                <a
                  href="#"
                  aria-label={`Read more about ${exp.title}`}
                  className="
                    inline-flex items-center gap-2
                    text-sm font-semibold
                    text-emerald-400
                    hover:text-emerald-300
                    group/btn transition-colors duration-300
                  "
                >
                  Read More
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="#"
            className="
              inline-flex items-center gap-2
              px-8 py-3.5 rounded-full
              bg-emerald-500 hover:bg-emerald-400
              text-white font-semibold text-sm tracking-wide
              shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/40
              transition-all duration-300
            "
          >
            View All Experiences
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
