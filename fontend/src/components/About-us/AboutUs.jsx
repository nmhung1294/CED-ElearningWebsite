import React from 'react'
import './About-us.css'
import { Container, Row, Col } from "reactstrap";
import AboutUsImag from '../assests/images/about-us.png'

const AboutUs = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='6' md ='6'>
                <div className="about__img">
                    <img src={AboutUsImag} alt="" className='w-100' />
                </div>
                </Col>
                <Col lg='6' md='6'>
                <div className="about__content">
                    <h2>About us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime soluta, ut beatae nesciunt pariatur accusantium at voluptate ipsum laboriosam iusto.</p>
                    
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default AboutUs