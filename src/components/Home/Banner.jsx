import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="bg-black bg-cover bg-center bg-[url('/hero-bg-1.jpg')] min-h-fit py-16 ">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-3 px-5 xl:px-5 lg:py-3">
        <div className="grid grid-cols-1 xl:grid-cols-3 justify-center items-center">
          <div className="w-full xl:w-[690px]">
            <h3 className="text-gray-300 text-2xl md:text-3xl font-light italic mb-4">
              Creative Thinking
            </h3>
            <h1 className="text-4xl md:text-7xl font-extrabold text-gray-100 leading-10 mt-4 md:mt-0">
              Strategic Thinking,
            </h1>
            <h2 className="text-4xl md:text-7xl font-extrabold text-gray-100 leading-10 mt-4 ">
               Tangible{" "}
              <span className="leading-6 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-7xl">
                Results for
              </span>
            </h2>
            <h2 className="mt-3 md:my-4 bg-gradient-to-r from-blue-500 via-green-400 to-green-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-7xl">
              Business!
            </h2>
            <p className="text-gray-300 font-base text-lg mt-5 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, eaque. Illo soluta cupiditate harum ex facere
              corporis labore rem et error.
            </p>
            <div>
              <Link to="#">
                <span className="inline-block rounded-full text-white bg-gradient-to-r from-emerald-500 via-blue-500 to-blue-600 px-8 py-3 text-md font-semibold group-hover:bg-transparent group-hover:transition group-hover:duration-700 group-hover:ease-in-out">
                  Explore Now
                </span>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center relative col-span-2">
            <div className="animate-shakeTwo z-20">
              <img
                src="/h1-hero-left.jpg"
                alt="hero-left"
                className="rounded-full object-contain translate-x-0 md:h-[500px] md:translate-x-20 xl:translate-x-3/4 border-8 border-gray-600"
              />
            </div>

            <div class="relative inline-block animate-shakeY z-0">
              <div class="before:block before:absolute before:rounded-full before:translate-x-1.5 md:before:translate-x-16 xl:before:translate-x-2/4 before:h-[386px] before:w-[233px] md:before:w-[332px] md:before:h-[545px] lg:before:h-[665px] before:border-2 before:border-gradient-to-r before:from-emerald-500 before:via-blue-500 before:to-blue-600 lg:before:w-[405px] before:-top-3 before:right-0">
                <img
                  src="/h1-hero-right.jpg"
                  alt="hero-left"
                  className="w-full md:h-[525px] lg:h-[650px] rounded-full object-contain md:translate-x-14 xl:translate-x-2/4 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
