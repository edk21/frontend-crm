import React from 'react'
import {Col, Form, Row} from "react-bootstrap"
import { useDispatch } from 'react-redux';
import { filterSerachTicket } from '../../pages/ticket-list/ticketsAction';
import PropTypes from "prop-types"

const SearchForm = () => {
    const dispatch = useDispatch();

    const handleOnChange = (e) => {
      const { value } = e.target;

      dispatch(filterSerachTicket(value));
    };
    return (
      <div>
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm='3'>
              Search:
            </Form.Label>
            <Col sm='9'>
              <Form.Control
                name='searchStr'
                onChange={handleOnChange}
                placeholder='Search...'
              />
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
}

export default SearchForm

SearchForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    str: PropTypes.string.isRequired,
}