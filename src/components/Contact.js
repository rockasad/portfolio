import { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"

export const Contact =()=>{
    const formInitialDetails={
        firstName: '',
        lastName:'',
        email:'',
        phone:'',
        message:''
    }
    const[formDetails, setFormDetails] = useState(formInitialDetails);
    const[buttonText, setButtonText] = useState('send');
    const[status, setStatus] = useState({});

    const onFromUpdate =(category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code == 200) {
          setStatus({ success: true, message: 'Message sent successfully'});
        } else {
          setStatus({ success: false, message: 'Something went wrong, please try again later.'});
        }
      }

    return(
        <section className ="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col nd={6}>
                        <img src={contactImg} alt="Contact Us"></img>
                        <h2>Get In Touch</h2>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFromUpdate('fristName', e.target.value)} />
                                 </Col>
                                 <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFromUpdate('lastName', e.target.value)} />
                                 </Col>
                                 <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.emale} placeholder="Email Address" onChange={(e) => onFromUpdate('email', e.target.value)} />
                                 </Col>
                                 <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFromUpdate('phone', e.target.value)} />
                                 </Col>
                                 <Col>
                                    <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFromUpdate('message', e.target.value)} />
                                    <button type="submit" ><span>{buttonText}</span></button>
                                 </Col>
                                 {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger": "success"}>{status.message}</p>
                                    </Col>
                                 }
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
         
       
}
    