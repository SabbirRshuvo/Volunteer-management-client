/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const slides = [
  {
    image: "https://i.ibb.co.com/gMY8JQNR/2147807229.jpg",
    title: "Empower Communities, Inspire Change",
    subtitle:
      "Together, we make a difference in the lives of those who need it most.",
    buttonText: "Join the Movement",
  },
  {
    image: "https://i.ibb.co.com/0jRZtPG3/2149369375.jpg",
    title: "Be the Voice of Hope",
    subtitle: "Your time can change someone’s world. Volunteer with purpose.",
    buttonText: "Start Volunteering",
  },
  {
    image: "https://i.ibb.co.com/s9ZwnZKN/5569534-2885557.jpg",
    title: "Unity Through Service",
    subtitle: "Build stronger communities by showing up and serving others.",
    buttonText: "Get Involved",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="relative w-full h-[80vh] overflow-hidden rounded-xl shadow-xl">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt="slide"
            className="w-full h-full object-cover brightness-[0.45]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mb-6">
              {slide.subtitle}
            </p>
            <button className="btn btn-outline btn-primary px-8 text-white hover:bg-primary hover:text-white">
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}

      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={prevSlide}
          className="btn btn-circle btn-outline text-white border-white"
        >
          <FiChevronLeft size={24} />
        </button>
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={nextSlide}
          className="btn btn-circle btn-outline text-white border-white"
        >
          <FiChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Banner;
