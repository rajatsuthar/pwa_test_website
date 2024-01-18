import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Home.css'

export default function Home() {
  return (
    <div className='home_wrapper_container'>
    <div className='home_main_container'>
      <div className='home_image_container'>
        <img src='./logo192.png' alt='img'/>
      </div>
      <div className='home_card_container'>
      <Card className="text-center">
    <Card.Header>Featured</Card.Header>
    <Card.Body>
      <Card.Title>Special title treatment</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    <Card.Footer className="text-muted">2 days ago</Card.Footer>
  </Card>
      </div>

    </div>
    <div className='home_second_container'>
          test
    </div>
    </div>
    
 
  )
}
