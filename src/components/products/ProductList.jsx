import React, {useState} from 'react'
import {AiFillStar} from 'react-icons/ai'
import Currency from 'react-currency-formatter';
 

const MIN_RATING = 1;
const MAX_RATING = 5;

const ProductList = (props) => {
    const {id, image, description, price, btnText, title} = props;

    const [amount, setAmount] = useState(0)

    const handleIncrement = () => {
        setAmount(prevAmount => prevAmount + 1)
        if (amount === 10){
            setAmount(10)
        }
    }
    const handleDecrement = () => {
        setAmount(prevAmount => prevAmount - 1)
        if (amount === 0){
            setAmount(0)
        }
    }


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
        <p>{description}</p>
        <div className='rating-container'>
        {Array(rating).fill().map((_,i) => (
            <AiFillStar size={20} style={{fill: "#ffcd3c"}}/>
        ))}
        </div>
        <div className="">
                <Currency quantity={price} currency="NGN"/>
        </div>
        <div className='btn-container'>
           <div className='amount-adjust'>
                <p onClick={handleDecrement}>-</p>
                <p>{amount}</p>
                <p onClick={handleIncrement}>+</p>
            </div>
            <button>{btnText}</button>
        </div>
        </div>

    </div>
  )
}

export default ProductList