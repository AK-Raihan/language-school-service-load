import React, { useEffect, useState } from 'react';
import {  Row } from 'react-bootstrap';
import Course from '../Course/Course';
import "./Service.css"


const Services = () => {
    const [courses, setCourses] = useState([])

    useEffect(()=>{
        fetch('./language.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div className="service-container py-5">
            <div className="container pt-4">
            <h1 className="mb-5 mt-1">Our services is here</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    courses.map(course=><Course 
                        key={course.code}
                        course={course}></Course>)
                }

            </Row>
        </div>
        </div>
    );
};

export default Services;