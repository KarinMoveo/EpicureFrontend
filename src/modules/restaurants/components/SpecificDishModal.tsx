import ReactDOM from 'react-dom';

import DishContent from './DishContent';

import xIcon from '../../../shared/assets/icons/x.svg';

import './SpecificDishModal.scss';

function SpecificDishModal(props: any) {
	const portalElement = document.getElementById('portal');

	if (!portalElement) {
		return null;
	}

	const { dish } = props;

	return ReactDOM.createPortal(
		<div className='specific-dish-modal'>
			<div className='modal-content'>
				<DishContent dishName={dish.cardName} dishImage={dish.cardImage} dishIngredients={dish.ingredients} />
				<img src={xIcon} className='close' alt='close' onClick={props.onClose} />
			</div>
		</div>,
		portalElement
	);
}

export default SpecificDishModal;
