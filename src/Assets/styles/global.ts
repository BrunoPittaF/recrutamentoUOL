import colors from './colors.json';
import {createGlobalStyle} from 'styled-components';


export const GlobalStyle= createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,body{
    height: 100vh;
}

body{
    background: ${colors.background}
}
`