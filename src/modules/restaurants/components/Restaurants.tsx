import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Card from '../../../shared/components/Card';

import downwardArrow from '../assets/icons/downwardArrow.svg';
import mapView from '../assets/images/others/mapView.png';

import '../components/Restaurants.scss';

import PriceRange from '../modals/PriceRange';
import Rating from '../modals/Rating';
import Distance from '../modals/Distance';

import popularRestaurantsMockData from '../../../mockData/data/popularRestaurantsMockData';

function Restaurants() {
	type openedModalType = 'Price range' | 'distance' | 'rating' | null;

	type selectedCategoryType = 'All' | 'New' | 'Most Popular' | 'Open Now' | 'Map View' | null;

	const categories: selectedCategoryType[] = ['All', 'New', 'Most Popular', 'Open Now', 'Map View'];

	const modals: openedModalType[] = ['Price range', 'distance', 'rating'];

	const [selectedCategoryItem, setSelectedCategoryItem] = useState<selectedCategoryType>('All');
	const [selectedFilterItem, setSelectedFilterItem] = useState<openedModalType>(null);
	const [isMapView, setIsMapView] = useState(false);
	const [openedModal, setOpenedModal] = useState<openedModalType>(null);

	const toggleModal = (modalName: openedModalType) => {
		if (modalName === openedModal) {
			setOpenedModal(null);
		} else {
			setOpenedModal(modalName);
			setSelectedFilterItem(modalName);
		}
	};

	const handleCategoryClick = (category: selectedCategoryType) => {
		if (category === 'Map View' && window.innerWidth >= 768) {
			setIsMapView(true);
			setSelectedCategoryItem(category);
		} else {
			setIsMapView(false);
			setSelectedCategoryItem(category);
		}
	};

	useEffect(() => {
		// in the future, make the API call here and update the restaurants state
	}, [selectedCategoryItem]);

	return (
		<div className='restaurants-page-container'>
			<div className='restaurents-title-and-categories'>
				<h1 className='restaurant-page-title'>RESTAURANTS</h1>
				<div className='restaurants-categories-container'>
					<div className='restaurants-categories-container'>
						{categories.map(
							(category) =>
								!(category === 'Map View' && window.innerWidth < 768) && (
									<p
										key={category}
										className={`restaurant-category-item ${
											selectedCategoryItem === category || (category === 'Map View' && isMapView)
												? 'category-item-selected'
												: ''
										}`}
										onClick={() => handleCategoryClick(category)}
									>
										{category}
									</p>
								)
						)}
					</div>
				</div>
			</div>
			<div className='row-filter'>
				{modals.map((filterItem) => (
					<p
						key={filterItem}
						className={`filter-item price-range-filter ${
							selectedFilterItem === filterItem ? 'filter-item-selected' : ''
						}`}
						onClick={() => toggleModal(filterItem)}
					>
						{filterItem && filterItem.charAt(0).toUpperCase() + filterItem.slice(1)}{' '}
						<span className='downward-arrow-icon'>
							<img src={downwardArrow} alt='downward arrow' />
						</span>
					</p>
				))}
			</div>

			<div className='restaurants-list'>
				{isMapView ? (
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
			{openedModal === 'Price range' && <PriceRange />}
			{openedModal === 'distance' && <Distance />}
			{openedModal === 'rating' && <Rating />}
		</div>
	);
}

export default Restaurants;
