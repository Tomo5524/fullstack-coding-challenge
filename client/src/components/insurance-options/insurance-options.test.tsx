import { render, screen, fireEvent } from "@testing-library/react";
import InsuranceOptions from "./insurance-options";
// import renderer from "react-test-renderer";

test("it renders expected initial DOM", () => {
  const onClickCallback = jest.fn();

  render(
    <InsuranceOptions
      setSelectedOption={onClickCallback}
      handlePreviousStage={onClickCallback}
      errorMessageDB="test"
    />
  );

  const errorMessage = screen.getByTestId("error-message");
  // should be null since this element is hidden now
  expect(errorMessage.getAttribute("value")).toBe(null);
});
