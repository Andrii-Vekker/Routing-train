import AppBar from "components/AppBar/AppBar"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { LayoutStyled } from "./Layout.styled"





export default function Layout() {
    return (
      
      <LayoutStyled>
          <AppBar />
        <Suspense fallback={null}>
          <Outlet/>
          </Suspense>
      </LayoutStyled>
      
  )
}
