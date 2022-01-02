import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Row, Col, Spinner, Alert } from "react-bootstrap"
//import PropTypes from "prop-types"

import { openNewTicket } from './addTicketAction';
import { shortText } from '../../utils/validation';
import { restSuccessMSg } from './addTicketSlicer';

import './add-ticket-form.style.css';

//jumbotron
const initialFrmDt = {
  subject: '',
  issueDate: '',
  message: '',
};
const initialFrmError = {
  subject: false,
  issueDate: false,
  message: false,
};

const AddTicketForm = () => {
   const dispatch = useDispatch();

   const {
     user: { name },
   } = useSelector((state) => state.user);

   const { isLoading, error, successMsg } = useSelector(
     (state) => state.openTicket
   );

   const [frmData, setFrmData] = useState(initialFrmDt);
   const [frmDataError, setFrmDataError] = useState(initialFrmError);

   useEffect(() => {
     return () => {
       successMsg && dispatch(restSuccessMSg());
     };
   }, [dispatch, frmData, frmDataError]);

   const handleOnChange = (e) => {
     const { name, value } = e.target;

     setFrmData({
       ...frmData,
       [name]: value,
     });
   };

   const handleOnSubmit = async (e) => {
     e.preventDefault();

     setFrmDataError(initialFrmError);

     const isSubjectValid = await shortText(frmData.subject);

     setFrmDataError({
       ...initialFrmError,
       subject: !isSubjectValid,
     });

     dispatch(openNewTicket({ ...frmData, sender: name }));
   };

  return (
    <div className='jumbotron add__new__ticket bg-light'>
      <h1 className='text-info text-center'>Add New Ticket</h1>
      <hr />
      <div>
        {error && <Alert variant='danger'>{error}</Alert>}
        {successMsg && <Alert variant='primary'>{successMsg}</Alert>}
        {isLoading && <Spinner variant='primary' animation='border' />}
      </div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name='subject'
              value={frmData.subject}
              //minLength={3}
              onChange={handleOnChange}
              placeholder='Subject'
              required
            />
            <Form.Text className='text-danger'>
              {frmDataError.subject && 'Subject is required'}
            </Form.Text>
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
              value={frmData.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Details</Form.Label>
          <Form.Control
            as='textarea'
            name='message'
            value={frmData.message}
            rows='5'
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Button type='submit' variant='info' className='mt-2 w-100'>
          Open Ticket
        </Button>
      </Form>
    </div>
  );
};

export default AddTicketForm

// AddTicketForm.protoTypes = {
//   handleOnChange: PropTypes.func.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   formData: PropTypes.object.isRequired,
//   formDataError: PropTypes.object.isRequired,
// };