import ReactDOM from 'react-dom';

import './Modal.scss';

interface ModalProps {
	isOpen?: boolean;
	onClose?: () => void;
	children: any;
}

function Modal(props: ModalProps) {
	const portalElement = document.getElementById('portal');

	const handleOnOverlayClick = () => {
		if (props.onClose) props.onClose();
	};

	if (!portalElement || !props.isOpen) {
		return null;
	}

	return ReactDOM.createPortal(
		<div>
			<div className='modal-overlay' onClick={handleOnOverlayClick} />
			<div className='modal-content'>{props.children}</div>
		</div>,
		portalElement
	);
}

export default Modal;
