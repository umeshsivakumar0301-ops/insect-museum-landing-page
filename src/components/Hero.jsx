const Hero = () => {
  return (
    <div className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image Setup */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 hover:scale-105"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1590135804618-97103ea20ce9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
        }}
      ></div>
      
      {/* Overlay - adjusting opacity based on theme indirectly through wrapper classes in App, but here we can just make it dark enough for white text to always pop */}
      <div className="absolute inset-0 z-10 bg-black/50 dark:bg-black/70 transition-colors duration-500"></div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <span className="uppercase tracking-[0.3em] text-emerald-300 font-semibold text-sm sm:text-base mb-4 drop-shadow-md animate-fade-in-up delay-100">
          Welcome To The
        </span>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
          INSECT MUSEUM
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl font-light drop-shadow-md">
          Visit the museum in person or explore it virtually
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-center">
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3.5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(5,150,105,0.4)]">
            Start Virtual Tour
          </button>
          <button className="bg-transparent hover:bg-white/10 text-white border-2 border-white/50 hover:border-white px-8 py-3.5 rounded-full font-bold text-lg transition-all duration-300 backdrop-blur-sm">
            View Collections
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
