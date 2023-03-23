import styled from "styled-components";

interface IStyledDiv {
    offset: number
}
export const StyledWrapper = styled.div`
position: relative;
 width: 1180px;
 overflow: hidden;
`

export const StyledDiv = styled.div<IStyledDiv>`
display: grid;
grid-template-columns: 380px 380px 380px 380px 380px 380px;
gap: 20px;
width: 100%;
right: 400px;
justify-content: space-between;
transform: translateX(${props => props.offset}px);
transition: translate;
transition-property: transform;
transition-duration: 300ms;
`