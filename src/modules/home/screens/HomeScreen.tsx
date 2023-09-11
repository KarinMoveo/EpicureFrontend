import React, { useEffect, useState } from 'react';
import SearchContainer from '../components/SearchContainer';
import PopularRestaurantsContainer from '../components/PopularRestaurantsContainer';
import SignatureDishesContainer from '../components/SignatureDishesContainer';
import IconsMeaningContainer from '../components/IconsMeaningContainer';
import ChefOfTheWeekContainer from '../components/ChefOfTheWeekContainer';
import About from '../components/About';

import { useDispatch, useSelector } from 'react-redux';
import { getAllChefs } from '../../../redux/chefSlice';

import { chef } from '../../../mockData/data/types';

function HomeScreen() {
	const dispatch = useDispatch();
	const chefs = useSelector((state: any) => state.chef.chefs);

	const [randomChef, setRandomChef] = useState<chef | null>(null);

	useEffect(() => {
		dispatch(getAllChefs());
		const randomIndex = Math.floor(Math.random() * chefs.length);
		const selectedChef = chefs[randomIndex];
		setRandomChef(selectedChef);
	}, [dispatch, chefs]);

	return (
		<div className='home-screen-container'>
			<SearchContainer />
			<PopularRestaurantsContainer />
			<SignatureDishesContainer />
			<IconsMeaningContainer />
			{randomChef && (
				<ChefOfTheWeekContainer
					chefOfTheWeekImage={randomChef.image}
					chefOfTheWeekName={randomChef.name}
					chefOfTheWeekSummary={randomChef.summary}
					randomChef={randomChef}
				/>
			)}
			<About />
		</div>
	);
}

export default HomeScreen;
