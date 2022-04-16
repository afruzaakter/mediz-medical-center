import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../images/icon-logo/logo-1.png';

const Header = () => {
    return (
        <div >
            <Navbar  collapseOnSelect expand="lg" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand href="#home">

                        <img className='w-50' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className='header'>
                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "header")} to="/Home">HOME</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "header")} to="/reviews">REVIEWS</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "header")} to="/dashboard">DASHBOARD</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "header")} to="/blogs">BLOGS</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "header")} to="/about">ABOUT</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "header")} to="/login">LOGIN</NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;