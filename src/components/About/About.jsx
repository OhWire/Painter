import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import img1 from "../../assets/pic1.jpg";
import img2 from "../../assets/pic2.jpg";
import img3 from "../../assets/pic3.jpg";

const About = () => {
  return (
    <>
      <ParallaxLayer offset={0.01} speed={0.7}>
        <div className="absolute grid grid-cols-1 md:grid-cols-5 grid-rows-8 gap-8 md:gap-16 p-6 md:p-12 top-0 left-0 w-full md:w-[40%] h-full z-15 bg-blue3">
          <ParallaxLayer
            speed={0.6}
            className="flex col-span-1 md:col-span-3 col-start-1 row-start-1 row-span-5 drop-shadow-2xl"
          >
            <img src={img1} alt="" className="h-32 md:h-96 object-cover md:w-64 w-full  ml-0 md:ml-16  rounded-lg" />
          </ParallaxLayer>
          <ParallaxLayer
            speed={1}
            className="flex col-span-1 md:col-span-4 col-start-1 md:col-start-3 row-start-3 row-span-6 drop-shadow-2xl"
          >
            <img src={img2} alt="" className="h-64 md:h-96 object-cover w-full md:w-64 md:ml-16 rounded-lg" />
          </ParallaxLayer>
          <ParallaxLayer
            speed={0.5}
            className="flex col-span-1 md:col-span-5 col-start-1 row-start-6 row-span-4 drop-shadow-2xl"
          >
            <img src={img3} alt="" className="h-64 md:h-96 object-cover w-full md:w-96 md:ml-32 ml-0 rounded-lg" />
          </ParallaxLayer>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0.01} speed={1.2}>
        <div className="flex w-full h-full">
          <div className="hidden md:flex w-[40%]"></div>
          <div className="flex flex-col w-full md:w-[60%] space-y-6 md:space-y-12 p-4 md:p-6 bg-blue2">
            <h1 className="text-4xl md:text-7xl w-full pl-4 md:pl-6 pt-4 md:pt-6 font-Beba font-light drop-shadow-2xl text-white">
              Über Uns
            </h1>
            <h3 className="pl-4 md:pl-6 w-full md:w-[80%] text-lg md:text-2xl font-light font-roboto text-white drop-shadow-xl leading-relaxed md:leading-normal">
              Architecto, quisquam unde. Asperiores molestiae dicta esse quibusdam corrupti voluptatem
              odio, animi, blanditiis cupiditate, at nesciunt vero inventore? Cum in adipisci facere
              soluta. <br />
              <br />
              Labore saepe fugiat sapiente hic officiis, similique mollitia quis totam libero placeat aut.
              Neque explicabo iste harum blanditiis beatae? Nesciunt voluptatum nulla aliquam tempore.
              Odio sit perspiciatis eveniet ducimus reiciendis voluptate ea dolorum nesciunt assumenda sed
              optio tempora est a aliquam, impedit nulla nostrum quo, enim atque similique sunt iste! Porro
              officiis animi odit fugit debitis modi ad, quasi consequuntur non quis deleniti. Dicta
              consequatur tempora id aliquid officia.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta accusamus consequatur hic
              inventore? Adipisci, maxime reprehenderit? Ut fugit numquam cum!
            </h3>
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default About;
