import styled from 'styled-components';

export const ContactsInfo = styled.h3`
    margin-top: 12px;
    margin-bottom: 24px;
    color: #666;
    font-weight: 400;
`;

export const ContactCardsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;

    @media screen and (max-width: 1023px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 767px) {
        grid-template-columns: auto;
    }
`;
