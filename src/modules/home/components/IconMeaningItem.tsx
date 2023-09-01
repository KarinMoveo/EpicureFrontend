import '../components/IconMeaningItem.scss';

interface IconMeaningItemProps {
	iconMeaningItemImage: string;
	iconMeaningItemName: string;
}

function IconMeaningItem(props: IconMeaningItemProps) {
	return (
		<div className='icon-meaning-container'>
			<img src={props.iconMeaningItemImage} alt={props.iconMeaningItemName} className='icon-meaning-item' />
			<p className='icon-meaning-item-name'>{props.iconMeaningItemName}</p>
		</div>
	);
}

export default IconMeaningItem;
