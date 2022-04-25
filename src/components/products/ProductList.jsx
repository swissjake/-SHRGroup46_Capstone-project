import React, {useState} from 'react'
import {AiFillStar} from 'react-icons/ai'
import Currency from 'react-currency-formatter';
 

const MIN_RATING = 1;
const MAX_RATING = 5;

const ProductList = (props) => {
    const {id, image, description, price, amount, btnText, title} = props;

    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    )
  return (
    <div className='cards'>
        <div className='card-image'>
        <img src={image} alt="food" />
        </div>
        <div className='discount'>
            <span>-5% off</span>
        </div>
        <div className='card-text'>
        <h2>{title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, earum!</p>
        <div className='rating-container'>
        {Array(rating).fill().map((_,i) => (
            <AiFillStar size={20} style={{fill: "#ffcd3c"}}/>
        ))}
        </div>
        <div className="">
                <Currency quantity={price} currency="NGN"/>
        </div>
            <button>Add to Cart</button>
        </div>

    </div>
  )
}

export default ProductList