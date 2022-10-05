import { LinkStyled } from "./AppBar.styled";
import { HeaderBar } from "./AppBar.styled"
import { NavStyled } from "./AppBar.styled";

const navItems = [
  { href: 'dashboard', text: 'Dashboard'},
  { href: 'sales', text: 'Sales'},
  { href: 'reports', text: 'Reports'},
  { href: 'feedback', text: 'Feedback'},
  { href: 'customers', text: 'Customers'},
];

 export default function AppBar() {
    return (
        <HeaderBar>
            <NavStyled>
                    {navItems.map(({ href, text }) => {
                        
                    return <LinkStyled to={href} key={href}>{text}</LinkStyled>
              })}
          </NavStyled>
        </HeaderBar>
    );
};


