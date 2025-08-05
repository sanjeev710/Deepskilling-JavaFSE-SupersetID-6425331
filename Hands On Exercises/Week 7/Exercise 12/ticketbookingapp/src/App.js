import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let pageContent;
  if (isLoggedIn) {
    pageContent = <UserPage />;
  } else {
    pageContent = <GuestPage />;
  }

  const handleAuthToggle = () => {
    setIsLoggedIn(prev => !prev);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>✈️ Ticket Booking Portal</h1>
      <button onClick={handleAuthToggle}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      <hr />
      {pageContent}
    </div>
  );
}

export default App;
