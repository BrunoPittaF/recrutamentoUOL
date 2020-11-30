import styled  from "styled-components";
import colors from '../../Assets/styles/colors.json';

export const Header = styled.div`
    padding: 20px;
    background-color: #116193;
    h1{
        color: ${colors.titlePag};
        text-align: center;
    }

`;


export const SearchBar = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 900px;
    max-width: 1200px;
    margin-top: 40px;
    input{
        width: 100%;
        padding: 10px;
        border-radius: 6px;
        outline: none;
        border: none;
        border: 1px solid black;
    }

`;