import Contact from '../../components/Contact';
import { ContactCardsList, ContactsInfo } from './styles';
import { RootReducer } from '../../store';
import { useSelector } from 'react-redux';

const ContactsList = () => {
    const { items } = useSelector((state: RootReducer) => state.contacts);
    const { search, category } = useSelector((state: RootReducer) => state.filter);

    const filterContacts = () => {
        let filteredContacts = items;

        if (search !== undefined) {
            filteredContacts = filteredContacts.filter(
                contact => contact.name.toLowerCase().search(search.toLowerCase()) >= 0
            );

            if (category !== 'todos') {
                filteredContacts = filteredContacts.filter(contact => contact.category === category);
                return filteredContacts;
            }

            return filteredContacts;
        }

        return items;
    };

    const showFilterResults = (quantity: number) => {
        let beginMessage = '';

        if (quantity === 0) {
            beginMessage = 'Não foram encontrados contatos';
        } else {
            beginMessage = quantity > 1 ? `Encontrados ${quantity} contatos` : `Encontrado ${quantity} contato`;
        }

        return `${beginMessage} com os filtros especificados.`;
    };

    const contacts = filterContacts();

    return (
        <>
            <ContactsInfo>{showFilterResults(contacts.length)}</ContactsInfo>
            <ContactCardsList>
                {contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        id={contact.id}
                        name={contact.name}
                        category={contact.category}
                        email={contact.email}
                        phone={contact.phone}
                    />
                ))}
            </ContactCardsList>
        </>
    );
};

export default ContactsList;
