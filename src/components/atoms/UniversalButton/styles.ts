import styled from "styled-components"

type TStyledButtonProps = {
    width: number
}


export const StyledButton = styled.button<TStyledButtonProps>`
width: ${props => props.width}px;
 height: 53px; 
 background-color: #D3EAFF; 
 border: none; 
 font-family: Syne, sans-serif;
  font-size: 24px;
  cursor: pointer;
  &:active {
    opacity: 0.8
  }
`