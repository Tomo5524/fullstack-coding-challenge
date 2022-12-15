import styled from "styled-components";
import { media } from "../theme/breakpoints";

export const Container = styled.div`
  display: flex;
  max-width: 768px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  label {
    width: 100%;
  }
  ${media.md} {
    padding: 0 16px;
  }
`;

export const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;

  height: 90px;
  border: 1px solid rgb(229, 229, 229);
  ${media.md} {
    flex-direction: column;
    margin: 16px 0;
  }
`;

export const GenderFieldContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  height: 90px;
  border: 1px solid rgb(229, 229, 229);
  flex-direction: column;
`;

export const LabelTextBox = styled.div`
  min-width: 220px;
  background-color: rgb(250, 250, 250);
  padding: 0 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px solid rgb(229, 229, 229);
  ${media.md} {
    width: 100%;
    padding: 0;
  }
`;

export const InputBox = styled.div`
  width: 100%;
  padding: 0 24px;
  input {
    width: 80%;
    font-size: 24px;
    padding: 2px 8px;
    border: none;
    outline: none;
  }
  ${media.md} {
    border: 1px solid #333;
    padding: 0;
  }
`;

export const LabelText = styled.p`
  margin: 0;
  padding: 8px 0;
  ${media.md} {
    padding: 8px;
  }
`;

export const Title = styled.h1``;
