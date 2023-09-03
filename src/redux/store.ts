import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cartSlice';
import chefReducer from './chefSlice';
import restaurantReducer from './restaurantSlice';
import dishReducer from './dishSlice';

export default configureStore({
    reducer: {
        cart: cartReducer,
        chef: chefReducer,
        restaurant : restaurantReducer,
        dish: dishReducer,
    }
});

