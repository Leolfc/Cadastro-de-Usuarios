import styled from "styled-components";

export const Button = styled.button`
  border:  ${props=> props.theme === "primary" ? "none" : "2px solid #fff" }; 
  background: ${(props) => props.theme === "primary" ? " linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)" : "#0b6975ff"  };
  padding: 16px 32px;
  font-size: 16px;
  width: fit-content;
  border-radius: 30px;
  cursor: pointer;
 
  &:hover {
   ${props=> props.theme === "primary" ? "box-shadow: 1px 1px  10px white" : "background:linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)" };
  }
  &:active {
    opacity: 0.6;
  }
`;
