import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Category } from '../../utils/enums/Contact';

type FilterState = {
    search?: string;
    category?: Category | 'todos';
};

const initialState: FilterState = {
    search: '',
    category: 'todos',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        changeFilter: (state, action: PayloadAction<FilterState>) => {
            state.category = action.payload.category;
        },
    },
});

export const { changeSearch, changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
