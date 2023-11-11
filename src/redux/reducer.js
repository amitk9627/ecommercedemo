import { createSlice } from '@reduxjs/toolkit'
const initialState ={
    cart:[],
    quantity:0,
    value:0
}
export const counterSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    AddTOCart: (state,action) => {
     console.log(action.payload)
      state.cart.push(action.payload)
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { AddTOCart, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer