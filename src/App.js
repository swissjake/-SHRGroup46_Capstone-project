/** @format */

import "./App.css";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navBar/NavBar";
import About from "./components/About/About";
import Product from "./components/products/Product";
import Contact from "./components/contactPage/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      {/* Routes Added Below */}
      <Routes>
        <Route exact path="/" element={<Hero />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      {/*
    <Hero />
  <About />
<Contact/>

  

      {/*
  <Product />
 <NavBar />
   <AboutPage/>
    <ProductPage/> */}
    </>
  );
}

export default App;
