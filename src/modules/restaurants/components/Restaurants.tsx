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
import Loader from '../../../shared/components/Loader';

function Restaurants() {
	const [restaurantsList, setRestaurantsList] = useState<restaurant[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasLoadedAll, setHasLoadedAll] = useState(false);
	const [filters, setFilters] = useState({
		category: 'Everything',
		distance: 5,
		rating: 31,
		priceRange: { min: 12, max: 357 },
	});

	const itemsPerPage = 10;
	const currentPage = Math.ceil(restaurantsList.length / itemsPerPage) + 1;

	const isDesktop = window.innerWidth >= 1024;

	const handleCategorySelect = (category: any) => {
		setFilters((prev) => ({
			...prev,
			category: category,
		}));
	};

	useEffect(() => {
		const loadMoreRestaurants = async () => {
			try {
				setIsLoading(true);
				const result = await getRestaurantsFromAPI(filters, currentPage, itemsPerPage);

				if (result.data.length > 0) {
					setRestaurantsList((prev) => [...prev, ...result.data]);
				} else setHasLoadedAll(true);
			} catch (error: unknown) {
				console.log(error);
			}

			setIsLoading(false);
		};

		function handleScroll() {
			if (
				window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight &&
				restaurantsList.length &&
				!hasLoadedAll &&
				!isLoading
			) {
				loadMoreRestaurants();
			}
		}

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [currentPage, filters, hasLoadedAll, isLoading, restaurantsList.length]);

	useEffect(() => {
		const getDataBasedOnFilters = async () => {
			setIsLoading(true);
			const result = await getRestaurantsFromAPI(filters, 1, itemsPerPage);
			setRestaurantsList(result.data);
			setIsLoading(false);
		};

		getDataBasedOnFilters();
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
								<p className='chef-name'>{restaurant.chef.name}</p>
								{isDesktop && <Stars rating={restaurant.popularity} />}
							</Card>
						</NavLink>
					))
				)}
			</div>
			<Loader isLoading={isLoading} />
		</div>
	);
}

export default Restaurants;
