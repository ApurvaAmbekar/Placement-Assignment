import React,{useState} from 'react';
import {NavbarToggler,Collapse,Nav,NavItem,NavLink,NavbarBrand} from 'reactstrap'
import './Navbar.css'
const Navbar = () => {
    // toggler for navbar
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-md navbar-light">
            <div className="container">
                <NavbarBrand className="navbar-brand">TODO (React & Django)</NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(!isOpen)}></NavbarToggler>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="text-center">
                            <NavLink>DarkMode</NavLink>
                        </NavItem>
                        <NavItem className="text-center">
                            <NavLink>SplitMode</NavLink>
                        </NavItem>
                        <NavItem className="text-center">
                            <NavLink>calender</NavLink>
                        </NavItem>
                        <NavItem className="text-center">
                            <NavLink>logout</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
            
        </nav>
    );
};

export default Navbar;