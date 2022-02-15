import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        route: '/',
    },
    reducers: {
        changeRoute: (state, action) => {
            state.route = action.payload;
        },
    },
});

export default appSlice;
export const reducer = appSlice.reducer;
export const actions = appSlice.actions;
export const { changeRoute } = appSlice.actions;
