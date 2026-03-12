const About = () => {
  return (
    <section id="about" className="py-20 bg-emerald-50 dark:bg-slate-800/50 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-4">
          <span className="h-1 w-12 bg-emerald-500 block mx-auto rounded-full mb-2"></span>
          <span className="uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold text-sm">
            Discover
          </span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          About The Museum
        </h2>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light">
          The museum showcases a wide collection of insect species, interactive exhibits, and educational experiences designed for students, researchers, and visitors. 
          Step into a world of miniaturized marvels and discover the fascinating lives of our planet's most diverse creatures.
        </p>
      </div>
    </section>
  );
};

export default About;
