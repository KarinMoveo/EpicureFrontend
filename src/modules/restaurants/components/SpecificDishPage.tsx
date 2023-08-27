import { useLocation } from 'react-router-dom';

import DishContent from './DishContent';

// import './SpecificDishPage.scss';

function SpecificDishPage() {
	const location = useLocation();
	const state = location.state;

	if (!state) {
		return <div>Error: Dish data not found</div>;
	}

	const { dishName, dishImage, dishIngredients, dishPrice, dishChanges, dishSide } = state;

	return (
		<div className='specific-dish-page-container'>
			<DishContent
				dishName={dishName}
				dishImage={dishImage}
				dishIngredients={dishIngredients}
				dishPrice={dishPrice}
				dishChanges={dishChanges}
				dishSide={dishSide}
			/>
		</div>
	);
}

export default SpecificDishPage;
