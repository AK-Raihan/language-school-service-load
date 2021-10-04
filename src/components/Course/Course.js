import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
    const{name, img, lession, time, teacher, cost}=props.course
    console.log(props)
    return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img}/>
        <Card.Body>
          <Card.Title>Course name: {name}</Card.Title>
          <Card.Text>
          Time start: {time}
          </Card.Text>
          <h2>Lession: {lession}</h2> 
          <h2>Teacher: {teacher}</h2>
          <h2>Course Fee: {cost}</h2>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Course;