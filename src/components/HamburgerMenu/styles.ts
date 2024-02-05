import styled from 'styled-components';

export const HMContainer = styled.div`
    height: 36px;
    width: 36px;
    border: solid 1px #aaa;
    border-radius: 6px;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    div {
        height: 2px;
        width: 24px;
        background-color: #fff;

        &:nth-child(2) {
            margin: 5px 0;
        }
    }

    @media screen and (max-width: 767px) {
        display: flex;
    }
`;
