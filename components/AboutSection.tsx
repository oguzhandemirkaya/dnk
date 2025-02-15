const AboutSection = () => {
    return (
      <section className="py-16 px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Sol Taraf - Metin İçeriği */}
        <div className="md:w-1/2 text-white text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-[#AB7C35]">
            About DNK Machinery
          </h2>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            DNK Machinery, headquartered in Malatya, Turkey, was founded by 
            industry professionals with over 20 years of experience in 
            manufacturing solutions for various industries, including 
            <span className="text-[#AB7C35] font-semibold"> energy, mining, cement, construction, glass, steel, railways, and general machinery.</span>
          </p>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Our goal is to strengthen our market position by expanding 
            our product range and ensuring high quality appreciated by our customers.
          </p>
          <a href="/about-us" className="mt-6 inline-block px-6 py-3 bg-[#AB7C35] text-white rounded-lg hover:bg-opacity-80 transition">
            Read More
          </a>
        </div>
  
        {/* Sağ Taraf - Görsel veya Efekt */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
          <img 
            src="/assets/images/about.jpg" 
            alt="About DNK Machinery" 
            className="w-72 md:w-[400px] h-auto rounded-lg shadow-lg"
          />
        </div>
  
      </section>
    );
  };
  
  export default AboutSection;
  