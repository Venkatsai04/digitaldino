import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const VerifyUser = () => {
  const { token } = useParams(); // Access the token parameter from the URL
  const navigate = useNavigate(); // Get the navigate function

  useEffect(() => {
    // Check if the token is present in local storage
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      // Token exists, user is already logged in, navigate to main route
      navigate('/student/main');
    } else {
      // Simulate authentication process (replace this with actual authentication logic)
      setTimeout(() => {
        // After authentication, save token in local storage and navigate to main route
        localStorage.setItem('token', token);
        navigate('/student/main');
      }, 2000); // Simulated delay of 2 seconds
    }
  }, [navigate, token]); // Add navigate and token to dependency array to avoid warnings

  return (
    <div>
      <h1>Verifying User...</h1>
      {/* You can render a loading spinner or message here */}
    </div>
  );
};

export default VerifyUser;
