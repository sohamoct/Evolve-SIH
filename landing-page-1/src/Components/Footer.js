import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import logo from '../images/Logo.png';  // Add the logo image path here
import './Footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <Container fluid>
        <Row>
          {/* Links Section */}
          <Col xs={12} md={4} className="footer-section quick-links">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#features">Features</a></li>
            </ul>
          </Col>

          {/* Logo Section with Image */}
          <Col xs={12} md={4} className="text-center footer-section">
            <img src={logo} alt="E-VOLV Logo" className="logo-image" />
            <p>Enhance your skills with us!</p>
          </Col>

          {/* Social Media Section */}
          <Col xs={12} md={4} className="text-center text-md-right footer-section">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://twitter.com" className="icon">
                <FaTwitter size={24} />
              </a>
              <a href="https://facebook.com" className="icon">
                <FaFacebookF size={24} />
              </a>
              <a href="https://whatsapp.com" className="icon">
                <FaWhatsapp size={24} />
              </a>
              <a href="https://instagram.com" className="icon">
                <FaInstagram size={24} />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        {/* Footer Bottom Section */}
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} E-VOLV. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
