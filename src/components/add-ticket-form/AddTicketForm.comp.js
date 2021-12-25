import React from 'react'
import { Form, Button, Row, Col } from "react-bootstrap"
import PropTypes from "prop-types"

const AddTicketForm = ({
  handleSubmit,
  handleOnChange,
  formData,
  formDataError,
}) => {
  console.log(formData);
  return (
    <div className='jumbotron add__new__ticket bg-light'>
      <h1 className='text-info text-center'>Add New Ticket</h1>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name='subject'
              value={formData.subject}
              //minLength={3}
              onChange={handleOnChange}
              placeholder='Subject'
              required
            />
            <Form.Text className='text-danger'>{formDataError.subject && "Subject is required"}</Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type='date'
              name='issueDate'
              value={formData.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Details</Form.Label>
          <Form.Control
            as='textarea'
            name='detail'
            value={formData.detail}
            rows='5'
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Button type='submit' variant='info' className='mt-2 w-100'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddTicketForm

AddTicketForm.protoTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  formDataError: PropTypes.object.isRequired,
};