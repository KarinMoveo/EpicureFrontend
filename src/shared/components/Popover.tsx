import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import './Popover.scss';

interface PopoverProps {
	anchorEl?: any;
	onClose: () => void;
	children: any;
}

function Popover(props: PopoverProps) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [modalStyle, setModalStyle] = useState<any>({});
	const portalElement = document.getElementById('popover');

	useEffect(() => {
		if (!props.anchorEl || !containerRef.current) return;

		const position = props.anchorEl.getBoundingClientRect();
		const childWidth = containerRef.current.getBoundingClientRect().width;

		setModalStyle({
			position: 'fixed',
			top: `${position.top + position.height}px`,
			left: `${position.left + position.width / 2 - childWidth / 2}px`,
		});
	}, [props.anchorEl]);

	if (!portalElement || !props.anchorEl) {
		return null;
	}

	return ReactDOM.createPortal(
		<div className='popover-container'>
			<div className='popover-overlay' onClick={props.onClose} />
			<div ref={containerRef} className='popover-content' style={modalStyle} onClick={(e) => e.stopPropagation()}>
				{props.children}
			</div>
		</div>,
		portalElement
	);
}

export default Popover;
