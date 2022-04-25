import './App.css';
import HomePage from './components/homePage/HomePage'
import NavBar from './components/navBar/NavBar'
import Product from './components/products/Product';


function App() {
  return (
    <>
     <NavBar />
    <HomePage />
    <Product />
      {/*

 <NavBar />
   <AboutPage/>
    <ProductPage/> */}

    </>
  );
}

export default App;
