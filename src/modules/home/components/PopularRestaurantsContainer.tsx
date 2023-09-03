import { NavLink } from 'react-router-dom';

import Card from '../../../shared/components/Card';

import seeMoreIcon from '../../../shared/assets/icons/seeMore.svg';

import '../components/PopularRestaurantsContainer.scss';

import { useDispatch, useSelector } from 'react-redux';

import { getPopularRestaurants } from '../../../redux/restaurantSlice';
import { useEffect } from 'react';

function PopularRestaurantsContainer() {
	const dispatch = useDispatch();
	const popularRestaurants = useSelector((state: any) => state.restaurant.popularRestaurants);

	useEffect(() => {
		dispatch(getPopularRestaurants());
	}, [dispatch]);

	return (
		<div className='popular-restaurants-container'>
			<p className='popular-restaurants-title'>POPULAR RESTAURANT IN EPICURE:</p>
			<div className='popular-restaurants-cards-display-and-all-restaurants'>
				<div className='popular-restaurants-cards-display'>
					{popularRestaurants.map((popularRestaurant: any, index: number) => (
						<Card key={index} cardImage={popularRestaurant.image} cardName={popularRestaurant.name}>
							<p>{popularRestaurant.chef}</p>
							<img
								src={popularRestaurant.rating}
								className='popular-restaurant-image'
								alt='restaurants rating'
							/>
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
		</div>
	);
}

export default PopularRestaurantsContainer;
