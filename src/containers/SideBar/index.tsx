import { Campo } from '../../styles';
import FiltersList from '../FiltersList';
import { Aside } from './styles';

const SideBar = () => (
    <Aside>
        <Campo type="text" placeholder="Buscar" />
        <FiltersList />
    </Aside>
);

export default SideBar;
