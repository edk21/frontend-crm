import React from 'react'
import { Navbar, Nav } from "react-bootstrap"
import image from "../../assets/images/africa.jpeg"
import { useHistory } from "react-router-dom"
import {LinkContainer} from "react-router-bootstrap"

import { userLogout } from '../../api/userApi';

const Header = () => {
    const history = useHistory();

    const logMeOut = () => {
      sessionStorage.removeItem('accessJWT');
      localStorage.removeItem('crmSite');
      userLogout();
      history.push('/');
    };

    return (
      <Navbar collapseOnSelect bg='info' variant='dark' expand='md'>
        <Navbar.Brand>
          <img src={image} alt='logo' width={50} className='mx-3' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto px-3'>
            <LinkContainer to='/dashboard'>
              <Nav.Link className='text-white'>Dashboard</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/tickets'>
              <Nav.Link className='text-white'>
                Tickets
              </Nav.Link>
            </LinkContainer>
              <Nav.Link onClick={logMeOut} className='text-white'>
                Logout
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Header
