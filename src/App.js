import './App.css';
import Hero from './components/hero/Hero'
import NavBar from './components/navBar/NavBar'
import About from './components/About/About'
import Product from './components/products/Product';
import Contact from "./components/contactPage/Contact"


function App() {
  return (
    <>
     <NavBar />
    <Hero />
    <Product />
    <Contact/>
      {/*
    <Hero />
  <About />

   

  

      {/*
  <Product />
 <NavBar />
   <AboutPage/>
    <ProductPage/> */}

    </>
  );
}

export default App;
