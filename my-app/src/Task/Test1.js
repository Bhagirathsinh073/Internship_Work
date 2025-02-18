import React, { useState } from 'react';

export default function Test1() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState({});
  const [isValid, setIsValid] = useState(false);

  // Factorial function
  const factorial = (num) => {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
  };

  const validateInput = (text) => {
    const regex = /^[A-Za-z\s]+$/; // Allows only letters and spaces
    return regex.test(text); // Return validation result
  };

  const showData = () => {
    const words = input.trim().split(" ");
    const restrictedWords = ["Admin", "Test"];
    
    const validInput = validateInput(input);
    setIsValid(validInput);

    // Validation checks
    if (
      words.length < 2 || 
      words.some(word => word.trim() === "") || 
      !validInput || 
      words.some(word => word.includes(" ")) || 
      words.some(word => word[0] !== word[0].toUpperCase()) || 
      new Set(words).size !== words.length || 
      words.some(word => restrictedWords.includes(word))
    ) {
      alert("Error: Invalid input.");
      return;
    }else{
        alert("Success !")
    }

    const word1 = words[0];
    const word2 = words[1];

    const length1 = word1.length;
    const length2 = word2.length;
    const sumLength = length1 + length2;
    const factSumLength = factorial(sumLength);

    const substring1 = word1.slice(1, 4); // Extract substring from the first word, safe slicing
    const substring2 = word2.slice(1, 4); // Extract substring from the second word, safe slicing

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

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h2>Task - 1</h2>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Enter a string"
        />
        <button onClick={showData} style={{ marginLeft: "10px", padding: "5px" }}>
          Click!
        </button>

        {Object.keys(results).length > 0 && isValid && (
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
  );
}
