import DishContent from './DishContent';
import Modal from '../../../shared/components/Modal';

import './SpecificDishModal.scss';

interface SpecificDishModalProps {
	dish: any;
	onClose: () => void;
}

function SpecificDishModal(props: SpecificDishModalProps) {
	const { dish } = props;

	return (
		<Modal onClose={props.onClose}>
			<div className='specific-dish-modal-container'>
				<DishContent
					dishName={dish.cardName}
					dishImage={dish.cardImage}
					dishIngredients={dish.ingredients}
					dishIcon={dish.icon}
					dishPrice={dish.price}
				/>
			</div>
		</Modal>
	);
}

export default SpecificDishModal;
