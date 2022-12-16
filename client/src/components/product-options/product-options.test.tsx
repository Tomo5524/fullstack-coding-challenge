import { render, screen, fireEvent } from "@testing-library/react";
import ProductOptions from "./product-options";

test("it renders expected initial DOM", () => {
  const onClickCallback = jest.fn();

  render(
    <ProductOptions
      handleNextStage={onClickCallback}
      selectedProduct="test"
      setSelectedProduct={onClickCallback}
    />
  );

  const errorMessage = screen.getByTestId("error-message");
  // should be null since this element is hidden now
  expect(errorMessage.getAttribute("value")).toBe(null);
});

test("it clicks product", async () => {
  const onClickCallback = jest.fn();
  render(
    <ProductOptions
      handleNextStage={onClickCallback}
      selectedProduct="test"
      setSelectedProduct={onClickCallback}
    />
  );
  const createButtonElement = screen.getByTestId("nav-button-right");
  fireEvent.click(createButtonElement);

  expect(onClickCallback).toHaveBeenCalledTimes(1);
});
