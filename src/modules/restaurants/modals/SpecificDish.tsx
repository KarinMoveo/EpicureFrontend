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
				<DishContent dish={dish} onClose={props.onClose} />
			</div>
		</Modal>
	);
}

export default SpecificDish;
