import { createSlice } from "@reduxjs/toolkit";
import { addCart, deleteCart, getAllCart, getTotalPrice, updateCart } from "../../services/cartServices";

const cartSlice = createSlice({
    name: 'auth',
    initialState: {
        listCart: getAllCart(),
        totalPrice: getTotalPrice()
    },
    reducers: {
        ADD_CART: (state, action) => {
            const index = addCart(action.payload.cart)
            if (index !== -1) {
                const quanity = state.listCart[index].quanity + action.payload.cart.quanity
                state.listCart[index] = { ...state.listCart[index], quanity: quanity, total: quanity * state.listCart[index].price }
            } else {
                state.listCart.push(action.payload.cart)
            }
            state.totalPrice = getTotalPrice()
        },

        UPDATE_CART: (state, action) => {
            const index = state.listCart.findIndex(cart => cart.id === action.payload.id)
            state.listCart[index] = updateCart(action.payload.id, action.payload.quanity)
            state.totalPrice = getTotalPrice()
        },
        DELETE_CART: (state, action) => {
            const index = deleteCart(action.payload.id)
            state.listCart.splice(index, 1)
            state.totalPrice = getTotalPrice()
        },
    }
})

export const cartAction = cartSlice.actions
export default cartSlice.reducer