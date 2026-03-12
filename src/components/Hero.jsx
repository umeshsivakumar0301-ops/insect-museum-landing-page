export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Insect Museum Hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0d1117]"
    >
      {/* ── Background Image ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1580407196238-dac33f57c410?w=1800&q=85"
          alt="Museum entomology exhibit with rows of pinned insect specimens in display cases"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-[8000ms] ease-out hover:scale-100"
        />

        {/* Multi-layer gradient overlay for depth + readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/70 via-[#0d1117]/50 to-[#0d1117]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117]/40 via-transparent to-[#0d1117]/40" />
      </div>

      {/* ── Decorative glow orbs ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-amber-500/8 blur-3xl rounded-full"
      />

      {/* ── Main Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">

        {/* Label pill */}
        <div className="inline-flex items-center gap-2.5 bg-white/5 border border-emerald-500/30 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Now Open to Visitors
          </span>
        </div>

        {/* Main title */}
        <h1 className="font-serif font-bold leading-none tracking-tight text-white mb-6">
          <span className="block text-5xl sm:text-7xl lg:text-8xl">
            <span className="text-emerald-400">INSECT</span>{" "}
            <span className="text-white">MUSEUM</span>
          </span>
        </h1>

        {/* Amber rule */}
        <div className="flex items-center gap-4 mb-7">
          <span className="block h-px w-12 bg-amber-500/60" />
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          <span className="block h-px w-12 bg-amber-500/60" />
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-gray-300 leading-relaxed max-w-xl mb-10">
          Visit the museum in person or explore it virtually — discover rare
          specimens, immersive exhibits, and the science of the insect world.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#experience"
            className="
              w-full sm:w-auto
              inline-flex items-center justify-center gap-2
              px-8 py-4 rounded-full
              bg-emerald-500 hover:bg-emerald-400
              text-white font-semibold text-sm tracking-wide
              shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/50
              hover:-translate-y-0.5
              transition-all duration-300
            "
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
            Explore Exhibits
          </a>

          <a
            href="#booking"
            className="
              w-full sm:w-auto
              inline-flex items-center justify-center gap-2
              px-8 py-4 rounded-full
              border border-white/30 hover:border-emerald-500
              text-white hover:text-emerald-400
              font-semibold text-sm tracking-wide
              backdrop-blur-sm
              hover:-translate-y-0.5
              transition-all duration-300
            "
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a3 3 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
            </svg>
            Book Ticket
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 sm:gap-12 border-t border-white/10 pt-10 w-full max-w-lg">
          {[
            { value: "12K+", label: "Specimens" },
            { value: "Est. 1987", label: "Founded" },
            { value: "4.9 ★", label: "Visitor Rating" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="text-xl sm:text-2xl font-bold text-white">{value}</span>
              <span className="text-[11px] uppercase tracking-widest text-gray-500">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50 hover:opacity-80 transition-opacity duration-300">
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-400 to-transparent" />
      </div>
    </section>
  );
}
