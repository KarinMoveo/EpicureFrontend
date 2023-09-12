import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {dish} from '../../src/mockData/data/types';

import dishesMockData from '../mockData/data/dishes';

type InitialState = {
    allDishes: dish[];
    signatureDishes: dish[];
    breakfastDishes: dish[];
    lunchDishes: dish[];
    dinnerDishes: dish[];    
};
  
const initialState: InitialState = {
    allDishes: [],
    signatureDishes: [],
    breakfastDishes: [],
    lunchDishes: [],
    dinnerDishes: [],
};

export const dishSlice = createSlice({
	name: 'dish',
	initialState,
	reducers: {
        getAllDishes: (state) => {
            state.allDishes = dishesMockData; 
        },
        getSignatureDishes: (state) => {
            state.signatureDishes = dishesMockData.slice(0, 3);
        },
        getBreakfastDishes: (state, action: PayloadAction<string>) => {
            const restaurantName = action.payload;
            state.breakfastDishes = dishesMockData.filter(
              (breakfastDish) =>
              breakfastDish.mealType.includes('Breakfast') && breakfastDish.restaurant === restaurantName
            );
          },
        getLunchDishes: (state, action: PayloadAction<string>) =>{
            const restaurantName = action.payload;
            state.lunchDishes = dishesMockData.filter((lunchDish) => lunchDish.mealType.includes('Lunch') && lunchDish.restaurant === restaurantName);
        },
        getDinnerDishes: (state, action: PayloadAction<string>) =>{
            const restaurantName = action.payload;
            state.dinnerDishes = dishesMockData.filter((dinnerDish) => dinnerDish.mealType.includes('Dinner')&& dinnerDish.restaurant === restaurantName);
        }
	},
});

export const { getAllDishes , getSignatureDishes, getBreakfastDishes,getLunchDishes, getDinnerDishes} = dishSlice.actions;

export default dishSlice.reducer;
