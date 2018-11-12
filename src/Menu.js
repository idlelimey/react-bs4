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
            isOpen      : false,
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
                
                <Navbar expand="md" className={'navbar-' + this.props.currentTheme}>
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
                        <Nav className="ml-md-auto">
                            <NavItem>
                                <span className="theme-switch" onClick={this.props.doThemeSwitch} data-theme={this.props.currentTheme === 'light' ? 'dark' : 'light'}>&#9680;</span>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>            
            </Container>
        );
    }
}
  
export default Menu;