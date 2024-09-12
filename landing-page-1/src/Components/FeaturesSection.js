// src/components/FeaturesSection.js
import React, { useState } from 'react';
import { Button, Container, Row, Col, Card, Tabs, Tab } from 'react-bootstrap';
import './FeaturesSection.css';
const featuresData = {
  instructor: [
    {
      icon: '📅',
      heading: 'Advanced Analytics',
      content: 'Track and analyze student performance with advanced analytics tools.',
    },
    {
      icon: '📅',
      heading: 'Scheduling Tools',
      content: 'Efficiently manage your class schedules and student appointments.',
    },
    {
      icon: '📚',
      heading: 'Resource Management',
      content: 'Easily share and manage teaching resources and materials.',
    },
    {
      icon: '💬',
      heading: 'Communication Tools',
      content: 'Connect with students through integrated communication tools.',
    },
  ],
  student: [
    {
      icon: '📝',
      heading: 'Course Material',
      content: 'Access comprehensive course materials and resources.',
    },
    {
      icon: '📈',
      heading: 'Progress Tracking',
      content: 'Keep track of your academic progress and performance.',
    },
    {
      icon: '🗓️',
      heading: 'Event Scheduling',
      content: 'Manage your class schedules and important deadlines.',
    },
    {
      icon: '🤝',
      heading: 'Peer Interaction',
      content: 'Engage with peers and participate in group discussions.',
    },
  ],
};

const FeaturesSection = () => {
  const [key, setKey] = useState('instructor');

  return (
    <section className="features-section">
      <Container fluid> {/* Use fluid to span full width */}
        <Row className="text-center mb-4">
          <Col>
            <h2>Our Features</h2>
            <Tabs
              id="features-tabs"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
              justify
            >
              <Tab eventKey="instructor" title="Instructor Features">
                <Row className="mt-4">
                  {featuresData.instructor.map((feature, index) => (
                    <Col sm={12} md={6} lg={3} key={index} className="mb-3">
                      <Card className="feature-card text-center">
                        <Card.Body>
                          <div className="feature-icon">{feature.icon}</div>
                          <Card.Title>{feature.heading}</Card.Title>
                          <Card.Text>{feature.content}</Card.Text>
                          <Button className="btn-feature" href="#signup">
                            Know More
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Tab>
              <Tab eventKey="student" title="Student Features">
                <Row className="mt-4">
                  {featuresData.student.map((feature, index) => (
                    <Col sm={12} md={6} lg={3} key={index} className="mb-3">
                      <Card className="feature-card text-center">
                        <Card.Body>
                          <div className="feature-icon">{feature.icon}</div>
                          <Card.Title>{feature.heading}</Card.Title>
                          <Card.Text>{feature.content}</Card.Text>
                          <Button className="btn-feature" href="#signup">
                            Know More
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesSection;
