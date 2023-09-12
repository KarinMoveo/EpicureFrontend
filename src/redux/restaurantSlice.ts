import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {restaurant} from '../../src/mockData/data/types';
import { isRestaurantOpen } from '../shared/util';
import restaurantsMockData from '../mockData/data/restaurants';

type InitialState = {
    allRestaurants: restaurant[];
    filteredRestaurants: restaurant[];
};
  
const initialState: InitialState = {
    allRestaurants: [],
    filteredRestaurants: [],
};

export const restaurantSlice = createSlice({
	name: 'restaurant',
	initialState,
	reducers: {
        getAllRestaurants: (state) => {
            state.allRestaurants = restaurantsMockData; 
            state.filteredRestaurants = restaurantsMockData;
        },
        filterRestaurants: (state, action: PayloadAction<any>)=>{
            const tempRestaurants: restaurant[] = [];
            const popularity = action.payload.category === 'Most Popular' ? 4 : 0;
            const restaurantOpeningYear = action.payload.category === 'New' ? 2020 : 0;
            const distance = action.payload.distance;
            const {min, max} = action.payload.priceRange || {}; 
            const selectedRatings = action.payload.rating;
            
            state.allRestaurants.forEach((restaurant)=>{
                const [day, month, year] = restaurant.openingDate.split('.'); 
                const isRestaurantCurrentlyOpen = action.payload.category !== "Open Now" || isRestaurantOpen(restaurant.from, restaurant.to)

                if ((restaurant.popularity >= popularity) &&
                    (Number(year) >= restaurantOpeningYear) &&
                    (isRestaurantCurrentlyOpen) && 
                    (restaurant.averagePrice >= min && restaurant.averagePrice <= max)&&
                    (restaurant.distance <= distance) &&
                    (selectedRatings.some((selected:any, index:number) => selected && index+1  === restaurant.popularity))){
                            tempRestaurants.push(restaurant);
                }
                state.filteredRestaurants = tempRestaurants;       
            });            
        },
	},
});

export const { getAllRestaurants, filterRestaurants } = restaurantSlice.actions;


export default restaurantSlice.reducer;
