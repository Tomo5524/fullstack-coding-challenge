import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  background-image: none;
  border: none;
  padding: 8px 24px;
  width: 80px;
  margin: 32px 16px;
  &:hover {
    background-color: #eeecec;
    box-shadow: 0 0 15px rgb(45 45 45 / 10%);
    border-radius: 10px;
  }
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;
