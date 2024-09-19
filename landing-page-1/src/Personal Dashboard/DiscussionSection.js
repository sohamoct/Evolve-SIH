import React from 'react';
import './DiscussionSection.css';

const DiscussionSection = () => {
  return (
    <div className="discussion-section">
      <h2>Community Discussion</h2>
      <textarea placeholder="Ask a question..."></textarea>
      <button className="submit-btn">Submit</button>
      <div className="discussion-thread">
        {/* Discussion threads */}
        <div className="thread-item">
          <h3>John Doe</h3>
          <p>How do I implement a neural network?</p>
        </div>
        {/* More threads */}
      </div>
    </div>
  );
};

export default DiscussionSection;
