import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AnnouncementBar from './components/AnnouncementBar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // 0-5s Day, 5-10s Night. Switch every 5 seconds.
    const interval = setInterval(() => {
      setIsDarkMode((prevMode) => !prevMode);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-500 ease-in-out font-sans flex flex-col">
      <Navbar />
      <AnnouncementBar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
