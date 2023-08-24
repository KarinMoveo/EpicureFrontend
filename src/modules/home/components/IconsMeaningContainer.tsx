import IconMeaningItem from './IconMeaningItem';

import { spicy, vegan, vegitarian } from '../assets/icons/index';

import '../components/IconsMeaningContainer.scss';

function IconsMeaningContainer() {
	return (
		<div className='icons-meaning-container'>
			<p className='icons-meaning-title'>THE MEANING OF OUR ICONS: </p>
			<div className='icons-meaning-row-desktop'>
				<IconMeaningItem iconMeaningItemImgae={spicy} iconMeaningItemName='Spicy' />
				<IconMeaningItem iconMeaningItemImgae={vegitarian} iconMeaningItemName='Vegitarian' />
				<IconMeaningItem iconMeaningItemImgae={vegan} iconMeaningItemName='Vegan' />
			</div>
		</div>
	);
}

export default IconsMeaningContainer;
