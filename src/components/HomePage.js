// HomePage.js
import React, { useState } from 'react';
import './HomePage.css'; // Import the CSS file

function HomePage() {
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const toggleInfo = () => {
    setIsInfoVisible(!isInfoVisible);
  };

  return (
    <div className="home-container">
      <header>
        <h1>Welcome to IT Reimagine</h1>
        <p>Explore the latest emerging technologies.</p>
      </header>
      <button className="learn-more-btn" onClick={toggleInfo}>
        Learn More
      </button>
      {isInfoVisible && (
        <div className="info">
          <p>
            IT Reimagine is your source for cutting-edge technology news, trends, and insights.
          </p>
          <p>
            We cover a wide range of topics, including Artificial Intelligence, Blockchain, Quantum Computing,
            and much more. Stay tuned for the latest updates!
          </p>
        </div>
      )}
    </div>
  );
}

export default HomePage;
