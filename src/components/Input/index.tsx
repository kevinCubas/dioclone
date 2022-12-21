import { IconContainer, InputContainer, InputText } from "./style";

export function Input (props) {

  return (
    <InputContainer>
      {props.leftIcon ? <IconContainer>{props.leftIcon }</IconContainer> : null}
      <InputText {...props}/>
    </InputContainer>    
  )
};