import { ParallaxLayer } from "@react-spring/parallax";
import { useSpring, useScroll } from "@react-spring/web";
import React from "react";
import Worker from "../../assets/worker2.png";
import Worker2 from "../../assets/worker1.png";

const Hero = () => {
  const { scrollYProgress } = useScroll();

  const imgOpacity = useSpring({
    opacity: scrollYProgress.to([0, 1], [1, 0]),
  });

  return (
    <div className="flex w-full z-15" style={{ height: "calc(100vh - 4rem)" }}>
      <div className="flex w-full">
        <ParallaxLayer offset={0} speed={0.6}>
          <div className="flex flex-col items-center md:items-start px-4 md:px-6 pt-16 md:pt-32 h-full w-full md:w-[60%] lg:w-[40%] mt-16 md:mt-16 bg-blue4" style={{ height: "calc(100vh - 4rem)" }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl w-full md:w-[80%] leading-snug md:leading-tight mt-16 md:mt-0 font-Beba text-white text-center md:text-left">
              Wir bringen <span className="text-blue1">Farbe</span> in Ihr <span className="text-blue2">Leben</span>,
              <br />
              Pinselstrich für Pinselstrich
            </h1>
            <button className="font-fjalla mt-8 md:mt-16 text-gray-100 drop-shadow-xl text-xl md:text-2xl py-3 md:py-4 px-4 bg-blue2 w-[80%] md:w-[50%] rounded-2xl hover:bg-blue1 hover:cursor-pointer z-40 transition-all duration-300">
              <p className="drop-shadow-xl">Angebot einholen</p>
            </button>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1} className="flex items-end justify-end w-full">
          <img
            src={Worker}
            alt="Worker"
            className="absolute max-h-[50vh] md:max-h-[70vh] lg:max-h-full right-0 object-cover"
            style={{ ...imgOpacity }}
          />
        </ParallaxLayer>
      </div>
    </div>
  );
};

export default Hero;
