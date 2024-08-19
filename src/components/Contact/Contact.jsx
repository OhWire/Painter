import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";

const Contact = () => {
  return (
    <div className="relative flex w-full h-full justify-between items-center z-10 ">
      <ParallaxLayer
        offset={0.5}
        speed={0.9}
        className="hidden md:flex justify-end items-center z-0"
      >
        <div className="hidden md:flex w-[28.25%] md:h-[80%] bg-blue1 bg-opacity-80 rounded-3xl mx-6 "></div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={0.5}
        speed={0.9}
        className="flex justify-center items-center z-10"
      >
        <div className="flex justify-center items-center w-full h-full  px-4 md:px-0 ">
          <div className="flex justify-center flex-col w-full md:w-[75%] lg:w-[60%] space-y-6 md:space-y-12 h-[70%] md:h-[80%] bg-blue2 mx-6 rounded-3xl p-6  md:p-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl w-full font-Beba font-light drop-shadow-2xl text-white ">
              Contact Us
            </h1>
            <form className="w-full space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg md:text-2xl font-light text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 md:p-4 mt-2 rounded-lg bg-white text-blue4 font-light drop-shadow-md"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg md:text-2xl font-light text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 md:p-4 mt-2 rounded-lg bg-white text-blue4 font-light drop-shadow-md"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg md:text-2xl font-light text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="w-full p-3 md:p-4 mt-2 rounded-lg bg-white text-blue4 font-light drop-shadow-md"
                ></textarea>
              </div>
              <div className="flex w-full items-center justify-center">
                <button
                  type="submit"
                  className="px-5 py-3 md:px-6 md:py-4 bg-white text-blue4 font-ibm-plex-mono bg-opacity-65 hover:bg-opacity-100 transition-all duration-300 font-bold rounded-lg shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={0.5}
        speed={0.9}
        className="hidden md:flex justify-start items-center z-0"
      >
        <div className="hidden md:flex w-[28.25%] h-full md:h-[80%] bg-blue1 bg-opacity-80 mx-6 rounded-3xl"></div>
      </ParallaxLayer>
    </div>
  );
};

export default Contact;
