import React from "react"
import { Controller } from "react-hook-form";
import { IconContainer, InputContainer, InputText } from "./style";

export function Input (props) {

  return (
    <InputContainer>
      {props.leftIcon ? <IconContainer>{props.leftIcon }</IconContainer> : null}
      <Controller
        name={props.name}
        control={props.control}
        rules={{required: true}}
        render={({field} ) => <InputText {...field} {...props} />}
      />
    </InputContainer>    
  )
};