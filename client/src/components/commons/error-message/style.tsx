import styled from "styled-components";

interface ErrorMessageTextProps {
  readonly isVisible: boolean;
}

export const ErrorMessageText = styled.p<ErrorMessageTextProps>`
  margin: 0;
  color: red;
  height: 25px;
  visibility: ${(props) => (props.isVisible ? "hidden" : "visible")};
`;
