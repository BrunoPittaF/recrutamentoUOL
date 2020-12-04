import styled  from "styled-components";

export const SearchBar = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 900px;
    max-width: 1200px;
    margin-top: 40px;
    @media screen and (max-width: 768px){
        width: 100%;
    }
    input{
        width: 100%;
        padding: 10px;
        border-radius: 6px;
        outline: none;
        border: none;
        border: 1px solid black;
    }

`;


export const PagesButton = styled.div`
        display: flex;
        margin-bottom: 20px;
        button{
            margin: 0px 5px;
            border: 1px solid #116193;
            padding: 5px 10px;
            cursor: pointer;
            outline: none;
            transition: filter 0.2s;
            border-radius: 6px;
        &:hover{
        filter: brightness(85%);
        }
    }
`;