import { createSlice } from "@reduxjs/toolkit";
import { getToken } from "../../utils/managerToken";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthentication: getToken() ? true : false,
        token: getToken() || null
    },
    reducers: {
        ON_LOGIN: (state, action) => {
            state.isAuthentication = true
            state.token = action.payload.token
        },

        ON_LOGOUT: (state) => {
            state.isAuthentication = false
            state.token = null
        }
    }
})

export const authAction = authSlice.actions
export default authSlice.reducer