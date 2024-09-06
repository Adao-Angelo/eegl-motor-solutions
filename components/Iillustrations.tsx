"use client";
import { useState } from "react";

export default function SliderIllustrations() {
  const [activeSlide, setActiveSlide] = useState(0);
  const images = [
    "/slider/Illustrations01.jpg",
    "/slider/Illustrations02.jpg",
    "/slider/Illustrations03.jpg",
    "/slider/Illustrations004.jpg",
  ];

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className="relative w-[70%] h-[400px] bg-cover bg-center transition-all duration-500 ease-in-out"
        style={{ backgroundImage: `url(${images[activeSlide]})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-start p-6">
          <div className="bg-red-600/60 p-4 rounded-lg text-white">
            <h2 className="text-4xl font-bold">
              Um grupo movido pela excelência!
            </h2>
            <p>
              Comprometidos em oferecer soluções personalizadas e garantir a
              satisfação do cliente.
            </p>
          </div>
        </div>
      </div>

      <div className="ml-4 flex flex-col space-y-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative w-[150px] h-[80px] bg-cover bg-center transition-all duration-500 ease-in-out cursor-pointer ${
              activeSlide === index ? "w-[300px] h-[160px]" : ""
            }`}
            style={{
              backgroundImage: `url(${image})`,
              filter:
                activeSlide === index ? "brightness(1)" : "brightness(0.5)",
            }}
            onClick={() => handleSlideChange(index)}
          >
            {activeSlide === index && (
              <div
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-600 p-2 rounded-full cursor-pointer"
                onClick={() => handleSlideChange((index + 1) % images.length)}
              >
                <span className="block w-4 h-4 bg-white rounded-full"></span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
