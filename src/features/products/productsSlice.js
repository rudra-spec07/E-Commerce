import { createSlice } from "@reduxjs/toolkit"
import products from "../../api/mockData.js"

const productsSlice = createSlice({
  name:"products",

  initialState:{
    all:products,
    filtered:products
  },

  reducers:{

    filterByCategory:(state,action)=>{
      state.filtered = state.all.filter(
        p => p.category === action.payload
      )
    },

    resetFilters:(state)=>{
      state.filtered = state.all
    },

    searchProducts:(state,action)=>{

      const keyword = action.payload.toLowerCase()

      state.filtered = state.all.filter(product =>
        product.name.toLowerCase().includes(keyword)
      )

    }

  }

})

export const {
  filterByCategory,
  resetFilters,
  searchProducts
} = productsSlice.actions

export default productsSlice.reducer
