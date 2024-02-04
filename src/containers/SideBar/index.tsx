import { Campo } from '../../styles';
import FiltersList from '../FiltersList';
import { Aside } from './styles';

type Props = {
    showFilters?: boolean;
};

const SideBar = ({ showFilters }: Props) => (
    <Aside>
        {showFilters ? (
            <>
                <Campo type="text" placeholder="Buscar" />
                <FiltersList />
            </>
        ) : (
            <h3>Mostrar botão de retorno</h3>
        )}
    </Aside>
);

export default SideBar;
