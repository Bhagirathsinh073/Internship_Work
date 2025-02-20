import React, { useMemo, useState } from 'react'

export default function UseMemo() {
    const [number, setNumber] = useState(2);
  const [count, setCount] = useState(0); 

  const squaredNumber = useMemo(() => {
    console.log("Calculating square...");
    return number * number;
  }, [number]);

  return (
    <div>
      <h2>Number: {number}</h2>
      <h2>Squared: {squaredNumber}</h2>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
      
      <h3>Other Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}
