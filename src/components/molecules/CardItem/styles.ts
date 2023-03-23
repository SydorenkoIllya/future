import styled from "styled-components"

export const StyledDivWrapper = styled.div`
display: flex; 
flex-direction: column; 
border: 1px solid #D3EAFF; 
width: 380px; 
height: 572px; 
justify-content: space-between;
`

export const StyledImg = styled.img`
height: 296px;
 background-color: black;
  object-fit: cover;
`

export const StyledCardDiv = styled.div`
padding: 0 1rem 1rem; 
display: flex; 
flex-direction: column; 
justify-content: space-between; 
height: 250px;
`

export const StyledName = styled.p`
text-align: center; 
font-family: Syne, sans-serif; 
font-weight: 700; 
font-size: 22px;
`

export const StyledDescription = styled.span`
font-family: Lato, sans-serif; 
font-weight: 300;
font-size: 22px;
text-align: center; 
color: #556B84; 
overflow: hidden; 
text-overflow: ellipsis;
-webkit-line-clamp: 4; 
-webkit-box-orient: vertical; 
display: -webkit-box;
`

export const StyledButton = styled.button`
width: 80%;
 height: 53px;
 background-color: #D3EAFF;
 border: none;
 max-width: 100%;
`