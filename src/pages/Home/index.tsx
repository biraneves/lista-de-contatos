import AddContactButton from '../../components/AddContactButton';
import ContactsArea from '../../containers/ContactsArea';
import SideBar from '../../containers/SideBar';

const Home = () => (
    <>
        <SideBar showFilters />
        <ContactsArea />
        <AddContactButton />
    </>
);

export default Home;
