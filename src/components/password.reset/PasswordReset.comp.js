import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';


const PasswordReset = ({
  handleOnChange,
  email,
  handleOnResetSubmit,
  formSwitcher,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-info text-center'>Reset Password</h1>
          <hr />
          <Form onSubmit={handleOnResetSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                value={email}
                onChange={handleOnChange}
                placeholder='Enter Email'
                required
              />
            </Form.Group>
            <Button type='submit' className='mt-3'>
              Reset Password
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href='#!' onClick={() => formSwitcher('login')}>
            Login Now?
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default PasswordReset

PasswordReset.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
};