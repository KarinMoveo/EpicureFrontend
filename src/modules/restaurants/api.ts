import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;


export async function getRestaurantsFromAPI(filters: any) {
	const result = await axios.get(
		`${BASE_URL}/restaurants?minPrice=${filters.priceRange.min}&maxPrice=${filters.priceRange.max}&distance=${filters.distance}&category=${filters.category}&rating=${filters.rating}`
	);

	return result;
}

export async function getRestaurantByIDFromAPI(id: any) {
	const result = await axios.get(`${BASE_URL}/restaurants/${id}`);

	return result;
}

export async function getAllDishesFromCategoryFromAPI(mealType : any) {
	const result = await axios.get(`${BASE_URL}/dishes?category=${mealType}`);

	return result;
}
