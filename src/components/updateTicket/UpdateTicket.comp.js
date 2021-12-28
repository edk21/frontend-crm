import React from 'react'
import { Form, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const UpdateTicket = ({ msg, handleOnChange, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>Reply</Form.Label>
      <hr />
      <Form.Text>
        Please reply your message here or update your ticket.
      </Form.Text>
      <Form.Control
        as='textarea'
        row='5'
        name='detail'
        onChange={handleOnChange}
      />
      <div className='text-right mt-3 mb-3'>
        <Button variant='info' type='submit'>
          Reply
        </Button>
      </div>
    </Form>
  );
};

export default UpdateTicket
UpdateTicket.propTypes = {
  msg: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};