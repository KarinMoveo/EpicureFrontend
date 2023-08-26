import DishContent from '../components/DishContent';
import Modal from '../../../shared/components/Modal';

import closeIcon from '../../../shared/assets/icons/x.svg';

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
				<button className='close-modal-button' onClick={props.onClose}>
					<img src={closeIcon} alt='close' />
				</button>
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
