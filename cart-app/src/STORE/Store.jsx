import {configureStore} from '@reduxjs/toolkit'

import cartsReducer from './cartslice';

const store = configureStore({
    reducer:{
        cart:cartsReducer
    }

})

export default store;