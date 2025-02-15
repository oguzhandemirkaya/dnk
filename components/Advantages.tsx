import { FaIndustry, FaCogs, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

const advantages = [
  { icon: <FaIndustry size={50} />, title: "Industry Expertise", description: "Serving various sectors like energy, mining, steel, and construction." },
  { icon: <FaCogs size={50} />, title: "Advanced Technology", description: "State-of-the-art manufacturing for precision and efficiency." },
  { icon: <FaShieldAlt size={50} />, title: "High Quality", description: "Quality assurance in every stage of production." },
  { icon: <FaCheckCircle size={50} />, title: "Reliability", description: "Trusted by global industry leaders for years." },
];

const Advantages = () => {
  return (
    <section className="py-16 text-white text-center">
      <h2 className="text-4xl font-bold text-[#AB7C35] mb-8">Our Strengths</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {advantages.map((adv, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center p-6 rounded-xl backdrop-blur-xl 
            bg-white/10 border border-white/20 shadow-lg transition-all 
            hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] 
            before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:rounded-xl 
            after:absolute after:-inset-1 after:bg-white/10 after:blur-2xl after:opacity-20"
          >
            {/* İkon Bölümü */}
            <div className="relative text-[#AB7C35] bg-white/20 p-5 rounded-full shadow-md shadow-[#AB7C35]/20">
              {adv.icon}
            </div>

            {/* Başlık & Açıklama */}
            <h3 className="text-2xl font-semibold mt-4 relative">{adv.title}</h3>
            <p className="text-gray-300 mt-2 relative">{adv.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
