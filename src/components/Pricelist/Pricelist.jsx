import React, { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { FaStar } from "react-icons/fa";
import Modal from 'react-modal';

const PriceList = () => {
  const services = [
    {
      name: "Innenanstrich",
      price: "200 € pro Zimmer",
      description: "Unser Innenanstrich-Service umfasst die Vorbereitung der Wände, Farbberatung und den hochwertigen Farbauftrag für ein makelloses Finish.",
      image: "https://via.placeholder.com/300x200", // Add a placeholder image or your own
    },
    {
      name: "Außenanstrich",
      price: "500 € pro Seite",
      description: "Unser Außenanstrich-Service sorgt dafür, dass das Äußere Ihres Hauses geschützt ist und großartig aussieht, mit langlebigen Farben, die den Elementen standhalten.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Möbelanstrich",
      price: "150 € pro Stück",
      description: "Wir bieten maßgeschneiderten Möbelanstrich, um Ihren alten Stücken neues Leben einzuhauchen, mit einer Vielzahl von Oberflächen und Farben zur Auswahl.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Kunst nach Maß",
      price: "Ab 300 €",
      description: "Unser Kunst-nach-Maß-Service bietet personalisierte Kunstwerke, die auf Ihren Geschmack und Ihren Raum zugeschnitten sind, perfekt, um Ihrem Zuhause eine einzigartige Note zu verleihen.",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  const testimonials = [
    {
      quote: "Die Qualität der Arbeit war herausragend und das Team war sehr professionell. Sehr zu empfehlen!",
      author: "John Doe",
      image: "https://via.placeholder.com/150",
      rating: 5,
    },
    {
      quote: "Ausgezeichneter Service und Liebe zum Detail. Mein Zuhause sieht aus wie neu!",
      author: "Jane Smith",
      image: "https://via.placeholder.com/150",
      rating: 4,
    },
    {
      quote: "Erschwingliche Preise für erstklassige Malerarbeiten. Ich könnte nicht glücklicher mit dem Ergebnis sein.",
      author: "Emily Johnson",
      image: "https://via.placeholder.com/150",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={index < rating ? "text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  const [hoveredService, setHoveredService] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedService(null);
  };

  return (
    <Parallax pages={1.5} className="h-full bg-blue4">
      {/* Kopfzeilen-Bereich */}
      <ParallaxLayer offset={0.2} speed={0.8}>
        <div className="z-15 text-white flex justify-center  md:justify-start md:items-start md:flex-col md:w-[40%] md:px-6">
          {hoveredService !== null ? (
            <>
              {/* Image for medium and larger screens */}
              <div className="hidden md:flex justify-center w-full pb-6 items-center mb-4">
                <img
                  src={services[hoveredService].image}
                  alt={services[hoveredService].name}
                  className="rounded-lg shadow-lg"
                />
              </div>
              {/* Description text */}
              <p className="text-2xl sm:text-3xl md:text-5xl font-Beba drop-shadow-2xl px-4 sm:px-6 w-full text-center md:text-left">
                {services[hoveredService].description}
              </p>
            </>
          ) : (
            <h1 className="text-4xl sm:text-6xl md:text-9xl w-full pl-2 md:pl-0 pt-6 font-Beba font-light drop-shadow-2xl text-center md:text-left">
              Unsere <br /> Preise
            </h1>
          )}
        </div>
      </ParallaxLayer>

      {/* Service-Bereich */}
      <ParallaxLayer offset={0} speed={1.2}>
        <div className="flex flex-col md:flex-row w-full h-[100vh]">
          <div className="hidden md:flex md:w-[40%] justify-center items-center h-full"></div>
          <div className="flex flex-col justify-center items-center w-full h-full md:w-[60%] space-y-6 sm:space-y-8 md:space-y-12 p-4 sm:p-6 bg-blue2 overflow-y-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-12 w-full">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="relative flex flex-col justify-center items-center space-y-3 sm:space-y-4 bg-blue1 bg-opacity-55 drop-shadow-xl py-6 sm:py-8 md:py-12 px-6 sm:px-8 md:px-12 rounded-2xl"
                >
                  <div className="h-10 sm:h-12 md:h-16 w-full bg-blue4 bg-opacity-65 font-Beba text-white tracking-wide uppercase flex text-center items-center justify-center text-lg sm:text-xl md:text-2xl drop-shadow-md rounded-lg p-3 sm:p-4">
                    {service.name}
                  </div>
                  <p className="text-lg sm:text-xl md:text-2xl text-white font-lato font-light drop-shadow-lg">
                    {service.price}
                  </p>
                  <button
                    className="px-3 sm:px-4 py-2 md:px-6 md:py-2 bg-white text-black font-lato uppercase bg-opacity-65 hover:bg-opacity-100 hover:py-3 hover:px-5 sm:hover:px-7 md:hover:py-4 md:hover:px-8 font-bold rounded-lg shadow-lg duration-300 transition-all text-sm sm:text-base md:text-lg"
                    onClick={() => {
                      if (window.innerWidth < 768) {
                        openModal(service);
                      } else {
                        setHoveredService(index);
                      }
                    }}
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={() => {
                      if (window.innerWidth >= 768) {
                        setHoveredService(null);
                      }
                    }}
                  >
                    Mehr Erfahren
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ParallaxLayer>

      {/* Testimonials-Bereich */}
      <ParallaxLayer offset={0.99} speed={1}>
        <div className="flex flex-col md:flex-row w-full h-[100vh]">
          <div className="flex flex-col justify-center items-center w-full h-full md:w-[60%] space-y-6 sm:space-y-8 md:space-y-12 p-4 sm:p-6 bg-blue2">
            <div className="w-full md:w-3/4 space-y-6 sm:space-y-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="justify-center p-4 sm:p-6 bg-white bg-opacity-70 text-blue4 font-lato text-sm sm:text-base md:text-lg rounded-lg shadow-lg flex flex-col md:flex-row items-center"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="max-w-12 max-h-12 sm:max-w-16 sm:max-h-16 rounded-full mb-4 md:mb-0 md:mr-6 bg-black"
                  />
                  <div className="flex flex-col items-center md:items-start">
                    <p className="italic text-center md:text-left">"{testimonial.quote}"</p>
                    <div className="flex mt-2">{renderStars(testimonial.rating)}</div>
                    <p className="text-right font-semibold mt-2">
                      - {testimonial.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex md:w-[40%] justify-center items-center h-full">
            <h2 className="text-5xl sm:text-6xl md:text-8xl w-full px-2 md:pr-6 pt-6 font-Beba font-light drop-shadow-2xl text-white text-right">
              Testimonials
            </h2>
          </div>
        </div>
      </ParallaxLayer>

      {/* Modal for service details, only for small screens */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Service Details"
        className="absolute top-[10%] left-[5%] right-[5%] bg-white rounded-lg p-6 max-w-lg mx-auto shadow-lg"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        {selectedService && (
          <div className="flex flex-col items-center ">
            <img
              src={selectedService.image}
              alt={selectedService.name}
              className="w-full  h-auto rounded-lg mb-4 "
            />
            <h2 className="text-2xl font-bold mb-4">{selectedService.name}</h2>
            <p className="text-lg mb-4">{selectedService.description}</p>
            <button
              className="px-4 py-2 bg-blue4 text-white font-bold rounded-lg hover:bg-blue6 transition"
              onClick={closeModal}
            >
              Schließen
            </button>
          </div>
        )}
      </Modal>
    </Parallax>
  );
};

export default PriceList;
