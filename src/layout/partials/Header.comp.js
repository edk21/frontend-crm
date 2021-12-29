import React from 'react'
import { Navbar, Nav } from "react-bootstrap"
import image from "../../assets/images/africa.jpeg"
import { useHistory } from "react-router-dom"
import {LinkContainer} from "react-router-bootstrap"

const Header = () => {
    const history = useHistory()

    const loginOut = () => {
        history.push("/")    }

    return (
      <Navbar collapseOnSelect bg='info' variant='dark' expand='md'>
        <Navbar.Brand>
          <img src={image} alt='logo' width={50} className='mx-3' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto px-3'>
            {/* <Link to="/dashboard" className='text-white'>Dashboard</Link>
                    <Link to="/tickets" className='text-white mx-2'>Tickets</Link>
                    <Link to="" className='text-white'>Logout</Link> */}
            <LinkContainer to='/dashboard'>
              <Nav.Link className='text-white'>Dashboard</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/tickets'>
              <Nav.Link className='text-white'>
                Tickets
              </Nav.Link>
            </LinkContainer>
              <Nav.Link onClick={loginOut} className='text-white'>
                Logout
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Header
