import styled from "styled-components";
export const Card = styled.div`
  border: 1 px solid rgb(125, 125, 190);
  overflow-y: auto;
  height: 400px;
  background-color: rgb(125, 125, 190);
  width: 290px;
  color: white;
  border-radius: 6px;
  padding: 0 20px 10px 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-self: flex-start;
  margin: 50px 0 0 0;
  @media (min-width: 320px) and (max-width: 800px) {
    align-self: center;
    padding: 4px;
  }
  h1 {
    color: black;
    font-family: "Roboto", sans-serif;
    font-size: 35px;
    font-weight: 100;
    width: 200px;
    margin-top: 6px;
    padding: 5px 15px 5px 15px;
    background-color: rgb(171, 171, 197);
    border: 1px solid rgb(171, 171, 197);
    border-radius: 6px;
  }
`;
export const CardAddTecs = styled.div`
  background-color: black;
  margin: 50px 0 0 0;
  border-radius: 6px;
  @media (min-width: 320px) and (max-width: 800px) {
    width: 298px;
  }
  input {
    margin: 7px;
    height: 30px;
    border: none;
    outline: none;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: 300;
  }
  h1 {
    font-size: 35px;
    font-weight: 100;
    padding: 10px;
  }
  button {
    width: 50px;
  }
`;
