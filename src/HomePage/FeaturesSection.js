// src/components/FeaturesSection.js
import React, { useState } from 'react';
import { Button, Container, Row, Col, Card, Tabs, Tab } from 'react-bootstrap';
import './FeaturesSection.css';
import UploadIcon from '../images/UploadIcon.png';
import LearningPathIcon from '../images/LearningPathIcon.png';
import TrackStudentProgress from '../images/TrackStudentProgress.png';
import AnalyticsAndInsights from '../images/AnalyticsAndInsights.png';
import LearningPathNav from '../images/LearningPathNav.png';
import TrackLearning from '../images/TrackLearning.png';
import ReadingTimeStats from '../images/ReadTimeStats.png';
import SkillsAssessment from '../images/SkillsAssesment.png';

const featuresData = {
  instructor: [
    {
      icon: UploadIcon,
      heading: 'Upload Resources',
      content: 'Easily upload educational materials like PDFs, Word documents, videos, and academic hyperlinks.',
    },
    {
      icon: LearningPathIcon,
      heading: ' Create Learning Paths',
      content: 'Design custom learning paths by organizing resources into structured sequences for students to follow',
    },
    {
      icon: TrackStudentProgress,
      heading: 'Track Student Progress',
      content: 'Monitor student progress in real time with statistics like time spent on topics and overall skill completion.',
    },
    {
      icon: AnalyticsAndInsights,
      heading: 'Analytics & Insights',
      content: 'Get detailed reports and insights on student performance, engagement, and content completion rates.',
    },
  ],
  student: [
    {
      icon: LearningPathNav,
      heading: 'Learning Path Navigation',
      content: 'Follow custom learning paths set by your instructor, with all resources organized for easy access.',
    },
    {
      icon: TrackLearning,
      heading: 'Track Learning Progress',
      content: 'Keep track of your learning progress with real-time updates and visual progress bars for each topic.',
    },
    {
      icon: ReadingTimeStats,
      heading: 'Reading Time Stats',
      content: "See how much time you've spent on each topic and track your total reading time to finish a particular skill.",
    },
    {
      icon: SkillsAssessment,
      heading: 'Skill Assessments',
      content: 'Test your knowledge with quizzes and interactive assessments at the end of each topic to solidify your learning.',
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
                          <img src={feature.icon} alt={feature.heading} className="feature-icon" />
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
                          <img src={feature.icon} alt={feature.heading} className="feature-icon" />
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
