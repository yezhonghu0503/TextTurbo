import { createSlice, configureStore } from "@reduxjs/toolkit";

const menuStateSlice = createSlice({
    name: "test",
    initialState: {
        value: false,
    },
    reducers: {
        openMenu: (state) => {
            state.value = true;
        },
        closeMenu: (state) => {
            state.value = false;
        },
    },
});
export const { openMenu, closeMenu } = menuStateSlice.actions;

export const store = configureStore({
    reducer: {
        menuState: menuStateSlice.reducer,
    },
});
