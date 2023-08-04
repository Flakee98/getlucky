import React from 'react'
import { Card, Button } from 'react-bootstrap';
function PastDrawShows() {
  return (
    <div className='d-flex align-items-center flex-column' style={{ width: "100%", height: '100%' }}>
        <h1 style={{color: "#142D62"}}>Past Draw Results</h1>
        <Card  style={{ width: "24%", height: '40vh'}}>
      <Card.Body className="d-flex align-items-center justify-content-between flex-column" style={{backgroundColor: "#142d62", borderRadius: "6px"}}>
        <div>
          <Card.Text style={{color: "white"}}>Tri-Daily Draw #067</Card.Text>
        </div>
        <div >
        <iframe width="186" height="101" src="https://www.youtube.com/embed/Q_SZq4K2SuI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div>
          <Button style={{color: "white", backgroundColor: "#102042", borderRadius: "16px" }}>Watch Now</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default PastDrawShows