import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CourseDemu from '../CourseDemus/CourseDemu';

const ServiceDemus = () => {
    const[demuCourses, setDemuCourse]=useState([])
    useEffect(()=>{
        fetch('./demus.json')
        .then(res=>res.json())
        .then(data=>setDemuCourse(data))
    },[])
    return (
        <div className="service-container py-5 mb-5">
            <div className="container pt-4">
            <h1 className="mb-5 mt-1">Our services is here...</h1>
            <Row xs={1} md={3} className="g-4 text-center">
                {
                    demuCourses.map(course=><CourseDemu 
                        key={course.code}
                        course={course}></CourseDemu>)
                }
            </Row>
            <div className="pt-5">
            <NavLink className="me-2 fw-bold fs-1 btn btn-info" to="/services"> Show More</NavLink>
            </div>
        </div>
        </div>
    );
};

export default ServiceDemus;