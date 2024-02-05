import styled from 'styled-components';
import vars from '../../styles/vars';

export const Header = styled.header`
    background-color: ${vars.primaryColor};
    color: #fff;
    height: 10vh;
    padding: 0 24px;

    h1 {
        letter-spacing: 4px;
        color: #fff;

        @media screen and (max-width: 767px) {
            letter-spacing: normal;
            font-size: 24px;
        }
    }
`;
