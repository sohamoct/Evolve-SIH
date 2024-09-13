import { Carousel, Card, Row, Col } from 'react-bootstrap';
import './Carousel.css'; // Custom CSS for styling
import WhoAreWe from "../images/WhoAreWe.png";
import WhatWeDo from "../images/WhatWeDo.png";
import OurMission from "../images/OurMission.png";

const CustomCarousel = () => {
  return (
    <div id="about" className="carousel-container">
      <div className="carousel-wrapper">
        <h2 className="carousel-heading">About Us</h2>
        <Carousel indicators={false} controls={true} interval={5000}>
          {/* First Slide - Who We Are */}
          <Carousel.Item>
            <Row className="carousel-item-content">
              <Col md={6} className="carousel-image-container">
                <img
                  className="d-block w-100 carousel-image"
                  src={WhoAreWe}
                  alt="Who We Are"
                />
              </Col>
              <Col md={6}>
                <Card className="carousel-card">
                  <Card.Body>
                    <Card.Title>Who We Are</Card.Title>
                    <Card.Text>
                    We are dedicated to transforming education with our intuitive Learning Path Dashboard, designed to empower instructors and inspire students.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>

          {/* Second Slide - What We Do */}
          <Carousel.Item>
            <Row className="carousel-item-content">
              <Col md={6} className="carousel-image-container">
                <img
                  className="d-block w-100 carousel-image"
                  src={WhatWeDo}
                  alt="What We Do"
                />
              </Col>
              <Col md={6}>
                <Card className="carousel-card">
                  <Card.Body>
                    <Card.Title>What We Do</Card.Title>
                    <Card.Text>
                    Create Custom Learning Paths: Easily upload and organize diverse resources.
Track Progress: View detailed statistics on reading time and skill completion.
Engage Effortlessly: Seamless experience for both teaching and learning.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>

          {/* Third Slide - Our Mission */}
          <Carousel.Item>
            <Row className="carousel-item-content">
              <Col md={6} className="carousel-image-container">
                <img
                  className="d-block w-100 carousel-image"
                  src={OurMission}
                  alt="Our Mission"
                />
              </Col>
              <Col md={6}>
                <Card className="carousel-card">
                  <Card.Body>
                    <Card.Title>Our Mission</Card.Title>
                    <Card.Text>
                    "To empower educators with a user-friendly platform that seamlessly integrates resource management, detailed student engagement analytics, and personalized learning paths, enhancing both teaching efficiency and student success through data-driven insights and an intuitive, engaging user experience."

                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default CustomCarousel;
