import axios from "axios";


export async function getPopularRestaurantsFromAPI(){
    const result = await axios.get('/restaurants/popular');
    return result;
}

export async function getChefOfTheWeekFromAPI(){
    const result = await axios.get('/chefs/chefOfTheWeek');
    return result;
}

export async function getSignatureDishesFromAPI(){
    const result = await axios.get('/dishes/signatureDishes');
    return result;
}