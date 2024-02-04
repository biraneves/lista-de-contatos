import styled from 'styled-components';
import vars from '../../styles/vars';

export const Header = styled.header`
    background-color: ${vars.primaryColor};
    color: #fff;
    height: 10vh;
    padding-left: 40px;

    h1 {
        letter-spacing: 4px;
        color: #fff;
    }
`;
