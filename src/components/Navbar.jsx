import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Database', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Experience', href: '#experience' },
    { name: 'Credits', href: '#' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-bold text-2xl tracking-tighter text-emerald-700 dark:text-emerald-400">
              INSECT <span className="font-light text-slate-800 dark:text-white">MUSEUM</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium text-sm transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium text-sm transition-colors duration-300">
              Log In
            </button>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 shadow-md shadow-emerald-500/20">
              Book Ticket
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 focus:outline-none transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden transition-all duration-300 ease-in-out bg-white dark:bg-slate-900 absolute w-full border-b border-gray-200 dark:border-slate-800 shadow-lg`}>
        <div className="px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 pb-2 border-t border-gray-200 dark:border-slate-800 space-y-2 mt-4">
            <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors duration-300">
              Log In
            </button>
            <button className="block w-full text-center mt-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-full font-medium text-base transition-all duration-300 shadow-md">
              Book Ticket
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
