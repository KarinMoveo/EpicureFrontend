import axios from 'axios';



export async function getRestaurantsFromAPI(filters: any, page:number, perPage:number) {
	const result = await axios.get(
		`/restaurants?page=${page}&perPage=${perPage}&minPrice=${filters.priceRange.min}&maxPrice=${filters.priceRange.max}&distance=${filters.distance}&rating=${filters.rating}&openingYear=${filters.openingYear}&isOpenNow=${filters.isOpenNow}`
	);

	return result;
}

export async function getRestaurantByIdFromAPI(id: any) {
	const result = await axios.get(`/restaurants/${id}`);

	return result;
}

