// AIPage.js
import React, { useState } from 'react';
import './AIPage.css'; // Import the CSS file

function AIPage() {
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const toggleInfo = () => {
    setIsInfoVisible(!isInfoVisible);
  };

  return (
    <div className="ai-container">
      <h2>Artificial Intelligence</h2>
      <p>Learn about the latest developments in AI.</p>
      <button onClick={toggleInfo}>Show More</button>
      {isInfoVisible && <p>Additional AI information can go here.</p>}
    </div>
  );
}

export default AIPage;
