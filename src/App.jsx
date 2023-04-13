import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Analytics from "./components/analytics/Analytics";
import Newsletter from "./components/newsletter/Newsletter";
import Cards from "./components/cards/Cards";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
