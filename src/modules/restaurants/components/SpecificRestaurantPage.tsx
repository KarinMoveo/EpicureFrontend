import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Card from '../../../shared/components/Card';
import SpecificDish from '../modals/SpecificDish';

import { MealType } from '../types';

import clock from '../assets/icons/clock.svg';

import { isRestaurantOpen } from '../../../shared/util';

import '../components/SpecificRestaurantPage.scss';
import { getAllDishesFromCategoryFromAPI, getRestaurantByIDFromAPI } from '../api';
import { dish, restaurant } from '../../../mockData/data/types';

const mealsCategories: MealType[] = ['Breakfast', 'Lunch', 'Dinner'];

function SpecificRestaurantPage() {
	const navigate = useNavigate();
	const { restaurantName } = useParams();
	const [selectedMealCategory, setSelectedMealCategory] = useState<MealType>('Breakfast');
	const [selectedDishModal, setSelectedDishModal] = useState<any>(null);
	const [restaurant, setRestaurant] = useState<restaurant | null>(null);

	const [allDishesFromCategory, setAllDishesFromCategory] = useState<dish[] | null>([]);

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
			navigate(`/restaurants/${restaurantName}/${dish.name}`, {
				state: {
					name: dish.name,
					image: dish.image,
					ingredients: dish.ingredients,
					price: dish.price,
					changes: dish.changes,
					side: dish.side,
				},
			});
		}
	};

	useEffect(() => {
		async function getRestaurantByID() {
			try {
				const result = await getRestaurantByIDFromAPI(restaurantName);
				setRestaurant(result.data);
			} catch (error: unknown) {
				console.log(error);
			}
		}
		getRestaurantByID();
	}, []);

	useEffect(() => {
		async function getAllDishesFromCategory() {
			try {
				const result = await getAllDishesFromCategoryFromAPI(selectedMealCategory);
				setAllDishesFromCategory(result.data);
			} catch (error: unknown) {
				console.log(error);
			}
		}
		getAllDishesFromCategory();
	}, [selectedMealCategory]);

	if (!restaurant) {
		return <div className='restaurant-not-found-title'>Restaurant not found</div>;
	}

	const isRestaurantCurrentlyOpen = isRestaurantOpen(restaurant.from, restaurant.to);

	return (
		<div className='specific-restaurant-page-container'>
			<img src={restaurant.image} alt='Restaurant' className='restaurant-image' />
			<div className='restaurant-details'>
				<p className='restaurant-name'>{restaurantName}</p>
				<p className='restaurant-chef-name'>{restaurant.chef}</p>
				<div className='is-open'>
					<img src={clock} className='clock-image' alt='clock' />
					{isRestaurantCurrentlyOpen ? <p>Open now</p> : <p>Close now</p>}
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
				{allDishesFromCategory !== null &&
					allDishesFromCategory.map((dish: any) => (
						<div key={dish.name} className='card-link'>
							<div onClick={() => handleOnDishClick(dish)}>
								<Card cardImage={dish.image} cardName={dish.name}>
									<p className='dish-ingredients'>{dish.ingredients}</p>
									<img src={dish.icon} alt='icon' className='specific-restaurant-page-dish-icon' />
									<p>₪{dish.price}</p>
								</Card>
							</div>
						</div>
					))}
			</div>
			{selectedDishModal && <SpecificDish dish={selectedDishModal} onClose={closeModal} />}
		</div>
	);
}

export default SpecificRestaurantPage;
