import IconMeaningItem from './IconMeaningItem';

import { spicy, vegan, vegetarian } from '../assets/icons/index';

import '../components/IconsMeaningContainer.scss';

function IconsMeaningContainer() {
	return (
		<div className='icons-meaning-container'>
			<p className='icons-meaning-title'>THE MEANING OF OUR ICONS: </p>
			<div className='icons-meaning-row-desktop'>
				<IconMeaningItem iconMeaningItemImage={spicy} iconMeaningItemName='Spicy' />
				<IconMeaningItem iconMeaningItemImage={vegetarian} iconMeaningItemName='Vegetarian' />
				<IconMeaningItem iconMeaningItemImage={vegan} iconMeaningItemName='Vegan' />
			</div>
		</div>
	);
}

export default IconsMeaningContainer;
