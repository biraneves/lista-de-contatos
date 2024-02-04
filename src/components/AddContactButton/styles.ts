import { Link } from 'react-router-dom';
import styled from 'styled-components';
import vars from '../../styles/vars';

export const Circle = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: ${vars.green};
    color: #fff;
    font-size: 40px;
    text-decoration: none;
    position: fixed;
    bottom: 24px;
    right: 24px;
    cursor: pointer;
`;
