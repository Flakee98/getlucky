import React from 'react'
import { Card, Button } from 'react-bootstrap';

function Winners() {
  return (
    <div className='d-flex align-items-center flex-column' style={{ width: "100%", height: '100%' }}>
    <h1 style={{color: "#142D62"}}>Past Draw Winners</h1>
    <Card  style={{ width: "50%", height: '10vh'}}>
  <Card.Body className="d-flex align-items-center justify-content-between" style={{backgroundColor: "#142d62", borderRadius: "6px"}}>
    <div>
      <Card.Text style={{color: "white"}}>Tri-Daily Draw #067</Card.Text>
    </div>
    <div>
      <Button style={{color: "black", backgroundColor: "#FFFFFF" }}>WINNERS</Button>
    </div>
  </Card.Body>
</Card>
</div>
  )
}

export default Winners