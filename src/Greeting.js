import React, { useEffect, useState } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    // Call API endpoint to get random greeting
    // Update state with the retrieved greeting
  }, []);

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{greeting}</p>
    </div>
  );
}

export default Greeting;
