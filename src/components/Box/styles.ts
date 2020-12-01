import styled from 'styled-components';

export const UserBox = styled.figure`
    display: flex;
    width: 900px;
    margin: 40px 0px;
    max-width: 1200px;
    picture{
        img{
            width: 280px;
        }
    }
    .user-info{
        display: flex;
        flex-direction: column;
        width: 100%;
        h1{
            background-color: #116193;
            width: 100%;
            padding: 10px 20px;
            margin: 0px;
        }
        .data-info{
            background-color: #ebebeb;
            height: 100%;
            padding: 10px 20px;
            p{
                font-weight: bold;
                font-size: 18px;
                margin: 15px 0px;
                span{
                    font-weight: 400;
                }
            }
            a{
                float: right;
                text-decoration: none;
                font-size: 18px;
            }
        }
    }
`;
