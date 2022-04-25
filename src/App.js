import './App.css';
import HomePage from './components/hero/Hero'
import NavBar from './components/navBar/NavBar'
import About from './components/about/About'
import Product from './components/products/Product';



function App() {
  return (
    <>
     <NavBar />
    <HomePage />


    <About />
   

    <Product />

      {/*

 <NavBar />
   <AboutPage/>
    <ProductPage/> */}

    </>
  );
}

export default App;
