import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cartSlice';
import chefReducer from './chefSlice';
import dishReducer from './dishSlice';

export default configureStore({
    reducer: {
        cart: cartReducer,
        chef: chefReducer,
        dish: dishReducer,
    }
});

