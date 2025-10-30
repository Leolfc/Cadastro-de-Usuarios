import styled from "styled-components";

export const Title = styled.h2`
  color: #ffff;
  text-align: center;
  font-size: 38px;
  font-weight: 600;
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

export const TopBackground = styled.div`
  display: flex;
  background: linear-gradient(to right, #fe7e5d, #7f3b41);
  height: 30vh;
  max-width: 90vw;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  gap: 20px;
`;
export const ContainerInputs = styled.div``;
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

export const Button = styled.button`
  border: none;
  background: linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%);
  padding: 16px 32px;
  width: fit-content;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;
