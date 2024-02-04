import { useDispatch } from 'react-redux';
import { ActionButton, ActionButtonDanger } from '../../styles';
import { Card, ContactItem, ContactName, CategoryTag, ContactInfos, ContactInfo, ActionBar } from './styles';
import { remove } from '../../store/reducers/contacts';
import ContactClass from '../../models/Contact';

type ContactProps = ContactClass;

const Contact = ({ id, name, category, email, phone }: ContactProps) => {
    const dispatch = useDispatch();

    return (
        <ContactItem>
            <Card>
                <ContactName>{name}</ContactName>
                <CategoryTag>{category}</CategoryTag>
                <ContactInfos>
                    <ContactInfo type="email">
                        <span className="fa-regular fa-at" />
                        <a href={`mailto:${email}`}>{email}</a>
                    </ContactInfo>
                    <ContactInfo type="phone">
                        <span className="fa-solid fa-phone" />
                        <a href={`tel:${phone}`}>{phone}</a>
                    </ContactInfo>
                </ContactInfos>
                <ActionBar>
                    <ActionButton>Editar</ActionButton>
                    <ActionButtonDanger onClick={() => dispatch(remove(id))}>Remover</ActionButtonDanger>
                </ActionBar>
            </Card>
        </ContactItem>
    );
};

export default Contact;
