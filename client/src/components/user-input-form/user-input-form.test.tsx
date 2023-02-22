import { fireEvent, render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import renderer from "react-test-renderer";
import UserInputForm from "./user-input-form";

const renderComponent = () => {
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
};

test("it populates error messages", () => {
  renderComponent();
  const errorMessages = screen.queryAllByTestId("error-message");
  // checks length of error messages to successfully populate error message to each field.
  expect(errorMessages.length).toBe(11);
});

describe("checks each field", () => {
  test("check if inputs exist", () => {
    renderComponent();
    const firstNameInput = screen.getByTestId(
      "user-information-input-test-firstName"
    );
    expect(firstNameInput).toBeInTheDocument();

    const lastNameInput = screen.getByTestId(
      "user-information-input-test-lastName"
    );
    expect(lastNameInput).toBeInTheDocument();

    const fnameKanaInput = screen.getByTestId(
      "user-information-input-test-fnameKana"
    );
    expect(fnameKanaInput).toBeInTheDocument();

    const lnameKanaInput = screen.getByTestId(
      "user-information-input-test-lnameKana"
    );
    expect(lnameKanaInput).toBeInTheDocument();

    const genderInput = screen.getByTestId(
      "user-information-input-test-gender"
    );
    expect(genderInput).toBeInTheDocument();

    const ageInput = screen.getByTestId("user-information-input-test-age");
    expect(ageInput).toBeInTheDocument();

    const vehicleTypeInput = screen.getByTestId(
      "user-information-input-test-vehicleType"
    );
    expect(vehicleTypeInput).toBeInTheDocument();

    const postCodeInput = screen.getByTestId(
      "user-information-input-test-postCode"
    );
    expect(postCodeInput).toBeInTheDocument();

    const cityInput = screen.getByTestId("user-information-input-test-city");
    expect(cityInput).toBeInTheDocument();

    const addressInput = screen.getByTestId(
      "user-information-input-test-address"
    );
    expect(addressInput).toBeInTheDocument();

    const emailAddressInput = screen.getByTestId(
      "user-information-input-test-emailAddress"
    );
    expect(emailAddressInput).toBeInTheDocument();
  });
});

test("it checks input validation", async () => {
  renderComponent();
  const inputElement = screen.getByTestId(
    "user-information-input-test-firstName"
  );

  fireEvent.change(inputElement, { target: { value: "test item" } });
});

describe("checks error messages", () => {
  test("check if error messages display", () => {
    renderComponent();
    fireEvent.click(screen.getByTestId("nav-button-right"));
    const errorMessages = screen.getAllByTestId("error-message");
    expect(errorMessages).toHaveLength(11);
    errorMessages.forEach((msg) => {
      expect(msg).toBeInTheDocument();
      const errorMsg = msg.textContent || msg.innerText;
      expect(errorMsg).toBe("※必須");
    });
  });
  test("check if error messages have the correct value", () => {
    renderComponent();
    const inputKanaElement = screen.getByTestId(
      "user-information-input-test-fnameKana"
    );
    fireEvent.change(inputKanaElement, { target: { value: "test item" } });
    const errorMessage = screen.getByText("カタカナで入力してください");
    expect(errorMessage.textContent || errorMessage.innerText).toBe(
      "カタカナで入力してください"
    );
  });
});
