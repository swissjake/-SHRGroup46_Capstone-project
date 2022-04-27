import React from 'react'
import './hero.css'
import {useNavigate} from 'react-router-dom'

function Hero() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/product')
  }
    return (
      <div className="hero-container">
          <div className="hero-text">
              <h1>Welcome to the <strong id='BrownWord'>home</strong> of uncompromising <em id='BrownWord'>Variety</em> and <em id='BrownWord'>Quality</em> in cuisine</h1>
              <button onClick={handleClick}>Order Now</button>
          </div>
            </div>
    )
  }

export default Hero;