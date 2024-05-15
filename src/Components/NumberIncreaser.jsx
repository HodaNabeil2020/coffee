

import React, { useState, useEffect } from 'react';

const NumberIncreaser = ({ targetNumber }) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(prevNumber => {
        if (prevNumber >= targetNumber) {
          clearInterval(interval);
          return targetNumber;
        } else {
          return prevNumber + 1;
        }
      });
    }, 3000 / targetNumber);

    return () => clearInterval(interval);
  }, [targetNumber]);

  return (

      <h2>{number}+</h2>
  
  );
};

export default NumberIncreaser;
