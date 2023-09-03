import ReactDOM from 'react-dom';

import closeIcon from '../assets/icons/x.svg';

import './Modal.scss';

interface ModalProps {
	isOpen?: boolean;
	onClose: () => void;
	children: any;
	hasClose?: boolean;
	isCentered?: boolean;
	className?: string;
}

function Modal(props: ModalProps) {
	const portalElement = document.getElementById('portal');

	if (!portalElement) {
		return null;
	}

	return ReactDOM.createPortal(
		<div className='modal-portal-container'>
			<div className='modal-overlay' onClick={props.onClose} />
			<div
				className={`modal-content ${props.isCentered ? 'centered' : ''} ${props.className}`}
				onClick={(e) => e.stopPropagation()}
			>
				{props.hasClose && (
					<button className='close-modal-button' onClick={props.onClose}>
						<img src={closeIcon} alt='close' />
					</button>
				)}
				{props.children}
			</div>
		</div>,
		portalElement
	);
}

export default Modal;
