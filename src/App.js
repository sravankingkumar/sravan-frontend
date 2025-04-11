import React, { useEffect, useState } from 'react';
import Login from './pages/Login';
function App() {
  const [message, setMessage] = useState('Loading...');

  function App() {
  return (
    <div>
      <h1>Hello from React</h1>
    </div>
  );
}
  
  useEffect(() => {
    fetch("https://sravan-backend-uc6g.onrender.com/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage("Failed to connect to backend."));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Welcome to Sravan Kumar Educational Services</h1>


<Route path="/login" element={<Login />} />

  
      <p>Your frontend is live and ready!</p>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
