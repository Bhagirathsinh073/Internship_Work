import React from "react";

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <ul >
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          {transaction.text} - ${transaction.amount.toFixed(2)}
          <button className="btn-3 " onClick={() => deleteTransaction(transaction.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
