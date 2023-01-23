import { createSlice } from "@reduxjs/toolkit";

const initialState = {}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        actionOne: (state) => state
    },
})
export const { actionOne } = authSlice.actions
export default authSlice.reducer; 