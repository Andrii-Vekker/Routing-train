import { getInvoices } from "components/FakeApi/FakeApi";
import { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"



export default function Invoices() {

    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
      getInvoices().then(setInvoices)
    }, [])
    

  return (
    <div style={{display:"flex"}}>
      <aside style={{display:"flex",flexDirection:"column", borderRight:"1px solid black"}}>
        {invoices.map(({ id }) => (
          <NavLink key={id} to={`${id}`} style={{marginRight:"100px"}}>
            {id}
          </NavLink>
        ))}
      </aside>
      <Outlet />
    </div>
  )
}
