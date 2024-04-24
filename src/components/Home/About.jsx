import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url('/aboutus.png')] min-h-fit py-16 ">
        <div className="max-w-screen-xl mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-2 pt-10">
            <div className="grid grid-cols-2 grid-rows-2 ">
              <div>
                <img
                  src="/h1-about-img-3.png"
                  alt="about-us-img"
                  className="w-56 p-2 border-2 border-blue-500 rounded-full"
                />
              </div>
              <div>
                <img src="/about1-ticker-shape.png" alt="about-us-img" />
              </div>
              <div>
                <img src="/h1-about-img-2.png" alt="about-us-img" className="w-44 p-2 border-2 border-violet-600 rounded-full"/>
              </div>
              <div>
                <img src="/h1-about-img-4.png" alt="about-us-img" className="w-36 p-2 border-2 border-green-600 rounded-full"/>
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-blue-500 text-2xl font-light italic mb-3">
                  About Us
                </h3>
                <h2 className="font-bold text-5xl leading-[60px] text-gray-600">
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
                  className=" w-36 text-center inline-block rounded-full border-2 border-blue-500 p-3"
                  to="#"
                >
                  Contact Us
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
