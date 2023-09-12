import axios from "axios";

export async function getRestaurantsFromAPI(filters : any){
    const result = await axios.get(
        `http://localhost:5000/restaurants?minPrice=${filters.priceRange.min}&maxPrice=${filters.priceRange.max}&distance=${filters.distance}&category=${filters.category}&rating=${filters.rating}`
    );
    
    return result;
}

export async function getRestaurantByIDFromAPI(id : any){
    const result = await axios.get(`http://localhost:5000/restaurants/${id}`);
    
    return result;
}