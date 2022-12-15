import React, { ButtonHTMLAttributes } from "react";
import { CTAButtonStyle } from "./style";

type CTAButtonTextVariant = "submit" | "会計";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: CTAButtonTextVariant;
  onClick?: () => void;
}

function CTAButton({ text, onClick }: CTAButtonProps) {
  return <CTAButtonStyle onClick={onClick}>{text}</CTAButtonStyle>;
}

export default CTAButton;
