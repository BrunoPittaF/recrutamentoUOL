import colors from './colors.json';
import {createGlobalStyle} from 'styled-components';
import styled  from "styled-components";

export const GlobalStyle= createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open sans';
}

html,body{
    height: 100vh;
}

body{
    background: ${colors.background}
}
`;


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;
