import React, { useEffect, useState } from 'react';
import SearchContainer from '../components/SearchContainer';
import PopularRestaurantsContainer from '../components/PopularRestaurantsContainer';
import SignatureDishesContainer from '../components/SignatureDishesContainer';
import IconsMeaningContainer from '../components/IconsMeaningContainer';
import ChefOfTheWeekContainer from '../components/ChefOfTheWeekContainer';
import About from '../components/About';

import { getChefOfTheWeekFromAPI } from '../api';
import { chef } from '../../../mockData/data/types';

function HomeScreen() {
	const [chefOfTheWeek, setChefOfTheWeek] = useState<chef | null>(null);

	useEffect(() => {
		async function getChefOfTheWeek() {
			try {
				const result = await getChefOfTheWeekFromAPI();
				setChefOfTheWeek(result.data);
			} catch (error: unknown) {
				console.log(error);
			}
		}
		getChefOfTheWeek();
	}, []);

	return (
		<div className='home-screen-container'>
			<SearchContainer />
			<PopularRestaurantsContainer />
			<SignatureDishesContainer />
			<IconsMeaningContainer />
			{chefOfTheWeek && (
				<ChefOfTheWeekContainer
					chefOfTheWeekImage={chefOfTheWeek.image}
					chefOfTheWeekName={chefOfTheWeek.name}
					chefOfTheWeekSummary={chefOfTheWeek.summary}
					chefOfTheWeekRestaurants={chefOfTheWeek.restaurants}
				/>
			)}
			<About />
		</div>
	);
}

export default HomeScreen;
