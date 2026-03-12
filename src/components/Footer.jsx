const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const resourceLinks = [
  { label: "Insect Database", href: "#database" },
  { label: "Museum Events", href: "#events" },
  { label: "Workshops", href: "#workshops" },
  { label: "Research", href: "#research" },
];

const contactInfo = [
  {
    icon: (
      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    text: "info@insectmuseum.com",
    href: "mailto:info@insectmuseum.com",
  },
  {
    icon: (
      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    text: "Natural Science District",
    href: "#",
  },
  {
    icon: (
      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: "9:00 AM – 6:00 PM",
    href: "#",
  },
];

const socialLinks = [
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      className="relative bg-[#0d1117] border-t border-white/8 overflow-hidden"
      aria-label="Site footer"
    >
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-emerald-500/5 blur-3xl rounded-full"
      />

      {/* ── Main Footer Grid ── */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1 — Museum Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <a href="#home" className="inline-flex items-center gap-1 mb-4 group" aria-label="Insect Museum homepage">
              <span className="font-sans text-[1.1rem]">
                <span className="font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">INSECT</span>
                <span className="font-semibold text-white ml-1 tracking-wider">MUSEUM</span>
              </span>
            </a>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Exploring the fascinating world of insects through education, research,
              and immersive museum experiences.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2" role="list" aria-label="Social media links">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`Visit our ${label} page`}
                  role="listitem"
                  className="
                    flex items-center justify-center w-9 h-9 rounded-lg
                    bg-white/5 border border-white/8 text-gray-400
                    hover:bg-emerald-500/15 hover:border-emerald-500/40 hover:text-emerald-400
                    transition-all duration-300
                  "
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-5 flex items-center gap-2">
              <span className="block w-4 h-px bg-amber-500" />
              Quick Links
            </h3>
            <ul className="space-y-3" role="list">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="
                      flex items-center gap-2 text-sm text-gray-400
                      hover:text-emerald-400 transition-colors duration-300 group
                    "
                  >
                    <svg
                      className="w-3 h-3 text-emerald-500/50 group-hover:text-emerald-400 transition-colors duration-300 flex-shrink-0"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Resources */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-5 flex items-center gap-2">
              <span className="block w-4 h-px bg-amber-500" />
              Resources
            </h3>
            <ul className="space-y-3" role="list">
              {resourceLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="
                      flex items-center gap-2 text-sm text-gray-400
                      hover:text-emerald-400 transition-colors duration-300 group
                    "
                  >
                    <svg
                      className="w-3 h-3 text-emerald-500/50 group-hover:text-emerald-400 transition-colors duration-300 flex-shrink-0"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-5 flex items-center gap-2">
              <span className="block w-4 h-px bg-amber-500" />
              Contact
            </h3>
            <ul className="space-y-4" role="list">
              {contactInfo.map(({ icon, text, href }) => (
                <li key={text}>
                  <a
                    href={href}
                    className="flex items-start gap-3 text-sm text-gray-400 hover:text-emerald-400 transition-colors duration-300 group"
                  >
                    <span className="text-emerald-500 group-hover:text-emerald-400 transition-colors duration-300">
                      {icon}
                    </span>
                    {text}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter mini CTA */}
            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
                Stay Updated
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  aria-label="Email for newsletter"
                  className="
                    flex-1 min-w-0 px-3 py-2 rounded-lg text-sm
                    bg-white/5 border border-white/10
                    text-white placeholder-gray-600
                    focus:outline-none focus:border-emerald-500/50
                    transition-colors duration-300
                  "
                />
                <button
                  type="button"
                  aria-label="Subscribe to newsletter"
                  className="
                    flex-shrink-0 px-3 py-2 rounded-lg
                    bg-emerald-500 hover:bg-emerald-400
                    text-white transition-colors duration-300
                  "
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="relative border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © 2026{" "}
            <span className="text-emerald-400 font-medium">Insect Museum</span>.
            All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-gray-500 hover:text-emerald-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="w-px h-3 bg-white/15" />
            <a href="#" className="text-xs text-gray-500 hover:text-emerald-400 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
