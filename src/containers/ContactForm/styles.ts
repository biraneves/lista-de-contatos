import styled from 'styled-components';

export const Form = styled.form`
    max-width: 548px;
    width: 100%;
    margin-top: 24px;
`;

export const Options = styled.div`
    margin-bottom: 24px;
    font-size: 14px;
    font-weight: 700;

    p {
        margin-bottom: 6px;
        font-size: 16px;
    }
`;

export const Option = styled.div`
    display: inline-block;
    text-transform: capitalize;

    input {
        margin-right: 6px;
    }

    label {
        margin-right: 16px;
        font-weight: 400;
    }

    @media screen and (max-width: 767px) {
        margin-bottom: 8px;
    }
`;
