import { useState } from "react";
import Hero from "./components/Hero";
import CardsSection from "./components/CardsSection";
import Footer from "./components/Footer";
import GetInvloved from "./components/GetInvloved";

function App() {
  return (
    <div>
      <Hero />
      <CardsSection />
      <GetInvloved />
      <Footer />
    </div>
  );
}

export default App;
