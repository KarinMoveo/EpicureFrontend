import axios from 'axios';

export async function getAllChefsFromAPI(selectedCategoryItem: any) {
	const result = await axios.get(`/chefs?category=${selectedCategoryItem}`, { withCredentials: true });

	return result;
}
