import React, { useEffect, useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import Select from 'react-select';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import axios from "axios"
function Sample() {

    const options = [
        { value: 'United Arab Emirates', label: 'United Arab Emirates' },
        { value: 'India', label: 'India' },
        { value: 'Philippines', label: 'Philippines' },
        { value: 'Qatar', label: 'Qatar' },
        { value: 'Saudi Arabia', label: 'Saudi Arabia' },
        { value: 'Oman', label: 'Oman' },

      ];
      const [phoneNumber, setPhoneNumber] = useState('');
      const [country, setCountry] = useState('');


      const handlePhoneNumberChange = (value) => {
        setPhoneNumber(value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the phone number (with country code)
        console.log('Phone Number:', phoneNumber);
      };
      useEffect(() => {
        axios.get('https://www.universal-tutorial.com/api/getaccesstoken', {
          headers: {
            'api-token': "PTV48JS8DMTrAjZhu88hRfaa1T30QGsklvMtiTKYDljBBGjWeHBcZa48VE4gTOmxD4I",
            'user-email': "sreejithrs001@gmail.com",
            // 'Authorization': `Bearer ${apiKey}`
          }
        })
          .then(response => {
            // Handle the response data
            // console.log(response.data);
          })
          .catch(error => {
            // Handle errors
            console.error('Error:', error);
          });
      }, [])

      const handlesChange =(country)=>{
        setCountry(country)
        console.log(country.value);
      }
      
      // state get api 
      useEffect(() => {
        axios.get('https://www.universal-tutorial.com/api/states/India', {
          headers: {
            'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJzcmVlaml0aHJzMDAxQGdtYWlsLmNvbSIsImFwaV90b2tlbiI6IlBUVjQ4SlM4RE1UckFqWmh1ODhoUmZhYTFUMzBRR3NrbHZNdGlUS1lEbGpCQkdqV2VIQmNaYTQ4VkU0Z1RPbXhENEkifSwiZXhwIjoxNjkxMzE1MzE4fQ.WZDUtKYt8eC9Tit3Ba1yF8Fv2EtF535KwsgrgsCHN4M",
            // 'Authorization': `Bearer ${apiKey}`
          }
        })
          .then(response => {
            // Handle the response data
            // console.log("state",response.data);
          })
          .catch(error => {
            // Handle errors
            console.error('Error:', error);
          });
      }, [country])
      
     
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
                       value={country}
                       isSearchable
                       placeholder="Select Country"
                       onChange={ handlesChange}
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