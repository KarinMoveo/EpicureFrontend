import './HeaderIcon.scss';

interface HeaderIconProps {
	src: string;
	alt: string;
	itemAmount?: number;
	onClick: (event: React.MouseEvent<HTMLImageElement>) => void;
}

function HeaderIcon(props: HeaderIconProps) {
	return (
		<li className='nav-item-icon-container'>
			{!!props.itemAmount && <div className='total-item-amount'>{props.itemAmount}</div>}
			<img src={props.src} alt={props.alt} onClick={props.onClick} className='icon-image' />
		</li>
	);
}

export default HeaderIcon;
