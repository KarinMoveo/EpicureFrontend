import axios from "axios";

export async function getPopularRestaurantsFromAPI(){
    const result = await axios.get('http://localhost:5000/restaurants/popular');
    return result;
}

export async function getChefOfTheWeekFromAPI(){
    const result = await axios.get('http://localhost:5000/chefs/chefOfTheWeek');
    return result;
}

export async function getSignatureDishesFromAPI(){
    const result = await axios.get('http://localhost:5000/dishes/signatureDishes');
    return result;
}