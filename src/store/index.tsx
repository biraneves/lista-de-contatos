import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './reducers/contacts';
import filterReducer from './reducers/filter';
import sidebarReducer from './reducers/sidebar';

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
        sidebar: sidebarReducer,
    },
});

export type RootReducer = ReturnType<typeof store.getState>;
export default store;
