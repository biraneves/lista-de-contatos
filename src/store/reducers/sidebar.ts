import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type SidebarState = {
    visible?: boolean;
};

const initialState: SidebarState = {
    visible: !(window.innerWidth <= 767),
};

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggle: (state, action: PayloadAction<boolean>) => {
            state.visible = action.payload;
        },
    },
});

export const { toggle } = sidebarSlice.actions;
export default sidebarSlice.reducer;
