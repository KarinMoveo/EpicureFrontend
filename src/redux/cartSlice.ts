import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../modules/restaurants/types';
import { act } from 'react-dom/test-utils';

export interface CartState {
	cartItems: {
		[key: string]: CartItem;
	};
}

const initialState: CartState = {
	cartItems: {},
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		updateItem: (state, action: PayloadAction<CartItem>) => {
			const newItem = action.payload;
			if (newItem.orderItemAmount) {
				state.cartItems[newItem.orderItemName] = newItem;
			} else {
				delete state.cartItems[newItem.orderItemName];
			}
		},
		deleteCart: (state) => {
            state.cartItems = {}; 
        },
	},
});

export const { updateItem, deleteCart } = cartSlice.actions;

export default cartSlice.reducer;
