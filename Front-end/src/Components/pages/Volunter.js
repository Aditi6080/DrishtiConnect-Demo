import React, { useEffect } from 'react';

function Volunteers() {
  useEffect(() => {
    // Set the URL of the server's HTML page you want to redirect to
    const serverPageURL = 'http://localhost:8080/index.html';

    // Redirect to the external URL
    window.location.href = serverPageURL;

    // Cleanup function to prevent memory leaks
    return () => {
      // Optional cleanup logic if needed
    };
  }, []); // The empty dependency array ensures the effect runs only once when the component mounts

  // Returning null if not rendering anything other than the redirect message
  return null;
}

export default Volunteers;
