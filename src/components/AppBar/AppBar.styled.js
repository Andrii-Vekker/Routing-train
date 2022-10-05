import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const HeaderBar = styled.header`
padding: 4px;
/* height: 100vh; */
border-right: 1px solid black

`

export const NavStyled = styled.nav`
display:flex; 
flex-direction: column
`
export const LinkStyled = styled(NavLink)`
display: flex;
  align-items: center;
  gap: 3px;
  padding: 3px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  &.active {
    background-color: red;
    color: white;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: skyblue;
  }

`



