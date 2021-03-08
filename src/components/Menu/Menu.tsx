import React, {FunctionComponent, ReactNode} from 'react';
import {Dropdown, Navbar, NavDropdown} from "react-bootstrap";
import {Dictionary} from "../../types/commonTypes";
import NavItem from "../NavItem/NavItem";

interface MenuProps {
    menuList: Dictionary[],
}

export const Menu:FunctionComponent<MenuProps> = ({menuList}: MenuProps) => {
    return (
        <Navbar.Collapse id="basic-navbar-nav">
            <NavDropdown title="Menu" id="dropdown-menu">
                {
                    menuList.map((menuItem: Dictionary, idx) => (
                        <NavItem to={menuItem.value ?? "/"} key={idx + menuItem.value}>
                            {menuItem.label}
                        </NavItem>
                    ))
                }
            </NavDropdown>
        </Navbar.Collapse>
    );
}