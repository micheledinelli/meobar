import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import CardSection from "../components/sections/CardSection";

const Home = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <CardSection />
      <Footer />
    </div>
  );
};

export default Home;
