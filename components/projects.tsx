"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "Manutenção de Ceifeira CASE",
    location: "Luanda aos, 17/02/2023",
    image: "/work01.jpeg",
  },
  {
    title: "Manutenção de canal de distribuição de água",
    location: "Luanda aos, 17/02/2024",
    image: "/work02.jpeg",
  },
  {
    title: "Canal de distribuição de água",
    location: "Luanda aos, 17/02/2024",
    image: "/work03.jpeg",
  },
  {
    title: "Manutenção de Ceifeira CASE",
    location: "Luanda aos, 17/02/2023",
    image: "/work01.jpeg",
  },
];

export default function SliderIllustrations() {
  return (
    <div className="min-h-screen my-[100px] text-center py-0">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        className="w-full px-10"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[400px] bg-cover bg-center rounded-[10px] relative"
              style={{
                backgroundImage: `url(${project.image})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <p className="text-sm">{project.location}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
