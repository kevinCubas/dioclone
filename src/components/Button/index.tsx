import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./style";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string,
  variant?: string,
}

export function Button({title, variant = "primary"}: IButtonProps) {
  return (
    <ButtonContainer variant={variant}>
      {title}
    </ButtonContainer>
  )
}