import { createSlice } from '@reduxjs/toolkit'
import { img, img2 } from './productlist'

export const productSlice = createSlice({
  name: "productSlice",
  initialState: img,


  reducers: {
    increment: (state, action) => {
      return state.map((product) => {



        if (product.id !== action.payload) {
          return product;
        } else {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
      });
    },
    decrement: (state, action) => {
      state.map((product) => {

        if (product.id !== action.payload) {
          return product;
        } else {
          return {
            ...product,
            quantity: product.quantity--,
          };
        }
      });
    },

    addbyamount: (state, action) => {
      return state.map(product => {
        if (product.id !== action.payload.id) {
          return product
        }

        return {
          ...product,
          added: true,
          quantity: product.quantity + 1

        }
      })
    },
    reset: (state, action) => {
      return state.map((product) => {

        if (product.id !== action.payload) {
          return product;
        } else {
          return {
            ...product,
            added: false,
          };
        }
      });
    }
  }
})

export const { increment, decrement, addbyamount, reset } = productSlice.actions
export default productSlice.reducer
