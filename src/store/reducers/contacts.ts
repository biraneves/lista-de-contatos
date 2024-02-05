import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Contact from '../../models/Contact';
import { Category } from '../../utils/enums/Contact';

type ContactsState = {
    items: Contact[];
};

const initialState: ContactsState = {
    items: [
        new Contact('Mickey Mouse', Category.WORK, 'mickey.mouse@email.com', '+55 11 98251-3018'),
        new Contact('Minnie Mouse', Category.NO_CATEGORY, 'minnie.mouse@email.com', '+55 11 97968-5205'),
        new Contact('Pato Donald', Category.FRIENDS, 'pato.donald@email.com', '+55 11 91126-5661'),
        new Contact('Pateta', Category.NO_CATEGORY, 'pateta@email.com', '+55 11 99608-9071'),
        new Contact('Pluto', Category.FRIENDS, 'pluto@email.com', '+55 11 95638-5436'),
        new Contact('Tio Patinhas', Category.FRIENDS, 'tio.patinhas@email.com', '+55 11 93694-7998'),
        new Contact('Huguinho', Category.FRIENDS, 'huguinho@email.com', '+55 11 95177-7647'),
        new Contact('Zezinho', Category.WORK, 'zezinho@email.com', '+55 11 97473-1786'),
        new Contact('Luizinho', Category.WORK, 'luizinho@email.com', '+55 11 97004-4088'),
        new Contact('Margarida', Category.FRIENDS, 'margarida@email.com', '+55 11 91497-3600'),
        new Contact('Gastão', Category.WORK, 'gastao@email.com', '+55 11 93803-7847'),
        new Contact('Bafo de Onça', Category.WORK, 'bafo.de.onca@email.com', '+55 11 97588-1468'),
        new Contact('Fethry Duck', Category.FAMILY, 'fethry.duck@email.com', '+55 11 97049-9006'),
        new Contact('Professor Pardal', Category.NO_CATEGORY, 'professor.pardal@email.com', '+55 11 95752-1543'),
        new Contact('Magica De Spell', Category.NO_CATEGORY, 'magica.de.spell@email.com', '+55 11 95000-6246'),
        new Contact('Daisy Duck', Category.FAMILY, 'daisy.duck@email.com', '+55 11 96458-8506'),
        new Contact('Clarabela', Category.WORK, 'clarabela@email.com', '+55 11 97711-6740'),
        new Contact('Horácio', Category.NO_CATEGORY, 'horácio@email.com', '+55 11 92576-2817'),
        new Contact('Lampadinha', Category.FAMILY, 'lampadinha@email.com', '+55 11 93359-7609'),
        new Contact('Escoteiros Mirins', Category.WORK, 'escoteiros.mirins@email.com', '+55 11 98791-9402'),
        new Contact('Peninha', Category.WORK, 'peninha@email.com', '+55 11 98244-6627'),
        new Contact('Rocha Vazia', Category.WORK, 'rocha.vazia@email.com', '+55 11 98979-1741'),
    ],
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        remove: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(contact => contact.id !== action.payload);
        },
        save: (state, action: PayloadAction<Contact>) => {
            const contactExists = state.items.find(
                contact => contact.name.toLowerCase() === action.payload.name.toLowerCase()
            );

            if (contactExists) {
                alert('Já existe um contato com esse nome.');
            } else {
                const newContact = { ...action.payload };
                state.items.push(newContact);
            }
        },
        edit: (state, action: PayloadAction<Contact>) => {
            const contactIndex = state.items.findIndex(contact => contact.id === action.payload.id);

            state.items[contactIndex].name = action.payload.name;
            state.items[contactIndex].category = action.payload.category;
            state.items[contactIndex].email = action.payload.email;
            state.items[contactIndex].phone = action.payload.phone;
        },
    },
});

export const { remove, save, edit } = contactsSlice.actions;
export default contactsSlice.reducer;
