import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import SpecificDishModal from './SpecificDishModal';

import '../components/SpecificRestaurantPage.scss';

import clock from '../assets/icons/clock.svg';

import Card from '../../../shared/components/Card';

import popularRestaurantsMockData from '../../../mockData/data/popularRestaurantsMockData';

import signatureDishesMockData from '../../../mockData/data/signatureDishesMockData';

function SpecificRestaurantPage() {
	type MealType = 'Breakfast' | 'Lunch' | 'Dinner';

	const mealsCategories: MealType[] = ['Breakfast', 'Lunch', 'Dinner'];

	const [selectedMealCategory, setSelectedMealCategory] = useState<MealType>('Breakfast');
	const [selectedDishIndex, setSelectedDishIndex] = useState<number | null>(null); // For modal display

	const openModal = (index: number) => {
		setSelectedDishIndex(index);
	};

	const closeModal = () => {
		setSelectedDishIndex(null);
	};

	const handleMealCategoryClick = (mealCategory: MealType) => {
		setSelectedMealCategory(mealCategory);
	};

	const isDesktop = window.innerWidth >= 1024; // Using a basic media query

	const { restaurantName } = useParams();
	const restaurant = popularRestaurantsMockData.find((item) => item.cardName === restaurantName);

	if (!restaurant) {
		return <div>Restaurant not found</div>;
	}

	// const handleDishClick = (index: number) => {
	// 	setSelectedDish(index);
	// };

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
					<div key={index} className='card-link'>
						{isDesktop ? ( // Desktop: Show modal
							<div onClick={() => openModal(index)}>
								<Card cardImage={dish.cardImage} cardName={dish.cardName}>
									<p>{dish.ingredients}</p>
									<img src={dish.icon} alt='icon' />
									<p>{dish.price}</p>
								</Card>
							</div>
						) : (
							// Mobile: Navigate to SpecificDishPage
							<NavLink
								to={`/restaurants/${restaurantName}/${dish.cardName}`}
								state={{
									dishName: dish.cardName,
									dishImage: dish.cardImage,
									dishIngredients: dish.ingredients,
								}}
								className='card-link'
								key={index}
							>
								<Card cardImage={dish.cardImage} cardName={dish.cardName}>
									<p>{dish.ingredients}</p>
									<img src={dish.icon} alt='icon' />
									<p>{dish.price}</p>
								</Card>
							</NavLink>
						)}
					</div>
				))}
			</div>
			{isDesktop && selectedDishIndex !== null && (
				<SpecificDishModal dish={signatureDishesMockData[selectedDishIndex]} onClose={closeModal} />
			)}{' '}
		</div>
	);
}

export default SpecificRestaurantPage;
