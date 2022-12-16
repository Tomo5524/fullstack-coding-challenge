import React from "react";
import CTAButton from "../commons/cta-button/cta-button";
import ErrorMessageDisplay from "../commons/error-message/error-message";
import NavButton from "../commons/nav-button/nav-button";
import { ButtonContainer } from "../commons/nav-button/style";
import { Container } from "../product-options/style";
import { insuranceList } from "./data";

interface InsuranceOptionsProps {
  setSelectedOption: (insurance: string) => void;
  handlePreviousStage: () => void;
  errorMessageDB: string;
}

function InsuranceOptions({
  setSelectedOption,
  handlePreviousStage,
  errorMessageDB,
}: InsuranceOptionsProps) {
  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <Container>
      <select name="insuranceOption" onChange={(e) => handleOnChange(e)}>
        {insuranceList.map((item, index) => {
          return (
            <option key={`${item}-${index}`} value={item.insuranceOption}>
              {item.insuranceOption}
            </option>
          );
        })}
      </select>
      <ButtonContainer>
        <NavButton handleClick={handlePreviousStage} variant="left" />
        <CTAButton text="submit" />
      </ButtonContainer>
      <ErrorMessageDisplay text={errorMessageDB} />
    </Container>
  );
}

export default InsuranceOptions;
