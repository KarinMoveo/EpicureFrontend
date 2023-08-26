import ReactDOM from 'react-dom';

import closeIcon from '../../shared/assets/icons/x.svg';

import './Modal.scss';

interface ModalProps {
	isOpen?: boolean;
	onClose: () => void;
	isCentered?: boolean;
	children: any;
}

function Modal(props: ModalProps) {
	const portalElement = document.getElementById('portal');

	if (!portalElement) {
		return null;
	}

	const isDesktop = window.innerWidth >= 1024;

	return ReactDOM.createPortal(
		<div className='modal-portal-container'>
			<div className='modal-overlay' onClick={props.onClose} />
			<div
				className={`modal-content ${isDesktop ? 'centered-modal' : 'top-modal'}`}
				onClick={(e) => e.stopPropagation()}
			>
				<button className='close-modal-button' onClick={props.onClose}>
					<img src={closeIcon} alt='close' />
				</button>
				{props.children}
			</div>
		</div>,
		portalElement
	);
}

export default Modal;
