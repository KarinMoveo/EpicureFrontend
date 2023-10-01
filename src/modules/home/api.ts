import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function getPopularRestaurantsFromAPI(){
    const result = await axios.get(`${BASE_URL}/restaurants/popular`);
    return result;
}

export async function getChefOfTheWeekFromAPI(){
    const result = await axios.get(`${BASE_URL}/chefs/chefOfTheWeek`);
    return result;
}

export async function getSignatureDishesFromAPI(){
    const result = await axios.get(`${BASE_URL}/dishes/signatureDishes`);
    return result;
}