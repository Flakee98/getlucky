
import React, { useEffect, useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import Select from 'react-select';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import axios from "axios"

function SignUp() {
  const options = [
        { value: 'United Arab Emirates', label: 'United Arab Emirates' },
        { value: 'India', label: 'India' },
        { value: 'Philippines', label: 'Philippines' },
        { value: 'Qatar', label: 'Qatar' },
        { value: 'Saudi Arabia', label: 'Saudi Arabia' },
        { value: 'Oman', label: 'Oman' },
  ];
  const [phoneNumber, setPhoneNumber] = useState();
  const [authent, setAuthent] = useState("");
  const [country, setCountry] = useState('');
  const [mobCountry, setMobCountry] = useState('ae');
  const [state, setState] = useState([]);
  const [stateGet, setStateGet] = useState('');
  const [city, setCity] = useState([]);
  const [selectCity, setSelectCity] = useState('');

  const [name, setName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [buildingName, setBuildingName] = useState("");
  const [CreatePassword , setCreatePassword ] = useState("");
  const [confirmPassword , setConfirmPassword ] = useState("");
  const [emailvalid , setEmailvalid] = useState("");




      const handlePhoneNumberChange = (value) => {
        setPhoneNumber(value);
        console.log("phone number", phoneNumber);

      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the phone number (with country code)
        // console.log('Phone Number:', phoneNumber);
      };

  ///////////////////////////////////////////////// Api key GetAPI For Country
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
            setAuthent(response.data.auth_token)
          })
          .catch(error => {
            // Handle errors
            console.error('Error:', error);
          });
      },[])

    
      const handlesChange =(country)=>{
        setCountry(country)
        // setState([])
        // setCity([])

      }
      
  ///////////////////////////////////////////////// Api key GetAPI For States

      useEffect(() => {
        axios.get(`https://www.universal-tutorial.com/api/states/${country.value}`, {
          // 'https://www.universal-tutorial.com/api/states/India'
          headers: {
            'Authorization': `Bearer ${authent}`,
            // 'Authorization': `Bearer ${apiKey}`
          }
        })
          .then(response => {
            // Handle the response data
            const processedStates = response.data.map(item => ({
              label: item.state_name,
              value: item.state_name.toLowerCase().replace(/\s/g, '-'), // Example value generation
            }));
            setState(processedStates)

          })
          .catch(error => {
            // Handle errors
            console.error('Error:', error);
          });
      }, [country])
      
      
      const stateChange =(stateGet)=>{
        setStateGet(stateGet)
      }

  ///////////////////////////////////////////////// Api key GetAPI For City
  useEffect(() => {
    axios.get(`https://www.universal-tutorial.com/api/cities/${stateGet.value}`, {
      // 'https://www.universal-tutorial.com/api/states/India'
      headers: {
        'Authorization': `Bearer ${authent}`,
        // 'Authorization': `Bearer ${apiKey}`
      }
    })
      .then(response => {
        // Handle the response data
        const processedCitys = response.data.map(item => ({
          label: item.city_name,
          value: item.city_name.toLowerCase().replace(/\s/g, '-'), // Example value generation
        }));
        setCity(processedCitys)

      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });
  }, [stateGet])

  
  const cityChange=(selectCity)=>{
    setSelectCity(selectCity)
  }

//////////////////////////////////// Register Api
 const registerSubmit =async()=>{
  console.log("keri");
  try {
    if(!name){
      setEmailvalid("not valid email")
    }else{
      const response = await axios.post('http://3.29.63.151/api/v1/web/auth/register', {
        name :name,
        email: emailId,
        phoneNumber: phoneNumber,
        building: buildingName,
        country: country.value,
        state: stateGet.value,
        district: selectCity.label,
        password: CreatePassword
  
      })
    }
    

    // const {token} = response.data;
    // Store the token in local storage or a cookie
    // localStorage.setItem('token', token);

    console.log('Registration successful');
  } catch (error) {
    console.error('Registration failed:', error);
  }
 }
 
  return (
  <div>
    <Container className='sc' >
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <div className="border border-3 border-primary"></div>
          <Card className="shadow signup__page">
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-2 text-uppercase ">CREATE AN ACCOUNT</h2>
                <div className="mb-3">
                  <Form>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                      Full Name (As Per Passport/ID)*
                      </Form.Label>
                      <Form.Control type="name" placeholder="Full Name (As Per Passport/ID)" onChange={((e)=> setName(e.target.value))}/>
                    </Form.Group> 

         
          <Form.Group controlId="formGroupPhoneNumber"className="mb-3" >
              <Form.Label>Mobile No *</Form.Label>
              <PhoneInput
                inputStyle={{ width: '100%' }}
                
                country={'ae'}
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </Form.Group> 

                    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Email ID *</Form.Label>
                      <Form.Control type="email" placeholder="Email Id" onChange={((e)=> setEmailId(e.target.value))} />
                      {emailvalid && <p>{emailvalid}</p>}
                    </Form.Group>

                   
                    <div class="row">
                    
                    <Form.Group className="mb-3 col-md-6 col-12" controlId="formBasicPassword">
                      <Form.Label>Building Name *</Form.Label>
                      <Form.Control type="name" placeholder="Eg: Little Tower"  onChange={((e)=>setBuildingName(e.target.value))}/>
                    </Form.Group>
                   
                   
                    <Form.Group controlId="formGroupSearch" className='col-md-6 col-12 mb-3'>
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
                    
                    <Form.Group controlId="formGroupSearch" className='col-md-6 col-12 mb-3'>
                       <Form.Label>State / Emirates *</Form.Label>
                      <Select
                       options={state}
                       value={stateGet}
                       isSearchable
                       placeholder="Select State / Emirates "
                       onChange={ stateChange}
                       />
                    </Form.Group>
                   
                    <Form.Group controlId="formGroupSearch" className='col-md-6 col-12 mb-3'>
                       <Form.Label>Area / District *</Form.Label>
                      <Select
                       options={city}
                       value={selectCity}
                       isSearchable
                       placeholder="Select Area / District "
                       onChange={cityChange}
                       />
                    </Form.Group>
                          
                    </div> 

                      
                  <div class="row">
                    
                    <Form.Group className="mb-3 col-md-6 col-12" controlId="formBasicPassword">
                      <Form.Label>Create Password *</Form.Label>
                      <Form.Control type="password" placeholder="Create Password "  onChange={((e)=> setCreatePassword(e.target.value))}/>
                    </Form.Group>
                     
                    <Form.Group className="mb-3 col-md-6 col-12" controlId="formBasicPassword"> 
                      <Form.Label>Confirm Password *</Form.Label>
                      <Form.Control type="password" placeholder="Confirm Password "  onChange={((e)=> setConfirmPassword(e.target.value))}/>
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
                    
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary"  onClick={registerSubmit}>
                          Sign UP
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account ?{" "}
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
    
  );
}

export default SignUp;
