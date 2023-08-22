import React, { useState } from 'react';
import HomePage from './components/HomePage';
import TechnologiesPage from './components/TechnologiesPage';
import AIPage from './components/AIPAge';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'technologies':
        return <TechnologiesPage />;
      case 'ai':
          return <AIPage />;
      // Add more cases for other pages/components
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      <header>
        <nav>
          <button onClick={() => setCurrentPage('home')}>Home</button>
          <button onClick={() => setCurrentPage('technologies')}>Technologies</button>
          <button onClick={() => setCurrentPage('ai')}>AI</button>
          {/* Add buttons for other pages */}
        </nav>
      </header>
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
