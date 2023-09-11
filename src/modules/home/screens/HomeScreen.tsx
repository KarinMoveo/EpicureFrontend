import React, { useEffect } from 'react';
import SearchContainer from '../components/SearchContainer';
import PopularRestaurantsContainer from '../components/PopularRestaurantsContainer';
import SignatureDishesContainer from '../components/SignatureDishesContainer';
import IconsMeaningContainer from '../components/IconsMeaningContainer';
import ChefOfTheWeekContainer from '../components/ChefOfTheWeekContainer';
import About from '../components/About';

import { useDispatch, useSelector } from 'react-redux';
import { getAllChefs } from '../../../redux/chefSlice';
import { getAllRestaurants } from '../../../redux/restaurantSlice';

function HomeScreen() {
	const dispatch = useDispatch();
	const chef = useSelector((state: any) => state.chef.allChefs[0]);

	useEffect(() => {
		dispatch(getAllRestaurants());
		dispatch(getAllChefs());
	}, [dispatch]);

	return (
		<div className='home-screen-container'>
			<SearchContainer />
			<PopularRestaurantsContainer />
			<SignatureDishesContainer />
			<IconsMeaningContainer />
			{chef && (
				<ChefOfTheWeekContainer
					chefOfTheWeekImage={chef.image}
					chefOfTheWeekName={chef.name}
					chefOfTheWeekSummary={chef.summary}
				/>
			)}
			<About />
		</div>
	);
}

export default HomeScreen;
