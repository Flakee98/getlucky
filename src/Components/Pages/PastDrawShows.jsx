import React from 'react'
import { Card, Button, Container } from 'react-bootstrap';
function PastDrawShows() {
  return (
    <div className='d-flex align-items-center flex-column my-5 py-5' style={{ width: "100%", height: '100%' }}>
        <h3 style={{color: "#fff"}}>Past Draw Results</h3>
        <Container style={{ maxWidth: "800px"}}>
            <Card  style={{ width: "100%", height: '40vh'}}>
      <Card.Body className="d-flex align-items-center justify-content-between flex-column w-100" style={{backgroundColor: "#142d62", borderRadius: "6px"}}>
        <div>
          <Card.Text style={{color: "white"}}>Tri-Daily Draw #067</Card.Text>
        </div>
        <div >
        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/Q_SZq4K2SuI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div>
          <Button style={{color: "white", backgroundColor: "#102042", borderRadius: "16px" }}>Watch Now</Button>
        </div>
      </Card.Body>
    </Card>
        </Container>
      
    </div>
  )
}

export default PastDrawShows