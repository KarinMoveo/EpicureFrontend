import DishContent from '../components/DishContent';
import Modal from '../../../shared/components/Modal';

import './SpecificDish.scss';

interface SpecificDishProps {
	dish: any;
	onClose: () => void;
}

function SpecificDish(props: SpecificDishProps) {
	const { dish } = props;

	return (
		<Modal isCentered hasClose onClose={props.onClose}>
			<div className='specific-dish-modal-container'>
				<DishContent
					dishName={dish.cardName}
					dishImage={dish.cardImage}
					dishIngredients={dish.ingredients}
					dishIcon={dish.icon}
					dishPrice={dish.price}
					dishChanges={dish.dishChanges}
					dishSide={dish.dishSide}
					onClose={props.onClose}
				/>
			</div>
		</Modal>
	);
}

export default SpecificDish;
