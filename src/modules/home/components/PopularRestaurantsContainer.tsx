import { NavLink } from 'react-router-dom';

import Card from '../../../shared/components/Card';

import seeMoreIcon from '../../../shared/assets/icons/seeMore.svg';

import popularRestaurantsMockData from '../../../mockData/data/popularRestaurantsMockData';

import '../components/PopularRestaurantsContainer.scss';

function PopularRestaurantsContainer() {
	return (
		<div className='popular-restaurants-container'>
			<p className='popular-restaurants-title'>POPULAR RESTAURANT IN EPICURE:</p>
			<div className='popular-restaurants-cards-display-and-all-restaurants'>
				<div className='popular-restaurants-cards-display'>
					{popularRestaurantsMockData.map((popularRestaurant, index) => (
						<Card key={index} cardImage={popularRestaurant.cardImage} cardName={popularRestaurant.cardName}>
							<p>{popularRestaurant.chefName}</p>
							<img
								src={popularRestaurant.ratingImage}
								className='popular-restaurant-image'
								alt='restaurants rating'
							/>
						</Card>
					))}
				</div>
				<NavLink to='./restaurants' className='all-restaurants'>
					{' '}
					All Restaurants
					<span className='see-more-icon'>
						<img src={seeMoreIcon} alt='See More Icon' />
					</span>
				</NavLink>
			</div>
		</div>
	);
}

export default PopularRestaurantsContainer;
