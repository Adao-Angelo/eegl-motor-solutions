"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

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
];
export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full mx-auto relative text-left">
      <div
        className="w-full h-[400px] bg-cover bg-center rounded-[10px] overflow-hidden"
        style={{
          backgroundImage: `url(${projects[currentIndex].image})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="font-bold text-lg">
              {projects[currentIndex].title}
            </h3>
            <p className="text-sm">{projects[currentIndex].location}</p>
          </div>
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
      >
        <ArrowLeft />
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
      >
        <ArrowRight />
      </button>
    </div>
  );
}
