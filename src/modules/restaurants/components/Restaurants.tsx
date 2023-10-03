import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Card from '../../../shared/components/Card';
import Filters from './Filters';
import Categories from './Categories';

import mapView from '../assets/images/others/mapView.png';

import '../components/Restaurants.scss';
import { restaurant } from '../../../shared/types';
import { getRestaurantsFromAPI } from '../api';
import Stars from '../assets/images/rating/Stars';

function Restaurants() {
	const [restaurantsList, setRestaurantsList] = useState<restaurant[]>([]);
	const [filters, setFilters] = useState({
		category: 'Everything',
		distance: 5,
		rating: 31,
		priceRange: { min: 12, max: 357 },
	});

	const isDesktop = window.innerWidth >= 1024;

	const handleCategorySelect = (category: any) => {
		setFilters((prev) => ({
			...prev,
			category: category,
		}));
	};

	useEffect(() => {
		async function getRestaurants() {
			try {
				const result = await getRestaurantsFromAPI(filters);
				setRestaurantsList(result.data);
			} catch (error: unknown) {
				console.log(error);
			}
		}
		getRestaurants();
	}, [filters]);

	return (
		<div className='restaurants-page-container'>
			<div className='restaurants-title-categories-filters-container'>
				<p className='restaurant-page-title'>RESTAURANTS</p>
				<Categories selectedCategory={filters.category} onClick={handleCategorySelect} />
				<Filters filters={filters} setFilters={setFilters} />
			</div>

			<div className='restaurants-list'>
				{filters.category === 'Map View' ? (
					<img src={mapView} alt='Map View' className='map-view-image' />
				) : (
					restaurantsList.map((restaurant: any, index: number) => (
						<NavLink key={index} to={`/restaurants/${restaurant._id}`} className='restaurant-link'>
							<Card cardImage={restaurant.image} cardName={restaurant.name}>
								<p>{restaurant.chef.name}</p>
								{isDesktop && <Stars rating={restaurant.popularity} />}
							</Card>
						</NavLink>
					))
				)}
			</div>
		</div>
	);
}

export default Restaurants;
