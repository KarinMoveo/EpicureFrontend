import { Link } from 'react-router-dom';

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
						<p>{dish.description}</p>
						<img src={dish.icon} alt='icon' />
						<p>{dish.price}</p>
					</Card>
				))}
			</div>
			<Link to='./restaurants' className='all-restaurants'>
				{' '}
				All Restaurants
				<span className='see-more-icon'>
					<img src={seeMoreIcon} alt='See More Icon' />
				</span>
			</Link>
		</div>
	);
}

export default SignatureDishesContainer;
