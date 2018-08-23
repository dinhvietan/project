import React, { Component } from 'react';
import {Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap'
import './Style/Header.css'

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            logged: false,
            userinfo: {
                email: "",
                name: ""
            }
        };

        let session = this.getSession();
        if(session !== null) {
            this.state.userinfo.email = session.email;
            this.state.userinfo.name = session.name;
            this.state.logged = true;
        }
    }

    componentDidMount() {
        if(this.state.logged === false) {
            if(window.location.pathname !== "/login") {
                window.location.href = "/login";
            }
        }
    }

    getSession() {
        let session = window.localStorage.getItem("session");
        if(session != null) {
            return JSON.parse(session);
        }
        return null;
    }

    buildMenus() {
        let menus = [];
        menus.push((
            <Nav key={1}>
                <NavDropdown eventKey={2} title="Management" id="nav-account">
                    <MenuItem href="/account" eventKey={2.1}> User  </MenuItem>
                </NavDropdown>
                <NavItem eventKey={2} href="/product">
                    Product
                </NavItem>  
                <NavItem eventKey={2} href="/help">
                    Helps
                </NavItem>  
            </Nav>
        ));
        menus.push((
            <Nav pullRight key={2}>
                <NavDropdown eventKey={3} title={this.state.userinfo.name} id="nav-profile">
                    <MenuItem onClick={this.onLogout.bind(this)} eventKey={3.1}>Logout</MenuItem>
                    <MenuItem eventKey={3.2} href="/profile">Profile</MenuItem>
                </NavDropdown>
            </Nav>
        ));
        return menus;
    }

    onLogout(event) {
        window.localStorage.removeItem("session");
        window.location.href = "/login";
        event.preventDefault();
    }

    render() {
        let menus = [];
        let headerTemplate = [];
        if(this.state.logged === true && window.location.pathname !== "/login") {
            menus = this.buildMenus();
            headerTemplate.push((
                <Navbar key={1} fluid={true} >
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">
                                <img className="app-logo" src="images/logo.png" />
                            </a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    { menus }
                </Navbar>
            ));
        }
        return (
            <div>
                { headerTemplate }
            </div>
        );
    }
}

export default Header;