import React from 'react'
import './footer.css'
import { Link } from "react-router-dom";
import {FaFacebookF,
    FaPinterestSquare,
    FaInstagram,
    FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
      <>
    <div className='footer'>
        <div className='social-icons'>
           <div><a href="/"><FaFacebookF /></a></div>
          <div><a href="/"><FaPinterestSquare /></a></div> 
           <div><a href="/"><FaInstagram /></a></div>
           <div><a href="/"><FaTwitter /></a></div>
        </div>
        <div className='footer-tags'>
            <p>Home</p>
            <p>Menu</p>
            <p>Newsletter</p>
            <p>Location</p>
            <p>Foods</p>
        </div>
        <ul className='footer-links'>
           <Link className="navlink" to="/">
            <li>Home</li>
          </Link>
          <Link className="navlink" to="/about">
            <li>About</li>
          </Link>
          <Link className="navlink" to="/product">
            <li>Products</li>
          </Link>
          <Link className="navlink" to="/contact">
            <li>Contact</li>
          </Link>
        </ul>

    </div>
     {/*Last Footer*/}
    <div className='second-footer'>
            <p>Copyright &copy; 2022</p>
            <p>Built by Group 46 Side Hustle Project</p>
    </div>
    </>
  )
}


//#062C30
//#3e7c39
export default Footer