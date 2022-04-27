import React, { Component } from 'react'
import './hero.css'
import TopDishes from '../top_dishes/TopDishes'
export default class HomePage extends Component {
  render() {
    return (
      <section>
              <div className="hero-container">
          <div className="hero-text">
              <h1>Welcome to the <strong id='BrownWord'>home</strong> of uncompromising <em id='BrownWord'>Variety</em> and <em id='BrownWord'>Quality</em> in cuisine</h1>
              <button>Order Now</button>
          </div>
            </div>

            <TopDishes/>
      </section>

    )
  }
}
