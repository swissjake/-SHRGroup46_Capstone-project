import React from 'react';
import styles from './TopDishes.module.css';
import friedRice from '../../assets/dish1.png';
import egusi from '../../assets/dish2.png';
import yam from '../../assets/dish3.png';
import salad from '../../assets/dish4.png';
import noodles from '../../assets/dish5.png';
import beans from '../../assets/dish6.png';
import Currency from 'react-currency-formatter';

const TopDishes = () => {
	const h2_style = { textAlign: 'center', fontSize: '2.5rem' };
	const img_style = { width: '50%' };

	const topDishes = [
		{
			image: friedRice,
			price: '2000',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, laudantium?',
			foodHeader: 'fried rice'
		},
		{
			image: egusi,
			price: '2200',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, laudantium?',
			foodHeader: 'egusi'
		},
		{
			image: yam,
			price: '700',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, laudantium?',
			foodHeader: 'yam'
		},
		{
			image: salad,
			price: '200',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, laudantium?',
			foodHeader: 'salad'
		},
		{
			image: noodles,
			price: '1000',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, laudantium?',
			foodHeader: 'noodles'
		},
		{
			image: beans,
			price: '800',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, laudantium?',
			foodHeader: 'beans'
		}
	];

	return (
		<div className={styles.container}>
			<h2 style={h2_style}>Top Dishes</h2>
			{topDishes.map((item, index) => (
				<div className={styles.dishContainer}>
					<div className={styles.col1}>
						<div>
							<h2 className={styles.foodHeader}>{item.foodHeader}</h2>
							<p className={styles.price}> <Currency quantity={item.price} currency="NGN"/></p>
							<p>{item.text}</p>
						</div>
					</div>

					<div className={styles.col2}>
						<img src={item.image} style={img_style} alt="fried rice" />
					</div>
				</div>
			))}
		</div>
	);
};

export default TopDishes;
// Green: #3E4F3C
// Brown: #F1E8D7
// White: #FFFFFF
