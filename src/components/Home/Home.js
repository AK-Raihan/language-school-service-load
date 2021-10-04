import React from 'react';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="banner-container text-start">
            <h1 className="ms-5">Welcome to our school</h1>
            <h3 className="ms-5">To have another language is to possess a second soul. </h3>
            <button className="btn btn-lg-outline btn-info fs-5 fw-bolder ms-5 text-primary">Learn More</button>
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;