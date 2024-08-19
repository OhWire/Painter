import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";

const Footer = () => {
  return (
    <ParallaxLayer offset={0} speed={1}>
      <div className="w-full bg-blue3 text-white py-8 px-12">
        <div className="flex justify-between flex-wrap">
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-Beba font-light drop-shadow-xl">Kontakt</h3>
            <p className="text-lg font-light">
              [Firmenname] <br />
              Musterstraße 123 <br />
              12345 Musterstadt <br />
              Telefon: +49 123 456789 <br />
              E-Mail: info@musterfirma.de
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-Beba font-light drop-shadow-xl">Rechtliches</h3>
            <ul className="text-lg font-light space-y-2">
              <li><a href="/impressum" className="hover:underline">Impressum</a></li>
              <li><a href="/datenschutz" className="hover:underline">Datenschutz</a></li>
              <li><a href="/agb" className="hover:underline">AGB</a></li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-Beba font-light drop-shadow-xl">Social Media</h3>
            <ul className="text-lg font-light space-y-2">
              <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
              <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="w-full text-center mt-8">
          <p className="text-lg font-light">© 2024 [Firmenname]. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default Footer;
