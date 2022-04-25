import React, { useState } from 'react'
import FoodDeckLogo from '../../assets/FoodDeckLogo.png'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import './About.css'
import FoodDeckImage from '../../assets/FoodDeckImage.jpg'

 const About = () => {
   const[click, setClick] = useState(true);

      const handleToggle = () =>{
        setClick(prevClick => !prevClick)
      }

    return (
    <>
      <nav>
        <div className="navbar-container">
          <div className="nav-img">
            <img src={FoodDeckLogo} alt="The Food Deck Logo" />
          </div>
          <ul className={!click ? "nav-ul" : "nav-close"}>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
          <div onClick={handleToggle} className="nav-icons">
            {click ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
          </div>
        </div>
      </nav>
      <section className="about">
        <div className="row">
          <h1>About Food deck</h1>
          <p>Food deck is a seasonal cafe and marketplace featuring fresh 
            baked goods in East Hollywood, CA run by Pastry Chef/Baker Roxana Jullapat 
            and Chef Daniel Mattern. Longtime champions of produce-driven cooking, 
            Jullapat and Mattern built their careers over fifteen years in renowned 
            kitchens 
            of Los Angeles (including AOC, Lucques, Campanile, and Cooks County) 
            before opening Food Deck. 
            At Food Deck, they continue their dedication to hand made 
            food with artisan breads and pastries made daily with locally-sourced, 
            heirloom grains, as well as a produce forward day-time menu.
          </p>
        </div>
        <div className="column">
          <img className='food-deck' src={FoodDeckImage} alt='Description'></img>
        </div>
      </section>
    </>
    )
  }


export default About
