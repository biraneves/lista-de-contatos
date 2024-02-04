import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Contact from '../../models/Contact';
import { Category } from '../../utils/enums/Contact';

type ContactsState = {
    items: Contact[];
};

const contactPam = new Contact('Pâmela Czyziw', Category.FAMILY, 'pamela.czyiw@email.com', '+55 11 1234-5678');
const contactCarol = new Contact('Anna Carolina', Category.FAMILY, 'carol@email.com', '+55 11 5678-1234');
const contactJane = new Contact('Jane Doe', Category.WORK, 'jane.doe@email.com', '+55 11 1234-5678');
const contactJohn = new Contact('John Doe', Category.FRIENDS, 'john.doe@email.com', '+55 11 9876-5432');
const contactJoao = new Contact('João Ninguém', Category.NO_CATEGORY, 'joao.ninguem@email.com.br', '+55 11 6543-3456');

const initialState: ContactsState = {
    items: [contactPam, contactCarol, contactJane, contactJohn, contactJoao],
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        remove: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(contact => contact.id !== action.payload);
        },
    },
});

export const { remove } = contactsSlice.actions;
export default contactsSlice.reducer;
