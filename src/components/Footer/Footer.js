import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container pt-5 mt-0">
            <Container>
                <Row>
                    <Col xs className="text-start">
                    <h6 className="text-decoration-underline fs-3 fw-bold text-info"> <span><i className="fas fa-book-reader "></i></span>  Language School</h6>
                    <p>School websites are crucial for creating a good first impression. Before sending their children to a school, most parents are likely to take a look at the school’s website, so the primary goal of the site would be to convince these visitors.</p>
                    </Col>
                    <Col xs={{ order: 12 }}>
                        <h6 className="text-decoration-underline">About School</h6>
                        <ul className="text-start">
                            <li>Contact Us</li>
                            <li>Our Staff</li>
                            <li>Our Partners</li>
                            <li>Careers</li>
                        </ul>
                    </Col>
                    <Col xs={{ order: 1 }}>
                        <h6 className="text-decoration-underline">Social media</h6>
                        <ul className="text-start d-flex justify-content-center list-unstyled m-5">
                            <li className="me-4 fs-4"><span className=""><i class="fab fa-facebook"></i></span></li>
                            <li className="me-4 fs-4"><span><i class="fab fa-instagram-square"></i></span></li>
                            <li className="me-4 fs-4"><span><i class="fab fa-twitter-square"></i></span></li>
                            <li className="me-4 fs-4"><span><i class="fab fa-linkedin"></i></span></li>
                        </ul>
                    </Col>
                    <Col xs={{ order: 1 }}>
                        <h6 className="text-decoration-underline">Contact Info</h6>
                        <ul className="text-start">
                            <li> <a href="/"> mkraihan207@gmail.com</a></li>
                            <li>Call us: 01626570***</li>
                            <li>Trishal b-50, Mymensingh, Bangladesh</li>

                        </ul>

                    </Col>
                </Row>
                <div>
                    <p>© 2021 <NavLink  className="me-2 text-decoration-none fw-bolder" to="/home"> Language School</NavLink> All Rights Reserved</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;