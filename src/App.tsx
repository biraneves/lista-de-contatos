import { Provider } from 'react-redux';
import GeneralHeader from './containers/GeneralHeader';
import EstiloGlobal, { Container } from './styles';
import store from './store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import AddContact from './pages/AddContact';
import EditContact from './pages/EditContact';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/new',
        element: <AddContact />,
    },
    {
        path: '/edit/:contactId',
        element: <EditContact />,
    },
]);

function App() {
    return (
        <Provider store={store}>
            <EstiloGlobal />
            <GeneralHeader />
            <Container>
                <RouterProvider router={routes} />
            </Container>
        </Provider>
    );
}

export default App;
