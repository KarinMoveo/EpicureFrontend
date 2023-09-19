import axios from "axios";

export async function getPopularRestaurantsFromAPI(){
    const result = await axios.get('http://localhost:5000/restaurants/popular');
    return result;
}