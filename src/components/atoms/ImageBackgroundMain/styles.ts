import styled from "styled-components";

export const Wrapper = styled.div`
position: absolute;
 left: 50%; 
 transform: translateX(-50%); 
 top: 21%;
 font-family: Syne, sans-serif;
 user-select: none;`
export const CirclesWrapper = styled.div`
 position: absolute;
 left: 46%;
 transform: translateX(-50%);
 top: 54%;
`
export const StyledSpan = styled.span`
color: white; 
display: block; 
font-family: Syne, sans-serif; 
font-weight: 800; 
font-size: 310px; 
text-align: center; 
width: 1200px`
export const StyledMainText = styled.span`
 color: white;
 display: block; 
 margin: 0 auto; 
 font-size: 48px; 
 font-weight: 800; 
 width: 1200px; 
 max-width: 1280px; 
 text-align: center;
`

export const StyledImg = styled.img`
 height: 100vh;
 min-height: 740px;
 width: 100vw;
 object-fit: cover;`

export const StyledButton = styled.button`
position: relative;
border: 1px solid white;
border-radius: 16px;
width: 24px;
height: 24px;
background-color: #11ffee00;
margin: 0 4px;
`