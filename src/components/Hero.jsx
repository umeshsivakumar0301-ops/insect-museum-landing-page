import beetleImg from "../assets/beetle.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Insect Museum Hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Full screen banner image ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={beetleImg}
          alt="Macro close-up of a metallic green beetle on a leaf"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/70 via-[#0d1117]/50 to-[#0d1117]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117]/50 via-transparent to-[#0d1117]/50" />
      </div>

      {/* ── Glow accent ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full"
      />

      {/* ── Centered content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">

        {/* Label pill */}
        <div className="inline-flex items-center gap-2.5 bg-white/5 border border-emerald-500/30 backdrop-blur-sm rounded-full px-4 py-2 mb-10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Now Open to Visitors
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif font-bold leading-none tracking-tight text-white mb-6">
          <span className="block text-6xl sm:text-7xl lg:text-8xl">
            <span className="text-emerald-400">INSECT</span>{" "}
            <span className="text-white">MUSEUM</span>
          </span>
        </h1>

        {/* Amber divider */}
        <div className="flex items-center gap-4 mb-8" aria-hidden="true">
          <span className="block h-px w-14 bg-amber-500/70" />
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          <span className="block h-px w-14 bg-amber-500/70" />
        </div>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl mb-12">
          Step into the hidden world of insects and uncover the beauty, diversity, and science behind Earth’s smallest creatures.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#experience"
            className="
              w-full sm:w-auto
              inline-flex items-center justify-center gap-2
              px-8 py-4 rounded-full
              bg-emerald-500 hover:bg-emerald-400
              text-white font-semibold text-sm tracking-wide
              shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/50
              hover:-translate-y-0.5 transition-all duration-300
            "
          >
            Start Virtual Tour
          </a>
          <a
            href="#about"
            className="
              w-full sm:w-auto
              inline-flex items-center justify-center gap-2
              px-8 py-4 rounded-full
              border border-white/30 hover:border-emerald-500
              text-white hover:text-emerald-400
              font-semibold text-sm tracking-wide
              hover:-translate-y-0.5 transition-all duration-300
            "
          >
            View Collections
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-6 sm:gap-14 border-t border-white/10 pt-10 w-full max-w-md">
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
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40 hover:opacity-75 transition-opacity duration-300"
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-400 to-transparent" />
      </div>
    </section>
  );
}
