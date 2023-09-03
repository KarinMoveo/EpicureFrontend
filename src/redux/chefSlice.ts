import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {chef} from '../../src/mockData/data/types';

import chefsMockData from '../mockData/data/chefs';

type InitialState = {
    chefs: chef[];
};
  
const initialState: InitialState = {
    chefs: [],
};

export const chefSlice = createSlice({
	name: 'chef',
	initialState,
	reducers: {
        getAllChefs: (state) => {
            state.chefs = chefsMockData; 
          },
	},
});

export const { getAllChefs } = chefSlice.actions;

export default chefSlice.reducer;
