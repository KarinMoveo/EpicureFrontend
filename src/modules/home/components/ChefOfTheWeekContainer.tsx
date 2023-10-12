import { NavLink, useNavigate } from 'react-router-dom';
import Card from '../../../shared/components/Card';
import ChefImageAndName from '../../../shared/components/ChefImageAndName';
import seeMoreIcon from '../../../shared/assets/icons/seeMore.svg';
import { restaurant } from '../../../shared/types';
import '../components/ChefOfTheWeekContainer.scss';

interface ChefOfTheWeekContainerProps {
	chefOfTheWeekImage: string;
	chefOfTheWeekName: string;
	chefOfTheWeekSummary: string;
	chefOfTheWeekRestaurants: restaurant[];
}

function ChefOfTheWeekContainer(props: ChefOfTheWeekContainerProps) {
	const isDesktop = window.innerWidth >= 1024;
	const navigate = useNavigate();
	const restaurants: restaurant[] = props.chefOfTheWeekRestaurants;
	const chefFirstName = props.chefOfTheWeekName?.split(' ');
	const chefFirstNameUpperCase = chefFirstName[0]?.toUpperCase();

	return (
		<div className='chef-of-the-week-container'>
			<div className='chef-of-the-week-content'>
				<p className='chef-of-the-week-title'>CHEF OF THE WEEK:</p>
				<div className='chef-of-the-week-name-image-summary-container'>
					<ChefImageAndName chefImage={props.chefOfTheWeekImage} chefName={props.chefOfTheWeekName} />
					<p className='chef-of-the-week-summary'>{props.chefOfTheWeekSummary}</p>
				</div>

				{restaurants.length > 0 && (
					<div className='restaurants-container'>
						<p className='chef-of-the-week-restaurants-title'>
							{isDesktop
								? `${chefFirstName[0]}'s Restaurants `
								: `${chefFirstNameUpperCase}'S RESTAURANTS`}
						</p>
						<div className='chef-of-the-week-restaurants-cards-display'>
							{restaurants.map((chefOfTheWeekRestaurant: any, index: number) => (
								<Card
									cardImage={chefOfTheWeekRestaurant.image}
									cardName={chefOfTheWeekRestaurant.name}
									onClick={() => navigate(`/restaurants/${chefOfTheWeekRestaurant._id}`)}
								/>
							))}
						</div>
						<NavLink to='./restaurants' className='all-restaurants'>
							All Restaurants
							<span>
								<img src={seeMoreIcon} alt='See More Icon' className='see-more-icon' />
							</span>
						</NavLink>
					</div>
				)}
			</div>
		</div>
	);
}

export default ChefOfTheWeekContainer;
