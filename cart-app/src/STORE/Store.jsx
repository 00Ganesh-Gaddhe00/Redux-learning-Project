import {configureStore} from '@reduxjs/toolkit'

import cartsReducer from './cartslice';
import ProductSlice from './productSlice';

const store = configureStore({
    reducer:{
        cart:cartsReducer,
        products:ProductSlice
    }

})

export default store;