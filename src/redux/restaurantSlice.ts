import { createSlice } from '@reduxjs/toolkit';
import { restaurant } from '../../src/mockData/data/types';
import axios from 'axios';

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
		getRestaurants: (state) => {
			axios
				.get('http://localhost:5000/restaurants')
				.then(function (response: any) {
					console.log({response});
					state.filteredRestaurants = response.data;
				})
				.catch(function (error: Error) {
					console.log(error);
				})
		},
	},
});

export const { getRestaurants } = restaurantSlice.actions;

export default restaurantSlice.reducer;
