import './App.css';
import HomePage from './components/hero/Hero'
import NavBar from './components/navBar/NavBar'
import Product from './components/products/Product';
import Contact from "./components/contactPage/Contact"

function App() {
  return (
    <>
     <NavBar />
    <HomePage />
    <Product />
    <Contact/>
      {/*

 <NavBar />
   <AboutPage/>
    <ProductPage/> */}

    </>
  );
}

export default App;
