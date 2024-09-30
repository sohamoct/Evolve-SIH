// src/components/HighlightSection.js
import React from 'react';
import './HighlightSection.css'; // Import the CSS for this component
import Button from './Button'; // Import the Button component

const HighlightSection = () => {
  return (
    <section className="highlight-section">
      <blockquote className="highlight-quote">
        <p>"Tell me and I forget, teach me and I may remember, involve me and I learn."</p>
      </blockquote>
      <Button className="btn-get-started" text="Get Started" />
    </section>
  );
};

export default HighlightSection;
