import '../components/Card.scss';

interface CardProps {
	cardImage: string;
	cardName: string;
	onClick?: () => any;
	children?: React.ReactNode;
}

function Card(props: CardProps) {
	return (
		<div className='card-container' onClick={props.onClick}>
			<img src={props.cardImage} alt='Card' className='card-image' />
			<div className='card-text-content'>
				<p className='card-name'>{props.cardName} </p>
				{props.children}
			</div>
		</div>
	);
}

export default Card;
