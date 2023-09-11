import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {restaurant} from '../../src/mockData/data/types';

import { isRestaurantOpen } from '../shared/util';

import restaurantsMockData from '../mockData/data/restaurants';

type InitialState = {
    allRestaurants: restaurant[];
    popularRestaurants: restaurant[];
    chefOfTheWeekRestaurants: restaurant[];
    newRestaurants: restaurant[];
    openNowRestaurants: restaurant[];
};
  
const initialState: InitialState = {
    allRestaurants: [],
    popularRestaurants: [],
    chefOfTheWeekRestaurants: [],
    newRestaurants: [],
    openNowRestaurants: [],
};

export const restaurantSlice = createSlice({
	name: 'restaurant',
	initialState,
	reducers: {
        getAllRestaurants: (state) => {
            state.allRestaurants = restaurantsMockData; 
        },
        getPopularRestaurants: (state) => {
            const popularityThreshold = 4;
            state.popularRestaurants = restaurantsMockData.filter((restaurant)=> restaurant.popularity >=  popularityThreshold); 
        },
        getChefOfTheWeekRestaurants: (state, action: PayloadAction<string>) =>{
            const chefOfTheWeek = action.payload;
            state.chefOfTheWeekRestaurants = restaurantsMockData.filter((restaurant)=> restaurant.chef ===  chefOfTheWeek); 
        },
        getNewRestaurants: (state) => {
            const fromYear = '2020';
            state.newRestaurants = restaurantsMockData.filter((restaurant) => {
                const [day, month, year] = restaurant.openingDate.split('.'); 
                return year >= fromYear;
            });
        },
        getOpenNowRestaurants: (state) => {
            state.openNowRestaurants = restaurantsMockData.filter((restaurant) => {
                const isRestaurantCurrentlyOpen = isRestaurantOpen(restaurant.from, restaurant.to);
                return isRestaurantCurrentlyOpen;
              
            });
        },
	},
});

export const { getAllRestaurants, getPopularRestaurants, getChefOfTheWeekRestaurants, getNewRestaurants, getOpenNowRestaurants } = restaurantSlice.actions;

export default restaurantSlice.reducer;
