import { useLocation, useNavigate } from 'react-router-dom';

import DishContent from './DishContent';

function SpecificDishPage() {
	const location = useLocation();
	const navigate = useNavigate();
	const state = location.state;

	if (!state) {
		return <div>Error: Dish data not found</div>;
	}

	const { dishName, dishImage, dishIngredients, dishPrice, dishChanges, dishSide } = state;

	const navigateBack = () => {
		navigate(-1);
	};

	return (
		<div className='specific-dish-page-container'>
			<DishContent
				dishName={dishName}
				dishImage={dishImage}
				dishIngredients={dishIngredients}
				dishPrice={dishPrice}
				dishChanges={dishChanges}
				dishSide={dishSide}
				onClose={navigateBack}
			/>
		</div>
	);
}

export default SpecificDishPage;
