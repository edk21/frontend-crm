import React,{useState} from 'react'
import { Container, Row, Col, Button } from "react-bootstrap"
import BreadCrumb from '../../components/breadcrumb/BreadCrumb.comp'
import tickets from '../../assets/data/dummy-tickets.json';
import MessageHistory from '../../components/message-history/MessageHistory.comp';
import UpdateTicket from '../../components/updateTicket/UpdateTicket.comp';
import { useEffect } from 'react';
import { useParams } from "react-router-dom"


//const ticket = tickets[0]

const Ticket = () => {
  const {tId} = useParams()
    const [message, setMessage] = useState("")
    const [ticket, setTicket] = useState("")

    const handleOnChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Form Submitted!!")
    }

    useEffect(() => {
      for(let i = 0; i < tickets.length; i++){
        if(tickets[i].id == tId){
          setTicket(tickets[i])
          continue
        }
      }
    },[message, tId])
    return (
      <Container>
        <Row>
          <Col>
            <BreadCrumb page='Ticket' />
          </Col>
        </Row>
        <Row>
          <Col className='text-weight-bolder text-secondary'>
            {tId}
            <div className='subject'>subject: {ticket.subject}</div>
            <div className='date'>my date: {ticket.addedAt}</div>
            <div className='status'>status: {ticket.status}</div>
          </Col>
          <Col className='text-right'>
            <Button variant='outline-info'>Close Ticket</Button>
          </Col>
        </Row>
        <Row className='mt-4'>
          <Col>{ticket.history && <MessageHistory msg={ticket.history} />}</Col>
        </Row>
        <hr />
        <Row className='mt-4'>
          <Col>
            <UpdateTicket
              msg={message}
              handleOnChange={handleOnChange}
              handleSubmit={handleSubmit}
            />
          </Col>
        </Row>
      </Container>
    );
}

export default Ticket
