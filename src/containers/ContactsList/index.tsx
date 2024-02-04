import Contact from '../../components/Contact';
import { ContactCardsList } from './styles';
import { RootReducer } from '../../store';
import { useSelector } from 'react-redux';

const ContactsList = () => {
    const { items } = useSelector((state: RootReducer) => state.contacts);

    return (
        <ContactCardsList>
            {items.map(contact => (
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
