import styled from "styled-components";

export const CTAButtonStyle = styled.button`
  background-color: transparent;
  background-image: none;
  border: none;
  padding: 16px;
  margin: 32px 16px;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #d2eaf2;
    box-shadow: 0 0 15px rgb(45 45 45 / 10%);
    border-radius: 10px;
  }
`;
