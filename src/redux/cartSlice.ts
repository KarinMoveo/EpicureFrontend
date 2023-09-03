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





// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// // import { CartItem } from '../modules/restaurants/types';



// export interface chef{
//     name: string;
//     image: string;
//     summary: string;
//     restaurants: restaurant[];
// }

// interface restaurant{
//     name: string;
//     chef: string;
//     rating: string;
//     image: string;
//     address: string;
//     from: string;
//     to: string;
//     openingDate: string;
//     dishes: dish[];
    
// }

// interface dish{
//     name: string;
//     image: string;
//     ingredients: string;
//     icon: string;
//     price: number;
//     changes: string;
//     side: string[];
//     restaurant: string;

// }
  

// const initialState: chef[] = [];

// export const cartSlice = createSlice({
// 	name: 'cart',
// 	initialState,
// 	reducers: {
//         getChefs: (state, action: PayloadAction<chef[]>)=>{
//             state = await;
//         },

// 		updateItem: (state, action: PayloadAction<CartItem>) => {
// 			const newItem = action.payload;
// 			if (newItem.orderItemAmount) {
// 				state.cartItems[newItem.orderItemName] = newItem;
// 			} else {
// 				delete state.cartItems[newItem.orderItemName];
// 			}
// 		},
// 		addToOrderHistory: (state, action: PayloadAction<Order>) => {
// 			state.orderHistory.push(action.payload);
// 		},
// 		deleteCart: (state) => {
//             state.cartItems = {}; 
//         },
// 	},
// });

// export const { updateItem, addToOrderHistory, deleteCart } = cartSlice.actions;

// export default cartSlice.reducer;
