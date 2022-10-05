import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { href: 'analytics', text: 'Analytics' },
  { href: 'invoices', text: 'Invoices' },
  { href: 'deposits', text: 'Deposits' },
];



export const Sales = () => {
  return (
    <main style={{borderBottom:"1px solid black", height:"50px"}} >
      <header>
        <ul >
          {navItems.map(({ href, text }) => (
            <NavLink key={href} to={href} style={{marginRight:"10px"}}>
              {text}
            </NavLink>
          ))}
        </ul>
          </header>
          <Outlet/>
    </main>
  );
};