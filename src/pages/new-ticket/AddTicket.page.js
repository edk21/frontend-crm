import React,{useState, useEffect} from 'react'
import { Container, Row, Col } from "react-bootstrap"
import AddTicketForm from '../../components/add-ticket-form/AddTicketForm.comp'
import BreadCrumb from '../../components/breadcrumb/BreadCrumb.comp'
import { shortText } from "../../utils/validation"

const initialState = {
    subject: "",
    issueDate: "",
    detail: "",
}
const initialError = {
    subject: false,
    issueDate: false,
    detail: false,
}

const AddTicket = () => {

    const [formData, setFormData] = useState(initialState)

    const [formDataError, setFormDataError] = useState(initialError);

    useEffect(() => {}, [formData, formDataError]);

    const handleOnChange = (e) => {
      const { name, value } = e.target;

      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormDataError(setFormDataError);
        const isSubjectValid = await shortText(formData.subject)

        setFormDataError({
            ...initialError,
            subject: !isSubjectValid,
        })

        console.log("Form submit request received", formData)
    }

    return (
      <Container>
        <Row>
          <Col>
            <BreadCrumb page='New Ticket' />
          </Col>
        </Row>
        <Row>
          <Col>
            <AddTicketForm
              handleOnChange={handleOnChange}
              handleSubmit={handleSubmit}
              formData={formData}
              formDataError={formDataError}
            />
          </Col>
        </Row>
      </Container>
    );
}

export default AddTicket
