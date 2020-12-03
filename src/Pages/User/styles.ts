import styled from "styled-components";
import colors from '../../Assets/styles/colors.json';

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  button {
    margin: 0px 20px;
    outline: none;
    border: 1px solid black;
    padding: 10px;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    background-color: ${colors.primary};
  }
`;

export const UserBox = styled.div`
  display: flex;
  height: 600px;
  margin-top: 40px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const UserContainer = styled.figure`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  align-items: center;
  picture {
    width: 300px;
    img {
      width: 100%;
      border-radius: 100%;
    }
  }
  figcaption {
    margin-top: 20px;
    text-align: center;
    display: grid;
    p {
      margin: 10px 0px;
      font-weight: bold;
      display: inline-grid;
      span {
        font-weight: normal;
      }
    }
  }
`;

export const RepoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  padding: 20px;
  @media screen and (max-width: 630px) {
    grid-template-columns: 1fr;
  }
  .repository {
    border-radius: 6px;
    outline: none;
    width: 380px;
    padding: 10px;
    border: 1px solid #dadce0;
    background: ${colors.primary};
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    word-break: break-all;
    @media screen and (max-width: 768px) {
      width: 300px;
      justify-self: center;
    }
    p {
      margin: 10px 0px;
      font-weight: bold;
      span {
        font-weight: normal;
      }
    }
    a {
      text-decoration: none;
      color: ${colors.link};
      transition: filter 0.2s;
      &:hover {
        filter: brightness(75%);
      }
    }
  }
`;
