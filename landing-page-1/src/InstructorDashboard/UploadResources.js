import React, { useState } from 'react';
import './UploadResources.css'; // You can add styles

const UploadResources = () => {
  const [documentType, setDocumentType] = useState('pdf'); // Default document type

  // Handle document type change
  const handleDocumentTypeChange = (e) => {
    setDocumentType(e.target.value);
  };

  // Handle video upload
  const handleVideoUpload = (e) => {
    // Handle video upload logic
    console.log(e.target.files[0]);
  };

  // Handle document upload
  const handleDocumentUpload = (e) => {
    // Handle document upload logic based on type
    console.log(e.target.files[0], documentType);
  };

  return (
    <div className="upload-resources">
      <h2>Upload Resources</h2>

      {/* Section 1: Upload Course Videos */}
      <div className="upload-section">
        <h3>Upload Course Videos</h3>
        <input type="file" accept="video/*" onChange={handleVideoUpload} />
      </div>

      {/* Section 2: Upload Documents */}
      <div className="upload-section">
        <h3>Upload Learning Documents</h3>
        <input type="file" accept=".pdf,.doc,.docx,.png,.jpg" onChange={handleDocumentUpload} />

        {/* Radio Buttons for Document Type */}
        <div className="document-type-selection">
          <label>
            <input
              type="radio"
              value="pdf"
              checked={documentType === 'pdf'}
              onChange={handleDocumentTypeChange}
            />
            PDF
          </label>
          <label>
            <input
              type="radio"
              value="doc"
              checked={documentType === 'doc'}
              onChange={handleDocumentTypeChange}
            />
            DOC
          </label>
          <label>
            <input
              type="radio"
              value="image"
              checked={documentType === 'image'}
              onChange={handleDocumentTypeChange}
            />
            Image
          </label>
        </div>
      </div>
    </div>
  );
};

export default UploadResources;
