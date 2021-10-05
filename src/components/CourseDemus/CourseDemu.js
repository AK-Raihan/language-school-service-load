import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './CourseDemu.css'

const CourseDemu = (props) => {
    console.log(props)
    const{name, img, lession, time, teacher, cost}=props.course
    return (
        <Col >
        <Card className="service-item">
          <Card.Img   variant="top" src={img}/>
          <Card.Body>
            <Card.Title>Course name: {name}</Card.Title>
            <Card.Text>
            Time start: {time}
            </Card.Text>
            <h3>Lession: {lession}</h3> 
            <h3>Teacher: {teacher}</h3>
            <h5>Course Fee: {cost}</h5>
            <button className="btn btn-outline-info btn-lg">Enroll Now</button>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default CourseDemu;