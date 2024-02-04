import styled from 'styled-components';
import vars from '../../styles/vars';

type Props = {
    active?: boolean;
};

export const Card = styled.div<Props>`
    background-color: ${props => (props.active ? vars.filterGreen : '#efefef')};
    border: solid 1px ${props => (props.active ? vars.green : vars.gray)};
    border-radius: 6px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    min-height: 90px;
    cursor: pointer;

    span {
        color: ${props => (props.active ? vars.green : vars.gray)};
    }
`;

export const CardQuantity = styled.span`
    display: block;
    font-size: 24px;
`;

export const CardCategory = styled.span`
    display: block;
    font-size: 14px;
`;
