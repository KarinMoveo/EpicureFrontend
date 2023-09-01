import { NavLink } from 'react-router-dom';

import Card from '../../../shared/components/Card';

import signatureDishesMockData from '../../../mockData/data/signatureDishesMockData';

import seeMoreIcon from '../../../shared/assets/icons/seeMore.svg';

import '../components/SignatureDishesContainer.scss';

function SignatureDishesContainer() {
	return (
		<div className='signature-dishes-container'>
			<p className='signature-dishes-title'>SIGNATURE DISH OF:</p>
			<div className='signature-dishes-cards-display'>
				{signatureDishesMockData.map((dish, index) => (
					<Card key={index} cardImage={dish.cardImage} cardName={dish.cardName}>
						<p className='dish-ingredients'>{dish.ingredients}</p>
						<img src={dish.icon} alt='icon' className='signature-dish-icon' />
						<p>₪{dish.price}</p>
					</Card>
				))}
			</div>
			<NavLink to='./restaurants' className='all-restaurants'>
				All Restaurants
				<span className='see-more-icon'>
					<img src={seeMoreIcon} alt='See More Icon' />
				</span>
			</NavLink>
		</div>
	);
}

export default SignatureDishesContainer;
