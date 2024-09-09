import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cateogries: [],
    productsFilteredByCategoried: [],
    categorySelected: ""
}

export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
    },
})

// Action creators are generated for each case reducer function
export const { } = shopSlice.actions

export default shopSlice.reducer