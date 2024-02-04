import { Provider } from 'react-redux';
import ContactsArea from './containers/ContactsArea';
import GeneralHeader from './containers/GeneralHeader';
import SideBar from './containers/SideBar';
import EstiloGlobal, { Container } from './styles';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <EstiloGlobal />
            <GeneralHeader />
            <Container>
                <SideBar />
                <ContactsArea />
            </Container>
        </Provider>
    );
}

export default App;
