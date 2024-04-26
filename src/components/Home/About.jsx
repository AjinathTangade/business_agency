import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url('/aboutus.png')] min-h-fit py-16 ">
        <div className="max-w-screen-xl mx-auto py-3 px-5 xl:px-0 lg:py-3">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:pt-10">
            <div className="grid grid-cols-2 grid-rows-2 ">
              <div className="flex justify-start items-start relative">
                <img
                  src="/h1-about-img-3.png"
                  alt="about-us-img "
                  className="w-56 p-2 border-2 border-blue-500 rounded-full animate-shakeTwo"
                />
                <div className="absolute translate-x-44 translate-y-32">
                  <img
                    src="/about-first.png"
                    alt="about-us-img"
                    className="animate-pulse w-72 p-2 border-2 border-violet-600 rounded-full"
                  />
                </div>
              </div>
              <div className="flex justify-center items-start relative">
                <img
                  src="/about1-ticker-shape.png"
                  alt="about-us-img"
                  className=""
                />
                <p className="z-30 h-5 w-5 bg-gradient-to-r from-green-500 to-blue-500 absolute translate-x-8 translate-y-14 rounded-full"></p>
                <div className="absolute translate-x-8 translate-y-2 bg-blue-100 h-28 w-28 p-2 rounded-full border border-violet-500">
                  <img
                    src="/text.svg"
                    alt="text-us-img"
                    className="animate-animName"
                  />
                </div>
              </div>
              <div className="flex justify-left items-end">
                <img
                  src="/h1-about-img-2.png"
                  alt="about-us-img"
                  className="animate-shakeTwo w-44 p-2 border-2 border-violet-600 rounded-full"
                />
              </div>
              <div className="flex justify-center items-end">
                <img
                  src="/h1-about-img-4.png"
                  alt="about-us-img"
                  className="animate-pulse w-36 p-2 border-2 border-green-600 rounded-full"
                />
              </div>
            </div>
            <div className="pt-6 lg:pt-0">
              <div>
                <h3 className="text-blue-500 text-2xl font-light italic mb-3">
                  About Us
                </h3>
                <h2 className="font-bold text-4xl lg:text-5xl lg:leading-[60px] text-gray-600">
                  Making Your Business More Unique
                </h2>
                <p className="mt-3 text-gray-500">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
                <p className="mt-4 text-gray-500">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form,
                </p>
                <p className="mt-3 text-gray-500">
                  by injected humour, or randomised words which don't look even
                  slightly believable.
                </p>
              </div>

              <div className="mt-5">
                <Link
                  className="hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:border-cyan-500 hover:text-white w-36 text-center font-semibold inline-block rounded-full border-2 border-blue-500 p-3"
                  to="#"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
