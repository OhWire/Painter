import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import img1 from "../../assets/projects1.jpg";
import img2 from "../../assets/projects2.jpg";
import img3 from "../../assets/project3.jpg";
import img4 from "../../assets/project4.jpg";

const Portfolio = () => {
  return (
    <>
      <ParallaxLayer offset={0.05} speed={0.7}>
        <div className="absolute grid grid-cols-1 md:grid-cols-6 grid-rows-8 gap-8 md:gap-16 p-6 md:p-12 top-0 left-0 w-full md:w-[40%] h-full z-15 bg-blue2">
          <ParallaxLayer offset={0.95} speed={0.8}>
            <h1 className="text-4xl md:text-7xl w-full pl-4 md:pl-6 pt-4 md:pt-6 font-Beba font-light drop-shadow-2xl text-white">
              Unser <br /> Portfolio
            </h1>
          </ParallaxLayer>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.7}>
        <div className="flex w-full h-full">
          <div className="hidden md:flex w-[40%]"></div>
          <div className="flex flex-col justify-center items-center h-[120vh] w-full space-y-2 md:space-y-12 p-4 md:p-6 bg-blue3">
            <div className="grid grid-cols-1 w-[80%]  md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 ">
              {[
                { img: img1, title: "Projekt 1" },
                { img: img2, title: "Projekt 2" },
                { img: img3, title: "Projekt 3" },
                { img: img4, title: "Projekt 4" },
              ].map((project, index) => (
                <div
                  key={index}
                  className="flex flex-col  justify-center items-center space-y-2 "
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="h-32 md:h-96 w-full object-cover drop-shadow-md rounded-lg"
                  />
                  <h3 className="text-2xl md:text-3xl font-light font-Beba tracking-wide text-white drop-shadow-xl">
                    {project.title}
                  </h3>
                  <button className="px-4 md:px-6 py-2 md:py-2 bg-white text-blue4 font-lato uppercase bg-opacity-65 hover:bg-opacity-100 hover:py-3 md:hover:py-4 hover:px-5 md:hover:px-8 font-bold rounded-lg shadow-lg transition-all">
                    Mehr Erfahren
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default Portfolio;
