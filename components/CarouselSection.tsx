"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const carouselItems = [
  { title: "20+ Years of Experience", description: "Serving industries with advanced manufacturing.", img: "/assets/images/experience.webp" },
  { title: "High-Quality Production", description: "We ensure precision in every component.", img: "/assets/images/quality.webp" },
  { title: "Innovative Solutions", description: "Cutting-edge technology for better performance.", img: "/assets/images/innovation.webp" },
];

const CarouselSection = () => {
  return (
    <section className="py-16 px-8 max-w-7xl mx-auto flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center text-[#AB7C35] mb-8">
        Why Choose DNK Machinery?
      </h2>
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={2} 
        spaceBetween={20}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
              className.includes("swiper-pagination-bullet-active")
                ? "bg-[#AB7C35] scale-125"
                : "bg-white opacity-60"
            }"></span>`;
          },
        }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 0 }, 
          768: { slidesPerView: 2, spaceBetween: 20 }
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full max-w-7xl"
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide
            key={index}
            className="relative bg-black text-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center transition-transform transform hover:scale-105 w-full"
          >
            <div
              className="w-full h-48 md:h-64 lg:h-72 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url(${item.img})`,
              }}
            ></div>
            <h3 className="text-2xl font-semibold mt-4 text-center max-w-md mx-auto">
              {item.title}
            </h3>
            <p className="text-gray-300 mt-2 text-center max-w-md mx-auto">
              {item.description}
            </p>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination !relative mt-6"></div>
      </Swiper>
    </section>
  );
};

export default CarouselSection;
