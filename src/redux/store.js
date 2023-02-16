
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cartReducer';
import quantityReducer from './reducers/quantityReducer';
const store = configureStore({
    reducer: {
      cart:  cartReducer,
      quantity: quantityReducer
    },
  })

export default store;