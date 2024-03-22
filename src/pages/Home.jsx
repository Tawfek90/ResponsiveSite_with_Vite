import React from "react";
import Navbar from "../components/navbar/Navbar";
import Success from "../components/Success";
import About from "../components/About";
import Services from "../components/Services";
import Companies from "../components/Companies";
import Products from "../components/Products";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Success />
      <About />
      <Services />
      <Companies />
      <Products />
      <Blogs />
      <Footer />
    </>
  );
}
