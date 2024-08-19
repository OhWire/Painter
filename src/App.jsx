import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import About from './components/About/About';
import Background from './assets/bg.jpg'; // Import the background image
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from './components/Contact/Contact';
import ContactPage from './components/Contact/ContactPage';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import PriceList from './components/Pricelist/Pricelist';

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      // On the home screen (Parallax), hide the standard scrollbar
      document.body.style.overflow = 'hidden';
    } else {
      // On other routes, allow standard scrolling
      document.body.style.overflow = 'auto';
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollHandler /> {/* Handles scrolling and overflow for different routes */}

      <div className="fixed w-full top-0 z-50  h-16 bg-blue2">
        <Navbar /> {/* Navbar is outside Routes to ensure it is always displayed */}
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <Parallax
              pages={2.3} // Adjusted to ensure enough space for all sections, including the footer
              style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <ParallaxLayer offset={0} speed={1} style={{ zIndex: 1 }} className="bg-transparent">
                <div className="flex pt-16 bg-transparent">
                  <Hero />
                </div>
              </ParallaxLayer>

              <ParallaxLayer offset={0.99} speed={1} style={{ zIndex: 2 }}>
                <div className="flex">
                  <About />
                </div>
              </ParallaxLayer>

              <ParallaxLayer offset={1.0} speed={1} style={{ zIndex: 2 }} className="h-full">
                <div className="flex">
                  <Portfolio />
                </div>
              </ParallaxLayer>

              <ParallaxLayer offset={1.8} speed={0.6} style={{ zIndex: 3 }} className="h-full">
                <div className="flex">
                  <Contact />
                </div>
              </ParallaxLayer>

              {/* Footer at the very bottom */}
              <ParallaxLayer offset={2.6} speed={1} style={{ zIndex: 4 }}>
                <Footer />
              </ParallaxLayer>
            </Parallax>
          }
        />

        {/* Other routes without Parallax */}
        <Route
          path="/gallery"
          element={
            <div className="pt-16">
              <Gallery />
            </div>
          }
        />
        <Route
          path="/pricelist"
          element={
            <div className="pt-16">
              <PriceList />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div className="pt-16">
              <ContactPage />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
