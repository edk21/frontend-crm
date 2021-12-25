import React from 'react'
import { Navbar, Nav } from "react-bootstrap"
import image from "../../assets/images/africa.jpeg"

const Header = () => {
    return (
        <Navbar
            collapseOnSelect
            bg="info"
            variant="dark"
            expand="md"
        >
            <Navbar.Brand>
                <img src={image} alt="logo" width={50} className='mx-3' />
            </Navbar.Brand>
            <Navbar.Toggle
                aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='ms-auto px-3'>
                    <Nav.Link href="/dashboard" className='text-white'>Dashboard</Nav.Link>
                    <Nav.Link href="/dashboard" className='text-white'>Tickets</Nav.Link>
                    <Nav.Link href="/dashboard" className='text-white'>Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
