import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  cart: [],
  quantity: 0,
  value: 0
}
export const counterSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    AddTOCart: (state, action) => {

      state.cart.push(action.payload);
      state.quantity=state.cart.length
    },
    RemoveFromCart: (state, action) => {
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
        quantity:state.cart.length-1
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { AddTOCart, RemoveFromCart, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer