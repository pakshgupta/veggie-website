import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Products from "../components/Products";




const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories/> 
      <Products/>
      <Newsletter/>
      <Footer />
    </div>
  );
};

export default Home;