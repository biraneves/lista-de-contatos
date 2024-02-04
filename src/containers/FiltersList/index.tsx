import FilterCard from '../../components/FilterCard';
import { FilterList } from './styles';
import { Category } from '../../utils/enums/Contact';

const FiltersList = () => {
    return (
        <FilterList>
            <FilterCard category={Category.FAMILY} />
            <FilterCard category={Category.FRIENDS} />
            <FilterCard category={Category.WORK} />
            <FilterCard category={Category.NO_CATEGORY} />
            <FilterCard category="todos" />
        </FilterList>
    );
};

export default FiltersList;
