import FilterCard from '../../components/FilterCard';
import { FilterList } from './styles';

const FiltersList = () => (
    <FilterList>
        <FilterCard quantity={2} category="família" />
        <FilterCard quantity={1} category="amigos" />
        <FilterCard quantity={1} category="trabalho" />
        <FilterCard quantity={1} category="sem categoria" />
        <FilterCard active quantity={5} category="todos" />
    </FilterList>
);

export default FiltersList;
