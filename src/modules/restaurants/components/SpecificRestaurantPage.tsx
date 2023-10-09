import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Card from '../../../shared/components/Card';
import SpecificDish from '../modals/SpecificDish';

import { MealType } from '../types';

import clock from '../assets/icons/clock.svg';

import { isRestaurantOpen } from '../../../shared/util';

import { getRestaurantByIdFromAPI } from '../api';
import { dish, restaurant } from '../../../shared/types';

import '../components/SpecificRestaurantPage.scss';

const mealsCategories: MealType[] = ['Breakfast', 'Lunch', 'Dinner'];

function SpecificRestaurantPage() {
	const navigate = useNavigate();
	const { id } = useParams();
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
			setSelectedDishModal({ ...dish, restaurantName: restaurant?.name });
		} else {
			navigate(`/restaurants/${id}/${dish.name}`, {
				state: {
					name: dish.name,
					image: dish.image,
					ingredients: dish.ingredients,
					price: dish.price,
					changes: dish.changes,
					restaurantName: restaurant?.name,
					side: dish.side,
				},
			});
		}
	};

	useEffect(() => {
		async function getRestaurantById() {
			try {
				const result = await getRestaurantByIdFromAPI(id);
				setRestaurant(result.data);
			} catch (error: unknown) {
				console.log(error);
			}
		}
		getRestaurantById();
	}, []);

	useEffect(() => {
		const filteredDishes = restaurant?.dishes.filter((dish) => dish.mealType.includes(selectedMealCategory));
		setAllDishesFromCategory(filteredDishes || []);
	}, [selectedMealCategory, restaurant]);

	if (!restaurant) {
		return <div className='restaurant-not-found-title'>Restaurant not found</div>;
	}

	const isRestaurantCurrentlyOpen = isRestaurantOpen(restaurant.from, restaurant.to);

	return (
		<div className='specific-restaurant-page-container'>
			<img src={restaurant.image} alt='Restaurant' className='restaurant-image' />
			<div className='restaurant-details'>
				<p className='restaurant-name'>{restaurant.name}</p>
				<p className='restaurant-chef-name'>{restaurant.chef.name}</p>
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
									<div className='dish-line-with-text'>
										<p className='line-left'></p>
										<p>₪{dish.price}</p>
										<p className='line-right'></p>
									</div>
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
