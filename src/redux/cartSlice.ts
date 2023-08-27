import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    orderItemId: string;
    orderItemImage: string;
	orderItemName: string;
	orderItemAmount: number;
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
            const newItem = action.payload;
            state.cartItems.push({ ...newItem, orderItemAmount: 1});

        },
        decrementQuantity: (state, action: PayloadAction<string>) => {
            const targetItemId = action.payload;
            const targetItem = state.cartItems.find(item => item.orderItemId === targetItemId);
            if (targetItem && targetItem.orderItemAmount > 1) {
                targetItem.orderItemAmount -= 1;
            }
        },
        incrementQuantity: (state, action: PayloadAction<string>) => {
            const targetItemId = action.payload;
            const targetItem = state.cartItems.find(item => item.orderItemId === targetItemId);
            if (targetItem) {
                targetItem.orderItemAmount += 1;
            }
        },
    },
});

export const { addItem, setRestaurantName, decrementQuantity, incrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;