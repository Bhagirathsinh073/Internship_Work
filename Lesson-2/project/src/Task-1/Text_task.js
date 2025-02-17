import React, { useState } from 'react'

export default function Text_task() {

  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);

  const factorial = (num) => {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
  };

  const showData = () => {
    const words = input.trim().split(" ");
    // if (words.length < 2 || !words[0] || !words[1]) {
    //   alert("Please enter a string with at least two words.");
    //   return;
    // }

    const word1 = words[0];
    const word2 = words[1];

    const length1 = word1.length;
    const length2 = word2.length;
    const sumLength = length1 + length2;
    const factSumLength = factorial(sumLength);

    const substring1 = word1.slice(1, 4); // Extracting "ELL" from "HELLO"
    const substring2 = word2.slice(1, 4); // Extracting "RLD" from "WORLD"

    const concatenatedSubstring = substring1 + substring2;
    const concatenatedLength = concatenatedSubstring.length;

    setResults({
      length1,
      length2,
      sumLength,
      factSumLength,
      substring1,
      substring2,
      concatenatedSubstring,
      concatenatedLength,
    });
  };

  return(
    <>
    <div>
      <h2>Task - 1 </h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a string"
      />
      <button onClick={showData} style={{ marginLeft: "10px",padding:'5px' }}>
        Click!
      </button>

      {results && (
        <div>
          <h3>Results:</h3>
          <p>Length of first word: {results.length1}</p>
          <p>Length of second word: {results.length2}</p>
          <p>Sum of lengths: {results.sumLength}</p>
          <p>Factorial of sum: {results.factSumLength}</p>
          <p>Substring from first word: {results.substring1}</p>
          <p>Substring from second word: {results.substring2}</p>
          <p>Concatenated Substring: {results.concatenatedSubstring}</p>
          <p>Length of concatenated substring: {results.concatenatedLength}</p>
        </div>
      )}
    </div>

    
    </>
  )
}






 