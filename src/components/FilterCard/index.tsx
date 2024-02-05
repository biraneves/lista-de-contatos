import { useDispatch, useSelector } from 'react-redux';
import { Category } from '../../utils/enums/Contact';
import { Card, CardCategory, CardQuantity } from './styles';
import { RootReducer } from '../../store';
import { changeFilter } from '../../store/reducers/filter';
import { toggle } from '../../store/reducers/sidebar';

export type FilterCardProps = {
    category: Category | 'todos';
    active?: boolean;
};

const FilterCard = ({ category }: FilterCardProps) => {
    const dispatch = useDispatch();
    const { filter, contacts } = useSelector((state: RootReducer) => state);

    const isActive = () => {
        return filter.category === category;
    };

    const counter = () => {
        if (category === 'todos') return contacts.items.length;
        else return contacts.items.filter(contact => contact.category === category).length;
    };

    const doFilter = () => {
        dispatch(changeFilter({ category }));

        if (window.innerWidth <= 767) dispatch(toggle(false));
    };

    return (
        <Card active={isActive()} onClick={doFilter}>
            <CardQuantity>{counter()}</CardQuantity>
            <CardCategory>{category}</CardCategory>
        </Card>
    );
};

export default FilterCard;
