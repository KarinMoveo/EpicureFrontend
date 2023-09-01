import ReactDOM from 'react-dom';

import './Modal.scss';

interface ModalProps {
	isOpen?: boolean;
	onClose: () => void;
	children: any;
}

function Modal(props: ModalProps) {
	const portalElement = document.getElementById('portal');

	if (!portalElement) {
		return null;
	}

	return ReactDOM.createPortal(
		<div className='modal-portal-container'>
			<div className='modal-overlay' onClick={props.onClose} />
			<div className='modal-content' onClick={(e) => e.stopPropagation()}>
				{props.children}
			</div>
		</div>,
		portalElement
	);
}

export default Modal;
