import styled from "styled-components";

export const Title = styled.h2`
  color: #ffff;
  text-align: center;
  font-size: 38px;
  font-family: "Momo Trust Display", sans-serif;
  font-style: normal;
`;

export const Container = styled.div`
  background-color: #181f36;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
  min-height: 100vh;
`;

export const UsersImage = styled.img`
  max-width: 400px;
`;

export const Form = styled.form`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  gap: 20px;
`;
export const ContainerInputs = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: center;
align-items: center;
gap: 20px;
margin: 10px auto;
`;
export const InputLabel = styled.label`
  color: #ffff;
  font-size: 12px;
  font-weight: 500;
  margin-left: 5px;
  span {
    color: red;
    font-weight: bold;
    margin: 5px;
  }
`;

export const Input = styled.input`
  border: 1px solid #d2dae2;
  border-radius: 10px;
  background-color: #353333ff;
  padding: 12px 20px;
  outline: none;
  color: #ffff;
`;
