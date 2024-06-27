import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import heroimg from '../assests/images/hero-img1.png';
import './Hero-section.css';

const HeroSection = () => {
  return (
    <section>
      <Container>
      <Row>
        <Col lg='6' md='6'>
          <div className="hero__content">
            <h2 className='mb-4 hero__tittle'>
              Any time Anywhere<br /> Learn on Your <br /> Suitable Schedule
            </h2>
            <p className='mb-4'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br />
              Ab, debitis. Eius quidem explicabo hic dolorem sed iure<br />
              Dolor sint esse temporibus illo!
            </p>
          </div>
          <div className="search">
            <input type='text' placeholder='Search' />
            <button className='btn'>Search</button>
          </div>
        </Col>
        <Col lg='6' md='6'>
          <img src={heroimg} alt="" className='w-100' />
        </Col>
      </Row>
      </Container>
    </section>
  )
}

export default HeroSection