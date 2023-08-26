import DishContent from './DishContent';
import Modal from '../../../shared/components/Modal';

import xIcon from '../../../shared/assets/icons/x.svg';

import './SpecificDishModal.scss';

function SpecificDishModal(props: any) {
	const { dish } = props;

	const handleOnClose = () => {
		if (props.onClose) props.onClose();
	};

	return (
		<Modal isOpen={true} onClose={handleOnClose}>
			<div className='specific-dish-modal-overlay'>
				<div className='specific-dish-modal-container'>
					<img src={xIcon} className='close' alt='close' onClick={handleOnClose} />
					<div className='specific-dish-modal-content'>
						<DishContent
							dishName={dish.cardName}
							dishImage={dish.cardImage}
							dishIngredients={dish.ingredients}
							dishIcon={dish.icon}
							dishPrice={dish.price}
						/>
					</div>
				</div>
			</div>
		</Modal>
	);
}

export default SpecificDishModal;
