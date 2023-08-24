import { useLocation } from 'react-router-dom';

import DishContent from './DishContent';

function SpecificDishPage() {
	const location = useLocation();
	const state = location.state;

	if (!state) {
		return <div>Error: Dish data not found</div>;
	}

	const { dishName, dishImage, dishIngredients } = state;

	return (
		<div className='specific-dish-page-container'>
			<DishContent dishName={dishName} dishImage={dishImage} dishIngredients={dishIngredients} />
		</div>
	);
}

export default SpecificDishPage;
