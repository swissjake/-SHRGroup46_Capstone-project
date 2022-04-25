import React, { useState } from 'react'
import FoodDeckLogo from '../../assets/FoodDeckLogo.png'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import './nav.css'


 const NavBar = () => {
   const[click, setClick] = useState(true);

      const handleToggle = () =>{
        setClick(prevClick => !prevClick)
      }

    return (
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
            {click ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30} />}
          </div>
      </div>
    </nav>
    )
  }


export default NavBar
