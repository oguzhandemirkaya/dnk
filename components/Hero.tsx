const Hero = () => {
    return (
      <section className="relative flex flex-col md:flex-row items-center justify-between h-auto px-8 max-w-7xl mx-auto pt-24 md:pt-32">

        <div className="absolute top-10 md:static md:w-1/2 flex justify-center md:justify-start w-full opacity-30 md:opacity-100">
  <img 
    src="/assets/gifs/gear.webp" 
    alt="Rotating Gear" 
    className="w-80 h-80 md:w-[500px] md:h-[500px] object-contain mx-auto md:mx-0"
  />
</div>
        <div className="relative w-full md:w-1/2 text-white text-center md:text-left p-6 z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-[#AB7C35]">Welcome to DNK Machinery</h1>
          <p className="mt-2 md:mt-4 text-lg md:text-xl text-gray-300 max-w-lg">
            High-quality machinery solutions tailored for your needs.
          </p>
       
        </div>
  
      </section>
    );
  };
  
  export default Hero;
  