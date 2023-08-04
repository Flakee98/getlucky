import React, { useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import Select from 'react-select';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
function Sample() {

    const options = [
        { value: 'India', label: 'India' },
        { value: 'America', label: 'America' },
        { value: 'US', label: 'US' },
      ];
      const [phoneNumber, setPhoneNumber] = useState('');

      const handlePhoneNumberChange = (value) => {
        setPhoneNumber(value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the phone number (with country code)
        console.log('Phone Number:', phoneNumber);
      };
  return (
    
    <div>
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <div className="border border-3 border-primary"></div>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-2 text-uppercase ">CREATE AN ACCOUNT</h2>
                <div className="mb-3">
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                      Full Name (As Per Passport/ID)*
                      </Form.Label>
                      <Form.Control type="name" placeholder="Full Name (As Per Passport/ID)" />
                    </Form.Group>

                    {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Mobile No *</Form.Label>
                      <Form.Control type="phon" placeholder="" />
                    </Form.Group> */}
         
         <Form.Group controlId="formGroupPhoneNumber"className="mb-3" >
              <Form.Label>Mobile No *</Form.Label>
              <PhoneInput
                inputStyle={{ width: '100%' }}
                country={'us'}
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </Form.Group>

                    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Email ID *</Form.Label>
                      <Form.Control type="phon" placeholder="Email Id" />
                    </Form.Group>

                   
                    <div class="row">
                    
                    <Form.Group className="mb-3 col" controlId="formBasicPassword">
                      <Form.Label>Building Name *</Form.Label>
                      <Form.Control type="phon" placeholder="Eg: Little Tower" />
                    </Form.Group>
                   
                   
                    <Form.Group controlId="formGroupSearch" className='col mb-3'>
                       <Form.Label>Country *</Form.Label>
                      <Select
                       options={options}
                       isSearchable
                       placeholder="Select Country"
                       />
                    </Form.Group>
                          
                    </div>

                           
                    <div class="row">
                    
                    <Form.Group controlId="formGroupSearch" className='col mb-3'>
                       <Form.Label>State / Emirates *</Form.Label>
                      <Select
                       options={options}
                       isSearchable
                       placeholder="Select State / Emirates "
                       />
                    </Form.Group>
                   
                    <Form.Group controlId="formGroupSearch" className='col mb-3'>
                       <Form.Label>Area / District *</Form.Label>
                      <Select
                       options={options}
                       isSearchable
                       placeholder="Select Area / District "
                       />
                    </Form.Group>
                          
                    </div>

                      
                    <div class="row">
                    
                    <Form.Group className="mb-3 col" controlId="formBasicPassword">
                      <Form.Label>Create Password *</Form.Label>
                      <Form.Control type="password" placeholder="Create Password " />
                    </Form.Group>
                     
                    <Form.Group className="mb-3 col" controlId="formBasicPassword">
                      <Form.Label>Confirm Password *</Form.Label>
                      <Form.Control type="password" placeholder="Confirm Password " />
                    </Form.Group>
            
                          
                    </div>

                    <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="I have read and agree to the terms and conditions."
                // onChange={handleCheckboxChange}
              />
            </Form.Group>

                        


                    <Form.Group
                      className="mb-3"
                      controlId="formBasicCheckbox"
                    >
                      {/* <p className="small">
                        <a className="text-primary" href="#!">
                          Forgot password?
                        </a>
                      </p> */}
                    </Form.Group>
                    <div className="d-grid">
                      <Button variant="primary" type="submit">
                        Sign UP
                      </Button>
                    </div>
                  </Form>
                  <div className="mt-3">
                    <p className="mb-0  text-center">
                    Already have an account ? {" "}
                      <a href="/" className="text-primary fw-bold">
                      Sign in
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
  )
}

export default Sample