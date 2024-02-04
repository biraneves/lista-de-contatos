import { Card, CardCategory, CardQuantity } from './styles';

export type FilterCardProps = {
    quantity: number;
    category: string;
    active?: boolean;
};

const FilterCard = (props: FilterCardProps) => (
    <Card active={props.active}>
        <CardQuantity>{props.quantity}</CardQuantity>
        <CardCategory>{props.category}</CardCategory>
    </Card>
);

export default FilterCard;
