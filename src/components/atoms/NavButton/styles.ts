import styled from "styled-components"

interface TStyledSpanProps {
    active: boolean
}

export const StyledP = styled.p`
    font-size: 16px; 
    color: white;
    background-color: none; 
    font-family: Lato, sans-serif; 
    font-weight: 400; 
    color: white;
    `
export const StyledSpan = styled.span<TStyledSpanProps>`
    position: absolute;
    background-color: white;
    margin-top: 6px;
    width: 100%;
    height: 1px;
    visibility: visible;
    right: ${props => props.active ? '0' : '100%'};
    transition: all 0.1s ease-in 0s;
    `
export const StyledDiv = styled.div`
position: relative;
 display: inline-block;
 cursor: pointer; 
 overflow: hidden;
 height: 30px;
 margin-top: 10px;

 &:hover ${StyledSpan} {
        right: 0;
      }
`

export const SpanWrapper = styled.div`
width: 100%;
 position: relative`
