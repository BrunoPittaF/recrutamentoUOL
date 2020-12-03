import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
    button{
        margin: 0px 20px;
        outline: none;
        border: 1px solid black;
        padding: 10px;
        border-radius: 6px;
        font-size: 16px;
        cursor: pointer;
    }
`;

export const UserBox = styled.div`
    display: flex;
    height: 600px;
    margin-top: 40px;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }


`;


export const UserContainer = styled.figure`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px;
    align-items: center;
    picture{
        width: 300px;
        img{
            width: 100%;
            border-radius: 100%;
        }
    }
    figcaption{
        margin-top: 20px;
        text-align: center;
        display: grid;
        p{
            margin: 10px 0px;
            font-weight: bold;
            display: inline-grid;
            span{
                font-weight: normal;
            }
        }
    }

`;

export const RepoContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 20px;
    padding: 20px;
    @media screen and (max-width: 630px){
    grid-template-columns: 1fr;
    }
    .repository{
        background-color: #efefef;
        border-radius: 6px;
        border: 1px solid black;
        outline: none;
        width: 380px;
        padding: 10px;
        @media screen and (max-width: 768px){
            width: 300px;
            justify-self: center;
        }
        p{
            margin: 10px 0px;
            font-weight: bold;
            span{
                font-weight: normal;
            }
        }
        a{
            text-decoration: none;
        }
    }

`