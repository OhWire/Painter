import React, { useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const ContactPage = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Parallax pages={1.4} className="h-full w-full ">
      {/* Hintergrundschicht */}
      <ParallaxLayer offset={0} speed={0.1} factor={2}>
        <div className="w-full h-full bg-gradient-to-br from-blue1 to-blue4 bg-opacity-90" />
      </ParallaxLayer>

      {/* Kopfzeile Schicht */}
      <ParallaxLayer offset={0} speed={0.3}>
        <div className="flex justify-center pt-16 md:pt-32 w-full h-full px-4 md:px-0">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-9xl tracking-wide font-Beba font-bold text-white">
              Kontaktieren Sie uns
            </h1>
            <p className="mt-4 text-lg md:text-2xl lg:text-4xl text-white font-light leading-snug md:leading-12">
              Wir würden uns freuen, von Ihnen zu hören! <br />
              Ob Sie eine Frage, eine Idee oder einfach nur „Hallo“ sagen
              möchten, zögern Sie nicht, uns eine Nachricht zu senden.
            </p>
          </div>
        </div>
      </ParallaxLayer>

      {/* Formularschicht */}
      <ParallaxLayer offset={0.5} speed={0.5}>
        <div className="flex justify-center items-center w-full h-full px-4 md:px-0">
          <div className="flex justify-center flex-col w-full md:w-[75%] lg:w-[50%] space-y-6 md:space-y-12 bg-white bg-opacity-90 shadow-2xl rounded-3xl p-6 md:p-8 lg:p-16">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-Beba font-light text-blue4 text-center">
              Kontaktformular
            </h2>
            <form className="space-y-6 md:space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg md:text-xl lg:text-2xl font-light text-blue4"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 md:p-4 mt-2 rounded-lg bg-gray-200 text-blue4 font-light"
                  placeholder="Geben Sie Ihren Namen ein"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg md:text-xl lg:text-2xl font-light text-blue4"
                >
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 md:p-4 mt-2 rounded-lg bg-gray-200 text-blue4 font-light"
                  placeholder="Geben Sie Ihre E-Mail ein"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg md:text-xl lg:text-2xl font-light text-blue4"
                >
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="w-full p-3 md:p-4 mt-2 rounded-lg bg-gray-200 text-blue4 font-light"
                  placeholder="Geben Sie Ihre Nachricht ein"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-3 md:px-8 md:py-4 bg-blue4 text-white font-bold rounded-lg shadow-lg hover:bg-blue3 transition-all"
                >
                  Nachricht senden
                </button>
              </div>
            </form>
          </div>
        </div>
      </ParallaxLayer>

      {/* Fußzeilenschicht */}
      <ParallaxLayer offset={1.7} speed={0.3}>
        <div className="flex justify-center items-center w-full h-full px-4 md:px-0">
          <div className="text-center text-white">
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-Beba font-light">
              Wir freuen uns auf Ihre Nachricht!
            </h3>
            <p className="mt-4 text-lg md:text-xl lg:text-2xl">
              Wir antworten normalerweise innerhalb von 24 Stunden. Sie können
              uns auch gerne über soziale Medien kontaktieren.
            </p>
          </div>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default ContactPage;
