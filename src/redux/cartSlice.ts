import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    orderItemId: string;
    orderItemImage: string;
	orderItemName: string;
	orderItemAmount: string;
	orderItemPrice: number;
	orderItemSide: string;
	orderItemChanges: string;
}

export interface CartState {
    restaurantName: string;
    cartItems: CartItem[];
  }

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        restaurantName: '',
        cartItems: [] as CartItem[],
    },
    reducers:{
        setRestaurantName: (state, action: PayloadAction<string>) => {
            state.restaurantName = action.payload;
        },
        addItem: (state, action: PayloadAction<CartItem>) => {
            state.cartItems.push(action.payload);
          },
    },
});

export const {addItem, setRestaurantName} = cartSlice.actions;

export default cartSlice.reducer;