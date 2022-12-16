import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import UserInputForm from "./user-input-form";

test("it populates error messages", () => {
  const onClickCallback = jest.fn();
  render(
    <UserInputForm
      handleNextStage={onClickCallback}
      userInfo={{
        firstName: "",
        lastName: "",
        fnameKana: "",
        lnameKana: "",
        gender: "",
        age: "",
        vehicleType: "",
        postCode: "",
        city: "",
        address: "",
        emailAddress: "",
      }}
      setUserInfo={onClickCallback}
      handlePreviousStage={onClickCallback}
    />
  );

  const errorMessages = screen.queryAllByTestId("error-message");
  // checks length of error messages to successfully populate error message to each field.
  expect(errorMessages.length).toBe(11);
});

test("it checks if fields exist", () => {
  const onClickCallback = jest.fn();
  render(
    <UserInputForm
      handleNextStage={onClickCallback}
      userInfo={{
        firstName: "",
        lastName: "",
        fnameKana: "",
        lnameKana: "",
        gender: "",
        age: "",
        vehicleType: "",
        postCode: "",
        city: "",
        address: "",
        emailAddress: "",
      }}
      setUserInfo={onClickCallback}
      handlePreviousStage={onClickCallback}
    />
  );
  const firstNameInput = screen.getByTestId(
    "user-information-input-test-firstName"
  );
  expect(firstNameInput).toBeInTheDocument();

  const lastNameInput = screen.getByTestId(
    "user-information-input-test-firstName"
  );
  expect(lastNameInput).toBeInTheDocument();

  const fnameKanaInput = screen.getByTestId(
    "user-information-input-test-firstName"
  );
  expect(fnameKanaInput).toBeInTheDocument();

  const lnameKanaInput = screen.getByTestId(
    "user-information-input-test-firstName"
  );
  expect(lnameKanaInput).toBeInTheDocument();

  const genderInput = screen.getByTestId(
    "user-information-input-test-firstName"
  );
  expect(genderInput).toBeInTheDocument();

  const ageInput = screen.getByTestId("user-information-input-test-firstName");
  expect(ageInput).toBeInTheDocument();

  const vehicleTypeInput = screen.getByTestId(
    "user-information-input-test-firstName"
  );
  expect(vehicleTypeInput).toBeInTheDocument();

  const postCodeInput = screen.getByTestId(
    "user-information-input-test-firstName"
  );
  expect(postCodeInput).toBeInTheDocument();

  const cityInput = screen.getByTestId("user-information-input-test-firstName");
  expect(cityInput).toBeInTheDocument();

  const addressInput = screen.getByTestId(
    "user-information-input-test-firstName"
  );
  expect(addressInput).toBeInTheDocument();

  const emailAddressInput = screen.getByTestId(
    "user-information-input-test-firstName"
  );
  expect(emailAddressInput).toBeInTheDocument();
});

test("it checks input validation", async () => {
  const onClickCallback = jest.fn();
  render(
    <UserInputForm
      handleNextStage={onClickCallback}
      userInfo={{
        firstName: "",
        lastName: "",
        fnameKana: "",
        lnameKana: "",
        gender: "",
        age: "",
        vehicleType: "",
        postCode: "",
        city: "",
        address: "",
        emailAddress: "",
      }}
      setUserInfo={onClickCallback}
      handlePreviousStage={onClickCallback}
    />
  );

  const inputElement = screen.getByTestId(
    "user-information-input-test-firstName"
  );

  fireEvent.change(inputElement, { target: { value: "test item" } });
});
