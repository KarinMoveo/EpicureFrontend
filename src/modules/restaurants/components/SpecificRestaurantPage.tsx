import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { setRestaurantName } from '../../../redux/cartSlice';

import SpecificDishModal from '../modals/SpecificDishModal';

import '../components/SpecificRestaurantPage.scss';

import clock from '../assets/icons/clock.svg';

import Card from '../../../shared/components/Card';

import popularRestaurantsMockData from '../../../mockData/data/popularRestaurantsMockData';

import signatureDishesMockData from '../../../mockData/data/signatureDishesMockData';
import { useDispatch } from 'react-redux';

type MealType = 'Breakfast' | 'Lunch' | 'Dinner';
const mealsCategories: MealType[] = ['Breakfast', 'Lunch', 'Dinner'];

function SpecificRestaurantPage() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { restaurantName } = useParams();
	const [selectedMealCategory, setSelectedMealCategory] = useState<MealType>('Breakfast');
	const [selectedDishModal, setSelectedDishModal] = useState<any>(null);

	const closeModal = () => {
		setSelectedDishModal(null);
	};

	const handleMealCategoryClick = (mealCategory: MealType) => {
		setSelectedMealCategory(mealCategory);
	};

	const handleOnDishClick = (dish: any) => {
		const isDesktop = window.innerWidth >= 1024;

		if (isDesktop) {
			setSelectedDishModal(dish);
		} else {
			navigate(`/restaurants/${restaurantName}/${dish.cardName}`, {
				state: {
					dishName: dish.cardName,
					dishImage: dish.cardImage,
					dishIngredients: dish.ingredients,
					dishPrice: dish.price,
					dishChanges: dish.dishChanges,
					dishSide: dish.dishSide,
				},
			});
		}
	};

	useEffect(() => {
		if (restaurantName) {
			dispatch(setRestaurantName(restaurantName));
		}
	}, [dispatch, restaurantName]);

	const restaurant = popularRestaurantsMockData.find((item) => item.cardName === restaurantName);

	if (!restaurant) {
		return <div>Restaurant not found</div>;
	}

	return (
		<div className='specific-restaurant-page-container'>
			<img src={restaurant.cardImage} alt='Restaurant' className='restaurant-image' />
			<div className='restaurant-details'>
				<p className='restaurant-name'>{restaurantName}</p>
				<p className='restaurant-chef-name'>{restaurant.chefName}</p>
				<div className='is-open'>
					<img src={clock} className='clock-image' alt='clock' />
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
				{signatureDishesMockData.map((dish) => (
					<div key={dish.cardName} className='card-link'>
						<div onClick={() => handleOnDishClick(dish)}>
							<Card cardImage={dish.cardImage} cardName={dish.cardName}>
								<p>{dish.ingredients}</p>
								<img src={dish.icon} alt='icon' />
								<p>{dish.price}</p>
							</Card>
						</div>
					</div>
				))}
			</div>
			{selectedDishModal && <SpecificDishModal dish={selectedDishModal} onClose={closeModal} />}
		</div>
	);
}

export default SpecificRestaurantPage;
