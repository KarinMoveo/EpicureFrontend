import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartItem } from '../modules/restaurants/types';

export interface CartState {
	cartItems: {
		[key: string]: CartItem;
	};
	orderHistory: Order[];
}
export interface Order {
	restaurantName: string;
	totalAmount: number;
	orderDate: string;
	items: CartItem[]; 
}

const initialState: CartState = {
	cartItems: {},
	orderHistory: [],
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
		addToOrderHistory: (state, action: PayloadAction<Order>) => {
			state.orderHistory.push(action.payload);
		},
		deleteCart: (state) => {
            state.cartItems = {}; 
        },
	},
});

export const { updateItem, addToOrderHistory, deleteCart } = cartSlice.actions;

export default cartSlice.reducer;