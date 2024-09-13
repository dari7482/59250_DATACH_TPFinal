import { createSlice } from '@reduxjs/toolkit'
import categories from '../../data/categories.json'
import productos from '../../data/productos.json'

console.log('redux', categories)

const initialState = {
    categories: categories,
    products: productos,
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