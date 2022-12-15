import styled from "styled-components";
// import { media } from "../../theme/breakpoints";

interface CardContainerProps {
  readonly isActive: boolean;
}

export const CardContainer = styled.button<CardContainerProps>`
  min-width: 250px;
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
  display: flex;
  align-items: end;
  border: none;
  padding: 8px 16px;
  margin: 8px 0;
  border: ${(props) =>
    props.isActive ? "1px solid #000" : "1px solid transparent;"};
  border-radius: 10px;
  &:hover {
    background-color: #fff;
    box-shadow: 0 0 15px rgb(45 45 45 / 10%);
  }

  cursor: pointer;
`;

export const ProductImage = styled.img`
  width: 75px;
  fill: red;
`;

export const ProductText = styled.span`
  padding-bottom: 20px;
  font-size: 16px;
`;
