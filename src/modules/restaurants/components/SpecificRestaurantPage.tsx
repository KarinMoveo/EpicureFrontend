import { useState } from 'react';
import { useParams } from 'react-router-dom';

import '../components/SpecificRestaurantPage.scss';

import clock from '../assets/icons/clock.svg';

import Card from '../../../shared/components/Card';

import popularRestaurantsMockData from '../../../mockData/data/popularRestaurantsMockData';

import signatureDishesMockData from '../../../mockData/data/signatureDishesMockData';

function SpecificRestaurantPage() {
	type MealType = 'Breakfast' | 'Lanch' | 'Dinner';

	const mealsCategories: MealType[] = ['Breakfast', 'Lanch', 'Dinner'];

	const [selectedMealCategory, setSelectedMealCategory] = useState<MealType>('Breakfast');

	const handleMealCategoryClick = (mealCategory: MealType) => {
		setSelectedMealCategory(mealCategory);
	};

	const { restaurantName } = useParams();
	const restaurant = popularRestaurantsMockData.find((item) => item.cardName === restaurantName);

	if (!restaurant) {
		return <div>Restaurant not found</div>;
	}

	return (
		<div className='specific-restaurant-page-container'>
			<img src={restaurant.cardImage} alt={`${restaurantName} Image`} className='restaurant-image' />
			<div className='restaurant-details'>
				<p className='restaurant-name'>{restaurantName}</p>
				<p className='restaurant-chef-name'>{restaurant.chefName}</p>
				<div className='is-open'>
					<img src={clock} className='clock-image' />
					{restaurant.isOpen ? <p>Open now</p> : <p>Close now</p>}
				</div>
			</div>
			<div className='meals-category-row'>
				{mealsCategories.map((mealCategoryItem) => (
					<p
						key={mealCategoryItem}
						className={`restaurant-category-item ${
							selectedMealCategory === mealCategoryItem ? 'category-item-selected' : ''
						}`}
						onClick={() => handleMealCategoryClick(mealCategoryItem)}
					>
						{mealCategoryItem}
					</p>
				))}
			</div>
			<div className='dishes-container'>
				{signatureDishesMockData.map((dish, index) => (
					<Card key={index} cardImage={dish.cardImage} cardName={dish.cardName}>
						<p>{dish.description}</p>
						<img src={dish.icon} alt='icon' />
						<p>{dish.price}</p>
					</Card>
				))}
			</div>
		</div>
	);
}

export default SpecificRestaurantPage;
