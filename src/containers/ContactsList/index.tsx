import Contact from '../../components/Contact';
import { ContactCardsList } from './styles';
import { RootReducer } from '../../store';
import { useSelector } from 'react-redux';

const ContactsList = () => {
    const { items } = useSelector((state: RootReducer) => state.contacts);
    const { category } = useSelector((state: RootReducer) => state.filter);

    const filterContacts = () => {
        let filteredContacts = items;

        if (category !== 'todos') {
            filteredContacts = items.filter(contact => contact.category === category);
            return filteredContacts;
        }

        return items;
    };

    const contacts = filterContacts();

    return (
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
    );
};

export default ContactsList;
