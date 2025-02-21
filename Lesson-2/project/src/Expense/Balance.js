import React from "react";

const Balance = ({ transactions }) => {
  const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <>
    <div className="bd-1">
    <h1 className="heads">Today's Expense</h1>
    <h3>Total Balance: ₹{total.toFixed(2)}</h3>
    </div>
    </>
  );
};

export default Balance;
