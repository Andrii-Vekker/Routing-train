import AppBar from "components/AppBar/AppBar"
import { Outlet } from "react-router-dom"
import { LayoutStyled } from "./Layout.styled"





export default function Layout() {
    return (
      
      <LayoutStyled>
          <AppBar />
          <Outlet/>
      </LayoutStyled>
      
  )
}
