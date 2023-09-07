import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import axios from 'axios'
function Signin() {
  const [clickEmail, setClickEmail] = useState(false);
  const [clickMobile, setClickMobile] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");

  const [email, setEmail] =useState('')
  const [password, setPassword] =useState('')



  const EmailClick = () => {
    setClickEmail(true);
    setClickMobile(false);
  };

  const MobilelClick = () => {
    setClickMobile(true);
    setClickEmail(false);
  };
  
  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the phone number (with country code)
    console.log("Phone Number:", phoneNumber);
  };

  const loginSubmit =async()=>{
    const  headers = {
        'x-api-key': 'eMnJUkNEvNBjDLvsJpmwL4fRFUX26jPH4VQw62zLckrB5GaBgsdrWajQEYCcHMRjychja349ZjEvL8Pex665ud5EBWuhN8aSTTS6Anp8af6DJ64pPJwJbRMsjGUZMHYb',
      }
      const requestData = {
        email: email,
        password: password,
      };
    try {
            
        const response = await axios.post('http://3.28.74.200/api/v1/web/auth/login',requestData, {headers}
  
        ).then(response => {
          console.log('Login successful:', response.data);
          // Handle successful login
        })
        
        
    } catch (error) {
      console.error('Registration failed:', error);
    }
   }


  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow" style={{ backgroundColor: "#102042" }}>
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 mb-5 text-white  text-center">
                    Sign in
                  </h2>
                  <div className="mb-3">
                    <Form className="text-white">
                      <div class="row mx-1">
                        <Button
                          variant={
                            "primary " +
                            (clickEmail === true ? "bg-light text-dark" : "")
                          }
                          className="mb-3 col"
                          onClick={EmailClick}
                        >
                          Email
                        </Button>{" "}
                        <Button
                          variant={
                            "primary   " +
                            (clickMobile === true ? "bg-light text-dark" : "" ) 
                           
                          }
                          className="mb-3 col"
                          onClick={MobilelClick}
                        >
                          Mobile
                        </Button>{" "}
                      </div>
                      {clickEmail && (
                        <>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                          >
                            <Form.Label>Email ID *</Form.Label>
                            <Form.Control type="email" placeholder="Email Id"  onChange={((e)=> setEmail(e.target.value))}/>
                          </Form.Group>
                        </>
                      )}
                      {clickMobile && (
                        <>
                          <Form.Group
                            controlId="formGroupPhoneNumber"
                            className="mb-3"
                          >
                            <Form.Label>Mobile No *</Form.Label>
                            <PhoneInput
                              inputStyle={{ width: "100%" }}
                              country={"ae"}
                              value={phoneNumber}
                            />
                          </Form.Group>
                        </>
                      )}
                      <Form.Group
                        className="mb-3 "
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password *</Form.Label>
                        <Form.Control type="password" placeholder="Password " onChange={((e)=> setPassword(e.target.value))} />
                      </Form.Group>

                      <div className="row">
                        <Form.Group
                          className="mb-3 col"
                          controlId="formBasicCheckbox"
                        >
                          <p className="small">
                            <a className="text-primary" href="#!">
                              Forgot password?
                            </a>
                          </p>
                        </Form.Group>
                        {/* 
                    <Form.Group
                      className="mb-3 col"
                      controlId="formBasicCheckbox"
                    >
                      <p className="small">
                        <a className="text-primary" href="#!">
                        Signin with OTP?
                        </a>
                      </p>
                    </Form.Group> */}
                      </div>

                      <div className="d-grid">
                        <Button variant="primary"  onClick={loginSubmit}>
                          Sign In
                        </Button>
                      </div>
                    </Form>

                    <div className="mt-3">
                      <p className="mb-0  text-center text-white">
                        Don't have an account ?{" "}
                        <a href="/signup" className="text-primary fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signin;
