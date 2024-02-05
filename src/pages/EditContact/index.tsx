import { useParams } from 'react-router-dom';
import ContactForm from '../../containers/ContactForm';
import SideBar from '../../containers/SideBar';

const EditContact = () => {
    const { contactId } = useParams();

    return (
        <>
            <SideBar />
            <ContactForm contactId={contactId} />
        </>
    );
};

export default EditContact;
