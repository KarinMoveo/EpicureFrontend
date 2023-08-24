import ReactDOM from 'react-dom';

function Modal(props: any) {
	const portalElement = document.getElementById('portal');

	// Handle the case when the portal element is not found
	if (!portalElement) {
		return null;
	}

	return ReactDOM.createPortal(
		<div className='modal-content'>
			<>{props.children}</>
		</div>,
		portalElement
	);
}

export default Modal;
