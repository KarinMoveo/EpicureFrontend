import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { selectedCategoryType } from '../types';

import { useDispatch, useSelector } from 'react-redux';

import {
	getAllRestaurants,
	getNewRestaurants,
	getOpenNowRestaurants,
	getPopularRestaurants,
} from '../../../redux/restaurantSlice';

import Card from '../../../shared/components/Card';
import Filters from './Filters';
import Categories from './Categories';

import mapView from '../assets/images/others/mapView.png';

import '../components/Restaurants.scss';

function Restaurants() {
	const [selectedCategory, setSelectedCategory] = useState<selectedCategoryType>('All');
	const [filters, setFilters] = useState({
		distance: 0,
		rating: [],
		priceRange: { min: 12, max: 357 },
	});
	const dispatch = useDispatch();

	const handleCategorySelect = (category: selectedCategoryType) => {
		setSelectedCategory(category);
	};

	const selectedCategoryArray = useSelector((state: any) => {
		switch (selectedCategory) {
			case 'All':
				return state.restaurant.allRestaurants;
			case 'New':
				return state.restaurant.newRestaurants;
			case 'Most Popular':
				return state.restaurant.popularRestaurants;
			case 'Open Now':
				return state.restaurant.openNowRestaurants;
			default:
				return [];
		}
	});

	useEffect(() => {
		switch (selectedCategory) {
			case 'All':
				dispatch(getAllRestaurants());
				break;
			case 'New':
				dispatch(getNewRestaurants());
				break;
			case 'Most Popular':
				dispatch(getPopularRestaurants());
				break;
			case 'Open Now':
				dispatch(getOpenNowRestaurants());
				break;
			default:
				break;
		}
	}, [dispatch, selectedCategory]);

	return (
		<div className='restaurants-page-container'>
			<div className='restaurants-title-categories-filters-container'>
				<h1 className='restaurant-page-title'>RESTAURANTS</h1>
				<Categories selectedCategory={selectedCategory} onClick={handleCategorySelect} />
				<Filters filters={filters} setFilters={setFilters} />
			</div>

			<div className='restaurants-list'>
				{selectedCategory === 'Map View' ? (
					<img src={mapView} alt='Map View' className='map-view-image' />
				) : (
					selectedCategoryArray.map((restaurant: any, index: number) => (
						<NavLink key={index} to={`/restaurants/${restaurant.name}`} className='restaurant-link'>
							<Card cardImage={restaurant.image} cardName={restaurant.name}>
								<p>{restaurant.chef}</p>
								<img
									src={restaurant.rating}
									alt={`${restaurant.name} Rating`}
									className='restaurant-rating'
								/>
							</Card>
						</NavLink>
					))
				)}
			</div>
		</div>
	);
}

export default Restaurants;
