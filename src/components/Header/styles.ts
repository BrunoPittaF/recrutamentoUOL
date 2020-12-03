import styled  from "styled-components";
import colors from '../../Assets/styles/colors.json';

export const HeaderBar = styled.div`
    padding: 20px;
    background-color: #116193;
    display: flex;
    justify-content: center;
    a{
        text-decoration: none;
        color: ${colors.titlePag};
        font-size: 3em;
    }

`;