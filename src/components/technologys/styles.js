import styled from "styled-components";
export const Techs = styled.ul`
  display: flex;
  width: 250px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  list-style: none;
  background-color: darkblue;
  border: 1px solid transparent;
  border-radius: 6px;
  li {
    font-size: 18px;
  }
`;
export const ButtonTech = styled.button`
  background-color: darkred;
  width: 50px;
  text-align: center;
  margin: 10px;
  color: gray;
  border: 1px solid transparent;
  border-radius: 6px;
  :hover {
    background-color: red;
    color: white;
    transition: 0.3s;
  }
`;
export const ButtonExit = styled.button`
  background-color: rgb(149, 149, 231);
  color: white;
  width: 100px;
  border: 1px solid black;
  height: 30px;
  border-radius: 6px;
  @media (min-width: 320px) and (max-width: 800px) {
    margin: 10px;
  }
  :hover {
    background-color: darkblue;
    transition: 0.4s;
  }
`;
