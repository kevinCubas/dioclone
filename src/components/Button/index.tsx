import { ButtonContainer } from "./style";

interface IButtonProps {
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