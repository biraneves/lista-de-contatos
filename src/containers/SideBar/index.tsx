import { useDispatch, useSelector } from 'react-redux';
import { Campo } from '../../styles';
import FiltersList from '../FiltersList';
import { Aside } from './styles';
import { RootReducer } from '../../store';
import { changeSearch } from '../../store/reducers/filter';

type Props = {
    showFilters?: boolean;
};

const SideBar = ({ showFilters }: Props) => {
    const dispatch = useDispatch();
    const { search } = useSelector((state: RootReducer) => state.filter);

    return (
        <Aside>
            {showFilters ? (
                <>
                    <Campo
                        type="text"
                        placeholder="Buscar"
                        value={search}
                        onChange={e => dispatch(changeSearch(e.target.value))}
                    />
                    <FiltersList />
                </>
            ) : (
                <h3>Mostrar botão de retorno</h3>
            )}
        </Aside>
    );
};

export default SideBar;
