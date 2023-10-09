import { useLocation, useNavigate } from 'react-router-dom';

import DishContent from './DishContent';

function SpecificDishPage() {
	const location = useLocation();
	const navigate = useNavigate();
	const state = location.state;

	if (!state) {
		return <div>Error: Dish data not found</div>;
	}

	const dish = state;

	const navigateBack = () => {
		navigate(-1);
	};

	return (
		<div className='specific-dish-page-container'>
			<DishContent dish={dish} onClose={navigateBack} />
		</div>
	);
}

export default SpecificDishPage;
