import React, { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) {
        alert("Please enter text and amount!");
        return;
    };

    addTransaction({
      id: Date.now(),
      text,
      amount: parseFloat(amount),
    });

    setText("");
    setAmount("");
  };

  return (
    <>
    <h3>Add New Transaction</h3>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>

    <form onSubmit={handleSubmit}>
    <div>
      <input
      className="input-1"
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)
        }
        />
    </div>
    <div>
      <input
      className="input-1"
        type="text"
        placeholder="Enter description"
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
    </div>
      <button type="submit" className="btn btnBack">Add Transaction</button>
    </form>
        </div>
        </>
  );
};

export default TransactionForm;
