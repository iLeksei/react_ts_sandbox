import React, {ReactNode} from 'react';
// @ts-ignore
import { Breadcrumb, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

interface BreadcrumbItemProps {
    to: string,
    children: ReactNode,
    props?: {},
}

const NavItem = ({to, children, ...props}:BreadcrumbItemProps) => {
    return (
        <LinkContainer to={to || "/main"}>
            <Breadcrumb.Item href={to} {...props}>
                    {<span>{children}</span>}
            </Breadcrumb.Item>
        </LinkContainer>
    )
};

export default NavItem;