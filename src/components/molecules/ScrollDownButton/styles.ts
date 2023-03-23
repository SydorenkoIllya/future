import styled from "styled-components";

export const StyledWrapper = styled.div`
display: flex; 
align-items: center; 
justify-content: space-between;
position: absolute; 
left: 50%; 
transform: translateX(-50%); 
top: 90%; 
height: 40px; 
gap: 8px; 
cursor: pointer;`

export const StyledHeader = styled.div`
font-family: Lato, sans-serif; 
font-weight: 400; 
font-size: 34px; 
color: white; 
-webkit-text-stroke: 1px black;`

export const StyledImg = styled.img`
width: 40px;
 height: 40px;
 object-fit: contain;`