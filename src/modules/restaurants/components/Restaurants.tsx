import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Card from '../../../shared/components/Card';
import Filters from './Filters';
import Categories from './Categories';

import mapView from '../assets/images/others/mapView.png';

import '../components/Restaurants.scss';
import { restaurant } from '../../../mockData/data/types';
import { getRestaurantsFromAPI } from '../api';
import Stars from '../assets/images/rating/Stars';

function Restaurants() {
	const [restaurantsList, setRestaurantsList] = useState<restaurant[]>([]);
	const [filters, setFilters] = useState({
		category: 'Show All',
		distance: 5,
		rating: 31,
		priceRange: { min: 12, max: 357 },
	});

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

	const handleCategorySelect = (category: any) => {
		setFilters((prev) => ({ ...prev, category }));
	};

	return (
		<div className='restaurants-page-container'>
			<div className='restaurants-title-categories-filters-container'>
				<h1 className='restaurant-page-title'>RESTAURANTS</h1>
				<Categories selectedCategory={filters.category} onClick={handleCategorySelect} />
				<Filters filters={filters} setFilters={setFilters} />
			</div>

			<div className='restaurants-list'>
				{filters.category === 'Map View' ? (
					<img src={mapView} alt='Map View' className='map-view-image' />
				) : (
					restaurantsList.map((restaurant: any, index: number) => (
						<NavLink key={index} to={`/restaurants/${restaurant.name}`} className='restaurant-link'>
							<Card cardImage={restaurant.image} cardName={restaurant.name}>
								<p>{restaurant.chef}</p>
								<Stars rating={restaurant.popularity} />
							</Card>
						</NavLink>
					))
				)}
			</div>
		</div>
	);
}

export default Restaurants;
