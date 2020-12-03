import styled from "styled-components";

export const UserBox = styled.figure`
  display: flex;
  width: 900px;
  margin: 40px 0px;
  max-width: 1200px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
  picture {
    @media screen and (max-width: 768px) {
        height: 320px;
      }
    img {
      width: 280px;
      @media screen and (max-width: 768px) {
        width: 100%;
        height: 320px;
      }
    }
  }
  .user-info {
    display: flex;
    flex-direction: column;
    width: 100%;
    h1 {
      background-color: #116193;
      width: 100%;
      padding: 10px 20px;
      margin: 0px;
      color: #fff;
      font-weight: 100;
    }
    .data-info {
      background-color: #ebebeb;
      height: 100%;
      padding: 10px 20px;
      position: relative;
      display: grid;
      p {
        font-weight: bold;
        font-size: 18px;
        margin: 15px 0px;
        cursor: pointer;
        @media screen and (max-width: 425px) {
        display: inline-grid;
        word-break: break-word;
      }
        span {
          font-weight: 400;
        }
        a{
          text-decoration: none;
          font-weight: 400;
          color: #0366d6;
          transition: filter 0.2s;
        &:hover{
          filter: brightness(75%); 
        }
        }
      }
      .interna {
        text-decoration: none;
        font-size: 18px;
        position: absolute;
        right: 30px;
        bottom: 10px;
        color: #fff;
        border-radius: 6px;
        padding: 5px;
        background: #116193;
        border: none;
        transition: filter 0.2s;
        &:hover{
          filter: brightness(90%); 
        }
      }
    }
  }
`;
