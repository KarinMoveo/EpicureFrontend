import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {restaurant} from '../../src/mockData/data/types';

import { isRestaurantOpen } from '../shared/util';

import restaurantsMockData from '../mockData/data/restaurants';
import { WritableDraft } from 'immer/dist/internal';

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
            const tempRestaurants: WritableDraft<restaurant>[] = [];
            const popularity = action.payload.category === 'Most Popular' ? 4 : 0;
            const restaurantOpeningYear = action.payload.category === 'New' ? 2020 : 0;
            const rating = action.payload.rating;
            const distance = action.payload.distance;
            console.log(distance);
            const {min, max} = action.payload.priceRange || {}; 
            
            state.allRestaurants.forEach((restaurant)=>{
                const [day, month, year] = restaurant.openingDate.split('.'); 
                const isRestaurantCurrentlyOpen = isRestaurantOpen(restaurant.from, restaurant.to);
                if ((restaurant.popularity >= popularity) &&
                    (Number(year) >= restaurantOpeningYear) &&
                    (isRestaurantCurrentlyOpen) && 
                    (restaurant.averagePrice >= min && restaurant.averagePrice <= max)&&
                    (restaurant.distance <= distance)){
                        console.log("restaurant distance" + restaurant.distance);
                        tempRestaurants.push(restaurant);
                }
                state.filteredRestaurants = tempRestaurants;       
            });            
        },
     
        // getChefOfTheWeekRestaurants: (state, action: PayloadAction<string>) =>{
        //     const chefOfTheWeek = action.payload;
        //     state.chefOfTheWeekRestaurants = restaurantsMockData.filter((restaurant)=> restaurant.chef ===  chefOfTheWeek); 
        // },
      
        // getRestaurantsByRating: (state, action: PayloadAction<number[]>) => {
        //     const ratings = action.payload;
        //     state.restaurantsByRating = restaurantsMockData.filter((restaurant) =>
        //       ratings.includes(restaurant.popularity)
        //     );
        // },          
	},
});

export const { getAllRestaurants, filterRestaurants } = restaurantSlice.actions;


export default restaurantSlice.reducer;
