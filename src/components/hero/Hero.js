import React from 'react'
import './hero.css'
import {useNavigate} from 'react-router-dom'
import TopDishes from '../top_dishes/TopDishes';
function Hero() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/product')
  }
    return (
      <section>
              <div className="hero-container">
          <div className="hero-text">
              <h1>Welcome to the <strong id='BrownWord'>home</strong> of uncompromising <em id='BrownWord'>Variety</em> and <em id='BrownWord'>Quality</em> in cuisine</h1>
              <button onClick={handleClick}>Order Now</button>
          </div>
            </div>

            <TopDishes/>
      </section>

    )
  }

export default Hero;