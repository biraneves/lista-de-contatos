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
`;
