import React, { ButtonHTMLAttributes } from "react";
import { CardContainer, ProductImage, ProductText } from "./style";

interface CardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick: (text: string) => void;
  text: string;
  href?: string;
  imgPath: string;
  productId: string;
  isActive: boolean;
  idx: number;
}

function Card({ text, imgPath, handleClick, isActive, idx }: CardProps) {
  return (
    <CardContainer
      onClick={() => handleClick(text)}
      isActive={isActive}
      type="button"
      data-testid={`product-button-${idx}`}
    >
      <ProductImage src={imgPath} alt={text} />
      <ProductText>{text}</ProductText>
    </CardContainer>
  );
}

export default Card;
