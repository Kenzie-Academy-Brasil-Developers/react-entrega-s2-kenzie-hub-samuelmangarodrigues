import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    margin: 7px;
    height: 30px;
    border: none;
    outline: none;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: 300;
  }
  p {
    margin: 0 16px 0 0;
    font-family: "Rajdhani", sans-serif;
  }
  a {
    text-decoration: none;
    color: white;
    padding-bottom: 3px;
  }
  a:hover {
    color: blue;
    transition: 0.5s;
  }
  span {
    font-size: 14px;
    color: red;
  }
`;
export const Button = styled.button`
  width: 140px;
  height: 30px;
  background-color: rgb(138, 131, 131);
  border: 1px solid white;
  border-radius: 4px;
  margin: 10px;
  margin-right: 20px;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 300;
  :hover {
    border-color: lightblue;
    color: white;
    transition: 0.5s;
  }
`;
export const Container = styled.div`
  border: 1px solid transparent;
  border-radius: 7px;
  background-color: black;
  color: white;
  padding: 8px 25px 8px 25px;
  h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 100;
  }
  @media (min-width: 320px) and (max-width: 380px) {
    padding: 5px;
  }
`;
export const Inputs = styled.div`
  background-color: white;
  border-radius: 6px;
  border: 3px solid white;
  display: flex;
  padding: 2px;
  margin: 4px;
  align-items: center;
  justify-content: center;
  :hover {
    border-color: lightblue;
    transition: 0.5s;
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  h1 {
    color: white;
    margin: 0 5px 0 14px;
  }
  div {
    background-color: black;
    display: flex;
    align-items: center;
    border-radius: 7px;
    h2 {
      margin: 2px 5px 2px 5px;
      color: white;
      font-family: "Bebas Neue";
    }
  }
`;
export const LinksAling = styled.div`
  display: flex;
  align-items: center;
  margin-top: 55px;
`;
