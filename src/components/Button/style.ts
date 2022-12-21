import styled, { css } from "styled-components"

export const ButtonContainer = styled.button<{ variant: string }>` 
  background-color: #565656;
  border-radius: 22px;
  position: relative;
  
  cursor: pointer;
  color: #fff;
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;

  ${({ variant }) => variant !== "primary" && css`
      min-width: 167px;
      height: 33px;

      background-color: #E41050;

      &::after {
        content: "";
        position: absolute;
        border: 1px solid #E41050;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
      }
      
      `}
    &:hover {
      opacity: .6;
    }
`