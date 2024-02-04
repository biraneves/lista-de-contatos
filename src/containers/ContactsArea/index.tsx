import { MainContainer } from '../../styles';
import ContactsList from '../ContactsList';
import { ContactsInfo } from './styles';

const ContactsArea = () => (
    <MainContainer>
        <h2>Contatos</h2>
        <ContactsInfo>Encontrados n contatos com os filtros "amigos".</ContactsInfo>
        <ContactsList />
    </MainContainer>
);

export default ContactsArea;
