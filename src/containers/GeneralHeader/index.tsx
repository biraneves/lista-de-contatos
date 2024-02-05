import HamburgerMenu from '../../components/HamburgerMenu';
import { HeaderContainer } from '../../styles';
import { Header } from './styles';

const GeneralHeader = () => (
    <Header>
        <HeaderContainer>
            <HamburgerMenu />
            <h1>Lista de Contatos</h1>
        </HeaderContainer>
    </Header>
);

export default GeneralHeader;
