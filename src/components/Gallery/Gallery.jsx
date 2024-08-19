import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import img1 from "../../assets/pic1.jpg";
import img2 from "../../assets/pic2.jpg";
import img3 from "../../assets/pic3.jpg";
import img4 from "../../assets/1.png";
import team1 from "../../assets/team1.jpg";
import team2 from "../../assets/team2.jpg";
import team3 from "../../assets/team3.jpg";
import project1 from "../../assets/projects1.jpg";
import project2 from "../../assets/projects2.jpg";
import project3 from "../../assets/project3.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  fade: true,
  cssEase: "linear",
};

const GallerySection = ({ title, images, offset, alignRight, speed }) => (
  <ParallaxLayer
    offset={offset}
    speed={speed}
    style={{ zIndex: 10 }}
    className="drop-shadow-2xl"
  >
    <div className="w-full h-[100vh] flex items-center py-6 md:py-16 z-20">
      <div
        className={`w-full h-full flex items-center flex-col-reverse ${
          alignRight ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="w-full md:w-2/3 px-4 md:px-16">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="px-4 md:px-12">
                <img
                  src={image}
                  alt={`${title} ${index + 1}`}
                  className="w-full h-[40vh] md:h-[60vh] shadow-2xl object-cover rounded-lg drop-shadow-xl"
                />
              </div>
            ))}
          </Slider>
        </div>
        <h2 className="w-full md:w-1/3 flex justify-center items-center bg-blue2 h-40 md:h-screen text-3xl md:text-8xl text-white text-center font-Beba font-light drop-shadow-xl p-4 my-16 md:my-0 md:p-0">
          {title}
        </h2>
      </div>
    </div>
  </ParallaxLayer>
);

const Gallery = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize the state based on the current screen size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Parallax pages={isSmallScreen ? 0.8 : 2.1} className="bg-blue1">
      <GallerySection
        title="Unser Galerie"
        images={[img1, img2, img3, img4]}
        offset={0}
        alignRight={false} // Carousel on the left, title on the right
        speed={1.2}
      />
      <GallerySection
        title="Our Team"
        images={[team1, team2, team3]}
        offset={isSmallScreen ? 0.99 : 0.89}
        alignRight={true} // Title on the left, carousel on the right
        speed={1}
      />
      <GallerySection
        title="Unsere Projekte"
        images={[project1, project2, project3]}
        offset={isSmallScreen ? 1.0: 1.1}
        alignRight={false} // Carousel on the left, title on the right
        speed={1}
      />
    </Parallax>
  );
};

export default Gallery;
