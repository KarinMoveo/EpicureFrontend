import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {chef} from '../../src/mockData/data/types';

import chefsMockData from '../mockData/data/chefs';

type InitialState = {
    allChefs: chef[];
    newChefs: chef[];
    mostViewedChefs: chef[];
};
  
const initialState: InitialState = {
    allChefs: [],
    newChefs: [],
    mostViewedChefs: [],
};

export const chefSlice = createSlice({
	name: 'chef',
	initialState,
	reducers: {
        getAllChefs: (state) => {
            state.allChefs = chefsMockData; 
        },
        getNewChefs: (state)=>{
            state.newChefs = chefsMockData.slice(0,5);
        },
        getMostViewedChefs: (state)=>{
          state.mostViewedChefs = chefsMockData.slice(0,3);  
        },
	},
});

export const { getAllChefs, getNewChefs, getMostViewedChefs } = chefSlice.actions;

export default chefSlice.reducer;
