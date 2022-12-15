import React, { ButtonHTMLAttributes } from "react";
// import { AutoIcon, HomeIcon, LifeIcon, MotorCycleIcon } from "../button-icons";
import { CardContainer, ProductImage, ProductText } from "./style";
// import { getLinkClassNames } from "./classNameHelper";
// import { PlayVideo } from "./playVideoButton";

interface CardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick: (text: string) => void;
  text: string;
  href?: string;
  imgPath: string;
  productId: string;
  isActive: boolean;
  // className: string;
  // tabIndex?: number;
  // theme: LinkTheme;
}

function Card({ text, imgPath, handleClick, isActive }: CardProps) {
  return (
    <CardContainer
      onClick={() => handleClick(text)}
      isActive={isActive}
      type="button"
    >
      {/* {getButtonLogo()} */}
      <ProductImage src={imgPath} alt={text} />
      {/* {text} */}
      <ProductText>{text}</ProductText>
    </CardContainer>
  );
}

export default Card;
