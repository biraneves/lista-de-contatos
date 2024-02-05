import { useDispatch, useSelector } from 'react-redux';
import { ActionButton, Field } from '../../styles';
import FiltersList from '../FiltersList';
import { Aside } from './styles';
import { RootReducer } from '../../store';
import { changeSearch } from '../../store/reducers/filter';
import { useNavigate } from 'react-router-dom';

type Props = {
    showFilters?: boolean;
};

const SideBar = ({ showFilters }: Props) => {
    const dispatch = useDispatch();
    const { search } = useSelector((state: RootReducer) => state.filter);
    const navigate = useNavigate();

    const backToContactsList = () => {
        navigate('/');
    };

    return (
        <Aside>
            {showFilters ? (
                <>
                    <Field
                        type="text"
                        placeholder="Buscar"
                        value={search}
                        onChange={e => dispatch(changeSearch(e.target.value))}
                    />
                    <FiltersList />
                </>
            ) : (
                <ActionButton onClick={backToContactsList}>Voltar à página inicial</ActionButton>
            )}
        </Aside>
    );
};

export default SideBar;
