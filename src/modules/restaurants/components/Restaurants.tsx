import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Card from '../../../shared/components/Card';

import mapView from '../assets/images/others/mapView.png';

import '../components/Restaurants.scss';

import popularRestaurantsMockData from '../../../mockData/data/popularRestaurantsMockData';

import Filters from './Filters';
import Categories from './Categories';

import { selectedCategoryType } from '../types';

function Restaurants() {
	const [selectedCategory, setSelectedCategory] = useState<selectedCategoryType>('All');

	const handleCategorySelect = (category: selectedCategoryType) => {
		setSelectedCategory(category);
	};

	return (
		<div className='restaurants-page-container'>
			<div className='restaurents-title-and-categories'>
				<h1 className='restaurant-page-title'>RESTAURANTS</h1>
				<Categories selectedCategory={selectedCategory} onClick={handleCategorySelect} />
				<Filters />
			</div>

			<div className='restaurants-list'>
				{selectedCategory === 'Map View' ? (
					<img src={mapView} alt='Map View' className='map-view-image' />
				) : (
					popularRestaurantsMockData.map((restaurant, index) => (
						<NavLink key={index} to={`/restaurants/${restaurant.cardName}`} className='restaurant-link'>
							<Card cardImage={restaurant.cardImage} cardName={restaurant.cardName}>
								<p>{restaurant.chefName}</p>
								<img
									src={restaurant.ratingImage}
									alt={`${restaurant.cardName} Rating`}
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
