import React, { useMemo, useState } from 'react'

export default function UseMemo() {
    const [number, setNumber] = useState(2);
  const [count, setCount] = useState(0); 

  const squaredNumber = useMemo(() => {
    console.log("Calculating square...");
    return number * number;
  }, [number]);
const numCount = useMemo(()=>{
    console.log("Calculating count...");
    return count * 2;
  },[count]);

  return (
    <div>
      <h2>Number: {number}</h2>
      <h2>Squared: {squaredNumber}</h2>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
      
      <h3>Other Count: {count}</h3>
      <h3>Current Count: {numCount}</h3>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}
