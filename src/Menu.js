import React, { Component } from 'react';
import { 
    //Link,
    NavLink as RRNavLink 
} from 'react-router-dom';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Container className="no-padding">
                
                <Navbar light expand="md">
                    <NavbarBrand>Hello</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink tag={RRNavLink} activeClassName="active" exact to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} activeClassName="active" to="/contact">Form</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} activeClassName="active" to="/cards">Cards</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>            
            </Container>
        );
    }
}
  
export default Menu;