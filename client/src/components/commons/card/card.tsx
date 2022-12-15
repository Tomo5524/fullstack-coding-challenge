import React, { ButtonHTMLAttributes } from "react";
import { CardContainer, ProductImage, ProductText } from "./style";

interface CardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick: (text: string) => void;
  text: string;
  href?: string;
  imgPath: string;
  productId: string;
  isActive: boolean;
}

function Card({ text, imgPath, handleClick, isActive }: CardProps) {
  return (
    <CardContainer
      onClick={() => handleClick(text)}
      isActive={isActive}
      type="button"
    >
      <ProductImage src={imgPath} alt={text} />
      <ProductText>{text}</ProductText>
    </CardContainer>
  );
}

export default Card;
