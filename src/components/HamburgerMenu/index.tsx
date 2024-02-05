import { useDispatch, useSelector } from 'react-redux';
import { HMContainer } from './styles';
import { RootReducer } from '../../store';
import { toggle } from '../../store/reducers/sidebar';

const HamburgerMenu = () => {
    const dispatch = useDispatch();
    const { sidebar } = useSelector((state: RootReducer) => state);

    const toggleSidebar = () => {
        const novoEstado = !sidebar.visible;
        dispatch(toggle(novoEstado));
    };
    return (
        <HMContainer onClick={toggleSidebar}>
            <div></div>
            <div></div>
            <div></div>
        </HMContainer>
    );
};

export default HamburgerMenu;
