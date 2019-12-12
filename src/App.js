import React, {useState} from "react";
import "./App.css";
import Picture from "./components/Picture";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

function App() {

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="App">
      <div>  
          <Navbar color="faded" light style={{fontFamily:'Montserrat', backgroundColor:'#8bbabb'}}>
            <NavbarBrand href="/" className="mr-auto">NASA</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="https://www.nasa.gov/">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">Contact</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        <Picture />
      </div>
    </div> 
  );
}

export default App;



{/* <Navbar color="faded" light>
  <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
  <NavbarToggler onClick={toggleNavbar} className="mr-2" />
  <Collapse isOpen={!collapsed} navbar>
    <Nav navbar>
      <NavItem>
        <NavLink href="/components/">Components</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
      </NavItem>
    </Nav>
  </Collapse>
</Navbar> */}


{/* <Navbar style={{ fontFamily:'Montserrat', }}>
          <NavbarBrand href="/" className="mr-auto" style={{color:'#464159'}}><h1>NASA</h1> Image of the Day</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
          <Nav navbar />
            <NavItem style={{listStyleType:'none'}}>
              <NavLink href="https://www.nasa.gov/" target="_blank" style={{textDecoration: 'none'}}>About</NavLink>
            </NavItem>
            <NavItem style={{listStyleType:'none'}}>
              <NavLink href="https://github.com/reactstrap/reactstrap" style={{textDecoration: 'none'}}>Contact</NavLink>
            </NavItem>
          </Collapse>
        </Navbar> */}