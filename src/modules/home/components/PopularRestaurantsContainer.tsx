import { Link } from 'react-router-dom';

import Card from '../../../shared/components/Card';

import claroImage from '../assets/images/restaurants/claro.png';
import seeMoreIcon from '../../../shared/assets/icons/seeMore.svg';
import fourStars from '../assets/icons/fourStars.svg';

import '../components/PopularRestaurantsContainer.scss';

function PopularRestaurantsContainer() {
	return (
		<div className='popular-restaurants-container'>
			<p className='popular-restaurants-title'>POPULAR RESTURANT IN EPICURE:</p>
			<div className='popular-restaurants-cards-display-and-all-restaurants'>
				<div className='popular-restaurants-cards-display'>
					<Card cardImage={claroImage} cardName='Restaurent Name'>
						<p>Yossi Shitrit</p>
						<img src={fourStars} className='popular-resturant-image' alt='restaurants rating' />
					</Card>

					<Card cardImage={claroImage} cardName='Restaurent Name'>
						<p>Yossi Shitrit</p>
						<img src={fourStars} className='popular-resturant-image' alt='restaurants rating' />
					</Card>

					<Card cardImage={claroImage} cardName='Restaurent Name'>
						<p>Yossi Shitrit</p>
						<img src={fourStars} className='popular-resturant-image' alt='restaurants rating' />
					</Card>
				</div>
				<Link to='./restaurants' className='all-restaurants'>
					{' '}
					All Restaurants
					<span className='see-more-icon'>
						<img src={seeMoreIcon} alt='See More Icon' />
					</span>
				</Link>
			</div>
		</div>
	);
}

export default PopularRestaurantsContainer;
