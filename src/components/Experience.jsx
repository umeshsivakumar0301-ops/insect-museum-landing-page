const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Virtual Tour",
      description: "Explore our extensive insect collections from anywhere in the world with our interactive 3D virtual museum experience.",
      image: "https://images.unsplash.com/photo-1631557085795-5cb5f233bebc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Interactive Exhibits",
      description: "Engage with hands-on displays that bring the microscopic world of insects to life through augmented reality.",
      image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Research Collections",
      description: "Dive deep into our scientific archives featuring rare specimens utilized by entomologists globally for groundbreaking research.",
      image: "https://images.unsplash.com/photo-1518717202715-9fa9d099f58a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Museum Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Discover the myriad ways you can engage with our insect exhibits and scientific collections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className="group bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:shadow-none dark:hover:shadow-emerald-900/20 border border-slate-100 dark:border-slate-700 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${exp.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
              </div>
              
              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow relative">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {exp.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow leading-relaxed">
                  {exp.description}
                </p>
                <div className="mt-auto">
                  <button className="text-emerald-600 dark:text-emerald-400 font-semibold inline-flex items-center group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                    Read More
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
