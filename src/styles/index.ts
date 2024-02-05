import styled, { createGlobalStyle } from 'styled-components';
import vars from './vars';

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
        font-family: 'Roboto', sans-serif;
        list-style-type: none;
        color: ${vars.primaryColor};
    }
`;

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 224px auto;

    @media screen and (max-width: 767px) {
        grid-template-columns: auto;
    }
`;

export const MainContainer = styled.main`
    width: 100%;
    height: 90vh;
    padding: 40px;
    background-color: #efefef;
    overflow-y: scroll;
`;

export const HeaderContainer = styled.div`
    max-width: 1024px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: start;

    @media screen and (max-width: 767px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const Field = styled.input`
    width: 100%;
    padding: 8px;
    border: solid 1px ${vars.primaryColor};
    border-radius: 8px;
    font-size: 14px;
    font-weight: 700;
    color: ${vars.gray};
    margin-bottom: 16px;
`;

export const ActionButton = styled.button`
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 1.2px;
    color: #fff;
    background-color: ${vars.primaryColor};
    padding: 6px 8px;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    margin-right: 8px;
`;

export const ActionButtonDanger = styled(ActionButton)`
    background-color: ${vars.red};
`;

export const ActionButtonSave = styled(ActionButton)`
    background-color: ${vars.green};
`;

export const Title = styled.h2`
    display: block;
    font-size: 18px;
    font-weight: 700;
`;

export default EstiloGlobal;
