import React from 'react'
import './About.css'
import FoodDeckImage from '../../assets/FoodDeckImage.jpg'

 const About = () => {
          return(
      <section className="about-container">
         <h1>About Us</h1>
        <div className="about-content">
       <div className='about-text'>
           <h2>About Food deck</h2>
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
        <div className="about-image">
          <img className='food-deck' src={FoodDeckImage} alt='Description'></img>
        </div>
        </div>
      </section>
 
    )
  }


export default About
