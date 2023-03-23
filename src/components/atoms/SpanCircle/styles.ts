import styled from "styled-components"

interface IStyledSpan {
    active: boolean
}

export const StyledSpan = styled.span<IStyledSpan>`
position: absolute;
display: block;
visibility: ${props => props.active ? 'visible' : 'hidden'};
width: 12px;
height: 12px;
border-radius: 16px;
background-color: white;
top: 23%;
left: 22%;
`