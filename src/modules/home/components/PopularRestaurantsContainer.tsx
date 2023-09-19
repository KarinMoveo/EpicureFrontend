import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import Card from '../../../shared/components/Card';

import seeMoreIcon from '../../../shared/assets/icons/seeMore.svg';

import { getPopularRestaurantsFromAPI } from '../api';
import { restaurant } from '../../../mockData/data/types';
import Stars from '../../restaurants/assets/images/rating/Stars';

import '../components/PopularRestaurantsContainer.scss';

function PopularRestaurantsContainer() {
	const navigate = useNavigate();
	const [popularRestaurants, setPopularRestaurants] = useState<restaurant[]>([]);
	const isDesktop = window.innerWidth >= 1024;

	useEffect(() => {
		async function getPopularRestaurants() {
			try {
				const result = await getPopularRestaurantsFromAPI();
				setPopularRestaurants(result.data);
			} catch (error: unknown) {
				console.log(error);
			}
		}
		getPopularRestaurants();
	}, []);

	return (
		<div className='popular-restaurants-container'>
			<p className='popular-restaurants-title'>POPULAR RESTAURANT IN EPICURE:</p>
			<div className='popular-restaurants-cards-display-and-all-restaurants'>
				<div className='popular-restaurants-cards-display'>
					{popularRestaurants.map((popularRestaurant: any, index: number) => (
						<Card
							key={index}
							cardImage={popularRestaurant.image}
							cardName={popularRestaurant.name}
							onClick={() => navigate(`/restaurants/${popularRestaurant.name}`)}
						>
							<p>{popularRestaurant.chef}</p>
							{isDesktop && <Stars rating={popularRestaurant.popularity} />}
						</Card>
					))}
				</div>
				<NavLink to='./restaurants' className='all-restaurants'>
					All Restaurants
					<span>
						<img src={seeMoreIcon} alt='See More Icon' className='see-more-icon' />
					</span>
				</NavLink>
			</div>
		</div>
	);
}

export default PopularRestaurantsContainer;
