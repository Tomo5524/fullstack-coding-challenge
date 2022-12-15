import { ButtonHTMLAttributes } from "react";
import { Button } from "./style";

type ButtonTextType = "left" | "right";

interface NavButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick: () => void;
  variant: ButtonTextType;
}

const getButtonLogoArrow = (variant: string) => {
  switch (variant) {
    case "left":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.3l105.3-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path>
        </svg>
      );
    case "right":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
        </svg>
      );
    default:
      return null;
  }
};

function NavButton({ variant, handleClick }: NavButtonProps) {
  return (
    <Button onClick={handleClick} type="button">
      {getButtonLogoArrow(variant)}
    </Button>
  );
}

export default NavButton;
