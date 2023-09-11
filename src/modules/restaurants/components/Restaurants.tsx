import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { getAllRestaurants, filterRestaurants } from '../../../redux/restaurantSlice';

import Card from '../../../shared/components/Card';
import Filters from './Filters';
import Categories from './Categories';

import mapView from '../assets/images/others/mapView.png';

import '../components/Restaurants.scss';

function Restaurants() {
	const dispatch = useDispatch();
	const [filters, setFilters] = useState({
		category: 'All',
		distance: 5,
		rating: [true, true, true, true, true],
		priceRange: { min: 12, max: 357 },
	});

	useEffect(() => {
		dispatch(getAllRestaurants());
	}, [dispatch]);

	useEffect(() => {
		dispatch(filterRestaurants(filters));
	}, [dispatch, filters]);

	const handleCategorySelect = (category: any) => {
		setFilters((prev) => ({ ...prev, category }));
	};

	const selectedCategoryArray = useSelector((state: any) => state.restaurant.filteredRestaurants);

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
